<?php

$dbname = "leads_checkout";

// Local
// $username = "root";
// $servername = "localhost";
// $password = "root";

// Remote
$servername = "localhost";
$username = "web_chkt";
$password = "f3fj@3#v0l";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Erro ao conectar: " . $conn->connect_error);
}

?>