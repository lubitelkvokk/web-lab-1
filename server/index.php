<?php


// необходимые HTTP-заголовки
//header("Access-Control-Allow-Origin: *");
//header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
//header("Content-Type: application/json; charset=UTF-8");

$scriptPath = $_SERVER['SCRIPT_FILENAME'];
echo "Путь к текущему PHP-скрипту: " . $scriptPath;

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    // Проверяем, что это GET-запрос
    if (isset($_GET["param_name"])) {
        // Получаем значение параметра
        $paramValue = $_GET["param_name"];
        echo "Получено значение параметра: " . htmlspecialchars($paramValue);
    } else {
        echo "Параметр не указан.";
    }
} else {
    // Обработываем другие HTTP-методы при необходимости
    http_response_code(405); // Метод не разрешен
    echo "Недопустимый метод запроса.";
}
?>