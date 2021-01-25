<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

	$json = file_get_contents('php://input');	
	
	$logFile = fopen("log/error.txt", "a") or die("Unable to open file!");

	// $newdata = "\n\n\n" . $json . "\n\n\n";
	$newdata = "\n\n". date("Y-m-d H:i:s") . "\n" . $json . "\n";
	fwrite($logFile, $newdata);
	fclose($logFile);
	
	
	echo $json;

}
	

?>