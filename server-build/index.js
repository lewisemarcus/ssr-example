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

/***/ "./email/mailer.js":
/*!*************************!*\
  !*** ./email/mailer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv/config */ \"dotenv/config\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction genVerificationEmail(id) {\n  const HOST = \"http://localhost:3006\";\n  const link = HOST + \"/api/verify/\" + id;\n  let text = \"Verify email at this link!\\n\" + link;\n  let html = text;\n  return [text, html];\n}\n\nclass Mailer {\n  #user;\n  #pass;\n\n  constructor(user, pass) {\n    this.#user = user;\n    this.#pass = pass;\n    this.transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n      host: \"smtp.mail.yahoo.com\",\n      port: 465,\n      secure: false,\n      service: \"yahoo\",\n      auth: {\n        user: user,\n        pass: pass\n      }\n    });\n  }\n\n  async sendMail(to, subject, text, html) {\n    return this.transporter.sendMail({\n      from: \"Automail \" + this.#user,\n      to: to,\n      subject: subject,\n      text: text,\n      html: html\n    }).then(info => {\n      console.log(info);\n    }).catch(console.error);\n  }\n\n  async verificationEmail(id, email) {\n    const [text, html] = genVerificationEmail(id);\n    return this.sendMail(email, \"Verify your email with us!\", text, html);\n  }\n\n}\n\nconst mailer = new Mailer(process.env.MAIL, process.env.M_PASS);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mailer);\n\n//# sourceURL=webpack://react-ssr-example/./email/mailer.js?");

/***/ }),

/***/ "./logic/login.js":
/*!************************!*\
  !*** ./logic/login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction counterHandler() {\n  document.getElementById(\"button\").addEventListener(\"click\", () => {\n    let number = parseInt(document.getElementById(\"button\").textContent);\n    number += 1;\n    return document.getElementById(\"button\").textContent = number;\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterHandler);\n\n//# sourceURL=webpack://react-ssr-example/./logic/login.js?");

/***/ }),

/***/ "./models/Project.js":
/*!***************************!*\
  !*** ./models/Project.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"projectSchema\": () => (/* binding */ projectSchema)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst projectSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  text: {\n    type: String,\n    required: true\n  },\n  user: {\n    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),\n    ref: \"User\"\n  }\n}, {\n  timestamps: true\n});\nconst Project = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Message\", projectSchema);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://react-ssr-example/./models/Project.js?");

/***/ }),

/***/ "./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose_type_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose-type-email */ \"mongoose-type-email\");\n/* harmony import */ var mongoose_type_email__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose_type_email__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var node_uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-uuid */ \"node-uuid\");\n/* harmony import */ var node_uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_uuid__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _email_mailer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../email/mailer */ \"./email/mailer.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Project */ \"./models/Project.js\");\n\n\n\n\n\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  username: {\n    type: String,\n    unique: true,\n    required: true\n  },\n  password: {\n    type: String,\n    required: true\n  },\n  email: {\n    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().SchemaTypes.Email),\n    unique: true,\n    required: true\n  },\n  emailCode: {\n    type: String,\n    unique: true,\n    required: true,\n    default: (node_uuid__WEBPACK_IMPORTED_MODULE_2___default().v4)\n  },\n  projects: [_Project__WEBPACK_IMPORTED_MODULE_5__.projectSchema]\n}, {\n  timestamps: true\n});\n\nuserSchema.statics.findByLogin = async function (login) {\n  let user = await this.findOne({\n    username: login\n  });\n\n  if (!user) {\n    user = await this.findOne({\n      email: login\n    });\n  }\n\n  return user;\n};\n\nuserSchema.pre(\"remove\", async function () {\n  this.model(\"Project\").deleteMany({\n    user: this._id\n  });\n});\nuserSchema.pre(\"save\", async function () {\n  let user = this;\n  const saltRounds = 10;\n  const hashed_password = await hashPassword(user.password, saltRounds);\n  user.password = hashed_password;\n});\n\nasync function hashPassword(password, saltRounds) {\n  try {\n    let newHash = await bcrypt__WEBPACK_IMPORTED_MODULE_4___default().hash(password, saltRounds);\n  } catch (err) {// error handling here\n  }\n\n  return newHash;\n}\n\nuserSchema.post(\"save\", async function () {\n  _email_mailer__WEBPACK_IMPORTED_MODULE_3__[\"default\"].verificationEmail(this.id, this.email);\n  return this;\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n\n//# sourceURL=webpack://react-ssr-example/./models/User.js?");

/***/ }),

/***/ "./models/index.js":
/*!*************************!*\
  !*** ./models/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectDb\": () => (/* binding */ connectDb),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./models/Project.js\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ \"./models/User.js\");\n\n\n\n\nconst connectDb = () => {\n  return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.DATABASE_URL);\n};\n\nconst models = {\n  User: _User__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  Project: _Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (models);\n\n//# sourceURL=webpack://react-ssr-example/./models/index.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv/config */ \"dotenv/config\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-session */ \"express-session\");\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var connect_mongo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connect-mongo */ \"connect-mongo\");\n/* harmony import */ var connect_mongo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connect_mongo__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/index */ \"./models/index.js\");\n/* harmony import */ var _server_routes_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../server/routes/routes */ \"./server/routes/routes.js\");\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\n\napp.use(express_session__WEBPACK_IMPORTED_MODULE_1___default()({\n  secret: \"foo\",\n  cookie: {\n    maxAge: 3600000,\n    sameSite: \"strict\"\n  },\n  resave: true,\n  saveUninitialized: true,\n  store: connect_mongo__WEBPACK_IMPORTED_MODULE_2___default().create({\n    mongoUrl: \"mongodb://localhost:27017/main\"\n  })\n}));\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default().json());\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default().urlencoded({\n  extended: false\n}));\napp.use(\"/\", _server_routes_routes__WEBPACK_IMPORTED_MODULE_5__.router);\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default()[\"static\"](\"./build\"));\nconst eraseDatabaseOnSync = true;\n(0,_models_index__WEBPACK_IMPORTED_MODULE_4__.connectDb)().then(async () => {\n  if (eraseDatabaseOnSync) {\n    await Promise.all([_models_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"].User.deleteMany({}), _models_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Project.deleteMany({})]);\n  }\n\n  app.listen(PORT, () => {\n    console.log(`Server is listening at http://localhost:${PORT}`);\n  });\n});\n\n//# sourceURL=webpack://react-ssr-example/./server/index.js?");

/***/ }),

/***/ "./server/routes/api/apiRoutes.js":
/*!****************************************!*\
  !*** ./server/routes/api/apiRoutes.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"router\": () => (/* binding */ router)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _userRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userRoutes */ \"./server/routes/api/userRoutes.js\");\n/* harmony import */ var _projectRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectRoutes */ \"./server/routes/api/projectRoutes.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.use(\"/user\", _userRoutes__WEBPACK_IMPORTED_MODULE_1__.router);\nrouter.use(\"/project\", _projectRoutes__WEBPACK_IMPORTED_MODULE_2__.router);\n\n\n//# sourceURL=webpack://react-ssr-example/./server/routes/api/apiRoutes.js?");

/***/ }),

/***/ "./server/routes/api/projectRoutes.js":
/*!********************************************!*\
  !*** ./server/routes/api/projectRoutes.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"router\": () => (/* binding */ router)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\n\n\n//# sourceURL=webpack://react-ssr-example/./server/routes/api/projectRoutes.js?");

/***/ }),

/***/ "./server/routes/api/userRoutes.js":
/*!*****************************************!*\
  !*** ./server/routes/api/userRoutes.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"router\": () => (/* binding */ router)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\n\n\n//# sourceURL=webpack://react-ssr-example/./server/routes/api/userRoutes.js?");

/***/ }),

/***/ "./server/routes/routes.js":
/*!*********************************!*\
  !*** ./server/routes/routes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"router\": () => (/* binding */ router)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/App */ \"./src/App.js\");\n/* harmony import */ var _src_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/Login */ \"./src/Login.js\");\n/* harmony import */ var _src_components_MultipleRoutes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/components/MultipleRoutes */ \"./src/components/MultipleRoutes.js\");\n/* harmony import */ var _logic_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../logic/login */ \"./logic/login.js\");\n/* harmony import */ var _api_apiRoutes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api/apiRoutes */ \"./server/routes/api/apiRoutes.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_4___default().Router();\nconst Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});\nrouter.use(\"/api\", _api_apiRoutes__WEBPACK_IMPORTED_MODULE_10__.router);\nrouter.get(\"/\", async (req, res) => {\n  const contextValue = {\n    requests: []\n  };\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {\n    value: contextValue\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_App__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_2___default().resolve(\"./build/index.html\");\n  await Promise.all(contextValue.requests);\n  delete contextValue.requests;\n  fs__WEBPACK_IMPORTED_MODULE_3___default().readFile(indexFile, \"utf8\", (err, data) => {\n    if (err) {\n      console.error(\"Something went wrong:\", err);\n      return res.status(500).send(\"Oops, better luck next time!\");\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`));\n  });\n});\nrouter.get(\"/login\", async (req, res) => {\n  const contextValue = {\n    requests: []\n  };\n  const name = \"Marcus Lewis\";\n  const login = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {\n    value: contextValue\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_Login__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    name: name\n  })));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_2___default().resolve(\"./build/index.html\");\n  await Promise.all(contextValue.requests);\n  delete contextValue.requests;\n  fs__WEBPACK_IMPORTED_MODULE_3___default().readFile(indexFile, \"utf8\", (err, data) => {\n    if (err) {\n      console.error(\"Something went wrong:\", err);\n      return res.status(500).send(\"Oops, better luck next time!\");\n    }\n\n    const counter = _logic_login__WEBPACK_IMPORTED_MODULE_9__[\"default\"].toString().split(\"function counterHandler() {\")[1].split(\";\\n}\")[0];\n    const head = data.split(\"</head>\")[0].split(\"<head>\")[1].split(\"<script\")[0];\n    const html = `\n            <!doctype html>\n                <html>\n                <head>\n                ${head}\n                <script>window.__INITIAL__DATA__ = ${JSON.stringify({\n      name\n    })}</script>\n                </head>\n                <body>\n                <div id=\"root\">${login}</div>\n                <script>${counter}</script>\n            </body>\n            </html>`;\n    return res.send(html);\n  });\n});\nrouter.get(\"/with-react-router*\", (req, res) => {\n  const contextValue = {\n    requests: []\n  };\n  const component = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_5__.StaticRouter, {\n    location: req.url,\n    value: contextValue\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_MultipleRoutes__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null)));\n  const html = `\n    <!doctype html>\n      <html>\n      <head>\n        <title>document</title>\n      </head>\n      <body>\n        <div id=\"root\">${component}</div>\n      </body>\n      </html>\n    `;\n\n  if (contextValue.url) {\n    res.writeHead(301, {\n      Location: contextValue.url\n    });\n    res.end();\n  } else {\n    res.send(html);\n  }\n});\n\n\n//# sourceURL=webpack://react-ssr-example/./server/routes/routes.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ \"./src/Home.js\");\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://react-ssr-example/./src/App.js?");

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n // function Home() {\n//     return <h1>Hello Sammy!</h1>\n// }\n\nclass Home extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Hello Sammy!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      href: \"/with-react-router\"\n    }, \"with React Router\"));\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://react-ssr-example/./src/Home.js?");

/***/ }),

/***/ "./src/Login.js":
/*!**********************!*\
  !*** ./src/Login.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Login(props) {\n  const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    document.title = `You clicked ${count} times`;\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"You clicked \", count, \" times\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Goodbye \", props.name, \"!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    id: \"button\",\n    type: \"button\",\n    className: \"btn btn-primary\"\n  }, \"1\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: () => setCount(count + 1)\n  }, \"Click me\"));\n} // class Login extends React.Component {\n//     constructor(props) {\n//         super(props)\n//         this.state = {\n//             name: props.name,\n//         }\n//     }\n//     render() {\n//         return (\n//             <Fragment>\n//                 <h1>Goodbye {this.state.name}!</h1>\n//                 <button id=\"button\" type=\"button\" className=\"btn btn-primary\">\n//                     1\n//                 </button>\n//             </Fragment>\n//         )\n//     }\n// }\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n//# sourceURL=webpack://react-ssr-example/./src/Login.js?");

/***/ }),

/***/ "./src/components/MultipleRoutes.js":
/*!******************************************!*\
  !*** ./src/components/MultipleRoutes.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n// src/public/components/MultipleRoutes.js\n\n\n\nconst Home = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Home\"));\n\nconst About = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"About\"));\n\nconst Topics = _ref => {\n  let {\n    match\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Topics\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: `${match.url}/rendering`\n  }, \"Rendering with React\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: `${match.url}/components`\n  }, \"Components\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: `${match.url}/props-v-state`\n  }, \"Props v. State\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: `${match.url}/:topicId`,\n    component: Topic\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: match.url,\n    render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"Please select a topic.\")\n  })));\n};\n\nconst Topic = _ref2 => {\n  let {\n    match\n  } = _ref2;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, match.params.topicId));\n};\n\nconst MultipleRoutes = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n  to: \"/with-react-router\"\n}, \"Home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n  to: \"/with-react-router/about\"\n}, \"About\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n  to: \"/with-react-router/topics\"\n}, \"Topics\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n  href: \"/\"\n}, \"return to server\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n  exact: true,\n  path: \"/with-react-router\",\n  component: Home\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n  path: \"/with-react-router/about\",\n  component: About\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n  path: \"/with-react-router/topics\",\n  component: Topics\n})));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultipleRoutes);\n\n//# sourceURL=webpack://react-ssr-example/./src/components/MultipleRoutes.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "connect-mongo":
/*!********************************!*\
  !*** external "connect-mongo" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("connect-mongo");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("express-session");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "mongoose-type-email":
/*!**************************************!*\
  !*** external "mongoose-type-email" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("mongoose-type-email");

/***/ }),

/***/ "node-uuid":
/*!****************************!*\
  !*** external "node-uuid" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node-uuid");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("react-router-dom/server");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;