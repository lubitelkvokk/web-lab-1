/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Blocks/AuxBlock.ts":
/*!*******************************************!*\
  !*** ./src/components/Blocks/AuxBlock.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Block_1 = __importDefault(__webpack_require__(/*! ./Block */ \"./src/components/Blocks/Block.ts\"));\nclass AuxBlock extends Block_1.default {\n    constructor(tag) {\n        super(tag, \"\", \"\");\n    }\n}\nexports[\"default\"] = AuxBlock;\n\n\n//# sourceURL=webpack://web-lab-1.2/./src/components/Blocks/AuxBlock.ts?");

/***/ }),

/***/ "./src/components/Blocks/Block.ts":
/*!****************************************!*\
  !*** ./src/components/Blocks/Block.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Block {\n    constructor(tag, id, content) {\n        this.tag = tag;\n        this.id = id;\n        this.content = content;\n    }\n    toHTML() {\n        return `<${this.tag}\r\n        ${this.id ? `id=\"${this.id}\"` : \"\"}> \r\n        ${this.content}\r\n        </${this.tag}>`;\n    }\n}\nexports[\"default\"] = Block;\n\n\n//# sourceURL=webpack://web-lab-1.2/./src/components/Blocks/Block.ts?");

/***/ }),

/***/ "./src/components/Blocks/FormBlock.ts":
/*!********************************************!*\
  !*** ./src/components/Blocks/FormBlock.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Block_1 = __importDefault(__webpack_require__(/*! ./Block */ \"./src/components/Blocks/Block.ts\"));\nclass FormBlock extends Block_1.default {\n    constructor(tag, id, content, parameters) {\n        super(tag, id, content);\n        this.parameters = parameters;\n    }\n    toHTML() {\n        return `<${this.tag}\r\n            ${this.parametersToString(this.parameters)}\r\n            ${this.id ? `id=\"${this.id}\"` : \"\"}> \r\n            ${this.content}\r\n        </${this.tag}>`;\n    }\n    parametersToString(parameters) {\n        let result = \"\";\n        for (let key in parameters) {\n            result += key + '=\"' + parameters[key] + '\" ';\n        }\n        // console.log(result);\n        return result;\n    }\n}\nexports[\"default\"] = FormBlock;\n\n\n//# sourceURL=webpack://web-lab-1.2/./src/components/Blocks/FormBlock.ts?");

/***/ }),

/***/ "./src/components/Blocks/SVGBlock.ts":
/*!*******************************************!*\
  !*** ./src/components/Blocks/SVGBlock.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Block_1 = __importDefault(__webpack_require__(/*! ./Block */ \"./src/components/Blocks/Block.ts\"));\nclass SVGBlock extends Block_1.default {\n    constructor(tag, id, content, parameters) {\n        super(tag, id, content);\n        this.parameters = parameters;\n    }\n    toHTML() {\n        return `<${this.tag}\r\n            ${this.parametersToString(this.parameters)}\r\n            ${this.id ? `id=\"${this.id}\"` : \"\"}> \r\n            ${this.content}\r\n        </${this.tag}>`;\n    }\n    parametersToString(parameters) {\n        let result = \"\";\n        for (let key in parameters) {\n            result += key + '=\"' + parameters[key] + '\" ';\n        }\n        // console.log(result);\n        return result;\n    }\n}\nexports[\"default\"] = SVGBlock;\n\n\n//# sourceURL=webpack://web-lab-1.2/./src/components/Blocks/SVGBlock.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst main_page_1 = __webpack_require__(/*! ./model/main_page */ \"./src/model/main_page.ts\");\nconst Validation_1 = __importDefault(__webpack_require__(/*! ./utils/Validation */ \"./src/utils/Validation.ts\"));\nconst ButtonsListening_1 = __webpack_require__(/*! ./utils/ButtonsListening */ \"./src/utils/ButtonsListening.ts\");\nconst SelectionResults_1 = __webpack_require__(/*! ./utils/SelectionResults */ \"./src/utils/SelectionResults.ts\");\nmain_page_1.model.forEach(block => {\n    // @ts-ignore\n    return document.querySelector(\".main_page\").insertAdjacentHTML(\"beforeend\", block.toHTML());\n});\n//Прослушивание кнопки X\n(0, ButtonsListening_1.buttonsListening)();\n//Прослушивание кнопки X\n(0, ButtonsListening_1.rButtonListening)();\n// @ts-ignore\ndocument.querySelector(\"#form-submit\").addEventListener(\"click\", function () {\n    console.log((0, Validation_1.default)());\n    if ((0, Validation_1.default)()) {\n        fetch(`http://localhost?x=${(0, SelectionResults_1.getX)()}&y=${(0, SelectionResults_1.getY)()}&r=${(0, SelectionResults_1.getR)()}`, {\n            method: 'GET',\n            headers: {\n                \"Cookie\": \"kvokka=lubitel\"\n            }\n        })\n            .then(response => response.text())\n            .then(data => updateTable(data));\n    }\n});\nfunction updateTable(html) {\n    // @ts-ignore\n    document.querySelector(\"#hit-results\").innerHTML = html;\n}\n\n\n//# sourceURL=webpack://web-lab-1.2/./src/index.ts?");

/***/ }),

/***/ "./src/model/main_page.ts":
/*!********************************!*\
  !*** ./src/model/main_page.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.model = void 0;\nconst Block_1 = __importDefault(__webpack_require__(/*! ../components/Blocks/Block */ \"./src/components/Blocks/Block.ts\"));\nconst SVGBlock_1 = __importDefault(__webpack_require__(/*! ../components/Blocks/SVGBlock */ \"./src/components/Blocks/SVGBlock.ts\"));\nconst FormBlock_1 = __importDefault(__webpack_require__(/*! ../components/Blocks/FormBlock */ \"./src/components/Blocks/FormBlock.ts\"));\nconst AuxBlock_1 = __importDefault(__webpack_require__(/*! ../components/Blocks/AuxBlock */ \"./src/components/Blocks/AuxBlock.ts\"));\nexports.model = [\n    // Header\n    new Block_1.default(\"header\", \"\", new Block_1.default(\"h1\", \"\", \"Mikhailov Pavel Maximovich\").toHTML() +\n        new Block_1.default(\"h1\", \"\", \"P3225\").toHTML() +\n        new Block_1.default(\"h1\", \"\", \"Variant 3514\").toHTML()),\n    // Hit table\n    new Block_1.default(\"table\", \"hit_results\", new Block_1.default(\"tr\", \"\", new Block_1.default(\"th\", \"\", \"X\").toHTML() +\n        new Block_1.default(\"th\", \"\", \"Y\").toHTML() +\n        new Block_1.default(\"th\", \"\", \"R\").toHTML() +\n        new Block_1.default(\"th\", \"\", \"Hit\").toHTML()).toHTML()),\n    // SVG BLOCK\n    new SVGBlock_1.default(\"svg\", \"\", new SVGBlock_1.default(\"line\", \"\", \"\", {\n        \"x1\": \"0\",\n        \"y1\": \"150\",\n        \"x2\": \"300\",\n        \"y2\": \"150\",\n        \"stroke-width\": \"1\",\n        \"stroke\": \"rgb(0,0,0)\"\n    }).toHTML() +\n        new SVGBlock_1.default(\"line\", \"\", \"\", {\n            \"x1\": \"150\",\n            \"y1\": \"0\",\n            \"x2\": \"150\",\n            \"y2\": \"300\",\n            \"stroke-width\": \"1\",\n            \"stroke\": \"rgb(0,0,0)\"\n        }).toHTML() +\n        // Вертикальный указатель R\n        new SVGBlock_1.default(\"polyline\", \"\", \"\", {\n            \"points\": \"147,5 150,0 153,5\",\n            \"fill\": \"none\",\n            \"stroke-width\": \"1\",\n            \"stroke\": \"rgb(0,0,0)\"\n        }).toHTML() +\n        // Горизонтальный указатель R/2\n        new SVGBlock_1.default(\"polyline\", \"\", \"\", {\n            \"points\": \"295,147 300,150, 295,153\",\n            \"fill\": \"none\",\n            \"stroke-width\": \"1\",\n            \"stroke\": \"rgb(0,0,0)\"\n        }).toHTML() +\n        // Вертикальный указатель R\n        new SVGBlock_1.default(\"polyline\", \"\", \"\", {\n            \"points\": \"147,5 150,0 153,5\",\n            \"fill\": \"none\",\n            \"stroke-width\": \"1\",\n            \"stroke\": \"rgb(0,0,0)\"\n        }).toHTML() +\n        // Горизонтальный указатель R/2\n        new SVGBlock_1.default(\"polyline\", \"\", \"\", {\n            \"points\": \"295,147 300,150, 295,153\",\n            \"fill\": \"none\",\n            \"stroke-width\": \"1\",\n            \"stroke\": \"rgb(0,0,0)\"\n        }).toHTML() +\n        // Текст R\n        new SVGBlock_1.default(\"text\", \"\", \"R\", {\n            \"fill\": \"rgb(0,0,0)\",\n            \"x\": \"155\",\n            \"y\": \"35\"\n        }).toHTML() +\n        // Засечка R\n        new SVGBlock_1.default(\"line\", \"\", \"\", {\n            \"x1\": \"148\",\n            \"y1\": \"30\",\n            \"x2\": \"152\",\n            \"y2\": \"30\",\n            \"stroke-width\": \"1\",\n            \"stroke\": \"rgb(0,0,0)\"\n        }).toHTML() +\n        // Текст R/2\n        new SVGBlock_1.default(\"text\", \"\", \"R/2\", {\n            \"fill\": \"rgb(0,0,0)\",\n            \"x\": \"155\",\n            \"y\": \"95\"\n        }).toHTML() +\n        // Засечка R/2\n        new SVGBlock_1.default(\"line\", \"\", \"\", {\n            \"x1\": \"148\",\n            \"y1\": \"90\",\n            \"x2\": \"152\",\n            \"y2\": \"90\",\n            \"stroke-width\": \"1\",\n            \"stroke\": \"rgb(0,0,0)\"\n        }).toHTML() +\n        // Текст -R/2\n        new SVGBlock_1.default(\"text\", \"\", \"-R/2\", {\n            \"fill\": \"rgb(0,0,0)\",\n            \"x\": \"155\",\n            \"y\": \"215\"\n        }).toHTML() +\n        // Засечка -R/2\n        new SVGBlock_1.default(\"line\", \"\", \"\", {\n            \"x1\": \"148\",\n            \"y1\": \"210\",\n            \"x2\": \"152\",\n            \"y2\": \"210\",\n            \"stroke-width\": \"1\",\n            \"stroke\": \"rgb(0,0,0)\"\n        }).toHTML() +\n        // Текст -R\n        new SVGBlock_1.default(\"text\", \"\", \"-R\", {\n            \"fill\": \"rgb(0,0,0)\",\n            \"x\": \"155\",\n            \"y\": \"275\"\n        }).toHTML() +\n        // Засечка -R\n        new SVGBlock_1.default(\"line\", \"\", \"\", {\n            \"x1\": \"148\",\n            \"y1\": \"270\",\n            \"x2\": \"152\",\n            \"y2\": \"270\",\n            \"stroke-width\": \"1\",\n            \"stroke\": \"rgb(0,0,0)\"\n        }).toHTML() +\n        // Текст -R (слева)\n        new SVGBlock_1.default(\"text\", \"\", \"-R\", {\n            \"fill\": \"rgb(0,0,0)\",\n            \"x\": \"25\",\n            \"y\": \"145\"\n        }).toHTML() +\n        // Засечка -R (слева)\n        new SVGBlock_1.default(\"line\", \"\", \"\", {\n            \"x1\": \"30\",\n            \"y1\": \"148\",\n            \"x2\": \"30\",\n            \"y2\": \"152\",\n            \"stroke-width\": \"1\",\n            \"stroke\": \"rgb(0,0,0)\"\n        }).toHTML() +\n        // Текст -R/2 (слева)\n        new SVGBlock_1.default(\"text\", \"\", \"-R/2\", {\n            \"fill\": \"rgb(0,0,0)\",\n            \"x\": \"85\",\n            \"y\": \"145\"\n        }).toHTML() +\n        // Засечка -R/2 (слева)\n        new SVGBlock_1.default(\"line\", \"\", \"\", {\n            \"x1\": \"90\",\n            \"y1\": \"148\",\n            \"x2\": \"90\",\n            \"y2\": \"152\",\n            \"stroke-width\": \"1\",\n            \"stroke\": \"rgb(0,0,0)\"\n        }).toHTML() +\n        // Текст R/2 (справа)\n        new SVGBlock_1.default(\"text\", \"\", \"R/2\", {\n            \"fill\": \"rgb(0,0,0)\",\n            \"x\": \"205\",\n            \"y\": \"145\"\n        }).toHTML() +\n        // Засечка R/2 (справа)\n        new SVGBlock_1.default(\"line\", \"\", \"\", {\n            \"x1\": \"210\",\n            \"y1\": \"148\",\n            \"x2\": \"210\",\n            \"y2\": \"152\",\n            \"stroke-width\": \"1\",\n            \"stroke\": \"rgb(0,0,0)\"\n        }).toHTML() +\n        // Текст R (справа)\n        new SVGBlock_1.default(\"text\", \"\", \"R\", {\n            \"fill\": \"rgb(0,0,0)\",\n            \"x\": \"265\",\n            \"y\": \"145\"\n        }).toHTML() +\n        // Засечка R (справа)\n        new SVGBlock_1.default(\"line\", \"\", \"\", {\n            \"x1\": \"270\",\n            \"y1\": \"148\",\n            \"x2\": \"270\",\n            \"y2\": \"152\",\n            \"stroke-width\": \"1\",\n            \"stroke\": \"rgb(0,0,0)\"\n        }).toHTML() +\n        // Определение вырезающей области\n        new SVGBlock_1.default(\"defs\", \"\", new SVGBlock_1.default(\"clipPath\", \"cut-off-bottom-right\", new SVGBlock_1.default(\"rect\", \"\", \"\", {\n            \"x\": \"50\",\n            \"y\": \"50\",\n            \"width\": \"100\",\n            \"height\": \"100\"\n        }).toHTML(), {}).toHTML(), {}).toHTML() +\n        // Круг с вырезанной областью\n        new SVGBlock_1.default(\"circle\", \"\", \"\", {\n            \"cx\": \"150\",\n            \"cy\": \"150\",\n            \"r\": \"60\",\n            \"clip-path\": \"url(#cut-off-bottom-right)\",\n            \"opacity\": \"0.3\"\n        }).toHTML() +\n        // Прямоугольник с прозрачностью\n        new SVGBlock_1.default(\"rect\", \"\", \"\", {\n            \"x\": \"150\",\n            \"y\": \"150\",\n            \"height\": \"60\",\n            \"width\": \"120\",\n            \"opacity\": \"0.3\"\n        }).toHTML() +\n        // Многоугольник\n        new SVGBlock_1.default(\"polygon\", \"\", \"\", {\n            \"points\": \"150,150 90,150, 150,270\",\n            \"fill\": \"rgb(0,0,0)\",\n            \"opacity\": \"0.3\"\n        }).toHTML(), {\n        \"height\": \"300\", \"width\": \"300\"\n    }),\n    new Block_1.default(\"div\", \"form-block\", new FormBlock_1.default(\"label\", \"\", \"Choice X:\", {}).toHTML() +\n        new AuxBlock_1.default(\"br\").toHTML() +\n        new FormBlock_1.default(\"span\", \"x-error\", \"\", { \"class\": \"error-message\" }).toHTML() +\n        new AuxBlock_1.default(\"br\").toHTML() +\n        // X\n        new FormBlock_1.default(\"input\", \"x4\", \"\", { \"type\": \"button\", \"name\": \"xChoice\", \"value\": \"4\" }).toHTML() +\n        new AuxBlock_1.default(\"br\").toHTML() +\n        new FormBlock_1.default(\"input\", \"x3\", \"\", { \"type\": \"button\", \"name\": \"xChoice\", \"value\": \"3\" }).toHTML() +\n        new AuxBlock_1.default(\"br\").toHTML() +\n        new FormBlock_1.default(\"input\", \"x2\", \"\", { \"type\": \"button\", \"name\": \"xChoice\", \"value\": \"2\" }).toHTML() +\n        new AuxBlock_1.default(\"br\").toHTML() +\n        new FormBlock_1.default(\"input\", \"x1\", \"\", { \"type\": \"button\", \"name\": \"xChoice\", \"value\": \"1\" }).toHTML() +\n        new AuxBlock_1.default(\"br\").toHTML() +\n        new FormBlock_1.default(\"input\", \"x0\", \"\", { \"type\": \"button\", \"name\": \"xChoice\", \"value\": \"0\" }).toHTML() +\n        new AuxBlock_1.default(\"br\").toHTML() +\n        new FormBlock_1.default(\"input\", \"x-1\", \"\", { \"type\": \"button\", \"name\": \"xChoice\", \"value\": \"-1\" }).toHTML() +\n        new AuxBlock_1.default(\"br\").toHTML() +\n        new FormBlock_1.default(\"input\", \"x-2\", \"\", { \"type\": \"button\", \"name\": \"xChoice\", \"value\": \"-2\" }).toHTML() +\n        new AuxBlock_1.default(\"br\").toHTML() +\n        new FormBlock_1.default(\"input\", \"x-3\", \"\", { \"type\": \"button\", \"name\": \"xChoice\", \"value\": \"-3\" }).toHTML() +\n        new AuxBlock_1.default(\"br\").toHTML() +\n        new FormBlock_1.default(\"input\", \"x-4\", \"\", { \"type\": \"button\", \"name\": \"xChoice\", \"value\": \"-4\" }).toHTML() +\n        new AuxBlock_1.default(\"br\").toHTML() +\n        new FormBlock_1.default(\"input\", \"selectedX\", \"\", { \"type\": \"hidden\", \"value\": \"\", \"name\": \"selectedX\" }).toHTML() +\n        // Y\n        new FormBlock_1.default(\"span\", \"y-error\", \"\", { \"class\": \"error-message\" }).toHTML() +\n        new FormBlock_1.default(\"label\", \"\", \"Y\", {}).toHTML() +\n        new FormBlock_1.default(\"input\", \"y\", \"\", { \"type\": \"number\", \"name\": \"yChoice\", \"value\": \"y\" }).toHTML() +\n        new AuxBlock_1.default(\"br\").toHTML() +\n        // R\n        new AuxBlock_1.default(\"br\").toHTML() +\n        new FormBlock_1.default(\"input\", \"r1\", \"\", { \"type\": \"button\", \"name\": \"rChoice\", \"value\": \"1\" }).toHTML() +\n        new AuxBlock_1.default(\"br\").toHTML() +\n        new FormBlock_1.default(\"input\", \"r2\", \"\", { \"type\": \"button\", \"name\": \"rChoice\", \"value\": \"2\" }).toHTML() +\n        new AuxBlock_1.default(\"br\").toHTML() +\n        new FormBlock_1.default(\"input\", \"r3\", \"\", { \"type\": \"button\", \"name\": \"rChoice\", \"value\": \"3\" }).toHTML() +\n        new AuxBlock_1.default(\"br\").toHTML() +\n        new FormBlock_1.default(\"input\", \"r4\", \"\", { \"type\": \"button\", \"name\": \"rChoice\", \"value\": \"4\" }).toHTML() +\n        new AuxBlock_1.default(\"br\").toHTML() +\n        new FormBlock_1.default(\"input\", \"r5\", \"\", { \"type\": \"button\", \"name\": \"rChoice\", \"value\": \"5\" }).toHTML() +\n        new AuxBlock_1.default(\"br\").toHTML() +\n        new FormBlock_1.default(\"button\", \"form-submit\", \"Submit\", { \"type\": \"submit\" }).toHTML()),\n    new Block_1.default(\"div\", \"hit-results\", \"\")\n];\n\n\n//# sourceURL=webpack://web-lab-1.2/./src/model/main_page.ts?");

/***/ }),

/***/ "./src/utils/ButtonsListening.ts":
/*!***************************************!*\
  !*** ./src/utils/ButtonsListening.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.rButtonListening = exports.buttonsListening = void 0;\nfunction buttonsListening() {\n    const xButtons = document.querySelectorAll('input[name=\"xChoice\"]');\n    let selectedXButton = null;\n    xButtons.forEach(button => {\n        button.addEventListener('click', () => {\n            if (selectedXButton !== null) {\n                selectedXButton.classList.remove(\"active\");\n            }\n            // Здесь вставьте логику валидации для кнопок\n            selectedXButton = button;\n            button.classList.add(\"active\");\n        });\n    });\n}\nexports.buttonsListening = buttonsListening;\n// export function yTextListening() {\n//     const yText: HTMLInputElement | null= document.querySelector('input[name=\"yChoice\"]');\n//\n//     let selectedXButton: HTMLInputElement | null = null;\n//     xButtons.forEach(button => {\n//\n//         button.addEventListener('click', () => {\n//             if (selectedXButton !== null) {\n//                 selectedXButton.classList.remove(\"active\");\n//             }\n//             // Здесь вставьте логику валидации для кнопок\n//             selectedXButton = button;\n//             button.classList.add(\"active\");\n//         });\n//     });\n// }\nfunction rButtonListening() {\n    const rButtons = document.querySelectorAll('input[name=\"rChoice\"]');\n    let selectedRButton = null;\n    rButtons.forEach(button => {\n        button.addEventListener('click', () => {\n            if (selectedRButton !== null) {\n                selectedRButton.classList.remove(\"active\");\n            }\n            // Здесь вставьте логику валидации для кнопок\n            selectedRButton = button;\n            button.classList.add(\"active\");\n        });\n    });\n}\nexports.rButtonListening = rButtonListening;\n\n\n//# sourceURL=webpack://web-lab-1.2/./src/utils/ButtonsListening.ts?");

/***/ }),

/***/ "./src/utils/SelectionResults.ts":
/*!***************************************!*\
  !*** ./src/utils/SelectionResults.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getR = exports.getY = exports.getX = void 0;\nfunction getX() {\n    const xButtons = document.querySelectorAll('input[name=\"xChoice\"]');\n    for (let x of xButtons) {\n        if (x.classList.contains(\"active\")) {\n            if (x.value) {\n                return parseFloat(x.value);\n            }\n        }\n    }\n}\nexports.getX = getX;\nfunction getY() {\n    const yText = document.querySelector('input[name=\"yChoice\"]');\n    if (yText !== null) {\n        return parseFloat(yText.value);\n    }\n}\nexports.getY = getY;\nfunction getR() {\n    const rButtons = document.querySelectorAll('input[name=\"rChoice\"]');\n    for (let r of rButtons) {\n        if (r.classList.contains(\"active\")) {\n            if (r.value) {\n                return parseFloat(r.value);\n            }\n        }\n    }\n}\nexports.getR = getR;\n\n\n//# sourceURL=webpack://web-lab-1.2/./src/utils/SelectionResults.ts?");

/***/ }),

/***/ "./src/utils/Validation.ts":
/*!*********************************!*\
  !*** ./src/utils/Validation.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction validation() {\n    const xInputs = document.querySelectorAll('input[name=\"xChoice\"]');\n    const yInput = document.querySelector('input[name=\"yChoice\"]');\n    const rInputs = document.querySelectorAll('input[name=\"rChoice\"]');\n    const xError = document.querySelector('#x-error');\n    const yError = document.querySelector('#y-error');\n    const rError = document.querySelector('#r-error');\n    var isOk = true;\n    var xChecking = false;\n    xInputs.forEach((element) => {\n        if (element.classList.contains(\"active\")) {\n            if (xError !== null) {\n                xChecking = true;\n                xError.textContent = \"\";\n            }\n        }\n    });\n    if (!xChecking) {\n        if (xError !== null) {\n            isOk = false;\n            xError.textContent = \"Значение поля X должно быть выбрано\";\n        }\n    }\n    if (yInput != null) {\n        const y = parseFloat(yInput.value);\n        if (y == null || y <= -5 || y >= 3) {\n            if (yError != null) {\n                yError.textContent = \"-5 < Y < 3\";\n                isOk = false;\n            }\n        }\n        else {\n            if (yError != null) {\n                yError.textContent = \"\";\n            }\n        }\n    }\n    var rChecking = false;\n    rInputs.forEach((element) => {\n        if (element.classList.contains(\"active\")) {\n            if (rError !== null) {\n                rChecking = true;\n                rError.textContent = \"\";\n            }\n        }\n    });\n    if (!rChecking) {\n        if (rError !== null) {\n            isOk = false;\n            rError.textContent = \"Значение поля R должно быть выбрано\";\n        }\n    }\n    return isOk;\n}\nexports[\"default\"] = validation;\n\n\n//# sourceURL=webpack://web-lab-1.2/./src/utils/Validation.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;