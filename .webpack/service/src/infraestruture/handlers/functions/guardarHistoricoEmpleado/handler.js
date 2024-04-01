/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/application/controllers/historico-controller.ts":
/*!*************************************************************!*\
  !*** ./src/application/controllers/historico-controller.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var src_domain_usecase_historico_usecase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/domain/usecase/historico-usecase */ \"./src/domain/usecase/historico-usecase.ts\");\n/* harmony import */ var _helpers_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/response */ \"./src/application/helpers/response.ts\");\n/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http-status-codes */ \"http-status-codes\");\n/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\nclass HistoricoController {\r\n    constructor() {\r\n        this.getHistoricoEmpleado = async (empleadoId) => {\r\n            let response;\r\n            try {\r\n                const result = await this.historicoUseCase.getHistoricoEmpleado(empleadoId);\r\n                response = (0,_helpers_response__WEBPACK_IMPORTED_MODULE_1__.responseSuccess)({\r\n                    data: result\r\n                }, http_status_codes__WEBPACK_IMPORTED_MODULE_2__.StatusCodes.OK);\r\n            }\r\n            catch (error) {\r\n                response = (0,_helpers_response__WEBPACK_IMPORTED_MODULE_1__.responseFail)(error);\r\n            }\r\n            return response;\r\n        };\r\n        this.saveHistoricoEmpleado = async (empleadoID, sueldos) => {\r\n            let response;\r\n            try {\r\n                await this.historicoUseCase.saveHistoricoEmpleado(empleadoID, sueldos);\r\n                response = (0,_helpers_response__WEBPACK_IMPORTED_MODULE_1__.responseSuccess)({ message: 'Historico almacenado' }, http_status_codes__WEBPACK_IMPORTED_MODULE_2__.StatusCodes.OK);\r\n            }\r\n            catch (error) {\r\n                response = (0,_helpers_response__WEBPACK_IMPORTED_MODULE_1__.responseFail)(error);\r\n            }\r\n            return response;\r\n        };\r\n        this.historicoUseCase = new src_domain_usecase_historico_usecase__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HistoricoController);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwbGljYXRpb24vY29udHJvbGxlcnMvaGlzdG9yaWNvLWNvbnRyb2xsZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUlBO0FBSUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBaENBO0FBQ0E7QUFrQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FrLWhpc3Rvcmljby1lbXBsZWFkb3MtYXBpLy4vc3JjL2FwcGxpY2F0aW9uL2NvbnRyb2xsZXJzL2hpc3Rvcmljby1jb250cm9sbGVyLnRzPzE4OTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhpc3Rvcmljb1VzZUNhc2UgZnJvbSBcInNyYy9kb21haW4vdXNlY2FzZS9oaXN0b3JpY28tdXNlY2FzZVwiO1xuaW1wb3J0IHsgcmVzcG9uc2VGYWlsLCByZXNwb25zZVN1Y2Nlc3MgfSBmcm9tIFwiLi4vaGVscGVycy9yZXNwb25zZVwiO1xuaW1wb3J0IHsgSUhpc3Rvcmljb0FwaSwgSVJlc3BvbnNlQXBpLCBJSGlzdG9yaWNvTWV0aG9kIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvcmVzcG9uc2UtY29udHJvbGxlci1pbnRlcmZhY2VcIlxuaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcbmltcG9ydCB7IElIaXN0b3JpY29TdWVsZG9zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaGlzdG9yaWNvLWludGVyZmFjZVwiO1xuXG5jbGFzcyBIaXN0b3JpY29Db250cm9sbGVyIGltcGxlbWVudHMgSUhpc3Rvcmljb0FwaSB7XG4gICAgcHJpdmF0ZSBoaXN0b3JpY29Vc2VDYXNlIDogSUhpc3Rvcmljb01ldGhvZDtcblxuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5oaXN0b3JpY29Vc2VDYXNlID0gbmV3IEhpc3Rvcmljb1VzZUNhc2UoKTtcbiAgICB9XG4gICBcbiAgICBnZXRIaXN0b3JpY29FbXBsZWFkbyA9IGFzeW5jIChlbXBsZWFkb0lkOiBudW1iZXIpID0+IHtcblxuICAgICAgICBsZXQgcmVzcG9uc2U6IElSZXNwb25zZUFwaTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5oaXN0b3JpY29Vc2VDYXNlLmdldEhpc3Rvcmljb0VtcGxlYWRvKGVtcGxlYWRvSWQpO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXNwb25zZVN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgIGRhdGE6cmVzdWx0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgU3RhdHVzQ29kZXMuT0spXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlc3BvbnNlRmFpbChlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgXG4gICAgfVxuXG4gICAgc2F2ZUhpc3Rvcmljb0VtcGxlYWRvID0gYXN5bmMgKGVtcGxlYWRvSUQ6bnVtYmVyLHN1ZWxkb3M6SUhpc3Rvcmljb1N1ZWxkb3MpID0+e1xuICAgICAgICBsZXQgcmVzcG9uc2U6IElSZXNwb25zZUFwaTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5oaXN0b3JpY29Vc2VDYXNlLnNhdmVIaXN0b3JpY29FbXBsZWFkbyhlbXBsZWFkb0lELHN1ZWxkb3MpO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXNwb25zZVN1Y2Nlc3Moe21lc3NhZ2U6J0hpc3RvcmljbyBhbG1hY2VuYWRvJ30sU3RhdHVzQ29kZXMuT0spXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlc3BvbnNlRmFpbChlcnJvcilcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBIaXN0b3JpY29Db250cm9sbGVyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/application/controllers/historico-controller.ts\n");

/***/ }),

/***/ "./src/application/exceptions/http-error.ts":
/*!**************************************************!*\
  !*** ./src/application/exceptions/http-error.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HttpError)\n/* harmony export */ });\nclass HttpError extends Error {\r\n    constructor(message, statusCode) {\r\n        super(message);\r\n        this._statusCode = statusCode;\r\n    }\r\n    get statusCode() {\r\n        return this._statusCode;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwbGljYXRpb24vZXhjZXB0aW9ucy9odHRwLWVycm9yLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hay1oaXN0b3JpY28tZW1wbGVhZG9zLWFwaS8uL3NyYy9hcHBsaWNhdGlvbi9leGNlcHRpb25zL2h0dHAtZXJyb3IudHM/NjU2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cbiAgICBwcml2YXRlIF9zdGF0dXNDb2RlOiBTdGF0dXNDb2RlcztcblxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3RhdHVzQ29kZTogU3RhdHVzQ29kZXMpe1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5fc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG4gICAgfVxuXG4gICAgZ2V0IHN0YXR1c0NvZGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXR1c0NvZGU7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/application/exceptions/http-error.ts\n");

/***/ }),

/***/ "./src/application/helpers/response.ts":
/*!*********************************************!*\
  !*** ./src/application/helpers/response.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"responseSuccess\": () => (/* binding */ responseSuccess),\n/* harmony export */   \"responseFail\": () => (/* binding */ responseFail)\n/* harmony export */ });\n/* harmony import */ var _exceptions_http_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exceptions/http-error */ \"./src/application/exceptions/http-error.ts\");\n\r\nconst responseSuccess = (body, statusCode = 200) => {\r\n    return {\r\n        success: true,\r\n        data: body.data,\r\n        message: body.message,\r\n        statusCode\r\n    };\r\n};\r\nconst responseFail = (error) => {\r\n    if (error instanceof _exceptions_http_error__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\r\n        console.log(\"statuscodenonulo\", error);\r\n        return structureFail({ message: error.message }, error.statusCode);\r\n    }\r\n    else if (error && error.message != null) {\r\n        console.log(\"statuscodenulo\", error);\r\n        return structureFail({ message: \"Error inesperado\" });\r\n    }\r\n    else {\r\n        console.log(\"errornulo\", error);\r\n        return structureFail({ message: \"Error inesperado\" });\r\n    }\r\n};\r\nconst structureFail = (body, statusCode = 500) => {\r\n    return {\r\n        success: false,\r\n        data: body.data,\r\n        message: body.message,\r\n        statusCode\r\n    };\r\n};\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwbGljYXRpb24vaGVscGVycy9yZXNwb25zZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWstaGlzdG9yaWNvLWVtcGxlYWRvcy1hcGkvLi9zcmMvYXBwbGljYXRpb24vaGVscGVycy9yZXNwb25zZS50cz84YTY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5pbXBvcnQgeyBJUmVzcG9uc2VBcGksIElSZXNwb25zZUJvZHkgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9yZXNwb25zZS1jb250cm9sbGVyLWludGVyZmFjZVwiO1xuaW1wb3J0IEh0dHBFcnJvciBmcm9tIFwiLi4vZXhjZXB0aW9ucy9odHRwLWVycm9yXCI7XG5cbmNvbnN0IHJlc3BvbnNlU3VjY2VzcyA9ICggYm9keTpJUmVzcG9uc2VCb2R5LCBzdGF0dXNDb2RlOiBTdGF0dXNDb2RlcyA9IDIwMCk6SVJlc3BvbnNlQXBpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICBkYXRhOiBib2R5LmRhdGEsXG4gICAgICAgIG1lc3NhZ2U6IGJvZHkubWVzc2FnZSxcbiAgICAgICAgc3RhdHVzQ29kZVxuICAgIH07XG59XG5cbmNvbnN0IHJlc3BvbnNlRmFpbCA9IChlcnJvcjogRXJyb3IpID0+IHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXR1c2NvZGVub251bG9cIiwgZXJyb3IpXG4gICAgICAgIHJldHVybiBzdHJ1Y3R1cmVGYWlsKHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9LCBlcnJvci5zdGF0dXNDb2RlKVxuICAgIH0gZWxzZSBpZiAoZXJyb3IgJiYgZXJyb3IubWVzc2FnZSAhPSBudWxsKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzdGF0dXNjb2RlbnVsb1wiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIHN0cnVjdHVyZUZhaWwoeyBtZXNzYWdlOiBcIkVycm9yIGluZXNwZXJhZG9cIiB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9ybnVsb1wiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIHN0cnVjdHVyZUZhaWwoeyBtZXNzYWdlOiBcIkVycm9yIGluZXNwZXJhZG9cIiB9KTtcbiAgICB9XG59XG5cbmNvbnN0IHN0cnVjdHVyZUZhaWwgPSAoYm9keTpJUmVzcG9uc2VCb2R5LCBzdGF0dXNDb2RlOiBTdGF0dXNDb2RlcyA9IDUwMCk6IElSZXNwb25zZUFwaSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGRhdGE6IGJvZHkuZGF0YSxcbiAgICAgICAgbWVzc2FnZTogYm9keS5tZXNzYWdlLFxuICAgICAgICBzdGF0dXNDb2RlXG4gICAgfTtcbn1cblxuZXhwb3J0IHtcbiAgICByZXNwb25zZVN1Y2Nlc3MsXG4gICAgcmVzcG9uc2VGYWlsXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/application/helpers/response.ts\n");

/***/ }),

/***/ "./src/application/model-adapters/historico-adapter.ts":
/*!*************************************************************!*\
  !*** ./src/application/model-adapters/historico-adapter.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var src_infraestruture_repositories_historico_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/infraestruture/repositories/historico-query */ \"./src/infraestruture/repositories/historico-query.ts\");\n\r\nclass HistoricoAdapter {\r\n    constructor() {\r\n        this.historicoQuery = new src_infraestruture_repositories_historico_query__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    }\r\n    async getHistoricoEmpleado(empleadoId) {\r\n        const query = await this.historicoQuery.getHistoricoEmpleado(empleadoId);\r\n        if (!query.Item) {\r\n            return null;\r\n        }\r\n        return query.Item.historico.L.map((item => {\r\n            const { fechaActualizacion, sueldoAnterior, sueldoNuevo } = item.M;\r\n            return {\r\n                fechaActualizacion: new Date(fechaActualizacion.S),\r\n                sueldoAnterior: +sueldoAnterior.N,\r\n                sueldoNuevo: +sueldoNuevo.N\r\n            };\r\n        }));\r\n    }\r\n    async saveHistoricoEmpleado(empleadoId, sueldos) {\r\n        await this.historicoQuery.saveHistoricoEmpleado(empleadoId, sueldos);\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HistoricoAdapter);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwbGljYXRpb24vbW9kZWwtYWRhcHRlcnMvaGlzdG9yaWNvLWFkYXB0ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTtBQUtBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hay1oaXN0b3JpY28tZW1wbGVhZG9zLWFwaS8uL3NyYy9hcHBsaWNhdGlvbi9tb2RlbC1hZGFwdGVycy9oaXN0b3JpY28tYWRhcHRlci50cz9iMDlmIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEhpc3Rvcmljb1F1ZXJ5IGZyb20gJ3NyYy9pbmZyYWVzdHJ1dHVyZS9yZXBvc2l0b3JpZXMvaGlzdG9yaWNvLXF1ZXJ5JztcbmltcG9ydCB7IElIaXN0b3JpY29NZXRob2QgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3Jlc3BvbnNlLWNvbnRyb2xsZXItaW50ZXJmYWNlJztcbmltcG9ydCB7IElIaXN0b3JpY29TdWVsZG9zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9oaXN0b3JpY28taW50ZXJmYWNlJztcbmltcG9ydCB7IElIaXN0b3JpY29RdWVyeSB9IGZyb20gJ3NyYy9pbmZyYWVzdHJ1dHVyZS9pbnRlcmZhY2VzL3Jlc3BvbnNlLXF1ZXJ5LWludGVyZmFjZSc7XG5cbmNsYXNzIEhpc3Rvcmljb0FkYXB0ZXIgaW1wbGVtZW50cyBJSGlzdG9yaWNvTWV0aG9kIHtcblxuICAgIHByaXZhdGUgaGlzdG9yaWNvUXVlcnkgOiBJSGlzdG9yaWNvUXVlcnk7XG5cbiAgICAvL0xvIHRyYWplIGNvbW8gbWV0b2RvaGlzdG9yaWNvIHkgbHVlZ28gbG8gaW5zdGFuY2lvIGNvbW8gbnVldm8gaGlzdG9jaW9xdWVyeVxuICAgIFxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuaGlzdG9yaWNvUXVlcnkgPSBuZXcgSGlzdG9yaWNvUXVlcnkoKVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRIaXN0b3JpY29FbXBsZWFkbyhlbXBsZWFkb0lkOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBhd2FpdCB0aGlzLmhpc3Rvcmljb1F1ZXJ5LmdldEhpc3Rvcmljb0VtcGxlYWRvKGVtcGxlYWRvSWQpO1xuICAgICAgICBpZiAoIXF1ZXJ5Lkl0ZW0pe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcXVlcnkuSXRlbS5oaXN0b3JpY28uTC5tYXAoKGl0ZW09PntcbiAgICAgICAgICAgIGNvbnN0IHtmZWNoYUFjdHVhbGl6YWNpb24sc3VlbGRvQW50ZXJpb3Isc3VlbGRvTnVldm99ID0gaXRlbS5NO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmZWNoYUFjdHVhbGl6YWNpb24gOiBuZXcgRGF0ZSAoZmVjaGFBY3R1YWxpemFjaW9uLlMpLFxuICAgICAgICAgICAgICAgIHN1ZWxkb0FudGVyaW9yOitzdWVsZG9BbnRlcmlvci5OLFxuICAgICAgICAgICAgICAgIHN1ZWxkb051ZXZvOitzdWVsZG9OdWV2by5OXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2F2ZUhpc3Rvcmljb0VtcGxlYWRvKGVtcGxlYWRvSWQ6IG51bWJlciwgc3VlbGRvczogSUhpc3Rvcmljb1N1ZWxkb3MpIDogUHJvbWlzZTx2b2lkPntcbiAgICAgICAgYXdhaXQgdGhpcy5oaXN0b3JpY29RdWVyeS5zYXZlSGlzdG9yaWNvRW1wbGVhZG8oZW1wbGVhZG9JZCxzdWVsZG9zKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGlzdG9yaWNvQWRhcHRlciJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/application/model-adapters/historico-adapter.ts\n");

/***/ }),

/***/ "./src/domain/usecase/historico-usecase.ts":
/*!*************************************************!*\
  !*** ./src/domain/usecase/historico-usecase.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HistoricoUseCase)\n/* harmony export */ });\n/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status-codes */ \"http-status-codes\");\n/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_application_exceptions_http_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/application/exceptions/http-error */ \"./src/application/exceptions/http-error.ts\");\n/* harmony import */ var src_application_model_adapters_historico_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/application/model-adapters/historico-adapter */ \"./src/application/model-adapters/historico-adapter.ts\");\n\r\n\r\n\r\nclass HistoricoUseCase {\r\n    constructor() {\r\n        this.historicoAdapter = new src_application_model_adapters_historico_adapter__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n    }\r\n    async getHistoricoEmpleado(empleadoId) {\r\n        const result = await this.historicoAdapter.getHistoricoEmpleado(empleadoId);\r\n        ;\r\n        if (result == null || (result.length == 0))\r\n            throw new src_application_exceptions_http_error__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"El historico del mensaje no existe\", http_status_codes__WEBPACK_IMPORTED_MODULE_0__.StatusCodes.NOT_FOUND);\r\n        return this.historicoAdapter.getHistoricoEmpleado(empleadoId);\r\n    }\r\n    async saveHistoricoEmpleado(empleadoId, sueldos) {\r\n        await this.historicoAdapter.saveHistoricoEmpleado(empleadoId, sueldos);\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZG9tYWluL3VzZWNhc2UvaGlzdG9yaWNvLXVzZWNhc2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hay1oaXN0b3JpY28tZW1wbGVhZG9zLWFwaS8uL3NyYy9kb21haW4vdXNlY2FzZS9oaXN0b3JpY28tdXNlY2FzZS50cz9lMTZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5pbXBvcnQgSHR0cEVycm9yIGZyb20gXCJzcmMvYXBwbGljYXRpb24vZXhjZXB0aW9ucy9odHRwLWVycm9yXCI7XG5pbXBvcnQgeyBJSGlzdG9yaWNvU3VlbGRvcyB9IGZyb20gXCJzcmMvYXBwbGljYXRpb24vaW50ZXJmYWNlcy9oaXN0b3JpY28taW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJSGlzdG9yaWNvTWV0aG9kIH0gZnJvbSBcInNyYy9hcHBsaWNhdGlvbi9pbnRlcmZhY2VzL3Jlc3BvbnNlLWNvbnRyb2xsZXItaW50ZXJmYWNlXCI7XG5pbXBvcnQgSGlzdG9yaWNvQWRhcHRlciBmcm9tIFwic3JjL2FwcGxpY2F0aW9uL21vZGVsLWFkYXB0ZXJzL2hpc3Rvcmljby1hZGFwdGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhpc3Rvcmljb1VzZUNhc2UgaW1wbGVtZW50cyBJSGlzdG9yaWNvTWV0aG9kIHtcblxuICAgIHByaXZhdGUgaGlzdG9yaWNvQWRhcHRlciA6IElIaXN0b3JpY29NZXRob2Q7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmhpc3Rvcmljb0FkYXB0ZXIgPSBuZXcgSGlzdG9yaWNvQWRhcHRlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRIaXN0b3JpY29FbXBsZWFkbyAoZW1wbGVhZG9JZDogbnVtYmVyKXtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmhpc3Rvcmljb0FkYXB0ZXIuZ2V0SGlzdG9yaWNvRW1wbGVhZG8oZW1wbGVhZG9JZCk7O1xuXG4gICAgICAgIGlmKHJlc3VsdCA9PSBudWxsIHx8ICggcmVzdWx0Lmxlbmd0aCA9PSAwKSlcbiAgICAgICAgICAgIHRocm93IG5ldyBIdHRwRXJyb3IoXCJFbCBoaXN0b3JpY28gZGVsIG1lbnNhamUgbm8gZXhpc3RlXCIsU3RhdHVzQ29kZXMuTk9UX0ZPVU5EKVxuXG4gICAgICAgIHJldHVybiB0aGlzLmhpc3Rvcmljb0FkYXB0ZXIuZ2V0SGlzdG9yaWNvRW1wbGVhZG8oZW1wbGVhZG9JZCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2F2ZUhpc3Rvcmljb0VtcGxlYWRvKGVtcGxlYWRvSWQ6IG51bWJlciwgc3VlbGRvczogSUhpc3Rvcmljb1N1ZWxkb3MpIDogUHJvbWlzZTx2b2lkPntcbiAgICAgICAgYXdhaXQgdGhpcy5oaXN0b3JpY29BZGFwdGVyLnNhdmVIaXN0b3JpY29FbXBsZWFkbyhlbXBsZWFkb0lkLHN1ZWxkb3MpO1xuICAgIH1cblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/domain/usecase/historico-usecase.ts\n");

/***/ }),

/***/ "./src/infraestruture/handlers/functions/guardarHistoricoEmpleado/handler.ts":
/*!***********************************************************************************!*\
  !*** ./src/infraestruture/handlers/functions/guardarHistoricoEmpleado/handler.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var _libs_apiGateway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @libs/apiGateway */ \"./src/infraestruture/handlers/libs/apiGateway.ts\");\n/* harmony import */ var _libs_lambda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/lambda */ \"./src/infraestruture/handlers/libs/lambda.ts\");\n/* harmony import */ var src_application_controllers_historico_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/application/controllers/historico-controller */ \"./src/application/controllers/historico-controller.ts\");\n\r\n\r\n\r\nconst historicoController = new src_application_controllers_historico_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nconst guardarHistoricoEmpleado = async (event) => {\r\n    const sueldos = {\r\n        sueldoAnterior: event.body.sueldoAnterior,\r\n        sueldoNuevo: event.body.sueldoNuevo,\r\n    };\r\n    const empleadoID = +event.pathParameters.empleadoId;\r\n    const response = await historicoController.saveHistoricoEmpleado(empleadoID, sueldos);\r\n    return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_0__.formatJSONResponse)(response.statusCode, response);\r\n};\r\nconst main = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_1__.middyfy)(guardarHistoricoEmpleado);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5mcmFlc3RydXR1cmUvaGFuZGxlcnMvZnVuY3Rpb25zL2d1YXJkYXJIaXN0b3JpY29FbXBsZWFkby9oYW5kbGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWstaGlzdG9yaWNvLWVtcGxlYWRvcy1hcGkvLi9zcmMvaW5mcmFlc3RydXR1cmUvaGFuZGxlcnMvZnVuY3Rpb25zL2d1YXJkYXJIaXN0b3JpY29FbXBsZWFkby9oYW5kbGVyLnRzP2Q3ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNjaGVtYSBmcm9tIFwiQGZ1bmN0aW9ucy9ndWFyZGFySGlzdG9yaWNvRW1wbGVhZG8vc2NoZW1hXCI7XHJcbmltcG9ydCB7IFZhbGlkYXRlZEV2ZW50QVBJR2F0ZXdheVByb3h5RXZlbnQsIGZvcm1hdEpTT05SZXNwb25zZSB9IGZyb20gXCJAbGlicy9hcGlHYXRld2F5XCI7XHJcbmltcG9ydCB7IG1pZGR5ZnkgfSBmcm9tIFwiQGxpYnMvbGFtYmRhXCI7XHJcbmltcG9ydCBIaXN0b3JpY29Db250cm9sbGVyIGZyb20gXCJzcmMvYXBwbGljYXRpb24vY29udHJvbGxlcnMvaGlzdG9yaWNvLWNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgSVJlc3BvbnNlQXBpIH0gZnJvbSBcInNyYy9hcHBsaWNhdGlvbi9pbnRlcmZhY2VzL3Jlc3BvbnNlLWNvbnRyb2xsZXItaW50ZXJmYWNlXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IGhpc3Rvcmljb0NvbnRyb2xsZXIgPSBuZXcgSGlzdG9yaWNvQ29udHJvbGxlcigpO1xyXG5cclxuY29uc3QgZ3VhcmRhckhpc3Rvcmljb0VtcGxlYWRvIDogIFZhbGlkYXRlZEV2ZW50QVBJR2F0ZXdheVByb3h5RXZlbnQ8dHlwZW9mIHNjaGVtYT4gPSBhc3luYyAoZXZlbnQpID0+e1xyXG5cclxuICAgIGNvbnN0IHN1ZWxkb3MgPSB7XHJcbiAgICAgICAgc3VlbGRvQW50ZXJpb3I6IGV2ZW50LmJvZHkuc3VlbGRvQW50ZXJpb3IsXHJcbiAgICAgICAgc3VlbGRvTnVldm8gOiBldmVudC5ib2R5LnN1ZWxkb051ZXZvLFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVtcGxlYWRvSUQgPSArZXZlbnQucGF0aFBhcmFtZXRlcnMuZW1wbGVhZG9JZDtcclxuICAgIGNvbnN0IHJlc3BvbnNlIDpJUmVzcG9uc2VBcGkgPSBhd2FpdCBoaXN0b3JpY29Db250cm9sbGVyLnNhdmVIaXN0b3JpY29FbXBsZWFkbyhlbXBsZWFkb0lELHN1ZWxkb3MpO1xyXG4gICAgcmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZShyZXNwb25zZS5zdGF0dXNDb2RlLHJlc3BvbnNlKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBtYWluID0gbWlkZHlmeShndWFyZGFySGlzdG9yaWNvRW1wbGVhZG8pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/infraestruture/handlers/functions/guardarHistoricoEmpleado/handler.ts\n");

/***/ }),

/***/ "./src/infraestruture/handlers/libs/apiGateway.ts":
/*!********************************************************!*\
  !*** ./src/infraestruture/handlers/libs/apiGateway.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatJSONResponse\": () => (/* binding */ formatJSONResponse)\n/* harmony export */ });\nconst formatJSONResponse = (statusCode = 200, body) => {\r\n    return {\r\n        statusCode,\r\n        body: JSON.stringify(body)\r\n    };\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5mcmFlc3RydXR1cmUvaGFuZGxlcnMvbGlicy9hcGlHYXRld2F5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hay1oaXN0b3JpY28tZW1wbGVhZG9zLWFwaS8uL3NyYy9pbmZyYWVzdHJ1dHVyZS9oYW5kbGVycy9saWJzL2FwaUdhdGV3YXkudHM/NGU0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFQSUdhdGV3YXlQcm94eUV2ZW50LCBBUElHYXRld2F5UHJveHlSZXN1bHQsIEhhbmRsZXIgfSBmcm9tIFwiYXdzLWxhbWJkYVwiXG5pbXBvcnQgdHlwZSB7IEZyb21TY2hlbWEgfSBmcm9tIFwianNvbi1zY2hlbWEtdG8tdHNcIjtcbmltcG9ydCB7IElSZXNwb25zZSB9IGZyb20gXCJzcmMvaW5mcmFlc3RydXR1cmUvaW50ZXJmYWNlcy9yZXNwb25zZS1oYW5kbGVyLWludGVyZmFjZVwiO1xuXG50eXBlIFZhbGlkYXRlZEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gT21pdDxBUElHYXRld2F5UHJveHlFdmVudCwgJ2JvZHknPiAmIHsgYm9keTogRnJvbVNjaGVtYTxTPiB9XG5leHBvcnQgdHlwZSBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gSGFuZGxlcjxWYWxpZGF0ZWRBUElHYXRld2F5UHJveHlFdmVudDxTPiwgQVBJR2F0ZXdheVByb3h5UmVzdWx0PlxuXG5leHBvcnQgY29uc3QgZm9ybWF0SlNPTlJlc3BvbnNlID0gKHN0YXR1c0NvZGU6IG51bWJlciA9IDIwMCwgYm9keTogSVJlc3BvbnNlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc3RhdHVzQ29kZSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/infraestruture/handlers/libs/apiGateway.ts\n");

/***/ }),

/***/ "./src/infraestruture/handlers/libs/lambda.ts":
/*!****************************************************!*\
  !*** ./src/infraestruture/handlers/libs/lambda.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middyfy\": () => (/* binding */ middyfy)\n/* harmony export */ });\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\");\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nconst middyfy = (handler) => {\r\n    return _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default()());\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5mcmFlc3RydXR1cmUvaGFuZGxlcnMvbGlicy9sYW1iZGEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWstaGlzdG9yaWNvLWVtcGxlYWRvcy1hcGkvLi9zcmMvaW5mcmFlc3RydXR1cmUvaGFuZGxlcnMvbGlicy9sYW1iZGEudHM/MzI5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWlkZHkgZnJvbSBcIkBtaWRkeS9jb3JlXCJcbmltcG9ydCBtaWRkeUpzb25Cb2R5UGFyc2VyIGZyb20gXCJAbWlkZHkvaHR0cC1qc29uLWJvZHktcGFyc2VyXCJcblxuZXhwb3J0IGNvbnN0IG1pZGR5ZnkgPSAoaGFuZGxlcikgPT4ge1xuICByZXR1cm4gbWlkZHkoaGFuZGxlcikudXNlKG1pZGR5SnNvbkJvZHlQYXJzZXIoKSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/infraestruture/handlers/libs/lambda.ts\n");

/***/ }),

/***/ "./src/infraestruture/repositories/DynamoConnection.ts":
/*!*************************************************************!*\
  !*** ./src/infraestruture/repositories/DynamoConnection.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-dynamodb */ \"@aws-sdk/client-dynamodb\");\n/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconst config = {\r\n    region: 'us-east-1'\r\n};\r\nconst client = new _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.DynamoDBClient(config);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5mcmFlc3RydXR1cmUvcmVwb3NpdG9yaWVzL0R5bmFtb0Nvbm5lY3Rpb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWstaGlzdG9yaWNvLWVtcGxlYWRvcy1hcGkvLi9zcmMvaW5mcmFlc3RydXR1cmUvcmVwb3NpdG9yaWVzL0R5bmFtb0Nvbm5lY3Rpb24udHM/ODNmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEeW5hbW9EQkNsaWVudCwgRHluYW1vREJDbGllbnRDb25maWcgfSBmcm9tIFwiQGF3cy1zZGsvY2xpZW50LWR5bmFtb2RiXCI7XHJcblxyXG5jb25zdCBjb25maWcgOiBEeW5hbW9EQkNsaWVudENvbmZpZyA9IHtcclxuICAgIHJlZ2lvbjondXMtZWFzdC0xJ1xyXG59XHJcblxyXG5jb25zdCBjbGllbnQgPSBuZXcgRHluYW1vREJDbGllbnQoY29uZmlnKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/infraestruture/repositories/DynamoConnection.ts\n");

/***/ }),

/***/ "./src/infraestruture/repositories/historico-query.ts":
/*!************************************************************!*\
  !*** ./src/infraestruture/repositories/historico-query.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-dynamodb */ \"@aws-sdk/client-dynamodb\");\n/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _DynamoConnection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DynamoConnection */ \"./src/infraestruture/repositories/DynamoConnection.ts\");\n\r\n\r\nconst TableName = 'historico-empleado';\r\nclass HistoricoQuery {\r\n    async getHistoricoEmpleado(empleadoId) {\r\n        const input = {\r\n            TableName,\r\n            Key: {\r\n                empleadoId: {\r\n                    N: \"\" + empleadoId\r\n                }\r\n            }\r\n        };\r\n        const command = new _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.GetItemCommand(input);\r\n        const result = await _DynamoConnection__WEBPACK_IMPORTED_MODULE_1__[\"default\"].send(command);\r\n        console.log(\"result\", result);\r\n        return result;\r\n    }\r\n    async saveHistoricoEmpleado(empleadoId, sueldos) {\r\n        const valor = {\r\n            M: {\r\n                fechaActualizacion: {\r\n                    S: (new Date()).toString()\r\n                },\r\n                sueldoAnterior: {\r\n                    N: \"\" + sueldos.sueldoAnterior\r\n                },\r\n                sueldoNuevo: {\r\n                    N: \"\" + sueldos.sueldoNuevo\r\n                }\r\n            }\r\n        };\r\n        const query = await this.getHistoricoEmpleado(empleadoId);\r\n        let historico = (query.Item) ? query.Item.historico.L : [];\r\n        historico.push(valor);\r\n        const input = {\r\n            TableName,\r\n            Item: {\r\n                empleadoId: {\r\n                    N: \"\" + empleadoId\r\n                },\r\n                historico: {\r\n                    L: historico\r\n                }\r\n            }\r\n        };\r\n        const command = new _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.PutItemCommand(input);\r\n        await _DynamoConnection__WEBPACK_IMPORTED_MODULE_1__[\"default\"].send(command);\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HistoricoQuery);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5mcmFlc3RydXR1cmUvcmVwb3NpdG9yaWVzL2hpc3Rvcmljby1xdWVyeS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQTtBQUdBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWstaGlzdG9yaWNvLWVtcGxlYWRvcy1hcGkvLi9zcmMvaW5mcmFlc3RydXR1cmUvcmVwb3NpdG9yaWVzL2hpc3Rvcmljby1xdWVyeS50cz9hNjc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF0dHJpYnV0ZVZhbHVlLCBHZXRJdGVtQ29tbWFuZCwgR2V0SXRlbUNvbW1hbmRJbnB1dCwgR2V0SXRlbUNvbW1hbmRPdXRwdXQsIFB1dEl0ZW1Db21tYW5kLCBQdXRJdGVtQ29tbWFuZElucHV0IH0gZnJvbSBcIkBhd3Mtc2RrL2NsaWVudC1keW5hbW9kYlwiO1xuaW1wb3J0IHsgSUhpc3RvcmljbywgSUhpc3Rvcmljb1N1ZWxkb3MgfSBmcm9tIFwic3JjL2FwcGxpY2F0aW9uL2ludGVyZmFjZXMvaGlzdG9yaWNvLWludGVyZmFjZVwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi9EeW5hbW9Db25uZWN0aW9uXCI7XG5pbXBvcnQgeyBJSGlzdG9yaWNvUXVlcnkgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9yZXNwb25zZS1xdWVyeS1pbnRlcmZhY2VcIjtcblxuY29uc3QgVGFibGVOYW1lID0gJ2hpc3Rvcmljby1lbXBsZWFkbyc7XG5cbmNsYXNzIEhpc3Rvcmljb1F1ZXJ5IGltcGxlbWVudHMgSUhpc3Rvcmljb1F1ZXJ5IHtcbiAgICBcblxuICAgIHB1YmxpYyBhc3luYyBnZXRIaXN0b3JpY29FbXBsZWFkbyAoZW1wbGVhZG9JZDogbnVtYmVyKTpQcm9taXNlPEdldEl0ZW1Db21tYW5kT3V0cHV0PiB7XG5cbiAgICAgICAgY29uc3QgaW5wdXQgOiBHZXRJdGVtQ29tbWFuZElucHV0ID0ge1xuICAgICAgICAgICAgVGFibGVOYW1lLFxuICAgICAgICAgICAgS2V5OntcbiAgICAgICAgICAgICAgICBlbXBsZWFkb0lkOntcbiAgICAgICAgICAgICAgICAgICAgTiA6IFwiXCIrZW1wbGVhZG9JZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSBuZXcgR2V0SXRlbUNvbW1hbmQoaW5wdXQpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnQuc2VuZChjb21tYW5kKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdFwiLHJlc3VsdClcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHNhdmVIaXN0b3JpY29FbXBsZWFkbyhlbXBsZWFkb0lkOiBudW1iZXIsIHN1ZWxkb3M6IElIaXN0b3JpY29TdWVsZG9zKSA6IFByb21pc2U8dm9pZD57XG4gICAgICAgIGNvbnN0IHZhbG9yIDogQXR0cmlidXRlVmFsdWUgPSB7XG4gICAgICAgICAgICBNOntcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGZlY2hhQWN0dWFsaXphY2lvbjoge1xuICAgICAgICAgICAgICAgIFM6IChuZXcgRGF0ZSgpKS50b1N0cmluZygpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VlbGRvQW50ZXJpb3I6e1xuICAgICAgICAgICAgICAgIE46IFwiXCIrc3VlbGRvcy5zdWVsZG9BbnRlcmlvclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1ZWxkb051ZXZvOntcbiAgICAgICAgICAgICAgICBOOiBcIlwiK3N1ZWxkb3Muc3VlbGRvTnVldm9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBxdWVyeSA9IGF3YWl0IHRoaXMuZ2V0SGlzdG9yaWNvRW1wbGVhZG8oZW1wbGVhZG9JZCk7XG5cbiAgICAgICAgbGV0IGhpc3RvcmljbyA9IChxdWVyeS5JdGVtKSA/IHF1ZXJ5Lkl0ZW0uaGlzdG9yaWNvLkwgOiAgW107XG5cbiAgICAgICAgaGlzdG9yaWNvLnB1c2godmFsb3IpO1xuXG4gICAgICAgIGNvbnN0IGlucHV0OiBQdXRJdGVtQ29tbWFuZElucHV0ID0ge1xuICAgICAgICAgICAgVGFibGVOYW1lLFxuICAgICAgICAgICAgSXRlbTp7XG4gICAgICAgICAgICAgICBlbXBsZWFkb0lkOiB7XG4gICAgICAgICAgICAgICAgTjogXCJcIitlbXBsZWFkb0lkXG4gICAgICAgICAgICAgICB9ICxcbiAgICAgICAgICAgICAgIGhpc3Rvcmljbzp7XG4gICAgICAgICAgICAgICAgTDpoaXN0b3JpY29cbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21tYW5kID0gbmV3IFB1dEl0ZW1Db21tYW5kKGlucHV0KTtcbiAgICAgICAgYXdhaXQgY2xpZW50LnNlbmQoY29tbWFuZCk7XG4gICAgfVxuICAgIFxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhpc3Rvcmljb1F1ZXJ5OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/infraestruture/repositories/historico-query.ts\n");

/***/ }),

/***/ "@aws-sdk/client-dynamodb":
/*!*******************************************!*\
  !*** external "@aws-sdk/client-dynamodb" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-dynamodb");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");

/***/ }),

/***/ "@middy/http-json-body-parser":
/*!***********************************************!*\
  !*** external "@middy/http-json-body-parser" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-json-body-parser");

/***/ }),

/***/ "http-status-codes":
/*!************************************!*\
  !*** external "http-status-codes" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("http-status-codes");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/infraestruture/handlers/functions/guardarHistoricoEmpleado/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;