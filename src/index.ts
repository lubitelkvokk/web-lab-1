import Block from "./components/Block";


import {model} from "./model/main_page";
import SVGBlock from "./components/SVGBlock";

var gg = new SVGBlock("h1","","ABOBA", {"class":"flex"})


model.forEach(block => {

    if (block instanceof Block) {
        console.log(block.toHTML());
    }
    // @ts-ignore
    return document.querySelector(".main_page").insertAdjacentHTML("beforeend", block.toHTML())
})

