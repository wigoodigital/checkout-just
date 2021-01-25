<?php

include_once("inc/functions.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {


	$json = file_get_contents('php://input');	

	$dataSend = json_decode($json, true);

	incluirVenda($client, $dataSend);		

	// echo json_encode($lead);
	// echo $json;

}
	

?>