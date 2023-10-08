<?php

session_start();

require_once "validation.php";
require_once "hit.php";
require_once "getTable.php";

$time_start = microtime(true);


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
//header("Content-Type: application/json; charset=UTF-8");
//header(“Access-Control-Allow-Methods: GET, POST”);

//$scriptPath = $_SERVER['SCRIPT_FILENAME'];
//echo "Путь к текущему PHP-скрипту: " . $scriptPath;


if ($_SERVER["REQUEST_METHOD"] === "GET") {
    // Проверяем, что это GET-запрос
    if (isset($_GET["x"]) and isset($_GET["y"]) and isset($_GET["r"])) {
        // Получаем значение параметра
        $paramValueX = (double)$_GET["x"];
        $paramValueY = (double)$_GET["y"];
        $paramValueR = (double)$_GET["r"];
        $paramValueTimeZone = $_GET["timeZone"];
        date_default_timezone_set($paramValueTimeZone);
        if (!validate($paramValueX, $paramValueY, $paramValueR)) {
            http_response_code(400);
            echo "NORMALNO VVEDI DA?";
            return;
        }
        $hit_result = isHit($paramValueX, $paramValueY, $paramValueR);
        $time_end = microtime(true);
        $script_runtime = round(($time_end - $time_start) * 1000000);
        $current_time = date("H:i:s");
        $result_table_row = array(
            $paramValueX, $paramValueY, $paramValueR, $current_time, $script_runtime, $hit_result ? "Hitting": "Missed"
        );
        if (!isset($_SESSION['dataHistory'])) {
            $_SESSION['dataHistory'] = array();
        }
        array_push($_SESSION['dataHistory'], $result_table_row);

//        if (count($_SESSION['dataHistory']) == 1) {
//            getTable();
//        } else {
            echo "<tr>
                    <td>$result_table_row[0]</td>
                    <td>$result_table_row[1]</td>
                    <td>$result_table_row[2]</td>
                    <td>$result_table_row[3]</td>
                    <td>$result_table_row[4]</td>
                    <td>$result_table_row[5]</td>
                </tr> 
                ";
//        }


    } else {
        http_response_code(203);
        echo "Non-Authoritative Information";
    }

} else {
    // Обработываем другие HTTP-методы при необходимости
    http_response_code(405); // Метод не разрешен
    echo "Недопустимый метод запроса.";
}
