<?php
require 'vendor/autoload.php';
use GuzzleHttp\Client;
use GuzzleHttp\TransferStats;

$client = new GuzzleHttp\Client(['verify' => false ]);

function writeLog($url) {
	$logFile = fopen("log/log.txt", "a") or die("Unable to open file!");
	$newUrl = "\n\n\n" . $url . "\n\n\n";
	fwrite($logFile, $newUrl);
	fclose($logFile);
}

function writeLogObj($obj) {
	$logFile = fopen("log/log.txt", "a") or die("Unable to open file!");
	fwrite($logFile, json_encode($obj));
	fclose($logFile);
}

function trataPreco($preco) {

	// if ($preco == "0,00") {
	// 	$precoTratado = "00,00";
	// } else {
		// $delimiter recebe "," ou ".", dependendo de como vem o preço
		// Existem preços "99.9" e "99,9"
		$delimiter = strpos($preco, ",") ? "," : ".";

		$centavos = explode($delimiter, $preco);

		switch (strlen($centavos[1])) {
			case "0":
				$sufixCentavos = "00";
				break;
			case "1":
				$sufixCentavos = "0";
				break;
			default:
				$sufixCentavos = "";
		}

		$precoTratado = $centavos[0] . "," . $centavos[1] . $sufixCentavos;
	// }

	return $precoTratado;
}

function getQtdeUnidades($client) {
	$response = $client->request(
		'GET',
		'http://justfit.zebradeluxe.com/wp-json/wp/v2/cpost-unidades/?per_page=1'
	);

	$obj = $response->getHeader('X-WP-Total');

	// Converte objeto para array
	$arr = json_decode(json_encode($obj), true);

	return $arr[0];
}

function getDataFromWP($client, $numPosts, $codigoFL) {
	$response = $client->request(
		'GET',
		'http://justfit.zebradeluxe.com/wp-json/acf/v3/cpost-unidades/?per_page=' . $numPosts
	);

	$obj = json_decode($response->getBody());

	// Converte objeto para array
	$arr = json_decode(json_encode($obj), true);

	foreach ($arr as $a) {
		if ($a['acf']['codigo_fl'] == $codigoFL) {
			$wp['url'] = $a['acf']['galeria_repeat'][0]['imagem_galeria']['url'];
			$wp['rua'] = $a['acf']['rua'];
			$wp['bairro'] = $a['acf']['bairro'];
			$wp['cidade'] = $a['acf']['cidade'];			
		}
	}
	
	// echo "<pre>";
	// var_dump($wp);

	return $wp;
}

function getDataFromWPJSON($client, $codigoFL) {
	$response = $client->request(
		'GET',
		'unidades.json'
	);

	$obj = json_decode($response->getBody());

	// Converte objeto para array
	$arr = json_decode(json_encode($obj), true);

	foreach ($arr as $a) {
		if ($a['acf']['codigo_fl'] == $codigoFL) {
			$wp['url'] = $a['acf']['galeria_repeat'][0]['imagem_galeria']['url'];
			$wp['rua'] = $a['acf']['rua'];
			$wp['bairro'] = $a['acf']['bairro'];
			$wp['cidade'] = $a['acf']['cidade'];			
		}
	}
	
	// echo "<pre>";
	// var_dump($wp);

	return $wp;
}

function getEmpresa($client, $empresa) {


	$response = $client->request(
		'POST',
		'https://justfit2.pactosolucoes.com.br/api/prest/gempresarial/d176344fbb84ecbe3f34d9ebad500077/consultarEmpresas',
		[
		    'on_stats' => function (TransferStats $stats) use (&$url) {
		        $url = $stats->getEffectiveUri();
		    }
		]
	);

	writeLog($url);

	$obj = json_decode($response->getBody());

	$obj = $obj->{'return'};

	// Converte objeto para array
	$arr = json_decode(json_encode($obj), true);

	foreach ($arr as $a) {
		if($a['idExterno'] === $empresa) {
			$arrayEmpresa = $a;
		}
	}	

	return $arrayEmpresa;
}

function cadastrarCliente($client, $post, $idEstado, $idCidade) {
	// $logFile = fopen("log/log.txt", "a") or die("Unable to open file!");
	// $txt = "====== cadastrarCliente\n\n";
	// $url = "https://justfit2.pactosolucoes.com.br:9071/api/prest/cliente/d176344fbb84ecbe3f34d9ebad500077/cadastrarCliente?";
	// $txt .= $url . "nome=" . strtoupper($post['nome']) . "&cpf=" . $post['cpf'] . "&email=" . $post['email'] . "&sexo=" . strtoupper($post['sexo']) . "&dataNascimento=" . $post['data-nascimento'] . "&endereco=" . strtoupper($post['endereco']) . "&complemento=" . strtoupper($post['complemento']) . "&numero=" . $post['numero'] . "&bairro=" . strtoupper($post['bairro']) . "&cep=" . $post['cep'] . "&telCelular=" . $post['telefone'] . "&telResidencial=" . $post['telefone'] . "&senha=" . "123" . "&empresa=" . $post['empresa'] . "&codigoCidade=" . $idCidade . "&codigoEstado=" . $idEstado . "&idEmpresaFinanceiroRede=" . 0 . "&consultor=" . 0 . "\n\n";
	// $txt .= "===== /cadastrarCliente\n\n\n\n";
	// fwrite($logFile, $txt);
	// fclose($logFile);

	$response = $client->request(
		'POST',
		'https://justfit2.pactosolucoes.com.br/api/prest/cliente/d176344fbb84ecbe3f34d9ebad500077/cadastrarCliente',
		[
			'query' => [
				'nome' => strtoupper($post['nome']),
				'cpf' => $post['cpf'],
				'email' => $post['email'],
				'sexo' => strtoupper($post['sexo']),
				'dataNascimento' => $post['data-nascimento'],
				'endereco' => strtoupper($post['endereco']),
				'complemento' => strtoupper($post['complemento']),
				'numero' => $post['numero'],
				'bairro' => strtoupper($post['bairro']),
				'cep' => $post['cep'],
				'telCelular' => $post['telefone'],
				'telResidencial' => $post['telefone'],
				'senha' => "123",
				'empresa' => $post['empresa'],
				'codigoCidade' => $idCidade,
				'codigoEstado' => $idEstado,
				'idEmpresaFinanceiroRede' => 0,
				'consultor' => 0
			],
		    'on_stats' => function (TransferStats $stats) use (&$url) {
		        $url = $stats->getEffectiveUri();
		    }
		]
	);

	writeLog($url);

	$obj = json_decode($response->getBody());

	// $obj = $obj->{'return'};

	// Converte objeto para array
	// $arr = json_decode(json_encode($obj), true);

	return $obj;
}

function consultarCliente($client, $codigoEmpresaZW, $email, $cpf) {
	$response = $client->request(
		'POST',
		'https://justfit2.pactosolucoes.com.br/api/prest/cliente/d176344fbb84ecbe3f34d9ebad500077/consultarCliente',
		[
			'query' => [
				'codigoEmpresaZW' => $codigoEmpresaZW,
				'email' => $email,
				'cpf' => $cpf,	
			],
		    'on_stats' => function (TransferStats $stats) use (&$url) {
		        $url = $stats->getEffectiveUri();
		    }
		]
	);

	writeLog($url);

	$obj = json_decode($response->getBody());

	// if ($response->getStatusCode() === 200) {
	// 	echo "Consulta feita com sucesso" . "<br>";

	// 	if ($obj->{'return'}->{'cpf'} === null) {
	// 		echo "Aluno não encontrado" . "<br>";
	// 	} else {
	// 		echo "Aluno encontrado:" . "<br>";
	// 		echo $obj->{'return'}->{'nome'} . "<br>";
	// 		echo $obj->{'return'}->{'cpf'} . "<br>";
	// 		echo $obj->{'return'}->{'email'} . "<br>";			
	// 	}

	// } elseif ($response->getStatusCode() === 400) {
	// 	echo "Parâmetro obrigatório não enviado para a consulta";
	// }


	//echo "<pre>";
	//echo print_r($obj);
	// $obj = $obj->{'return'};
	// echo "<br> CPF retornado: " . $obj->{'return'}->{'cpf'} . "<br>";

	$obj = json_decode($response->getBody());

	// $obj = $obj->{'return'};

	// Converte objeto para array
	// $arr = json_decode(json_encode($obj), true);

	return $obj;	

}

function consultarConvenios($client, $codigoEmpresaZW) {
	$response = $client->request(
		'POST',
		'https://justfit2.pactosolucoes.com.br/api/prest/negociacao/d176344fbb84ecbe3f34d9ebad500077/consultarConvenios',
		[
			'query' => [
				'empresa' => $codigoEmpresaZW	
			],
		    'on_stats' => function (TransferStats $stats) use (&$url) {
		        $url = $stats->getEffectiveUri();
		    }
		]
	);

	writeLog($url);

	$obj = json_decode($response->getBody());

	// echo "<pre>";
	// echo print_r($obj);
	$obj = $obj->{'return'};

	// Converte objeto para array
	$arr = json_decode(json_encode($obj), true);

	return $arr;	
}

function getEstados($client) {
	$response = $client->request(
		'POST',
		'https://justfit2.pactosolucoes.com.br/api/prest/cliente/d176344fbb84ecbe3f34d9ebad500077/consultarEstados',
		[
		    'on_stats' => function (TransferStats $stats) use (&$url) {
		        $url = $stats->getEffectiveUri();
		    }
		]
	);

	writeLog($url);

	$obj = json_decode($response->getBody());

	$obj = $obj->{'return'};

	// Converte objeto para array
	$arr = json_decode(json_encode($obj), true);

	return $arr;
}

function getCodigoEstado($client, $sigla) {
	$response = $client->request(
		'POST',
		'https://justfit2.pactosolucoes.com.br/api/prest/cliente/d176344fbb84ecbe3f34d9ebad500077/consultarEstados',
		[
		    'on_stats' => function (TransferStats $stats) use (&$url) {
		        $url = $stats->getEffectiveUri();
		    }
		]
	);

	writeLog($url);

	$obj = json_decode($response->getBody());

	$obj = $obj->{'return'};

	// Converte objeto para array
	$arr = json_decode(json_encode($obj), true);

	foreach ($arr as $a) {
		if(array_search($sigla, $a) !== false) {
			$codEstado = $a['codigo'];
		}
	}

	return $codEstado;
}

function getCidades($client, $codigoEstado) {
	$response = $client->request(
		'POST',
		'https://justfit2.pactosolucoes.com.br/api/prest/cliente/d176344fbb84ecbe3f34d9ebad500077/consultarCidades',
		[
			'query' => [
				'codigoEstado' => $codigoEstado
			],
			'on_stats' => function (TransferStats $stats) use (&$url) {
		        $url = $stats->getEffectiveUri();
		    }
		]
	);

	writeLog($url);


	$obj = json_decode($response->getBody());

	$obj = $obj->{'return'};

	// Converte objeto para array
	$arr = json_decode(json_encode($obj), true);

	return $arr;
}

function getPlanosDaUnidade($client, $codigoEmpresaZW, $codigoPlano) {
	$response = $client->request(
		'POST',
		// Endpoint de produção
		// 'http://justfit.pactosolucoes.com.br:8071/api/prest/negociacao/d176344fbb84ecbe3f34d9ebad500077/consultarPlanos',
		'https://justfit2.pactosolucoes.com.br/api/prest/negociacao/d176344fbb84ecbe3f34d9ebad500077/consultarPlanos',		
		[
			'query' => [
				'empresa' => $codigoEmpresaZW,
				'codigoPlano' => $codigoPlano
			],
			'on_stats' => function (TransferStats $stats) use (&$url) {
		        $url = $stats->getEffectiveUri();
		    }
		]
	);

	writeLog($url);

	$obj = json_decode($response->getBody());

	$obj = $obj->{'return'};

	// Converte objeto para array
	$arr = json_decode(json_encode($obj), true);	

	return $arr;
}

function getConvenio($arrayConvenios, $tipoOperacao, $post = 0) {
	if ($tipoOperacao == "credito") {
		foreach ($arrayConvenios as $a) {
			if ($a['tipoConvenio'] === "TransacaoOnline") {
				$codigoConvenio = $a['codigoConvenio'];
			}
		}		
	}

	if ($tipoOperacao == "debito") {
		foreach ($arrayConvenios as $a) {
			if (($a['tipoConvenio'] == "DCO") && ($post['debito-banco'] == $a['codBanco'])) {
				$codigoConvenio = $a['codigoConvenio'];
			}
		}		
	}

	return $codigoConvenio;
}

function getNomeBandeira($codigoBandeira) {
	switch ($codigoBandeira) {
		case 1: return "VISA";
		case 2: return "MASTERCARD";
		case 3: return "DINERS";
		case 4: return "AMEX";
		case 5: return "AURA";
		case 6: return "ELO";
		case 7: return "JCB";
		case 8: return "DISCOVER";
	}
}

function incluirAutorizacaoCobranca($client, $card, $codigoCliente, $convenioCobranca) {

	$operadoraCartao = getNomeBandeira($card['campoBandeiraCredito']);

	$response = $client->request(
		'POST',
		'https://justfit2.pactosolucoes.com.br/api/prest/negociacao/d176344fbb84ecbe3f34d9ebad500077/incluirAutorizacaoCobranca',
		[
			'query' => [
				'cliente' => $codigoCliente,
				// 'operadoraCartao' => $card['card-operadora'],
				'operadoraCartao' => $operadoraCartao,				
				'numeroCartao' => $card['card-numero'],
				'validadeCartao' => $card['card-validade'],
				'convenioCobranca' => $convenioCobranca,
				'cpfTitular' => $card['card-cpf'],
				'titularCartao' => strtoupper($card['card-nome']),
				'cvv' => $card['card-cvv'],
				'usarConfConvEmpresa' => false
			],
			'on_stats' => function (TransferStats $stats) use (&$url) {
		        $url = $stats->getEffectiveUri();
		    }
		]
	);

	writeLog($url);

	// $obj = json_decode($response->getBody());

	$obj = json_decode($response->getBody());

	// Converte objeto para array
	// $arr = json_decode(json_encode($obj), true);

	return $obj;
}

function incluirAutorizacaoCobrancaDCO($client, $banco, $codigoCliente, $convenioCobranca) {
	// $logFile = fopen("log/log.txt", "a") or die("Unable to open file!");
	// $txt = "====== incluirAutorizacaoCobrancaDCO\n\n";
	// $url = "https://justfit.pactosolucoes.com.br:9071/api/prest/negociacao/d176344fbb84ecbe3f34d9ebad500077/incluirAutorizacaoCobrancaDCO?";
	// $txt .= $url . "cliente=" . $codigoCliente . "&agencia=" . $banco['debito-agencia'] . "&agenciaDV=" . $banco['debito-agencia-dv'] . "&contaCorrente=" . $banco['debito-conta'] . "&contaCorrenteDV=" . $banco['debito-conta-dv'] . "&codigoOperacao=" . "" . "&banco=" . $banco['debito-banco'] . "&convenioCobranca=" . $convenioCobranca . "&cpfTitular=" . $banco['debito-cpf'] . "&nomeTitular=" . $banco['debito-titular'] . "&usarConfConvEmpresa=" . true . "\n\n";
	// $txt .= "===== /incluirAutorizacaoCobrancaDCO\n\n\n\n";
	// fwrite($logFile, $txt);
	// fclose($logFile);


	$response = $client->request(
		'POST',
		'https://justfit2.pactosolucoes.com.br/api/prest/negociacao/d176344fbb84ecbe3f34d9ebad500077/incluirAutorizacaoCobrancaDCO',
		[
			'query' => [
				'cliente' => $codigoCliente,
				'agencia' => $banco['debito-agencia'],				
				'agenciaDV' => $banco['debito-agencia-dv'],
				'contaCorrente' => $banco['debito-conta'],
				'contaCorrenteDV' => $banco['debito-conta-dv'],
				'codigoOperacao' => "",
				'banco' => $banco['debito-banco'],
				'convenioCobranca' => $convenioCobranca,
				'cpfTitular' => $banco['debito-cpf'],
				'nomeTitular' => $banco['debito-titular'],
				'usarConfConvEmpresa' => false
			],
			'on_stats' => function (TransferStats $stats) use (&$url) {
		        $url = $stats->getEffectiveUri();
		    }
		]
	);

	writeLog($url);

	// $obj = json_decode($response->getBody());

	$obj = json_decode($response->getBody());

	// Converte objeto para array
	// $arr = json_decode(json_encode($obj), true);

	return $obj;
}


function enviarEmailConfirmacao($client, $codigoCliente, $codigoPlano, $qtdParcelasMatricula, $cupomDesconto, $qtdParcelas, $diaVencimento) {
	$response = $client->request(
		'POST',
		'https://justfit2.pactosolucoes.com.br/api/prest/negociacao/d176344fbb84ecbe3f34d9ebad500077/envioEmailConfirmacaCompra',
		[
			'query' => [
				'cliente' => $codigoCliente,
				'plano' => $codigoPlano,				
				'nrParcelasAdesao' => $qtdParcelasMatricula,
				'numeroCupomDesconto' => $cupomDesconto,
				'nrParcelasPagamento' => $qtdParcelas,
				'diaVencimento' => $diaVencimento
			],
			'on_stats' => function (TransferStats $stats) use (&$url) {
		        $url = $stats->getEffectiveUri();
		    }
		]
	);

	writeLog($url);

	// $obj = json_decode($response->getBody());

	$obj = json_decode($response->getBody());

	// Converte objeto para array
	// $arr = json_decode(json_encode($obj), true);

	return $obj;
}

function removeAccents($string) {
    $table = array(
        'Š'=>'S', 'š'=>'s', 'Ž'=>'Z', 'ž'=>'z', 'C'=>'C', 'c'=>'c', 'C'=>'C', 'c'=>'c',
        'À'=>'A', 'Á'=>'A', 'Â'=>'A', 'Ã'=>'A', 'Ä'=>'A', 'Å'=>'A', 'Æ'=>'A', 'Ç'=>'C', 'È'=>'E', 'É'=>'E',
        'Ê'=>'E', 'Ë'=>'E', 'Ì'=>'I', 'Í'=>'I', 'Î'=>'I', 'Ï'=>'I', 'Ñ'=>'N', 'Ò'=>'O', 'Ó'=>'O', 'Ô'=>'O',
        'Õ'=>'O', 'Ö'=>'O', 'Ø'=>'O', 'Ù'=>'U', 'Ú'=>'U', 'Û'=>'U', 'Ü'=>'U', 'Ý'=>'Y', 'Þ'=>'B', 'ß'=>'Ss',
        'à'=>'a', 'á'=>'a', 'â'=>'a', 'ã'=>'a', 'ä'=>'a', 'å'=>'a', 'æ'=>'a', 'ç'=>'c', 'è'=>'e', 'é'=>'e',
        'ê'=>'e', 'ë'=>'e', 'ì'=>'i', 'í'=>'i', 'î'=>'i', 'ï'=>'i', 'ð'=>'o', 'ñ'=>'n', 'ò'=>'o', 'ó'=>'o',
        'ô'=>'o', 'õ'=>'o', 'ö'=>'o', 'ø'=>'o', 'ù'=>'u', 'ú'=>'u', 'û'=>'u', 'ý'=>'y', 'ý'=>'y', 'þ'=>'b',
        'ÿ'=>'y', 'R'=>'R', 'r'=>'r',
    );
   
    return strtr($string, $table);
}

function findMonth($currentMonth, $nextMonth) {
	$index = $currentMonth + $nextMonth;
	
	if ($index > 12) {
		$index = $index - 12;
	}
	
	$arrayMonths = array (
		1 => 'Janeiro',
		2 => 'Fevereiro',
		3 => 'Março',
		4 => 'Abril',	
		5 => 'Maio',
		6 => 'Junho',
		7 => 'Julho',
		8 => 'Agosto',	
		9 => 'Setembro',
		10 => 'Outubro',
		11 => 'Novembro',
		12 => 'Dezembro'				
	);

	return $arrayMonths[$index];
}

function enable_content($date = null) {
	date_default_timezone_set('America/Sao_Paulo');

    if (!is_null($date)) {
        $serverTime = $_SERVER['REQUEST_TIME'];
        $serverDate = date('Y-m-d H:i', $serverTime);
		//$dataHorario = strtotime($serverDate . '+1 hour');
		$dataHorario = strtotime($serverDate);
        $dateToDeploy = strtotime($date);
        //$serverDate = strtotime($serverDate);
        
        if ($dataHorario >= $dateToDeploy) {
            return true;
        }
        return false;
    }
}



//Tecnofit


function getAuthorization($client) {
	$response = $client->request(
		'POST',
		'https://partner.tecnofit.com.br/v1/auth',
		[
			'json' => [
				'email' => 'anderson.xavierx@yahoo.com',
				'password' => '123456'						
			],
		    'on_stats' => function (TransferStats $stats) use (&$url) {
		        $url = $stats->getEffectiveUri();
		    }
		]
	);

	writeLog($url);

	$obj = json_decode($response->getBody());

	writeLogObj($obj);

	// $obj = $obj->{'return'};

	// Converte objeto para array
	$arr = json_decode(json_encode($obj), true);

	return $arr;
}


function getCompanies($client) {

	$token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMTAzOTE1OCwiZW1wcmVzYV9pZCI6MTU5NTYsImlzcyI6IlRlY25vZml0IiwiZXhwIjoxNzU0MjQwNzYwLCJzdWIiOiIiLCJhdWQiOiIifQ.5vTPhmXM8rl-YtMRLPLS-0XKyhVkvRIcpK3wEQa6s0w';

	$response = $client->request(
		'GET',
		'https://partner.tecnofit.com.br/v1/companies',
		[
			'headers' => [
				  'Authorization' => 'Bearer ' . $token,
				  'Accept'        => 'application/json'
        	],
		    'on_stats' => function (TransferStats $stats) use (&$url) {
		        $url = $stats->getEffectiveUri();
		    }
		]
	);

	writeLog($url);

	$obj = json_decode($response->getBody());

	writeLogObj($obj);

	// $obj = $obj->{'return'};

	// Converte objeto para array
	$arr = json_decode(json_encode($obj), true);

	return $arr;
}

?>
