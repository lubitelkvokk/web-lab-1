
import validation from "./utils/Validation";
import {rButtonListening, xButtonsListening} from "./specific_functions/ButtonsListening";
import {getR, getRErrorField, getX, getXErrorField, getY, getYErrorField} from "./specific_functions/SelectionResults";
import {tableIsEmpty} from "./specific_functions/tableInfo";

//deprecated
// model.forEach(block => {
//     // @ts-ignore
//     return document.querySelector(".main_page").insertAdjacentHTML("beforeend", block.toHTML())
// })

// Получение данных о всей таблице

//Прослушивание кнопки X
xButtonsListening();
//Прослушивание кнопки R
rButtonListening();



document.querySelector("#form-submit")?.addEventListener("click", function () {
    let validation_result = validation(getX(), getY(), getR(), getXErrorField(), getYErrorField(), getRErrorField());
    if (validation_result) {
        fetch(`https://se.ifmo.ru/~s367403/index.php?x=${getX()?.value}&y=${getY()!.value}&r=${getR()?.value}`)
            .then(response => response.text())
            .then(data => {
                if (tableIsEmpty()) {
                    updateTable(data);
                } else {
                    addRowToTable(data);
                }

            })
            .catch(reason => {
                console.error(reason)
            })
    }
})


function updateTable(html: string) {
    document.querySelector('#hit-results')!.innerHTML += "<tr>\n" +
        "                                                                <th>X</th>\n" +
        "                                                                <th>Y</th>\n" +
        "                                                                <th>R</th>\n" +
        "                                                                <th>Current time</th>\n" +
        "                                                                <th>Script runtime</th>\n" +
        "                                                                <th>Hit result</th>\n" +
        "                                                            </tr>"


    document.querySelector("#hit-results")!.innerHTML += html;

}

function addRowToTable(html: string) {

    document.querySelector("#hit-results")!.innerHTML += html;
}


