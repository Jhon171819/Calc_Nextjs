exports.id = 273;
exports.ids = [273];
exports.modules = {

/***/ 273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Show: () => (/* binding */ Show)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _show_modules_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(648);
/* harmony import */ var _show_modules_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_show_modules_css__WEBPACK_IMPORTED_MODULE_2__);



function Show(props) {
    // Exemplo de solicitação POST usando o fetch
    const dataToSend = {
        data: "Hello, API!"
    };
    async function post() {
        fetch("/pages/api/teste", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataToSend)
        }).then((response)=>response.json()).then((data)=>{
            console.log(data);
        }).catch((error)=>{
            console.log("TESTE");
        //   console.error('Erro:', error);
        });
    }
    async function get() {
        fetch("api/teste", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response)=>response.json());
    }
    function divisao() {
        setResultado(valor1 / valor2);
    }
    function mult() {
        setResultado(valor1 * valor2);
    }
    function subt() {
        setResultado(valor1 - valor2);
    }
    function somar() {
        setResultado(valor1 + valor2);
    }
    const [resultado, setResultado] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [valor1, setValor1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [valor2, setValor2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "resultado",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: resultado
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "number",
                        onChange: (e)=>setValor1(Number(e.target.value))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "number",
                        onChange: (e)=>setValor2(Number(e.target.value))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>somar(),
                        children: "Somar"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>subt(),
                        children: "Subtrair"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>mult(),
                        children: "Multiplicar"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>divisao(),
                        children: "Dividir"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>get(),
                        children: "get"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>post(),
                        children: "post"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 648:
/***/ (() => {



/***/ })

};
;