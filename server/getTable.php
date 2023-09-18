<?php

session_start();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

function getTable(){
    if ($_SERVER["REQUEST_METHOD"] === "GET") {

        if (!isset($_SESSION['dataHistory'])) {
            $_SESSION['dataHistory'] = array();
        }

//        echo "<table>
//                <tr>
//                    <th>X</th>
//                    <th>Y</th>
//                    <th>R</th>
//                    <th>Current time</th>
//                    <th>Script runtime</th>
//                    <th>Hit result</th>
//                </tr> ";
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
    }
}


