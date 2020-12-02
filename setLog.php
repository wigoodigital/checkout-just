<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

	$json = file_get_contents('php://input');	
	
	$logFile = fopen("log/log.txt", "a") or die("Unable to open file!");

	$newdata = "\n\n\n" . $json . "\n\n\n";
	fwrite($logFile, $newdata);
	fclose($logFile);
	
	
	echo $json;

}
	

?>