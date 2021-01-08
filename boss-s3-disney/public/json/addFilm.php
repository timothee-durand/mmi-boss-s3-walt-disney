<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

    if(isset($_POST["film"])) {
        $fileContent = json_decode(file_get_contents("walt-disney-filmo.json"));

        //echo json_encode($fileContent);

        $envoi = json_decode($_POST["film"]);

        $fileContent[] = $envoi;
        //echo json_encode($fileContent);


        echo file_put_contents("walt-disney-filmo.json", json_encode($fileContent));

    } else {
        echo -1;
    }
?>
