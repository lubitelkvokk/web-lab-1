<?php

session_start();

require_once "validation.php";
require_once "hit.php";
$time_start = microtime(true);


// необходимые HTTP-заголовки
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
        if (!validate($paramValueX, $paramValueY, $paramValueR)) {
            http_response_code(400);
            echo "NORMALNO VVEDI DA?";
            return;
        }
        $hit_result = isHit($paramValueX, $paramValueY, $paramValueR);
        echo $hit_result;
        $time_end = microtime(true);
        $script_runtime = round(($time_end - $time_start) * 1000000);
        $current_time = date("H:i:s");

        $result_table_row = array(
            $paramValueX, $paramValueY, $paramValueR, $current_time, $script_runtime, $hit_result
        );
        if (!isset($_SESSION['dataHistory'])) {
            $_SESSION['dataHistory'] = array();
        }
        array_push($_SESSION['dataHistory'], $result_table_row);
//        echo $_SESSION['dataHistory'][0][0];
        echo "<table>
                <tr>
                    <th>X</th>
                    <th>Y</th>
                    <th>R</th>
                    <th>Current time</th>
                    <th>Script runtime</th>
                    <th>Hit result</th>
                </tr> ";
        foreach ($_SESSION['dataHistory'] as $row) {
            echo "<tr>
                    <td>$row[0]</td>
                    <td>$row[1]</td>
                    <td>$row[2]</td>
                    <td>$row[3]</td>
                    <td>$row[4]</td>
                    <td>$row[5]</td>
                </tr> 
                ";
        }
        echo "</table>";
    } else {
        http_response_code(203);
        echo "Non-Authoritative Information";
    }

} else {
    // Обработываем другие HTTP-методы при необходимости
    http_response_code(405); // Метод не разрешен
    echo "Недопустимый метод запроса.";
}
