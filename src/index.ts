import Block from "./components/Blocks/Block";


import {model} from "./model/main_page";
import * as events from "events";
import validation from "./utils/Validation";
import {rButtonListening, buttonsListening} from "./utils/ButtonsListening";
import {getR, getX, getY} from "./utils/SelectionResults";
import axios from "axios";


model.forEach(block => {
    // @ts-ignore
    return document.querySelector(".main_page").insertAdjacentHTML("beforeend", block.toHTML())
})


//Прослушивание кнопки X
buttonsListening();
//Прослушивание кнопки X
rButtonListening();
// @ts-ignore
document.querySelector("#form-submit").addEventListener("click", function () {
    console.log(validation())
    if (validation()) {

        fetch(`http://localhost?x=${getX()}&y=${getY()}&r=${getR()}`, {
            method: 'GET',
            headers: {
                "Cookie": "kvokka=lubitel"
            }
        })
            .then(response => response.text())
            .then(data => updateTable(data))
    }

})


function updateTable(html: string) {
    // @ts-ignore
    document.querySelector("#hit-results").innerHTML = html;
}


