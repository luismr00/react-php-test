<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    // header('Access-Control-Allow-Methods: *')
    // $user = $_POST['name'];
    // echo ("Hello from server: $user");

//     $json = file_get_contents('php://input');
//     $data = json_decode($json);
//     echo ($data);

    // echo ("HI");
    // print "Hello world!";

    // echo '<script>console.log("Welcome to GeeksforGeeks!"); </script>'; 
    // if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    //     $request_raw = file_get_contents('php://input');
    //     $request = json_decode($request_raw);
    //     foreach ($request as $key => $value) {
    //             echo "{$key}: {$value}\n";
    //     }
    //     exit;
    // }

    // if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //     error_log(print_r($_REQUEST, true));
    //     error_log(print_r($_SERVER, true));
    //     error_log(print_r($_POST['title'], true));
        
    //     $var = $_POST['title'];
    //     error_log(print_r($var, true));
    //     return;
        
    // }
        
    $dataToReturn = [];

    // populate the data as you need
    $dataToReturn = json_decode(file_get_contents('php://input'));
    // echo ("Your data: $dataToReturn");
    // foreach ($request as $key => $value) {
    //         echo "{$key}: {$value}\n";
    // }
    // echo ("Testing msg");
    // Output the JSON string with appropriate header
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(["success" => $dataToReturn]);
    exit(0);
// ?>