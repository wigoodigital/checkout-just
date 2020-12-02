<?php

include_once("inc/functions.php");


function doCheckout($client) {
    // Variável de retorno
    $ret = [];

    $arrayEstados = getEstados($client);

    // Pega ID do estado
    foreach ($arrayEstados as $a) {
        if($a['sigla'] === $_POST['estado']) {
            $idEstado = $a['codigo'];
        }
    }

    $arrayCidades = getCidades($client, $idEstado);
    $cidadeSemAcentos = removeAccents(mb_strtoupper($_POST['cidade']));

    // Pega ID da cidade
    foreach ($arrayCidades as $a) {
        $cidApiSemAcentos = removeAccents($a['nome']);        
        if($cidApiSemAcentos == $cidadeSemAcentos) {
            $idCidade = $a['codigo'];
        }
    }

    // Cadastra o cliente
    $retCadastro = cadastrarCliente($client, $_POST, $idEstado, $idCidade);
    if (isset($retCadastro->{'erro'})) {
        $ret["erro"] = "Erro ao cadastrar cliente: " . $retCadastro->{'erro'};
        return $ret;

    } else {
    //print_r($retCadastro);
        //echo "Sucesso: " . $retCadastro->{'return'} . "<br>";
    }

    // Pega o objeto do Cliente cadastrado
    $retCliente = consultarCliente($client, $_POST['empresa'], $_POST['email'], $_POST['cpf']);

    if (isset($retCliente->{'erro'})) {
        $ret["erro"] = "Erro ao consultar cliente: " . $retCliente->{'erro'};
        return $ret;
    // } else if ($retCliente->{'return'}->{'situacao'} == "Ativo") {
    //     // $ret["erro"] = "Cliente já ativo. Se deseja fazer alterações no seu plano, vá até o balcão da academia. " . $retCliente->{'return'}->{'situacao'};
    //     return $ret;
    //print_r($retCliente);
        //echo "Cliente retornado com sucesso. CPF: " . $retCliente->{'return'}->{'cpf'} . "<br>";
    }

    // echo "<pre>";
    // var_dump($retCliente);

    // ID do cliente
    $codigoCliente = $retCliente->{'return'}->{'codigo'};
    
    // Consulta convenios de pagamento da Unidade selecionada
    $arrConvenios = consultarConvenios($client, $_POST['empresa']);


    if ($_POST["forma-pagamento"] === "debito") {

        $codigoConvenio = getConvenio($arrConvenios, "debito", $_POST);

        $banco = $_POST;

        $retCobranca = incluirAutorizacaoCobrancaDCO($client, $banco, $codigoCliente, $codigoConvenio);

    } elseif ($_POST["forma-pagamento"] === "credito") {

        $codigoConvenio = getConvenio($arrConvenios, "credito");
        
        $card = $_POST;

        $retCobranca = incluirAutorizacaoCobranca($client, $card, $codigoCliente, $codigoConvenio);
    }

    if (isset($retCobranca->{'erro'})) {
        $ret["erro"] = "Erro ao incluir autorização de cobrança: " . $retCobranca->{'erro'};
        return $ret;
    } else {
        //echo "Autorização de cobrança incluida com sucesso: " . $retCobranca->{'return'} . "<br>";
    }

    $cupom = $_POST["cupom-desconto"];
    $retConfirmacao = enviarEmailConfirmacao($client, $codigoCliente, $_POST["codigo-plano-selecionado"], 0, $cupom, "12", date("d"));

    if (isset($retConfirmacao->{'erro'})) {
        $ret["erro"] = "Erro ao confirmar a cobrança: " . $retConfirmacao->{'erro'};
        return $ret;
    } else {
        //echo "Autorização de cobrança incluida com sucesso: " . $retConfirmacao->{'return'} . "<br>";
        // var_dump($retConfirmacao);
    }

    $ret["sucesso"] = "Checkout completado com sucesso";

    return $ret;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

 
   $ret = doCheckout($client);    
   echo json_encode($ret);

 } 
 ?>