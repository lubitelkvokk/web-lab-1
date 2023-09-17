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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Validation_1 = __importDefault(__webpack_require__(/*! ./utils/Validation */ \"./src/utils/Validation.ts\"));\nconst ButtonsListening_1 = __webpack_require__(/*! ./specific_functions/ButtonsListening */ \"./src/specific_functions/ButtonsListening.ts\");\nconst SelectionResults_1 = __webpack_require__(/*! ./specific_functions/SelectionResults */ \"./src/specific_functions/SelectionResults.ts\");\nconst tableInfo_1 = __webpack_require__(/*! ./specific_functions/tableInfo */ \"./src/specific_functions/tableInfo.ts\");\n//deprecated\n// model.forEach(block => {\n//     // @ts-ignore\n//     return document.querySelector(\".main_page\").insertAdjacentHTML(\"beforeend\", block.toHTML())\n// })\n// Получение данных о всей таблице\n//Прослушивание кнопки X\n(0, ButtonsListening_1.xButtonsListening)();\n//Прослушивание кнопки R\n(0, ButtonsListening_1.rButtonListening)();\ndocument.querySelector(\"#form-submit\").addEventListener(\"click\", function () {\n    var _a, _b;\n    let validation_result = (0, Validation_1.default)((0, SelectionResults_1.getX)(), (0, SelectionResults_1.getY)(), (0, SelectionResults_1.getR)(), (0, SelectionResults_1.getXErrorField)(), (0, SelectionResults_1.getYErrorField)(), (0, SelectionResults_1.getRErrorField)());\n    if (validation_result) {\n        fetch(`https://se.ifmo.ru/~s367403/index.php?x=${(_a = (0, SelectionResults_1.getX)()) === null || _a === void 0 ? void 0 : _a.value}&y=${(0, SelectionResults_1.getY)().value}&r=${(_b = (0, SelectionResults_1.getR)()) === null || _b === void 0 ? void 0 : _b.value}`)\n            .then(response => response.text())\n            .then(data => {\n            if ((0, tableInfo_1.tableIsEmpty)()) {\n                updateTable(data);\n            }\n            else {\n                addRowToTable(data);\n            }\n        })\n            .catch(reason => {\n            console.error(reason);\n        });\n    }\n});\nfunction updateTable(html) {\n    document.querySelector('#hit-results').innerHTML += \"<tr>\\n\" +\n        \"                                                                <th>X</th>\\n\" +\n        \"                                                                <th>Y</th>\\n\" +\n        \"                                                                <th>R</th>\\n\" +\n        \"                                                                <th>Current time</th>\\n\" +\n        \"                                                                <th>Script runtime</th>\\n\" +\n        \"                                                                <th>Hit result</th>\\n\" +\n        \"                                                            </tr>\";\n    document.querySelector(\"#hit-results\").innerHTML += html;\n}\nfunction addRowToTable(html) {\n    document.querySelector(\"#hit-results\").innerHTML += html;\n}\n\n\n//# sourceURL=webpack://web-lab-1.2/./src/index.ts?");

/***/ }),

/***/ "./src/specific_functions/ButtonsListening.ts":
/*!****************************************************!*\
  !*** ./src/specific_functions/ButtonsListening.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.rButtonListening = exports.xButtonsListening = void 0;\nfunction xButtonsListening() {\n    const xButtons = document.querySelectorAll('input[name=\"xChoice\"]');\n    let selectedXButton = null;\n    xButtons.forEach(button => {\n        button.addEventListener('click', () => {\n            if (selectedXButton !== null) {\n                selectedXButton.classList.remove(\"active\");\n            }\n            // Здесь вставьте логику валидации для кнопок\n            selectedXButton = button;\n            button.classList.add(\"active\");\n        });\n    });\n}\nexports.xButtonsListening = xButtonsListening;\n// export function yTextListening() {\n//     const yText: HTMLInputElement | null= document.querySelector('input[name=\"yChoice\"]');\n//\n//     let selectedXButton: HTMLInputElement | null = null;\n//     xButtons.forEach(button => {\n//\n//         button.addEventListener('click', () => {\n//             if (selectedXButton !== null) {\n//                 selectedXButton.classList.remove(\"active\");\n//             }\n//             // Здесь вставьте логику валидации для кнопок\n//             selectedXButton = button;\n//             button.classList.add(\"active\");\n//         });\n//     });\n// }\nfunction rButtonListening() {\n    const rButtons = document.querySelectorAll('input[name=\"rChoice\"]');\n    let selectedRButton = null;\n    rButtons.forEach(button => {\n        button.addEventListener('click', () => {\n            if (selectedRButton !== null) {\n                selectedRButton.classList.remove(\"active\");\n            }\n            // Здесь вставьте логику валидации для кнопок\n            selectedRButton = button;\n            button.classList.add(\"active\");\n        });\n    });\n}\nexports.rButtonListening = rButtonListening;\n\n\n//# sourceURL=webpack://web-lab-1.2/./src/specific_functions/ButtonsListening.ts?");

/***/ }),

/***/ "./src/specific_functions/SelectionResults.ts":
/*!****************************************************!*\
  !*** ./src/specific_functions/SelectionResults.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getRErrorField = exports.getYErrorField = exports.getXErrorField = exports.getValue = exports.getR = exports.getY = exports.getX = void 0;\nfunction getX() {\n    const xButtons = document.querySelectorAll('input[name=\"xChoice\"]');\n    for (let x of xButtons) {\n        if (x.classList.contains(\"active\")) {\n            if (x.value) {\n                return x;\n            }\n        }\n    }\n    return document.createElement(\"input\");\n}\nexports.getX = getX;\nfunction getY() {\n    const y = document.querySelector('input[name=\"yChoice\"]');\n    return y !== null ? y : document.createElement(\"input\");\n}\nexports.getY = getY;\nfunction getR() {\n    const rButtons = document.querySelectorAll('input[name=\"rChoice\"]');\n    for (let r of rButtons) {\n        if (r.classList.contains(\"active\")) {\n            if (r.value) {\n                return r;\n            }\n        }\n    }\n    return document.createElement(\"input\");\n}\nexports.getR = getR;\nfunction getValue(element) {\n    return element.value;\n}\nexports.getValue = getValue;\nfunction getXErrorField() {\n    return document.querySelector(\"#x-error\");\n}\nexports.getXErrorField = getXErrorField;\nfunction getYErrorField() {\n    return document.querySelector(\"#y-error\");\n}\nexports.getYErrorField = getYErrorField;\nfunction getRErrorField() {\n    return document.querySelector(\"#r-error\");\n}\nexports.getRErrorField = getRErrorField;\n\n\n//# sourceURL=webpack://web-lab-1.2/./src/specific_functions/SelectionResults.ts?");

/***/ }),

/***/ "./src/specific_functions/tableInfo.ts":
/*!*********************************************!*\
  !*** ./src/specific_functions/tableInfo.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.tableIsEmpty = void 0;\nfunction tableIsEmpty() {\n    return document.querySelector(\"#hit-results\").innerHTML.trim() == \"\";\n}\nexports.tableIsEmpty = tableIsEmpty;\n\n\n//# sourceURL=webpack://web-lab-1.2/./src/specific_functions/tableInfo.ts?");

/***/ }),

/***/ "./src/utils/Validation.ts":
/*!*********************************!*\
  !*** ./src/utils/Validation.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction validation(x, y, r, xError, yError, rError) {\n    let isVaild = true;\n    if (!xError || !yError || !rError) {\n        console.error(\"Some fields for errors not exists or access\");\n        isVaild = false;\n    }\n    // Проверка X\n    if ((x === null || x === void 0 ? void 0 : x.value) == \"\") {\n        xError.textContent = \"Значение поля X должно быть выбрано\";\n        isVaild;\n    }\n    else {\n        xError.textContent = \"\";\n    }\n    // Проверка y\n    if (y.value == \"\" || y == null) {\n        yError.textContent = \"Значение поля Y должно быть выбрано\";\n        isVaild = false;\n    }\n    else {\n        let y_number = parseFloat(y.value);\n        if (y_number <= -5 || y_number >= 3) {\n            yError.textContent = \"-5 < Y < 3\";\n            isVaild = false;\n        }\n        else {\n            yError.textContent = \"\";\n        }\n    }\n    // Проверка R\n    if ((r === null || r === void 0 ? void 0 : r.value) == \"\") {\n        rError.textContent = \"Значение поля R должно быть выбрано\";\n        isVaild = false;\n    }\n    else {\n        rError.textContent = \"\";\n    }\n    return isVaild;\n}\nexports[\"default\"] = validation;\n\n\n//# sourceURL=webpack://web-lab-1.2/./src/utils/Validation.ts?");

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