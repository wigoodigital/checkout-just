<?php

include_once("inc/functions.php");


function doCheckout($client) {
    // Variável de retorno
    $ret = [];

    // $ret = getEstados($client);
    // $ret = getAuthorization($client);
    $ret = getCompanies($client);

    return $ret;   
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

 
   $ret = doCheckout($client);    
   echo json_encode($ret);

 } 
 ?>