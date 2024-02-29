<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
        
    // $dataToReturn = [];

    //Retrives the data from the client side with json_deconde...
    $dataToReturn = json_decode(file_get_contents('php://input'));
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(["success" => $dataToReturn]); //json_encode sends back data to the client
    exit(0);
// ?>