<?php



if ($_SERVER['REQUEST_METHOD'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'PUT' ) {

	$servername = "162.241.61.224";
	$username = "clicou84_admin_cp";
	$password = "cp@189723";
	$dbname = "clicou84_checkout_justfit";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	

	// Change character set to utf8
	$conn -> set_charset("utf8");

	// Check connection
	if ($conn->connect_error) {
		die("Erro ao conectar: " . $conn->connect_error);
		echo "Erro ao conectar: " . $conn->connect_error;
		
	}

	$json = file_get_contents('php://input');	

	$lead = json_decode($json, true);

	$nomecompleto = $lead["name"];
	$cpf = $lead["cpf"];
	$dataFormat = str_replace("/", "-", $lead["birthDate"]);    
	$data_nasc = date('Y-m-d', strtotime($dataFormat));	
	$email = $lead["email"];    
	$sexo = $lead["sex"];	
    $celular = $lead["phone"];		
    $unidade = $lead["unidade"];		
    $plano = $lead["plano"];		
	if($lead['optinPhone']){
		$optPhone = 1;
	} else {
		$optPhone = 0;
	}
	if($lead['optinEmail']){
		$optEmail = 1;
	} else {
		$optEmail = 0;
	}
	if($lead['finalizadoVenda']){
		$finalizado = 1;
	} else {
		$finalizado = 0;
	}

	// $createAt = getdate(); //date	
	// $updateAt = getdate(); //date	


	if ( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

		$sql = "SELECT * FROM identificacao_checkout WHERE cpf='{$cpf}'";
		

		$result = $conn->query($sql);

		if ($result->num_rows > 0) {
			$sql = "UPDATE identificacao_checkout
    		SET nomecompleto = '{$nomecompleto}', cpf = '{$cpf}', data_nasc = '{$data_nasc}', email = '{$email}', sexo = '{$sexo}', celular = '{$celular}', unidade = '{$unidade}', plano = '{$plano}', optPhone = '{$optPhone}', optEmail = '{$optEmail}',   finalizadoVenda = '{$finalizado}', updateAt = now()  WHERE cpf = '{$cpf}' " ;

		} else {
			$sql = "INSERT INTO identificacao_checkout (nomecompleto, cpf, data_nasc, email, sexo, celular, unidade, plano, optPhone, optEmail, finalizadoVenda, createAt) 
			VALUES ('{$nomecompleto}', '{$cpf}', '{$data_nasc}', '{$email}', '{$sexo}', '{$celular}', '{$unidade}', '{$plano}', '{$optPhone}', '{$optEmail}', '{$finalizado}', now())";
		}

		
	} else {

		$sql = "UPDATE identificacao_checkout
    	SET nomecompleto = '{$nomecompleto}', cpf = '{$cpf}', data_nasc = '{$data_nasc}', email = '{$email}', sexo = '{$sexo}', celular = '{$celular}', unidade = '{$unidade}', plano = '{$plano}', finalizadoVenda = '{$finalizado}', updateAt = now()  WHERE cpf = '{$cpf}' " ;
	}


	$result = $conn->query($sql);

	if ($result === TRUE) {
        echo "Mensagem enviada com sucesso! Retornaremos seu contato :)";
      } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
      }

	$conn->close();




	// echo json_encode($lead);
	// echo $json;

}
	

?>