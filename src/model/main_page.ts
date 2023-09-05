import Block from "../components/Block";
import SVGBlock from "../components/SVGBlock";
import FormBlock from "../components/FormBlock";
import AuxBlock from "../components/AuxBlock";

export const model = [
    // Header
    new Block("header", "",
        new Block("h1", "", "Mikhailov Pavel Maximovich").toHTML() +
        new Block("h1", "", "P3225").toHTML() +
        new Block("h1", "", "Variant 3514").toHTML()),


    // Hit table
    new Block("table", "hit_results",
        new Block("tr", "",
            new Block("th", "", "X").toHTML() +
            new Block("th", "", "Y").toHTML() +
            new Block("th", "", "R").toHTML() +
            new Block("th", "", "Hit").toHTML()).toHTML()),

    // SVG BLOCK
    new SVGBlock("svg", "",
        new SVGBlock("line", "", "", {
            "x1": "0",
            "y1": "150",
            "x2": "300",
            "y2": "150",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +
        new SVGBlock("line", "", "", {
            "x1": "150",
            "y1": "0",
            "x2": "150",
            "y2": "300",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +
        // Вертикальный указатель R
        new SVGBlock("polyline", "", "", {
            "points": "147,5 150,0 153,5",
            "fill": "none",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +

        // Горизонтальный указатель R/2
        new SVGBlock("polyline", "", "", {
            "points": "295,147 300,150, 295,153",
            "fill": "none",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +
        // Вертикальный указатель R
        new SVGBlock("polyline", "", "", {
            "points": "147,5 150,0 153,5",
            "fill": "none",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +

        // Горизонтальный указатель R/2
        new SVGBlock("polyline", "", "", {
            "points": "295,147 300,150, 295,153",
            "fill": "none",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +
        // Текст R
        new SVGBlock("text", "", "R", {
            "fill": "rgb(0,0,0)",
            "x": "155",
            "y": "35"
        }).toHTML() +

        // Засечка R
        new SVGBlock("line", "", "", {
            "x1": "148",
            "y1": "30",
            "x2": "152",
            "y2": "30",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +

        // Текст R/2
        new SVGBlock("text", "", "R/2", {
            "fill": "rgb(0,0,0)",
            "x": "155",
            "y": "95"
        }).toHTML() +

        // Засечка R/2
        new SVGBlock("line", "", "", {
            "x1": "148",
            "y1": "90",
            "x2": "152",
            "y2": "90",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +
        // Текст -R/2
        new SVGBlock("text", "", "-R/2", {
            "fill": "rgb(0,0,0)",
            "x": "155",
            "y": "215"
        }).toHTML() +

        // Засечка -R/2
        new SVGBlock("line", "", "", {
            "x1": "148",
            "y1": "210",
            "x2": "152",
            "y2": "210",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +

        // Текст -R
        new SVGBlock("text", "", "-R", {
            "fill": "rgb(0,0,0)",
            "x": "155",
            "y": "275"
        }).toHTML() +

        // Засечка -R
        new SVGBlock("line", "", "", {
            "x1": "148",
            "y1": "270",
            "x2": "152",
            "y2": "270",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +

        // Текст -R (слева)
        new SVGBlock("text", "", "-R", {
            "fill": "rgb(0,0,0)",
            "x": "25",
            "y": "145"
        }).toHTML() +

        // Засечка -R (слева)
        new SVGBlock("line", "", "", {
            "x1": "30",
            "y1": "148",
            "x2": "30",
            "y2": "152",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +

        // Текст -R/2 (слева)
        new SVGBlock("text", "", "-R/2", {
            "fill": "rgb(0,0,0)",
            "x": "85",
            "y": "145"
        }).toHTML() +

        // Засечка -R/2 (слева)
        new SVGBlock("line", "", "", {
            "x1": "90",
            "y1": "148",
            "x2": "90",
            "y2": "152",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +

        // Текст R/2 (справа)
        new SVGBlock("text", "", "R/2", {
            "fill": "rgb(0,0,0)",
            "x": "205",
            "y": "145"
        }).toHTML() +

        // Засечка R/2 (справа)
        new SVGBlock("line", "", "", {
            "x1": "210",
            "y1": "148",
            "x2": "210",
            "y2": "152",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +

        // Текст R (справа)
        new SVGBlock("text", "", "R", {
            "fill": "rgb(0,0,0)",
            "x": "265",
            "y": "145"
        }).toHTML() +

        // Засечка R (справа)
        new SVGBlock("line", "", "", {
            "x1": "270",
            "y1": "148",
            "x2": "270",
            "y2": "152",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +
        // Определение вырезающей области
        new SVGBlock("defs", "",
            new SVGBlock("clipPath", "cut-off-bottom-right",
                new SVGBlock("rect", "", "", {
                    "x": "50",
                    "y": "50",
                    "width": "100",
                    "height": "100"
                }).toHTML(),
                {}).toHTML(),
            {}).toHTML() +

        // Круг с вырезанной областью
        new SVGBlock("circle", "", "", {
            "cx": "150",
            "cy": "150",
            "r": "60",
            "clip-path": "url(#cut-off-bottom-right)",
            "opacity": "0.3"
        }).toHTML() +

        // Прямоугольник с прозрачностью
        new SVGBlock("rect", "", "", {
            "x": "150",
            "y": "150",
            "height": "60",
            "width": "120",
            "opacity": "0.3"
        }).toHTML() +

        // Многоугольник
        new SVGBlock("polygon", "", "", {
            "points": "150,150 90,150, 150,270",
            "fill": "rgb(0,0,0)",
            "opacity": "0.3"
        }).toHTML()

        ,
        {
            "height":
                "300", "width":
                "300"
        }
    ),

    new FormBlock("form", "",
        new FormBlock("label", "", "Choice X:", {}).toHTML() +
        new AuxBlock("br").toHTML() +
        new FormBlock("input", "x4", "", {"id": "x4", "type": "radio", "name": "xChoice", "value": "x4"}).toHTML() +
        new FormBlock("label", "", "4", {"for": "x4"}).toHTML() +
        new AuxBlock("br").toHTML() +
        new FormBlock("input", "x3", "", {"id": "x3", "type": "radio", "name": "xChoice", "value": "x3"}).toHTML() +
        new FormBlock("label", "", "3", {"for": "x3"}).toHTML() +
        new AuxBlock("br").toHTML() +
        new FormBlock("input", "x2", "", {"id": "x2", "type": "radio", "name": "xChoice", "value": "x2"}).toHTML() +
        new FormBlock("label", "", "2", {"for": "x2"}).toHTML() +
        new AuxBlock("br").toHTML() +
        new FormBlock("input", "x1", "", {"id": "x1", "type": "radio", "name": "xChoice", "value": "x1"}).toHTML() +
        new FormBlock("label", "", "1", {"for": "x1"}).toHTML() +
        new AuxBlock("br").toHTML() +
        new FormBlock("input", "x0", "", {"id": "x0", "type": "radio", "name": "xChoice", "value": "x0"}).toHTML() +
        new FormBlock("label", "", "0", {"for": "x0"}).toHTML() +
        new AuxBlock("br").toHTML() +
        new FormBlock("input", "x-1", "", {"id": "x-1", "type": "radio", "name": "xChoice", "value": "x-1"}).toHTML() +
        new FormBlock("label", "", "-1", {"for": "x-1"}).toHTML() +
        new AuxBlock("br").toHTML() +
        new FormBlock("input", "x-2", "", {"id": "x-2", "type": "radio", "name": "xChoice", "value": "x-2"}).toHTML() +
        new FormBlock("label", "", "-2", {"for": "x-2"}).toHTML() +
        new AuxBlock("br").toHTML() +
        new FormBlock("input", "x-3", "", {"id": "x-3", "type": "radio", "name": "xChoice", "value": "x-3"}).toHTML() +
        new FormBlock("label", "", "-3", {"for": "x-3"}).toHTML() +
        new AuxBlock("br").toHTML() +
        new FormBlock("input", "x-4", "", {"id": "x-4", "type": "radio", "name": "xChoice", "value": "x-4"}).toHTML() +
        new FormBlock("label", "", "-4", {"for": "x-4"}).toHTML() +
        new AuxBlock("br").toHTML() +

        new FormBlock("label", "", "Y", {}).toHTML() +
        new FormBlock("input", "y", "", {"id": "y", "type": "number", "name": "yChoice", "value": "y"}).toHTML() +
        new AuxBlock("br").toHTML() +
        new FormBlock("label", "", "Choice R:", {}).toHTML() +
        new AuxBlock("br").toHTML() +
        new FormBlock("input", "r1", "", {"id": "r1", "type": "radio", "name": "rChoice", "value": "r1"}).toHTML() +
        new FormBlock("label", "", "1", {"for": "r1"}).toHTML() +
        new AuxBlock("br").toHTML() +
        new FormBlock("input", "r2", "", {"id": "r2", "type": "radio", "name": "rChoice", "value": "r2"}).toHTML() +
        new FormBlock("label", "", "2", {"for": "r2"}).toHTML() +
        new AuxBlock("br").toHTML() +
        new FormBlock("input", "r3", "", {"id": "r3", "type": "radio", "name": "rChoice", "value": "r3"}).toHTML() +
        new FormBlock("label", "", "3", {"for": "r3"}).toHTML() +
        new AuxBlock("br").toHTML() +
        new FormBlock("button", "", "Submit", {"type": "submit"}).toHTML()
        ,
        {"method": "get"})

]
