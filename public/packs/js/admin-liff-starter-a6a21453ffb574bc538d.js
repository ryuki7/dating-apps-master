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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/admin-liff-starter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/channels/liff-starter.js":
/*!*************************************************!*\
  !*** ./app/javascript/channels/liff-starter.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.onload = function () {
  var useNodeJS = false; // if you are not using a node server, set this value to false

  var defaultLiffId = "1656234930-4MZoRoZd"; // change the default LIFF value if you are not using a node server
  // DO NOT CHANGE THIS

  var myLiffId = ""; // if node is used, fetch the environment variable and pass it to the LIFF method
  // otherwise, pass defaultLiffId

  if (useNodeJS) {
    fetch('/send-id').then(function (reqResponse) {
      return reqResponse.json();
    }).then(function (jsonResponse) {
      myLiffId = jsonResponse.id;
      initializeLiffOrDie(myLiffId);
    })["catch"](function (error) {
      document.getElementById("liffAppContent").classList.add('hidden');
      document.getElementById("nodeLiffIdErrorMessage").classList.remove('hidden');
    });
  } else {
    myLiffId = defaultLiffId;
    initializeLiffOrDie(myLiffId);
  }
};
/**
* Check if myLiffId is null. If null do not initiate liff.
* @param {string} myLiffId The LIFF ID of the selected element
*/


function initializeLiffOrDie(myLiffId) {
  if (!myLiffId) {
    document.getElementById("liffAppContent").classList.add('hidden');
    document.getElementById("liffIdErrorMessage").classList.remove('hidden');
  } else {
    initializeLiff(myLiffId);
  }
}
/**
* Initialize LIFF
* @param {string} myLiffId The LIFF ID of the selected element
*/


function initializeLiff(myLiffId) {
  liff.init({
    liffId: myLiffId
  }).then(function () {
    // start to use LIFF's api
    initializeApp();
  })["catch"](function (err) {
    document.getElementById("liffAppContent").classList.add('hidden');
    document.getElementById("liffInitErrorMessage").classList.remove('hidden');
  });
}
/**
 * Initialize the app by calling functions handling individual app components
 */


function initializeApp() {
  displayLiffData();
  displayIsInClientInfo();
  registerButtonHandlers(); // check if the user is logged in/out, and disable inappropriate button

  if (liff.isLoggedIn()) {
    document.getElementById('liffLoginButton').disabled = true;
  } else {
    document.getElementById('liffLogoutButton').disabled = true;
  }
}
/**
* Display data generated by invoking LIFF methods
*/


function displayLiffData() {
  document.getElementById('browserLanguage').textContent = liff.getLanguage();
  document.getElementById('sdkVersion').textContent = liff.getVersion();
  document.getElementById('lineVersion').textContent = liff.getLineVersion();
  document.getElementById('isInClient').textContent = liff.isInClient();
  document.getElementById('isLoggedIn').textContent = liff.isLoggedIn();
  document.getElementById('deviceOS').textContent = liff.getOS();
}
/**
* Toggle the login/logout buttons based on the isInClient status, and display a message accordingly
*/


function displayIsInClientInfo() {
  if (liff.isInClient()) {
    document.getElementById('liffLoginButton').classList.toggle('hidden');
    document.getElementById('liffLogoutButton').classList.toggle('hidden');
    document.getElementById('isInClientMessage').textContent = 'You are opening the app in the in-app browser of LINE.';
  } else {
    document.getElementById('isInClientMessage').textContent = 'You are opening the app in an external browser.';
    document.getElementById('shareTargetPicker').classList.toggle('hidden');
  }
}
/**
* Register event handlers for the buttons displayed in the app
*/


function registerButtonHandlers() {
  // openWindow call
  document.getElementById('openWindowButton').addEventListener('click', function () {
    liff.openWindow({
      url: 'https://line.me',
      external: true
    });
  }); // closeWindow call

  document.getElementById('closeWindowButton').addEventListener('click', function () {
    if (!liff.isInClient()) {
      sendAlertIfNotInClient();
    } else {
      liff.closeWindow();
    }
  }); // sendMessages call

  document.getElementById('sendMessageButton').addEventListener('click', function () {
    if (!liff.isInClient()) {
      sendAlertIfNotInClient();
    } else {
      liff.sendMessages([{
        'type': 'text',
        'text': "You've successfully sent a message! Hooray!"
      }]).then(function () {
        window.alert('Message sent');
      })["catch"](function (error) {
        window.alert('Error sending message: ' + error);
      });
    }
  }); // get access token

  document.getElementById('getAccessToken').addEventListener('click', function () {
    if (!liff.isLoggedIn() && !liff.isInClient()) {
      alert('To get an access token, you need to be logged in. Please tap the "login" button below and try again.');
    } else {
      var accessToken = liff.getAccessToken();
      document.getElementById('accessTokenField').textContent = accessToken;
      toggleAccessToken();
    }
  }); // get profile call

  document.getElementById('getProfileButton').addEventListener('click', function () {
    liff.getProfile().then(function (profile) {
      document.getElementById('userIdProfileField').textContent = profile.userId;
      document.getElementById('displayNameField').textContent = profile.displayName;
      var profilePictureDiv = document.getElementById('profilePictureDiv');

      if (profilePictureDiv.firstElementChild) {
        profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);
      }

      var img = document.createElement('img');
      img.src = profile.pictureUrl;
      img.alt = 'Profile Picture';
      profilePictureDiv.appendChild(img);
      document.getElementById('statusMessageField').textContent = profile.statusMessage;
      toggleProfileData();
    })["catch"](function (error) {
      window.alert('Error getting profile: ' + error);
    });
  });
  document.getElementById('shareTargetPicker').addEventListener('click', function () {
    if (liff.isApiAvailable('shareTargetPicker')) {
      liff.shareTargetPicker([{
        'type': 'text',
        'text': 'Hello, World!'
      }]).then(document.getElementById('shareTargetPickerMessage').textContent = "Share target picker was launched.")["catch"](function (res) {
        document.getElementById('shareTargetPickerMessage').textContent = "Failed to launch share target picker.";
      });
    } else {
      document.getElementById('shareTargetPickerMessage').innerHTML = "<div>Share target picker unavailable.<div><div>This is possibly because you haven't enabled the share target picker on <a href='https://developers.line.biz/console/'>LINE Developers Console</a>.</div>";
    }
  }); // login call, only when external browser is used

  document.getElementById('liffLoginButton').addEventListener('click', function () {
    if (!liff.isLoggedIn()) {
      // set `redirectUri` to redirect the user to a URL other than the front page of your LIFF app.
      liff.login();
    }
  }); // logout call only when external browse

  document.getElementById('liffLogoutButton').addEventListener('click', function () {
    if (liff.isLoggedIn()) {
      liff.logout();
      window.location.reload();
    }
  });
}
/**
* Alert the user if LIFF is opened in an external browser and unavailable buttons are tapped
*/


function sendAlertIfNotInClient() {
  alert('This button is unavailable as LIFF is currently being opened in an external browser.');
}
/**
* Toggle access token data field
*/


function toggleAccessToken() {
  toggleElement('accessTokenData');
}
/**
* Toggle profile info field
*/


function toggleProfileData() {
  toggleElement('profileInfo');
}
/**
* Toggle specified element
* @param {string} elementId The ID of the selected element
*/


function toggleElement(elementId) {
  var elem = document.getElementById(elementId);

  if (elem.offsetWidth > 0 && elem.offsetHeight > 0) {
    elem.style.display = 'none';
  } else {
    elem.style.display = 'block';
  }
}

/***/ }),

/***/ "./app/javascript/packs/admin-liff-starter.js":
/*!****************************************************!*\
  !*** ./app/javascript/packs/admin-liff-starter.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _channels_liff_starter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../channels/liff-starter.js */ "./app/javascript/channels/liff-starter.js");
/* harmony import */ var _channels_liff_starter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_channels_liff_starter_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ })

/******/ });
//# sourceMappingURL=admin-liff-starter-a6a21453ffb574bc538d.js.map