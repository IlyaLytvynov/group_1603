/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 339);
/******/ })
/************************************************************************/
/******/ ({

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(340);


/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(341);

var _greet = __webpack_require__(342);

var _list = __webpack_require__(344);

var button = document.querySelector('#btn');
var content = document.querySelector('.content');

button.onclick = function () {
    (0, _greet.greetWidget)(content);
};

function analize() {
    var i = 0;
    var buttons = document.querySelectorAll('button');

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = buttons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _button = _step.value;

            _button.addEventListener('click', function () {
                i++;
                console.log(i);
            });
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

(0, _list.list)();
analize();

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.greetWidget = undefined;

__webpack_require__(343);

function greetWidget() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');

    var rootElement = document.createElement('div');
    var button = document.createElement('button');
    var title = document.createElement('h2');

    var isActive = true;

    title.textContent = 'Hello World';
    button.textContent = 'On/off';

    rootElement.classList.add('greet-widget');
    button.classList.add('greet-widget__btn', 'btn', 'btn_color');
    title.classList.add('greet-widget__title');

    rootElement.appendChild(button);
    rootElement.appendChild(title);
    target.appendChild(rootElement);

    button.addEventListener('click', toggle);

    function toggle() {
        if (isActive) {
            toggleOff();
        } else {
            toggleOn();
        }
    }

    function toggleOn() {
        button.classList.add('btn_active');
        rootElement.classList.add('greet-widget_active');
        title.classList.add('greet-widget__title_active');
        isActive = true;
    }

    function toggleOff() {
        button.classList.remove('btn_active');
        rootElement.classList.remove('greet-widget_active');
        title.classList.remove('greet-widget__title_active');
        isActive = false;
    }

    toggle();
}

exports.greetWidget = greetWidget;

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.list = list;

__webpack_require__(345);

function list() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');

    var root = document.createElement('div');
    var form = document.createElement('form');
    var input = document.createElement('input');
    var ul = document.createElement('ul');

    form.appendChild(input);

    input.type = 'text';
    input.placeholder = 'Enter task...';

    root.classList.add('list');
    form.classList.add('list__form');
    input.classList.add('list__input');

    root.appendChild(form);
    root.appendChild(ul);

    form.addEventListener('submit', function (eventObject) {
        eventObject.preventDefault();
        renderListItem();
    });

    target.appendChild(root);

    function renderListItem() {
        var value = input.value;
        var li = document.createElement('li');
        var btn = document.createElement('button');

        li.classList.add('list__item');
        li.textContent = value;

        function removeItem() {
            console.log('Removed');
            ul.removeChild(li);
            btn.removeEventListener('click', removeItem);
        }

        btn.addEventListener('click', removeItem);

        li.appendChild(btn);
        ul.appendChild(li);
        input.value = '';
    }
}

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });