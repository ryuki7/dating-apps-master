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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/javascript/channels/Jquery.selmodal.js":
/*!****************************************************!*\
  !*** ./app/javascript/channels/Jquery.selmodal.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*--------------------------------------------------------------------------*
 *  
 *  selmodal.js
 *  
 *  MIT-style license. 
 *  
 *  2019 nocho
 *  http://kinocolog.com
 *  
 *--------------------------------------------------------------------------*/
var city_select_button_create_OK = 0;
var city_input_error_message_create = "not_exist"; // edit用

var targets_edit_sign_input = document.getElementById("targets_edit_sign_input");
var targets_edit_discrimination = "start";
var app_start = "ok";
var appearance_start = "ok";
var purpose_start = "ok";
var age_start = "ok";
var job_start = "ok";
var height_start = "ok";
var prefecture_start = "ok";
var city_start = "ok";
var personality_start = "ok";
var city_select_start_button_click_discrimination = "ok"; //

$(function () {
  //後者のセレクトをプラグインに適用
  $('.selmodaltest').selModal(); //すべてのセレクトボックスに同じ処理する場合は下記のように書く
  //$('select').selModal();
});
var prefectures_select_button = document.getElementById("prefectures_select_button");
var city_select_start_button = document.getElementById("city_select_start_button");
var city_select_button = document.getElementById("city_select_button");
var city_select_button_fake = null;
var city_select_element = document.getElementById("city_select_element");
var city_select_element_fake = document.getElementById("city_select_element_fake");

if (city_select_element_fake) {
  var city_select_element_children = city_select_element_fake.children;
  var city_select_element_option_value_0 = city_select_element_fake.firstElementChild;
}

var name_select = document.getElementById("name_select"); // リセットボタン(「市を入力するボタン」をクリック後、再度「都道府県ボタン」をクリックすると、初期状態に戻す。)

if (prefectures_select_button) {
  prefectures_select_button.addEventListener('click', function () {
    // エラーメッセージ削除(都道府県を選択していない時に、「市区町村を入力する」をクリックしたエラー)
    var targets_registration_city_input_error_message = document.getElementById("targets_registration_city_input_error_message");

    if (targets_registration_city_input_error_message) {
      targets_registration_city_input_error_message.remove();
      city_input_error_message_create = "not_exist";
    }

    var city_select_button_fake_delete = document.getElementById("hidden");

    if (city_select_button_fake_delete) {
      $("#city_select_element").empty();
      city_select_element.appendChild(city_select_element_option_value_0);
      city_select_start_button.classList.remove('hidden');
      city_select_button.remove();
      city_select_button = document.createElement('button');
      city_select_button.textContent = '市区町村を選択してください';
      city_select_button.id = 'city_select_button';
      city_select_button.type = 'button';
      city_select_button.classList.add('selModalButton');
      city_select_button.classList.add('hidden');
      city_select_element.after(city_select_button);
      city_select_button_fake_delete.remove();
    }
  });
} // 「市を入力するボタン」のクリック(都道府県を選択してから「市を入力するボタン」をクリックすると、市を選択出来るようになる。)


if (prefectures_select_button && city_select_start_button) {
  city_select_start_button.addEventListener('click', function () {
    if (prefectures_select_button.textContent == '都道府県を選択してください') {
      var _city_select_start_button = document.getElementById("city_select_start_button"); // エラーメッセージ生成(都道府県を選択していない時に、「市区町村を入力する」をクリックしたエラー)


      if (city_input_error_message_create == "not_exist") {
        var error_message = document.createElement('p');
        error_message.textContent = '「都道府県」を選択して下さい。';
        error_message.id = 'targets_registration_city_input_error_message';

        _city_select_start_button.before(error_message);

        city_input_error_message_create = "exist";
      }
    } else {
      var city_select_button_fake_delete = document.getElementById("hidden");

      if (!city_select_button_fake_delete) {
        city_select_start_button.classList.add('hidden');
        city_select_button.classList.remove('hidden'); // 市のセレクトボタン(button)のフェイク

        city_select_button_fake = document.createElement('button');
        city_select_button_fake.textContent = 'フェイク';
        city_select_button_fake.id = 'hidden';
        city_select_button_fake.type = 'button';
        city_select_start_button.after(city_select_button_fake); // 「市」selectタグのoption選択データを追加(子要素)

        var city_select_option_elements_array = document.querySelectorAll("#".concat(prefectures_select_button.textContent, "\u30AA\u30D7\u30B7\u30E7\u30F3"));
        var each_city_name_array = [];

        for (var i = 0; i < city_select_option_elements_array.length; i++) {
          each_city_name_array.push(city_select_option_elements_array[i].textContent);
        }

        for (var i = 0; i < each_city_name_array.length; i++) {
          var city_select_element_child_option_create = document.createElement('option');
          city_select_element_child_option_create.textContent = each_city_name_array[i];
          city_select_element_child_option_create.value = each_city_name_array[i];
          city_select_element.appendChild(city_select_element_child_option_create);
        }

        city_select_button_create_OK = 1; //後者のセレクトをプラグインに適用

        $('#city_select_element').selModal(); //すべてのセレクトボックスに同じ処理する場合は下記のように書く
        //$('select').selModal();

        (function ($) {
          $.fn.selModal = function () {
            var SEL_PARENT = $(this);
            SEL_PARENT.each(function (i) {
              var select_this = $(this);
              var sel_name_attr = $(this).attr('name');
              var selected = $(this).prop('selectedIndex');
              var selected_name;
              var modal_html = '';
              var button_html = '';
              var sel_default_text = '選択してください。';

              if (select_this[0].id == "city_select_element" && city_select_button_create_OK == 0) {} else {
                $('[data-selmodal="' + sel_name_attr + '"]').remove();
                $('[data-selmodalbtn="' + sel_name_attr + '"]').remove();
                var aryChild = $(this).children();
                modal_html += '<div class="selModal" data-selmodal="' + sel_name_attr + '">';
                modal_html += '<div class="selModalOverlay selModalClose"></div>';
                modal_html += '<div class="selModalInner">';
                modal_html += '<div class="selModalHeader">';
                modal_html += '<div class="selModalCloseIcon selModalClose"><span></span></div>';
                modal_html += '</div>';
                modal_html += '<div class="selModalList">';
                modal_html += '<ul>';

                for (var i = 0; i < aryChild.length; i++) {
                  var img_div = '';

                  if (aryChild.eq(i).attr('data-image')) {
                    if (i == 3) {
                      img_div = '<img src="' + aryChild.eq(i).attr('data-image') + '" class="app-image-tapple-select">';
                    } else {
                      img_div = '<img src="' + aryChild.eq(i).attr('data-image') + '">';
                    }
                  } // app


                  if (targets_edit_sign_input && targets_edit_discrimination == "start" && app_start == "ok" && select_this[0].name == "app_id") {
                    var targets_edit_app = document.getElementById("targets_edit_app");
                    selected = targets_edit_app.textContent;
                    app_start = "no";
                  } // appearance


                  if (targets_edit_sign_input && targets_edit_discrimination == "start" && appearance_start == "ok" && select_this[0].name == "appearance_id") {
                    var targets_edit_appearance = document.getElementById("targets_edit_appearance");
                    selected = targets_edit_appearance.textContent;
                    appearance_start = "no";
                  } // age


                  if (targets_edit_sign_input && targets_edit_discrimination == "start" && age_start == "ok" && select_this[0].name == "age") {
                    var targets_edit_age = document.getElementById("targets_edit_age");
                    selected = targets_edit_age.textContent;
                    age_start = "no";
                  } // purpose


                  if (targets_edit_sign_input && targets_edit_discrimination == "start" && purpose_start == "ok" && select_this[0].name == "purpose_id") {
                    var targets_edit_purpose = document.getElementById("targets_edit_purpose");
                    selected = targets_edit_purpose.textContent;
                    purpose_start = "no";
                  } // job


                  if (targets_edit_sign_input && targets_edit_discrimination == "start" && job_start == "ok" && select_this[0].name == "job_id") {
                    var targets_edit_job = document.getElementById("targets_edit_job");
                    selected = targets_edit_job.textContent;
                    job_start = "no";
                  } // height


                  if (targets_edit_sign_input && targets_edit_discrimination == "start" && height_start == "ok" && select_this[0].name == "height") {
                    var targets_edit_height = document.getElementById("targets_edit_height");
                    selected = targets_edit_height.textContent;
                    height_start = "no";
                  } // prefecture


                  if (targets_edit_sign_input && targets_edit_discrimination == "start" && prefecture_start == "ok" && select_this[0].name == "prefecture") {
                    var targets_edit_prefecture = document.getElementById("targets_edit_prefecture");
                    prefecture_name = targets_edit_prefecture.textContent;
                    var prefectures_select_element = document.getElementById("prefectures_select_element");
                    var prefecture_option_array = prefectures_select_element.children;

                    for (var _i = 0; _i < prefecture_option_array.length; _i++) {
                      if (prefecture_name == prefecture_option_array[_i].textContent) {
                        selected = _i;
                      }
                    }

                    prefecture_start = "no";
                  } // city


                  if (targets_edit_sign_input && targets_edit_discrimination == "start" && city_start == "ok" && select_this[0].name == "city") {
                    var targets_edit_city = document.getElementById("targets_edit_city");
                    city_name = targets_edit_city.textContent; // "{県名}オプション"

                    var targets_edit_prefecture_city = document.getElementById("targets_edit_prefecture_city");
                    prefecture_name_option_name = targets_edit_prefecture_city.textContent;

                    if (prefecture_name_option_name !== "0オプション") {
                      var city_option_array = document.querySelectorAll("#".concat(prefecture_name_option_name));

                      for (var _i2 = 0; _i2 < city_option_array.length; _i2++) {
                        if (city_name == city_option_array[_i2].textContent) {
                          selected = _i2 + 1;
                        }
                      }
                    }

                    city_start = "no";
                  } // personality


                  if (targets_edit_sign_input && targets_edit_discrimination == "start" && personality_start == "ok" && select_this[0].name == "personality_id") {
                    var targets_edit_personality = document.getElementById("targets_edit_personality");
                    selected = targets_edit_personality.textContent;
                    personality_start = "no";
                  }

                  if (selected != i) {
                    modal_html += '<li class="selModalClose" id="' + aryChild.eq(i).attr('value') + '" data-value="' + aryChild.eq(i).attr('value') + '">' + img_div + aryChild.eq(i).text() + '</li>';
                  } else {
                    modal_html += '<li class="selected selModalClose" data-value="' + aryChild.eq(i).attr('value') + '">' + img_div + aryChild.eq(i).text() + '</li>';
                    selected_name = aryChild.eq(i).text();
                  }
                }

                targets_edit_discrimination == "end";
                modal_html += '</ul>';
                modal_html += '</div>';
                modal_html += '</div>';

                if (selected_name === undefined) {
                  button_html = '<button type="button" class="selModalButton" data-selmodalbtn="' + sel_name_attr + '">' + sel_default_text + '</button>';
                } else {
                  if (select_this[0].id == "prefectures_select_element" || select_this[0].id == "city_select_element") {
                    button_html = '';
                  } else {
                    button_html = '<button type="button" class="selModalButton" data-selmodalbtn="' + sel_name_attr + '">' + selected_name + '</button>';
                  }
                } // 元のセレクトボックスは非表示


                $(this).hide(); //ボタン生成

                if (select_this[0].id == "prefectures_select_element") {
                  prefectures_select_button_create(sel_name_attr);
                } else if (select_this[0].id == "city_select_element") {
                  city_select_button_create(sel_name_attr);
                } else if (select_this[0].id == "app_select_element") {
                  app_select_button_create(sel_name_attr);
                } else if (select_this[0].id == "appearance_select_element") {
                  appearance_select_button_create(sel_name_attr);
                } else if (select_this[0].id == "purpose_select_element") {
                  purpose_select_button_create(sel_name_attr);
                } else {
                  $(this).after(button_html);
                } //モーダルウインドウ生成


                $('body').append(modal_html); //ボタンクリック

                $('[data-selmodalbtn="' + sel_name_attr + '"]').click(function () {
                  href = $('[data-selmodal="' + $(this).data('selmodalbtn') + '"]');
                  $(href).show();
                  $('body').addClass('selModalBody');
                  var par_height = $(href).find('.selModalInner').outerHeight();
                  var c_head = $(href).find('.selModalHeader').outerHeight();
                  $(href).find('.selModalList').css('height', par_height - c_head + 'px');
                  var pos = 0;
                  var tr = 0;
                  $(href).find('.selModalList ul li').each(function (key, value) {
                    if ($(value).hasClass('selected')) {
                      tr = $(value).outerHeight(true);
                      return false;
                    } else {
                      pos += $(value).outerHeight(true);
                    }
                  });
                  var sh = $(href).find('.selModalList').height();
                  if (sh > 0) pos -= sh / 2;
                  if (tr > 0) pos += tr / 2;
                  $(href).find('.selModalList').scrollTop(pos);
                });
                $('[data-selmodal="' + sel_name_attr + '"]').find('.selModalList').on('touchstart', function () {
                  if ($(this).scrollTop() == 0) {
                    $(this).scrollTop(1);
                  }

                  var scrollHeight = $(this)[0].scrollHeight;
                  var scrollPosition = $(this).scrollTop() + $(this).height();

                  if (scrollHeight == scrollPosition) {
                    $(this).scrollTop($(this).scrollTop() - 1);
                  }
                });
                $('[data-selmodal="' + sel_name_attr + '"]').find('.selModalList li').on('touchstart', function () {
                  $(this).addClass('totch');
                });
                $('[data-selmodal="' + sel_name_attr + '"]').find('.selModalList li').on('touchend', function () {
                  $(this).closest('ul').find('li').removeClass('totch');
                }); //ボタンクリック

                $('[data-selmodal="' + sel_name_attr + '"]').find('li').click(function () {
                  $(this).closest('ul').find('li').removeClass('selected');
                  $(this).addClass('selected');
                  var hoge = $(this).closest('.selModal').data('selmodal');
                  var this_no = $(this).closest('ul').find('li').index(this);
                  var before_no = $('select[name="' + hoge + '"]').prop("selectedIndex");
                  $('select[name="' + hoge + '"]').prop("selectedIndex", this_no);
                  $('[data-selmodalbtn="' + hoge + '"]').text($(this).text());

                  if (this_no != before_no) {
                    select_this.trigger('change');
                  }
                });
                $('[data-selmodal="' + sel_name_attr + '"]').find('.selModalClose').click(function () {
                  $(this).parents(".selModal").hide();
                  $('body').removeClass('selModalBody');
                });
              }
            });
          };

          $.fn.selModalSetValue = function (value) {
            var sel_dom = $(this);

            if (sel_dom[0].id == "city_select_element" && city_select_button_create_OK == 0) {} else {
              sel_dom.val(value);
              var sel_text = $(sel_dom).find('option:selected').text();
              var name = sel_dom.attr('name');
              var sel_list = $('[data-selmodal="' + name + '"]');
              var sel_btn = $('[data-selmodalbtn="' + name + '"]');
              sel_list.find('li').removeClass('selected');
              sel_list.find('[data-value="' + value + '"]').addClass('selected');
              sel_btn.text(sel_text);
            }
          };
        })(jQuery);

        city_select_button_create_OK = 0;
      }
    }
  });
}

(function ($) {
  $.fn.selModal = function () {
    var SEL_PARENT = $(this);
    SEL_PARENT.each(function (i) {
      var select_this = $(this);
      var sel_name_attr = $(this).attr('name');
      var selected = $(this).prop('selectedIndex');
      var selected_name;
      var modal_html = '';
      var button_html = '';
      var sel_default_text = '選択してください。';

      if (select_this[0].id == "city_select_element" && city_select_button_create_OK == 0) {} else {
        $('[data-selmodal="' + sel_name_attr + '"]').remove();
        $('[data-selmodalbtn="' + sel_name_attr + '"]').remove();
        var aryChild = $(this).children();
        modal_html += '<div class="selModal" data-selmodal="' + sel_name_attr + '">';
        modal_html += '<div class="selModalOverlay selModalClose"></div>';
        modal_html += '<div class="selModalInner">';
        modal_html += '<div class="selModalHeader">';
        modal_html += '<div class="selModalCloseIcon selModalClose"><span></span></div>';
        modal_html += '</div>';
        modal_html += '<div class="selModalList">';
        modal_html += '<ul>';

        for (var i = 0; i < aryChild.length; i++) {
          var img_div = '';

          if (aryChild.eq(i).attr('data-image')) {
            if (select_this[0].id == "app_select_element" && i == 3) {
              img_div = '<img src="' + aryChild.eq(i).attr('data-image') + '" class="app-image-tapple-select">';
            } else {
              img_div = '<img src="' + aryChild.eq(i).attr('data-image') + '">';
            }
          } // app


          if (targets_edit_sign_input && targets_edit_discrimination == "start" && app_start == "ok" && select_this[0].name == "app_id") {
            var targets_edit_app = document.getElementById("targets_edit_app");
            selected = targets_edit_app.textContent;
            app_start = "no";
          } // appearance


          if (targets_edit_sign_input && targets_edit_discrimination == "start" && appearance_start == "ok" && select_this[0].name == "appearance_id") {
            var targets_edit_appearance = document.getElementById("targets_edit_appearance");
            selected = targets_edit_appearance.textContent;
            appearance_start = "no";
          } // age


          if (targets_edit_sign_input && targets_edit_discrimination == "start" && age_start == "ok" && select_this[0].name == "age") {
            var targets_edit_age = document.getElementById("targets_edit_age");
            selected = targets_edit_age.textContent;
            age_start = "no";
          } // purpose


          if (targets_edit_sign_input && targets_edit_discrimination == "start" && purpose_start == "ok" && select_this[0].name == "purpose_id") {
            var targets_edit_purpose = document.getElementById("targets_edit_purpose");
            selected = targets_edit_purpose.textContent;
            purpose_start = "no";
          } // job


          if (targets_edit_sign_input && targets_edit_discrimination == "start" && job_start == "ok" && select_this[0].name == "job_id") {
            var targets_edit_job = document.getElementById("targets_edit_job");
            selected = targets_edit_job.textContent;
            job_start = "no";
          } // height


          if (targets_edit_sign_input && targets_edit_discrimination == "start" && height_start == "ok" && select_this[0].name == "height") {
            var targets_edit_height = document.getElementById("targets_edit_height");
            selected = targets_edit_height.textContent;
            height_start = "no";
          } // prefecture


          if (targets_edit_sign_input && targets_edit_discrimination == "start" && prefecture_start == "ok" && select_this[0].name == "prefecture") {
            var targets_edit_prefecture = document.getElementById("targets_edit_prefecture");
            prefecture_name = targets_edit_prefecture.textContent;
            var prefectures_select_element = document.getElementById("prefectures_select_element");
            var prefecture_option_array = prefectures_select_element.children;

            for (var _i3 = 0; _i3 < prefecture_option_array.length; _i3++) {
              if (prefecture_name == prefecture_option_array[_i3].textContent) {
                selected = _i3;
              }
            }

            prefecture_start = "no";
          } // city


          if (targets_edit_sign_input && targets_edit_discrimination == "start" && city_start == "ok" && select_this[0].name == "city") {
            var targets_edit_city = document.getElementById("targets_edit_city");
            city_name = targets_edit_city.textContent; // "{県名}オプション"

            var targets_edit_prefecture_city = document.getElementById("targets_edit_prefecture_city");
            prefecture_name_option_name = targets_edit_prefecture_city.textContent;

            if (prefecture_name_option_name !== "0オプション") {
              var city_option_array = document.querySelectorAll("#".concat(prefecture_name_option_name));

              for (var _i4 = 0; _i4 < city_option_array.length; _i4++) {
                if (city_name == city_option_array[_i4].textContent) {
                  selected = _i4 + 1;
                }
              }
            }

            city_start = "no";
          } // personality


          if (targets_edit_sign_input && targets_edit_discrimination == "start" && personality_start == "ok" && select_this[0].name == "personality_id") {
            var targets_edit_personality = document.getElementById("targets_edit_personality");
            selected = targets_edit_personality.textContent;
            personality_start = "no";
          }

          if (selected != i) {
            modal_html += '<li class="selModalClose" id="' + aryChild.eq(i).attr('value') + '" data-value="' + aryChild.eq(i).attr('value') + '">' + img_div + aryChild.eq(i).text() + '</li>';
          } else {
            modal_html += '<li class="selected selModalClose" data-value="' + aryChild.eq(i).attr('value') + '">' + img_div + aryChild.eq(i).text() + '</li>';
            selected_name = aryChild.eq(i).text();
          }
        }

        targets_edit_discrimination == "end";
        modal_html += '</ul>';
        modal_html += '</div>';
        modal_html += '</div>';

        if (selected_name === undefined) {
          button_html = '<button type="button" class="selModalButton" data-selmodalbtn="' + sel_name_attr + '">' + sel_default_text + '</button>';
        } else {
          if (select_this[0].id == "prefectures_select_element" || select_this[0].id == "city_select_element") {
            button_html = '';
          } else {
            button_html = '<button type="button" class="selModalButton" data-selmodalbtn="' + sel_name_attr + '">' + selected_name + '</button>';
          }
        } // 元のセレクトボックスは非表示


        $(this).hide(); //ボタン生成

        if (select_this[0].id == "prefectures_select_element") {
          prefectures_select_button_create(sel_name_attr);
        } else if (select_this[0].id == "city_select_element") {
          city_select_button_create(sel_name_attr);
        } else if (select_this[0].id == "app_select_element") {
          app_select_button_create(sel_name_attr);
        } else if (select_this[0].id == "appearance_select_element") {
          appearance_select_button_create(sel_name_attr);
        } else if (select_this[0].id == "purpose_select_element") {
          purpose_select_button_create(sel_name_attr);
        } else {
          $(this).after(button_html);
        } //モーダルウインドウ生成


        $('body').append(modal_html); //ボタンクリック

        $('[data-selmodalbtn="' + sel_name_attr + '"]').click(function () {
          href = $('[data-selmodal="' + $(this).data('selmodalbtn') + '"]');
          $(href).show();
          $('body').addClass('selModalBody');
          var par_height = $(href).find('.selModalInner').outerHeight();
          var c_head = $(href).find('.selModalHeader').outerHeight();
          $(href).find('.selModalList').css('height', par_height - c_head + 'px');
          var pos = 0;
          var tr = 0;
          $(href).find('.selModalList ul li').each(function (key, value) {
            if ($(value).hasClass('selected')) {
              tr = $(value).outerHeight(true);
              return false;
            } else {
              pos += $(value).outerHeight(true);
            }
          });
          var sh = $(href).find('.selModalList').height();
          if (sh > 0) pos -= sh / 2;
          if (tr > 0) pos += tr / 2;
          $(href).find('.selModalList').scrollTop(pos);
        });
        $('[data-selmodal="' + sel_name_attr + '"]').find('.selModalList').on('touchstart', function () {
          if ($(this).scrollTop() == 0) {
            $(this).scrollTop(1);
          }

          var scrollHeight = $(this)[0].scrollHeight;
          var scrollPosition = $(this).scrollTop() + $(this).height();

          if (scrollHeight == scrollPosition) {
            $(this).scrollTop($(this).scrollTop() - 1);
          }
        });
        $('[data-selmodal="' + sel_name_attr + '"]').find('.selModalList li').on('touchstart', function () {
          $(this).addClass('totch');
        });
        $('[data-selmodal="' + sel_name_attr + '"]').find('.selModalList li').on('touchend', function () {
          $(this).closest('ul').find('li').removeClass('totch');
        }); //ボタンクリック

        $('[data-selmodal="' + sel_name_attr + '"]').find('li').click(function () {
          $(this).closest('ul').find('li').removeClass('selected');
          $(this).addClass('selected');
          var hoge = $(this).closest('.selModal').data('selmodal');
          var this_no = $(this).closest('ul').find('li').index(this);
          var before_no = $('select[name="' + hoge + '"]').prop("selectedIndex");
          $('select[name="' + hoge + '"]').prop("selectedIndex", this_no);
          $('[data-selmodalbtn="' + hoge + '"]').text($(this).text());

          if (this_no != before_no) {
            select_this.trigger('change');
          }
        });
        $('[data-selmodal="' + sel_name_attr + '"]').find('.selModalClose').click(function () {
          $(this).parents(".selModal").hide();
          $('body').removeClass('selModalBody');
        });
      }
    });
  };

  $.fn.selModalSetValue = function (value) {
    var sel_dom = $(this);

    if (sel_dom[0].id == "city_select_element" && city_select_button_create_OK == 0) {} else {
      sel_dom.val(value);
      var sel_text = $(sel_dom).find('option:selected').text();
      var name = sel_dom.attr('name');
      var sel_list = $('[data-selmodal="' + name + '"]');
      var sel_btn = $('[data-selmodalbtn="' + name + '"]');
      sel_list.find('li').removeClass('selected');
      sel_list.find('[data-value="' + value + '"]').addClass('selected');
      sel_btn.text(sel_text);
    }
  };
})(jQuery);

if (targets_edit_sign_input && city_select_start_button_click_discrimination == "ok" && prefectures_select_button.textContent !== "都道府県を選択してください") {
  city_select_start_button_click = document.getElementById("city_select_start_button");
  city_select_start_button_click.click();
  city_select_start_button_click_discrimination = "no";
}

function prefectures_select_button_create(sel_name_attr) {
  var prefectures_select_button = document.getElementById("prefectures_select_button");

  if (prefectures_select_button) {
    prefectures_select_button.setAttribute("data-selmodalbtn", sel_name_attr);
  }
}

function city_select_button_create(sel_name_attr) {
  if (city_select_button) {
    city_select_button.setAttribute("data-selmodalbtn", sel_name_attr);
  }
}

function app_select_button_create(sel_name_attr) {
  var app_select_button = document.getElementById("app_select_button");

  if (app_select_button) {
    app_select_button.setAttribute("data-selmodalbtn", sel_name_attr);
  }
}

function appearance_select_button_create(sel_name_attr) {
  var appearance_select_button = document.getElementById("appearance_select_button");

  if (appearance_select_button) {
    appearance_select_button.setAttribute("data-selmodalbtn", sel_name_attr);
  }
}

function purpose_select_button_create(sel_name_attr) {
  var purpose_select_button = document.getElementById("purpose_select_button");

  if (purpose_select_button) {
    purpose_select_button.setAttribute("data-selmodalbtn", sel_name_attr);
  }
} // 女性登録 submit


if (document.targets_registration_form) {
  document.targets_registration_form.targets_registration_submit.addEventListener('click', function () {
    beforesubmit_select_check();
  });
}

function beforesubmit_select_check() {
  var targets_registration_submit_button = document.getElementById("targets_registration_submit_button");
  var targets_registration_app_error_message = document.getElementById("targets_registration_app_error_message");
  var targets_registration_appearance_error_message = document.getElementById("targets_registration_appearance_error_message");
  var targets_registration_name_error_message = document.getElementById("targets_registration_name_error_message");
  var targets_registration_name_word_count_error_message = document.getElementById("targets_registration_name_word_count_error_message");
  var targets_registration_purpose_error_message = document.getElementById("targets_registration_purpose_error_message"); // バリデーション失敗(アプリ)

  if (app_select_button.textContent == 'アプリを選択してください' && targets_registration_app_error_message == null) {
    // エラーメッセージ生成
    var app_error_message = document.createElement('p');
    app_error_message.textContent = '「アプリ」は選択必須です。';
    app_error_message.id = 'targets_registration_app_error_message';
    targets_registration_submit_button.before(app_error_message);
  } else if (app_select_button.textContent !== 'アプリを選択してください' && targets_registration_app_error_message !== null) {
    targets_registration_app_error_message.remove();
  } // バリデーション失敗(容姿)


  if (appearance_select_button.textContent == '容姿を選択してください' && targets_registration_appearance_error_message == null) {
    // エラーメッセージ生成
    var appearance_error_message = document.createElement('p');
    appearance_error_message.textContent = '「容姿」は選択必須です。';
    appearance_error_message.id = 'targets_registration_appearance_error_message';
    targets_registration_submit_button.before(appearance_error_message);
  } else if (appearance_select_button.textContent !== '容姿を選択してください' && targets_registration_appearance_error_message !== null) {
    targets_registration_appearance_error_message.remove();
  } // バリデーション失敗(名前未入力)


  if (!name_select.classList.contains("valid") && !name_select.classList.contains("invalid") && targets_registration_name_error_message == null) {
    // エラーメッセージ生成
    var name_error_message = document.createElement('p');
    name_error_message.textContent = '「名前」は入力必須です。';
    name_error_message.id = 'targets_registration_name_error_message';
    targets_registration_submit_button.before(name_error_message);
  } else if (name_select.classList.contains("valid") && targets_registration_name_error_message !== null) {
    targets_registration_name_error_message.remove();
  } else if (name_select.classList.contains("invalid") && targets_registration_name_error_message !== null) {
    targets_registration_name_error_message.remove();
  } // バリデーション失敗(名前文字数制限) # 4文字まで


  if (name_select.classList.contains("invalid") && targets_registration_name_word_count_error_message == null) {
    // エラーメッセージ生成
    var name_word_count_error_message = document.createElement('p');
    name_word_count_error_message.textContent = '「名前」は4文字以下にして下さい。';
    name_word_count_error_message.id = 'targets_registration_name_word_count_error_message';
    targets_registration_submit_button.before(name_word_count_error_message);
  } else if (!name_select.classList.contains("invalid") && targets_registration_name_word_count_error_message !== null) {
    targets_registration_name_word_count_error_message.remove();
  } // バリデーション失敗(目的)


  if (purpose_select_button.textContent == '目的を選択してください' && targets_registration_purpose_error_message == null) {
    // エラーメッセージ生成
    var purpose_error_message = document.createElement('p');
    purpose_error_message.textContent = '「目的」は選択必須です。';
    purpose_error_message.id = 'targets_registration_purpose_error_message';
    targets_registration_submit_button.before(purpose_error_message);
  } else if (purpose_select_button.textContent !== '目的を選択してください' && targets_registration_purpose_error_message !== null) {
    targets_registration_purpose_error_message.remove();
  } // バリデーション成功(全て)


  if (app_select_button.textContent !== 'アプリを選択してください' && appearance_select_button.textContent !== '容姿を選択してください' && purpose_select_button.textContent !== '目的を選択してください' && name_select.classList.contains("valid")) {
    document.targets_registration_form.submit();
  }
}

/***/ }),

/***/ "./app/javascript/channels/app-diagnostic.js":
/*!***************************************************!*\
  !*** ./app/javascript/channels/app-diagnostic.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// アプリ診断
var app_diagnostics_text = document.getElementById("app-diagnostics-text");
var error_message = document.createElement('p');
error_message.textContent = 'どれか1つは選択して下さい';
error_message.id = 'app-diagnostics-error-message'; // question-1 answer-1

var button_1_1 = document.getElementById("app-diagnostics-description-select-button-1-1");
var hidden_field_1_1 = document.getElementById("allocation-1-1");

if (button_1_1) {
  button_1_1.addEventListener('click', function () {
    if (button_1_1.classList.contains("buttonwhite")) {
      button_1_1.classList.add('buttonred');
      button_1_1.classList.remove('buttonwhite');
    } else {
      button_1_1.classList.add('buttonwhite');
      button_1_1.classList.remove('buttonred');
    }
  });
} // question-1 answer-2


var button_1_2 = document.getElementById("app-diagnostics-description-select-button-1-2");
var hidden_field_1_2 = document.getElementById("allocation-1-2");

if (button_1_2) {
  button_1_2.addEventListener('click', function () {
    if (button_1_2.classList.contains("buttonwhite")) {
      button_1_2.classList.add('buttonred');
      button_1_2.classList.remove('buttonwhite');
    } else {
      button_1_2.classList.add('buttonwhite');
      button_1_2.classList.remove('buttonred');
    }
  });
} // question-1 submit


if (document.app_diagnostics_form_1) {
  document.app_diagnostics_form_1.app_diagnostics_submit_1.addEventListener('click', function () {
    beforesubmit_1_select_check();
  });
}

function beforesubmit_1_select_check() {
  if (button_1_1.classList.contains("buttonwhite") && button_1_2.classList.contains("buttonwhite")) {
    app_diagnostics_text.appendChild(error_message);
  } else {
    beforesubmit_1();
    document.app_diagnostics_form_1.submit();
  }
}

function beforesubmit_1() {
  if (button_1_1.classList.contains("buttonwhite")) {
    hidden_field_1_1.remove();
  }

  if (button_1_2.classList.contains("buttonwhite")) {
    hidden_field_1_2.remove();
  }
} // question-2 answer-1


var button_2_1 = document.getElementById("app-diagnostics-description-select-button-2-1");
var hidden_field_2_1 = document.getElementById("allocation-2-1");

if (button_2_1) {
  button_2_1.addEventListener('click', function () {
    if (button_2_1.classList.contains("buttonwhite")) {
      button_2_1.classList.add('buttonblue');
      button_2_1.classList.remove('buttonwhite');
    } else {
      button_2_1.classList.add('buttonwhite');
      button_2_1.classList.remove('buttonblue');
    }
  });
} // question-2 answer-2


var button_2_2 = document.getElementById("app-diagnostics-description-select-button-2-2");
var hidden_field_2_2 = document.getElementById("allocation-2-2");

if (button_2_2) {
  button_2_2.addEventListener('click', function () {
    if (button_2_2.classList.contains("buttonwhite")) {
      button_2_2.classList.add('buttonblue');
      button_2_2.classList.remove('buttonwhite');
    } else {
      button_2_2.classList.add('buttonwhite');
      button_2_2.classList.remove('buttonblue');
    }
  });
} // question-2 answer-3


var button_2_3 = document.getElementById("app-diagnostics-description-select-button-2-3");
var hidden_field_2_3 = document.getElementById("allocation-2-3");

if (button_2_3) {
  button_2_3.addEventListener('click', function () {
    if (button_2_3.classList.contains("buttonwhite")) {
      button_2_3.classList.add('buttonblue');
      button_2_3.classList.remove('buttonwhite');
    } else {
      button_2_3.classList.add('buttonwhite');
      button_2_3.classList.remove('buttonblue');
    }
  });
} // question-2 answer-4


var button_2_4 = document.getElementById("app-diagnostics-description-select-button-2-4");
var hidden_field_2_4 = document.getElementById("allocation-2-4");

if (button_2_4) {
  button_2_4.addEventListener('click', function () {
    if (button_2_4.classList.contains("buttonwhite")) {
      button_2_4.classList.add('buttonblue');
      button_2_4.classList.remove('buttonwhite');
    } else {
      button_2_4.classList.add('buttonwhite');
      button_2_4.classList.remove('buttonblue');
    }
  });
} // question-2 submit


if (document.app_diagnostics_form_2) {
  document.app_diagnostics_form_2.app_diagnostics_submit_2.addEventListener('click', function () {
    beforesubmit_2_select_check();
  });
}

function beforesubmit_2_select_check() {
  if (button_2_1.classList.contains("buttonwhite") && button_2_2.classList.contains("buttonwhite") && button_2_3.classList.contains("buttonwhite") && button_2_4.classList.contains("buttonwhite")) {
    app_diagnostics_text.appendChild(error_message);
  } else {
    beforesubmit_2();
    document.app_diagnostics_form_2.submit();
  }
}

function beforesubmit_2() {
  if (button_2_1.classList.contains("buttonwhite")) {
    hidden_field_2_1.remove();
  }

  if (button_2_2.classList.contains("buttonwhite")) {
    hidden_field_2_2.remove();
  }

  if (button_2_3.classList.contains("buttonwhite")) {
    hidden_field_2_3.remove();
  }

  if (button_2_4.classList.contains("buttonwhite")) {
    hidden_field_2_4.remove();
  }
} // question-3 answer-1


var button_3_1 = document.getElementById("app-diagnostics-description-select-button-3-1");
var hidden_field_3_1 = document.getElementById("allocation-3-1");

if (button_3_1) {
  button_3_1.addEventListener('click', function () {
    if (button_3_1.classList.contains("buttonwhite")) {
      button_3_1.classList.add('buttongreen');
      button_3_1.classList.remove('buttonwhite');
    } else {
      button_3_1.classList.add('buttonwhite');
      button_3_1.classList.remove('buttongreen');
    }
  });
} // question-3 answer-2


var button_3_2 = document.getElementById("app-diagnostics-description-select-button-3-2");
var hidden_field_3_2 = document.getElementById("allocation-3-2");

if (button_3_2) {
  button_3_2.addEventListener('click', function () {
    if (button_3_2.classList.contains("buttonwhite")) {
      button_3_2.classList.add('buttongreen');
      button_3_2.classList.remove('buttonwhite');
    } else {
      button_3_2.classList.add('buttonwhite');
      button_3_2.classList.remove('buttongreen');
    }
  });
} // question-3 answer-3


var button_3_3 = document.getElementById("app-diagnostics-description-select-button-3-3");
var hidden_field_3_3 = document.getElementById("allocation-3-3");

if (button_3_3) {
  button_3_3.addEventListener('click', function () {
    if (button_3_3.classList.contains("buttonwhite")) {
      button_3_3.classList.add('buttongreen');
      button_3_3.classList.remove('buttonwhite');
    } else {
      button_3_3.classList.add('buttonwhite');
      button_3_3.classList.remove('buttongreen');
    }
  });
} // question-3 answer-4


var button_3_4 = document.getElementById("app-diagnostics-description-select-button-3-4");
var hidden_field_3_4 = document.getElementById("allocation-3-4");

if (button_3_4) {
  button_3_4.addEventListener('click', function () {
    if (button_3_4.classList.contains("buttonwhite")) {
      button_3_4.classList.add('buttongreen');
      button_3_4.classList.remove('buttonwhite');
    } else {
      button_3_4.classList.add('buttonwhite');
      button_3_4.classList.remove('buttongreen');
    }
  });
} // question-3 answer-5


var button_3_5 = document.getElementById("app-diagnostics-description-select-button-3-5");
var hidden_field_3_5 = document.getElementById("allocation-3-5");

if (button_3_5) {
  button_3_5.addEventListener('click', function () {
    if (button_3_5.classList.contains("buttonwhite")) {
      button_3_5.classList.add('buttongreen');
      button_3_5.classList.remove('buttonwhite');
    } else {
      button_3_5.classList.add('buttonwhite');
      button_3_5.classList.remove('buttongreen');
    }
  });
} // question-3 submit


if (document.app_diagnostics_form_3) {
  document.app_diagnostics_form_3.app_diagnostics_submit_3.addEventListener('click', function () {
    beforesubmit_3_select_check();
  });
}

function beforesubmit_3_select_check() {
  if (button_3_1.classList.contains("buttonwhite") && button_3_2.classList.contains("buttonwhite") && button_3_3.classList.contains("buttonwhite") && button_3_4.classList.contains("buttonwhite") && button_3_5.classList.contains("buttonwhite")) {
    app_diagnostics_text.appendChild(error_message);
  } else {
    beforesubmit_3();
    document.app_diagnostics_form_3.submit();
  }
}

function beforesubmit_3() {
  if (button_3_1.classList.contains("buttonwhite")) {
    hidden_field_3_1.remove();
  }

  if (button_3_2.classList.contains("buttonwhite")) {
    hidden_field_3_2.remove();
  }

  if (button_3_3.classList.contains("buttonwhite")) {
    hidden_field_3_3.remove();
  }

  if (button_3_4.classList.contains("buttonwhite")) {
    hidden_field_3_4.remove();
  }

  if (button_3_5.classList.contains("buttonwhite")) {
    hidden_field_3_5.remove();
  }
}

/***/ }),

/***/ "./app/javascript/channels/app-strategies.js":
/*!***************************************************!*\
  !*** ./app/javascript/channels/app-strategies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// アプリアイコン画像
var app_icon_image = document.getElementById("app_icon_image"); // アプリ攻略タイトル

var app_strategies_show_title = document.getElementById("app-strategies-show-title");

if (app_strategies_show_title) {
  if (app_strategies_show_title.textContent == 'tapple(タップル)攻略') {
    app_icon_image.classList.add('app-image-tapple');
  }
} // ステップボタン


var step_button_1 = document.getElementById("app-strategies-step-button-1");
var step_button_2 = document.getElementById("app-strategies-step-button-2");
var step_button_3 = document.getElementById("app-strategies-step-button-3");
var step_button_4 = document.getElementById("app-strategies-step-button-4");
var step_button_5 = document.getElementById("app-strategies-step-button-5");
var step_button_6 = document.getElementById("app-strategies-step-button-6");
var step_button_7 = document.getElementById("app-strategies-step-button-7");
var step_button_8 = document.getElementById("app-strategies-step-button-8"); // ステップボタンラッパー

var app_strategies_step_button_wrapper = document.getElementById("app-strategies-step-button-wrapper"); // 矢印バー

var show_bar = document.getElementById("app-strategies-show-bar"); //

var show_arrow = document.getElementById("app-strategies-show-arrow"); // トグルスイッチ

var toggle_switch = document.getElementById("toggle_switch"); // トグルスイッチの丸の部分(赤色の丸)

var toggle_radius_button = document.getElementById("toggle-radius-button"); // 彼女作り 文字

var make_girlfriend_character = document.getElementById("make_girlfriend_character"); // 遊び 文字

var play_character = document.getElementById("play_character"); // トグルスイッチをクリックする(切り替える)と、ステップボタンの色を変更
// 「彼女作り」 => 「遊び」 にトグルスイッチを切り替える。(青 => 赤)

if (toggle_switch) {
  toggle_switch.addEventListener('click', function () {
    // classをadd (ステップボタンを赤色にする)
    step_button_1.classList.add('play-button');
    step_button_2.classList.add('play-button');
    step_button_3.classList.add('play-button');
    step_button_4.classList.add('play-button');
    step_button_5.classList.add('play-button');
    step_button_6.classList.add('play-button');
    step_button_7.classList.add('play-button');
    step_button_8.classList.add('play-button');
    play_character.classList.add('on'); // classをremove

    step_button_1.classList.remove('make_girlfriend-button');
    step_button_2.classList.remove('make_girlfriend-button');
    step_button_3.classList.remove('make_girlfriend-button');
    step_button_4.classList.remove('make_girlfriend-button');
    step_button_5.classList.remove('make_girlfriend-button');
    step_button_6.classList.remove('make_girlfriend-button');
    step_button_7.classList.remove('make_girlfriend-button');
    step_button_8.classList.remove('make_girlfriend-button');
    app_strategies_step_button_wrapper.classList.add('step-play-button');
    make_girlfriend_character.classList.remove('on');
    toggle_radius_button.classList.remove('hidden');
    show_bar.classList.add('step-play-button-bar');
    show_arrow.classList.add('step-play-button-arrow'); // ステップボタンのhref(url)を変更
    // ステップボタン1

    var step_button_1_red = document.getElementById('app-strategies-step-button-1');
    var step_button_1_red_href = '2/step#1'; //href属性の値を書き換える

    step_button_1_red.setAttribute('href', step_button_1_red_href); // ステップボタン2

    var step_button_2_red = document.getElementById('app-strategies-step-button-2');
    var step_button_2_red_href = '2/step#2'; //href属性の値を書き換える

    step_button_2_red.setAttribute('href', step_button_2_red_href); // ステップボタン3

    var step_button_3_red = document.getElementById('app-strategies-step-button-3');
    var step_button_3_red_href = '2/step#3'; //href属性の値を書き換える

    step_button_3_red.setAttribute('href', step_button_3_red_href); // ステップボタン4

    var step_button_4_red = document.getElementById('app-strategies-step-button-4');
    var step_button_4_red_href = '2/step#4'; //href属性の値を書き換える

    step_button_4_red.setAttribute('href', step_button_4_red_href); // ステップボタン5

    var step_button_5_red = document.getElementById('app-strategies-step-button-5');
    var step_button_5_red_href = '2/step#5'; //href属性の値を書き換える

    step_button_5_red.setAttribute('href', step_button_5_red_href); //ステップボタン6

    var step_button_6_red = document.getElementById('app-strategies-step-button-6');
    var step_button_6_red_href = '2/step#6'; //href属性の値を書き換える

    step_button_6_red.setAttribute('href', step_button_6_red_href); // ステップボタン7

    var step_button_7_red = document.getElementById('app-strategies-step-button-7');
    var step_button_7_red_href = '2/step#7'; //href属性の値を書き換える

    step_button_7_red.setAttribute('href', step_button_7_red_href); // ステップボタン8

    var step_button_8_red = document.getElementById('app-strategies-step-button-8');
    var step_button_8_red_href = '2/step#8'; //href属性の値を書き換える

    step_button_8_red.setAttribute('href', step_button_8_red_href);
  });
} // 「遊び」 => 「彼女作り」 にトグルスイッチを切り替える。(赤 => 青)


if (toggle_radius_button) {
  toggle_radius_button.addEventListener('click', function () {
    toggle_switch.click();
    toggle_radius_button.classList.add('hidden'); // classをadd (ステップボタンを青色にする)

    step_button_1.classList.add('make_girlfriend-button');
    step_button_2.classList.add('make_girlfriend-button');
    step_button_3.classList.add('make_girlfriend-button');
    step_button_4.classList.add('make_girlfriend-button');
    step_button_5.classList.add('make_girlfriend-button');
    step_button_6.classList.add('make_girlfriend-button');
    step_button_7.classList.add('make_girlfriend-button');
    step_button_8.classList.add('make_girlfriend-button');
    make_girlfriend_character.classList.add('on'); // classをremove

    step_button_1.classList.remove('play-button');
    step_button_2.classList.remove('play-button');
    step_button_3.classList.remove('play-button');
    step_button_4.classList.remove('play-button');
    step_button_5.classList.remove('play-button');
    step_button_6.classList.remove('play-button');
    step_button_7.classList.remove('play-button');
    step_button_8.classList.remove('play-button');
    app_strategies_step_button_wrapper.classList.remove('step-play-button');
    play_character.classList.remove('on');
    show_bar.classList.remove('step-play-button-bar');
    show_arrow.classList.remove('step-play-button-arrow'); // ステップボタンのhref(url)を変更
    // ステップボタン1

    var step_button_1_red = document.getElementById('app-strategies-step-button-1');
    var step_button_1_red_href = '1/step#1'; //href属性の値を書き換える

    step_button_1_red.setAttribute('href', step_button_1_red_href); // ステップボタン2

    var step_button_2_red = document.getElementById('app-strategies-step-button-2');
    var step_button_2_red_href = '1/step#2'; //href属性の値を書き換える

    step_button_2_red.setAttribute('href', step_button_2_red_href); // ステップボタン3

    var step_button_3_red = document.getElementById('app-strategies-step-button-3');
    var step_button_3_red_href = '1/step#3'; //href属性の値を書き換える

    step_button_3_red.setAttribute('href', step_button_3_red_href); // ステップボタン4

    var step_button_4_red = document.getElementById('app-strategies-step-button-4');
    var step_button_4_red_href = '1/step#4'; //href属性の値を書き換える

    step_button_4_red.setAttribute('href', step_button_4_red_href); // ステップボタン5

    var step_button_5_red = document.getElementById('app-strategies-step-button-5');
    var step_button_5_red_href = '1/step#5'; //href属性の値を書き換える

    step_button_5_red.setAttribute('href', step_button_5_red_href); //ステップボタン6

    var step_button_6_red = document.getElementById('app-strategies-step-button-6');
    var step_button_6_red_href = '1/step#6'; //href属性の値を書き換える

    step_button_6_red.setAttribute('href', step_button_6_red_href); // ステップボタン7

    var step_button_7_red = document.getElementById('app-strategies-step-button-7');
    var step_button_7_red_href = '1/step#7'; //href属性の値を書き換える

    step_button_7_red.setAttribute('href', step_button_7_red_href); // ステップボタン8

    var step_button_8_red = document.getElementById('app-strategies-step-button-8');
    var step_button_8_red_href = '1/step#8'; //href属性の値を書き換える

    step_button_8_red.setAttribute('href', step_button_8_red_href);
  });
}

/***/ }),

/***/ "./app/javascript/channels/date_plans.js":
/*!***********************************************!*\
  !*** ./app/javascript/channels/date_plans.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('#date_plans_select_box').bind('change', function () {
    var linkurl = $('#date_plans_select_box').val();
    $('#date_plans_select_box_link').attr({
      href: linkurl
    });
  });
});

/***/ }),

/***/ "./app/javascript/channels/datepicker.js":
/*!***********************************************!*\
  !*** ./app/javascript/channels/datepicker.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems);
}); // Or with jQuery

$(document).ready(function () {
  $('.datepicker').datepicker();
});

/***/ }),

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$");

channels.keys().forEach(channels);

/***/ }),

/***/ "./app/javascript/channels/legacy.js":
/*!*******************************************!*\
  !*** ./app/javascript/channels/legacy.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint
   asi: true,
   unused: true,
   boss: true,
   loopfunc: true,
   eqnull: true
 */

/*!
 * Legacy browser support
 */
// Map array support
if (![].map) {
  Array.prototype.map = function (callback, self) {
    var array = this,
        len = array.length,
        newArray = new Array(len);

    for (var i = 0; i < len; i++) {
      if (i in array) {
        newArray[i] = callback.call(self, array[i], i, array);
      }
    }

    return newArray;
  };
} // Filter array support


if (![].filter) {
  Array.prototype.filter = function (callback) {
    if (this == null) throw new TypeError();
    var t = Object(this),
        len = t.length >>> 0;
    if (typeof callback != 'function') throw new TypeError();
    var newArray = [],
        thisp = arguments[1];

    for (var i = 0; i < len; i++) {
      if (i in t) {
        var val = t[i];
        if (callback.call(thisp, val, i, t)) newArray.push(val);
      }
    }

    return newArray;
  };
} // Index of array support


if (![].indexOf) {
  Array.prototype.indexOf = function (searchElement) {
    if (this == null) throw new TypeError();
    var t = Object(this),
        len = t.length >>> 0;
    if (len === 0) return -1;
    var n = 0;

    if (arguments.length > 1) {
      n = Number(arguments[1]);

      if (n != n) {
        n = 0;
      } else if (n !== 0 && n != Infinity && n != -Infinity) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
      }
    }

    if (n >= len) return -1;
    var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);

    for (; k < len; k++) {
      if (k in t && t[k] === searchElement) return k;
    }

    return -1;
  };
}
/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * http://blog.stevenlevithan.com/archives/cross-browser-split
 */


var nativeSplit = String.prototype.split,
    compliantExecNpcg = /()??/.exec('')[1] === undefined;

String.prototype.split = function (separator, limit) {
  var str = this;

  if (Object.prototype.toString.call(separator) !== '[object RegExp]') {
    return nativeSplit.call(str, separator, limit);
  }

  var output = [],
      flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.extended ? 'x' : '') + (separator.sticky ? 'y' : ''),
      lastLastIndex = 0,
      separator2,
      match,
      lastIndex,
      lastLength;
  separator = new RegExp(separator.source, flags + 'g');
  str += '';

  if (!compliantExecNpcg) {
    separator2 = new RegExp('^' + separator.source + '$(?!\\s)', flags);
  }

  limit = limit === undefined ? -1 >>> 0 : limit >>> 0;

  while (match = separator.exec(str)) {
    lastIndex = match.index + match[0].length;

    if (lastIndex > lastLastIndex) {
      output.push(str.slice(lastLastIndex, match.index));

      if (!compliantExecNpcg && match.length > 1) {
        match[0].replace(separator2, function () {
          for (var i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) {
              match[i] = undefined;
            }
          }
        });
      }

      if (match.length > 1 && match.index < str.length) {
        Array.prototype.push.apply(output, match.slice(1));
      }

      lastLength = match[0].length;
      lastLastIndex = lastIndex;

      if (output.length >= limit) {
        break;
      }
    }

    if (separator.lastIndex === match.index) {
      separator.lastIndex++;
    }
  }

  if (lastLastIndex === str.length) {
    if (lastLength || !separator.test('')) {
      output.push('');
    }
  } else {
    output.push(str.slice(lastLastIndex));
  }

  return output.length > limit ? output.slice(0, limit) : output;
};

/***/ }),

/***/ "./app/javascript/channels/picker.date.js":
/*!************************************************!*\
  !*** ./app/javascript/channels/picker.date.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Date picker for pickadate.js v3.6.4
 * http://amsul.github.io/pickadate.js/date.htm
 */
(function (factory) {
  // AMD.
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./picker */ "./app/javascript/channels/picker.js"), !(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // Node.js/browserify.
  else {}
})(function (Picker, $) {
  /**
   * Globals and constants
   */
  var DAYS_IN_WEEK = 7,
      WEEKS_IN_CALENDAR = 6,
      _ = Picker._;
  /**
   * The date picker constructor
   */

  function DatePicker(picker, settings) {
    var calendar = this,
        element = picker.$node[0],
        elementValue = element.value,
        elementDataValue = picker.$node.data('value'),
        valueString = elementDataValue || elementValue,
        formatString = elementDataValue ? settings.formatSubmit : settings.format,
        isRTL = function isRTL() {
      return element.currentStyle ? // For IE.
      element.currentStyle.direction == 'rtl' : // For normal browsers.
      getComputedStyle(picker.$root[0]).direction == 'rtl';
    };

    calendar.settings = settings;
    calendar.$node = picker.$node; // The queue of methods that will be used to build item objects.

    calendar.queue = {
      min: 'measure create',
      max: 'measure create',
      now: 'now create',
      select: 'parse create validate',
      highlight: 'parse navigate create validate',
      view: 'parse create validate viewset',
      disable: 'deactivate',
      enable: 'activate'
    }; // The component's item object.

    calendar.item = {};
    calendar.item.clear = null;
    calendar.item.disable = (settings.disable || []).slice(0);
    calendar.item.enable = -function (collectionDisabled) {
      return collectionDisabled[0] === true ? collectionDisabled.shift() : -1;
    }(calendar.item.disable);
    calendar.set('min', settings.min).set('max', settings.max).set('now'); // When there’s a value, set the `select`, which in turn
    // also sets the `highlight` and `view`.

    if (valueString) {
      calendar.set('select', valueString, {
        format: formatString,
        defaultValue: true
      });
    } // If there’s no value, default to highlighting “today”.
    else {
        calendar.set('select', null).set('highlight', calendar.item.now);
      } // The keycode to movement mapping.


    calendar.key = {
      40: 7,
      // Down
      38: -7,
      // Up
      39: function _() {
        return isRTL() ? -1 : 1;
      },
      // Right
      37: function _() {
        return isRTL() ? 1 : -1;
      },
      // Left
      go: function go(timeChange) {
        var highlightedObject = calendar.item.highlight,
            targetDate = new Date(highlightedObject.year, highlightedObject.month, highlightedObject.date + timeChange);
        calendar.set('highlight', targetDate, {
          interval: timeChange
        });
        this.render();
      }
    }; // Bind some picker events.

    picker.on('render', function () {
      picker.$root.find('.' + settings.klass.selectMonth).on('change', function () {
        var value = this.value;

        if (value) {
          picker.set('highlight', [picker.get('view').year, value, picker.get('highlight').date]);
          picker.$root.find('.' + settings.klass.selectMonth).trigger('focus');
        }
      });
      picker.$root.find('.' + settings.klass.selectYear).on('change', function () {
        var value = this.value;

        if (value) {
          picker.set('highlight', [value, picker.get('view').month, picker.get('highlight').date]);
          picker.$root.find('.' + settings.klass.selectYear).trigger('focus');
        }
      });
    }, 1).on('open', function () {
      var includeToday = '';

      if (calendar.disabled(calendar.get('now'))) {
        includeToday = ':not(.' + settings.klass.buttonToday + ')';
      }

      picker.$root.find('button' + includeToday + ', select').attr('disabled', false);
    }, 1).on('close', function () {
      picker.$root.find('button, select').attr('disabled', true);
    }, 1);
  } //DatePicker

  /**
   * Set a datepicker item object.
   */


  DatePicker.prototype.set = function (type, value, options) {
    var calendar = this,
        calendarItem = calendar.item; // If the value is `null` just set it immediately.

    if (value === null) {
      if (type == 'clear') type = 'select';
      calendarItem[type] = value;
      return calendar;
    } // Otherwise go through the queue of methods, and invoke the functions.
    // Update this as the time unit, and set the final value as this item.
    // * In the case of `enable`, keep the queue but set `disable` instead.
    //   And in the case of `flip`, keep the queue but set `enable` instead.


    calendarItem[type == 'enable' ? 'disable' : type == 'flip' ? 'enable' : type] = calendar.queue[type].split(' ').map(function (method) {
      value = calendar[method](type, value, options);
      return value;
    }).pop(); // Check if we need to cascade through more updates.

    if (type == 'select') {
      calendar.set('highlight', calendarItem.select, options);
    } else if (type == 'highlight') {
      calendar.set('view', calendarItem.highlight, options);
    } else if (type.match(/^(flip|min|max|disable|enable)$/)) {
      if (calendarItem.select && calendar.disabled(calendarItem.select)) {
        calendar.set('select', calendarItem.select, options);
      }

      if (calendarItem.highlight && calendar.disabled(calendarItem.highlight)) {
        calendar.set('highlight', calendarItem.highlight, options);
      }
    }

    return calendar;
  }; //DatePicker.prototype.set

  /**
   * Get a datepicker item object.
   */


  DatePicker.prototype.get = function (type) {
    return this.item[type];
  }; //DatePicker.prototype.get

  /**
   * Create a picker date object.
   */


  DatePicker.prototype.create = function (type, value, options) {
    var isInfiniteValue,
        calendar = this; // If there’s no value, use the type as the value.

    value = value === undefined ? type : value; // If it’s infinity, update the value.

    if (value == -Infinity || value == Infinity) {
      isInfiniteValue = value;
    } // If it’s an object, use the native date object.
    else if ($.isPlainObject(value) && _.isInteger(value.pick)) {
        value = value.obj;
      } // If it’s an array, convert it into a date and make sure
      // that it’s a valid date – otherwise default to today.
      else if ($.isArray(value)) {
          value = new Date(value[0], value[1], value[2]);
          value = _.isDate(value) ? value : calendar.create().obj;
        } // If it’s a number or date object, make a normalized date.
        else if (_.isInteger(value) || _.isDate(value)) {
            value = calendar.normalize(new Date(value), options);
          } // If it’s a literal true or any other case, set it to now.
          else
            /*if ( value === true )*/
            {
              value = calendar.now(type, value, options);
            } // Return the compiled object.


    return {
      year: isInfiniteValue || value.getFullYear(),
      month: isInfiniteValue || value.getMonth(),
      date: isInfiniteValue || value.getDate(),
      day: isInfiniteValue || value.getDay(),
      obj: isInfiniteValue || value,
      pick: isInfiniteValue || value.getTime()
    };
  }; //DatePicker.prototype.create

  /**
   * Create a range limit object using an array, date object,
   * literal “true”, or integer relative to another time.
   */


  DatePicker.prototype.createRange = function (from, to) {
    var calendar = this,
        createDate = function createDate(date) {
      if (date === true || $.isArray(date) || _.isDate(date)) {
        return calendar.create(date);
      }

      return date;
    }; // Create objects if possible.


    if (!_.isInteger(from)) {
      from = createDate(from);
    }

    if (!_.isInteger(to)) {
      to = createDate(to);
    } // Create relative dates.


    if (_.isInteger(from) && $.isPlainObject(to)) {
      from = [to.year, to.month, to.date + from];
    } else if (_.isInteger(to) && $.isPlainObject(from)) {
      to = [from.year, from.month, from.date + to];
    }

    return {
      from: createDate(from),
      to: createDate(to)
    };
  }; //DatePicker.prototype.createRange

  /**
   * Check if a date unit falls within a date range object.
   */


  DatePicker.prototype.withinRange = function (range, dateUnit) {
    range = this.createRange(range.from, range.to);
    return dateUnit.pick >= range.from.pick && dateUnit.pick <= range.to.pick;
  };
  /**
   * Check if two date range objects overlap.
   */


  DatePicker.prototype.overlapRanges = function (one, two) {
    var calendar = this; // Convert the ranges into comparable dates.

    one = calendar.createRange(one.from, one.to);
    two = calendar.createRange(two.from, two.to);
    return calendar.withinRange(one, two.from) || calendar.withinRange(one, two.to) || calendar.withinRange(two, one.from) || calendar.withinRange(two, one.to);
  };
  /**
   * Get the date today.
   */


  DatePicker.prototype.now = function (type, value, options) {
    value = new Date();

    if (options && options.rel) {
      value.setDate(value.getDate() + options.rel);
    }

    return this.normalize(value, options);
  };
  /**
   * Navigate to next/prev month.
   */


  DatePicker.prototype.navigate = function (type, value, options) {
    var targetDateObject,
        targetYear,
        targetMonth,
        targetDate,
        isTargetArray = $.isArray(value),
        isTargetObject = $.isPlainObject(value),
        viewsetObject = this.item.view;
    /*,
    safety = 100*/

    if (isTargetArray || isTargetObject) {
      if (isTargetObject) {
        targetYear = value.year;
        targetMonth = value.month;
        targetDate = value.date;
      } else {
        targetYear = +value[0];
        targetMonth = +value[1];
        targetDate = +value[2];
      } // If we’re navigating months but the view is in a different
      // month, navigate to the view’s year and month.


      if (options && options.nav && viewsetObject && viewsetObject.month !== targetMonth) {
        targetYear = viewsetObject.year;
        targetMonth = viewsetObject.month;
      } // Figure out the expected target year and month.


      targetDateObject = new Date(targetYear, targetMonth + (options && options.nav ? options.nav : 0), 1);
      targetYear = targetDateObject.getFullYear();
      targetMonth = targetDateObject.getMonth(); // If the month we’re going to doesn’t have enough days,
      // keep decreasing the date until we reach the month’s last date.

      while (
      /*safety &&*/
      new Date(targetYear, targetMonth, targetDate).getMonth() !== targetMonth) {
        targetDate -= 1;
        /*safety -= 1
        if ( !safety ) {
            throw 'Fell into an infinite loop while navigating to ' + new Date( targetYear, targetMonth, targetDate ) + '.'
        }*/
      }

      value = [targetYear, targetMonth, targetDate];
    }

    return value;
  }; //DatePicker.prototype.navigate

  /**
   * Normalize a date by setting the hours to midnight.
   */


  DatePicker.prototype.normalize = function (value
  /*, options*/
  ) {
    value.setHours(0, 0, 0, 0);
    return value;
  };
  /**
   * Measure the range of dates.
   */


  DatePicker.prototype.measure = function (type, value
  /*, options*/
  ) {
    var calendar = this; // If it's an integer, get a date relative to today.

    if (_.isInteger(value)) {
      value = calendar.now(type, value, {
        rel: value
      });
    } // If it’s anything false-y, remove the limits.
    else if (!value) {
        value = type == 'min' ? -Infinity : Infinity;
      } // If it’s a string, parse it.
      else if (typeof value == 'string') {
          value = calendar.parse(type, value);
        }

    return value;
  }; ///DatePicker.prototype.measure

  /**
   * Create a viewset object based on navigation.
   */


  DatePicker.prototype.viewset = function (type, dateObject
  /*, options*/
  ) {
    return this.create([dateObject.year, dateObject.month, 1]);
  };
  /**
   * Validate a date as enabled and shift if needed.
   */


  DatePicker.prototype.validate = function (type, dateObject, options) {
    var calendar = this,
        // Keep a reference to the original date.
    originalDateObject = dateObject,
        // Make sure we have an interval.
    interval = options && options.interval ? options.interval : 1,
        // Check if the calendar enabled dates are inverted.
    isFlippedBase = calendar.item.enable === -1,
        // Check if we have any enabled dates after/before now.
    hasEnabledBeforeTarget,
        hasEnabledAfterTarget,
        // The min & max limits.
    minLimitObject = calendar.item.min,
        maxLimitObject = calendar.item.max,
        // Check if we’ve reached the limit during shifting.
    reachedMin,
        reachedMax,
        // Check if the calendar is inverted and at least one weekday is enabled.
    hasEnabledWeekdays = isFlippedBase && calendar.item.disable.filter(function (value) {
      // If there’s a date, check where it is relative to the target.
      if ($.isArray(value)) {
        var dateTime = calendar.create(value).pick;
        if (dateTime < dateObject.pick) hasEnabledBeforeTarget = true;else if (dateTime > dateObject.pick) hasEnabledAfterTarget = true;
      } // Return only integers for enabled weekdays.


      return _.isInteger(value);
    }).length;
    /*,
    safety = 100*/
    // Cases to validate for:
    // [1] Not inverted and date disabled.
    // [2] Inverted and some dates enabled.
    // [3] Not inverted and out of range.
    //
    // Cases to **not** validate for:
    // • Navigating months.
    // • Not inverted and date enabled.
    // • Inverted and all dates disabled.
    // • ..and anything else.

    if (!options || !options.nav && !options.defaultValue) if (
    /* 1 */
    !isFlippedBase && calendar.disabled(dateObject) ||
    /* 2 */
    isFlippedBase && calendar.disabled(dateObject) && (hasEnabledWeekdays || hasEnabledBeforeTarget || hasEnabledAfterTarget) ||
    /* 3 */
    !isFlippedBase && (dateObject.pick <= minLimitObject.pick || dateObject.pick >= maxLimitObject.pick)) {
      // When inverted, flip the direction if there aren’t any enabled weekdays
      // and there are no enabled dates in the direction of the interval.
      if (isFlippedBase && !hasEnabledWeekdays && (!hasEnabledAfterTarget && interval > 0 || !hasEnabledBeforeTarget && interval < 0)) {
        interval *= -1;
      } // Keep looping until we reach an enabled date.


      while (
      /*safety &&*/
      calendar.disabled(dateObject)) {
        /*safety -= 1
        if ( !safety ) {
            throw 'Fell into an infinite loop while validating ' + dateObject.obj + '.'
        }*/
        // If we’ve looped into the next/prev month with a large interval, return to the original date and flatten the interval.
        if (Math.abs(interval) > 1 && (dateObject.month < originalDateObject.month || dateObject.month > originalDateObject.month)) {
          dateObject = originalDateObject;
          interval = interval > 0 ? 1 : -1;
        } // If we’ve reached the min/max limit, reverse the direction, flatten the interval and set it to the limit.


        if (dateObject.pick <= minLimitObject.pick) {
          reachedMin = true;
          interval = 1;
          dateObject = calendar.create([minLimitObject.year, minLimitObject.month, minLimitObject.date + (dateObject.pick === minLimitObject.pick ? 0 : -1)]);
        } else if (dateObject.pick >= maxLimitObject.pick) {
          reachedMax = true;
          interval = -1;
          dateObject = calendar.create([maxLimitObject.year, maxLimitObject.month, maxLimitObject.date + (dateObject.pick === maxLimitObject.pick ? 0 : 1)]);
        } // If we’ve reached both limits, just break out of the loop.


        if (reachedMin && reachedMax) {
          break;
        } // Finally, create the shifted date using the interval and keep looping.


        dateObject = calendar.create([dateObject.year, dateObject.month, dateObject.date + interval]);
      }
    } //endif
    // Return the date object settled on.

    return dateObject;
  }; //DatePicker.prototype.validate

  /**
   * Check if a date is disabled.
   */


  DatePicker.prototype.disabled = function (dateToVerify) {
    var calendar = this,
        // Filter through the disabled dates to check if this is one.
    isDisabledMatch = calendar.item.disable.filter(function (dateToDisable) {
      // If the date is a number, match the weekday with 0index and `firstDay` check.
      if (_.isInteger(dateToDisable)) {
        return dateToVerify.day === (calendar.settings.firstDay ? dateToDisable : dateToDisable - 1) % 7;
      } // If it’s an array or a native JS date, create and match the exact date.


      if ($.isArray(dateToDisable) || _.isDate(dateToDisable)) {
        return dateToVerify.pick === calendar.create(dateToDisable).pick;
      } // If it’s an object, match a date within the “from” and “to” range.


      if ($.isPlainObject(dateToDisable)) {
        return calendar.withinRange(dateToDisable, dateToVerify);
      }
    }); // If this date matches a disabled date, confirm it’s not inverted.

    isDisabledMatch = isDisabledMatch.length && !isDisabledMatch.filter(function (dateToDisable) {
      return $.isArray(dateToDisable) && dateToDisable[3] == 'inverted' || $.isPlainObject(dateToDisable) && dateToDisable.inverted;
    }).length; // Check the calendar “enabled” flag and respectively flip the
    // disabled state. Then also check if it’s beyond the min/max limits.

    return calendar.item.enable === -1 ? !isDisabledMatch : isDisabledMatch || dateToVerify.pick < calendar.item.min.pick || dateToVerify.pick > calendar.item.max.pick;
  }; //DatePicker.prototype.disabled

  /**
   * Parse a string into a usable type.
   */


  DatePicker.prototype.parse = function (type, value, options) {
    var calendar = this,
        parsingObject = {}; // If it’s already parsed, we’re good.

    if (!value || typeof value != 'string') {
      return value;
    } // We need a `.format` to parse the value with.


    if (!(options && options.format)) {
      options = options || {};
      options.format = calendar.settings.format;
    } // Convert the format into an array and then map through it.


    calendar.formats.toArray(options.format).map(function (label) {
      var // Grab the formatting label.
      formattingLabel = calendar.formats[label],
          // The format length is from the formatting label function or the
      // label length without the escaping exclamation (!) mark.
      formatLength = formattingLabel ? _.trigger(formattingLabel, calendar, [value, parsingObject]) : label.replace(/^!/, '').length; // If there's a format label, split the value up to the format length.
      // Then add it to the parsing object with appropriate label.

      if (formattingLabel) {
        parsingObject[label] = value.substr(0, formatLength);
      } // Update the value as the substring from format length to end.


      value = value.substr(formatLength);
    }); // Compensate for month 0index.

    return [parsingObject.yyyy || parsingObject.yy, +(parsingObject.mm || parsingObject.m) - 1, parsingObject.dd || parsingObject.d];
  }; //DatePicker.prototype.parse

  /**
   * Various formats to display the object in.
   */


  DatePicker.prototype.formats = function () {
    // Return the length of the first word in a collection.
    function getWordLengthFromCollection(string, collection, dateObject) {
      // Grab the first word from the string.
      // Regex pattern from http://stackoverflow.com/q/150033
      var word = string.match(/[^\x00-\x7F]+|[a-zA-Z0-9_\u0080-\u00FF]+/)[0]; // If there's no month index, add it to the date object

      if (!dateObject.mm && !dateObject.m) {
        dateObject.m = collection.indexOf(word) + 1;
      } // Return the length of the word.


      return word.length;
    } // Get the length of the first word in a string.


    function getFirstWordLength(string) {
      return string.match(/[a-zA-Z0-9_\u0080-\u00FF]+/)[0].length;
    }

    return {
      d: function d(string, dateObject) {
        // If there's string, then get the digits length.
        // Otherwise return the selected date.
        return string ? _.digits(string) : dateObject.date;
      },
      dd: function dd(string, dateObject) {
        // If there's a string, then the length is always 2.
        // Otherwise return the selected date with a leading zero.
        return string ? 2 : _.lead(dateObject.date);
      },
      ddd: function ddd(string, dateObject) {
        // If there's a string, then get the length of the first word.
        // Otherwise return the short selected weekday.
        return string ? getFirstWordLength(string) : this.settings.weekdaysShort[dateObject.day];
      },
      dddd: function dddd(string, dateObject) {
        // If there's a string, then get the length of the first word.
        // Otherwise return the full selected weekday.
        return string ? getFirstWordLength(string) : this.settings.weekdaysFull[dateObject.day];
      },
      m: function m(string, dateObject) {
        // If there's a string, then get the length of the digits
        // Otherwise return the selected month with 0index compensation.
        return string ? _.digits(string) : dateObject.month + 1;
      },
      mm: function mm(string, dateObject) {
        // If there's a string, then the length is always 2.
        // Otherwise return the selected month with 0index and leading zero.
        return string ? 2 : _.lead(dateObject.month + 1);
      },
      mmm: function mmm(string, dateObject) {
        var collection = this.settings.monthsShort; // If there's a string, get length of the relevant month from the short
        // months collection. Otherwise return the selected month from that collection.

        return string ? getWordLengthFromCollection(string, collection, dateObject) : collection[dateObject.month];
      },
      mmmm: function mmmm(string, dateObject) {
        var collection = this.settings.monthsFull; // If there's a string, get length of the relevant month from the full
        // months collection. Otherwise return the selected month from that collection.

        return string ? getWordLengthFromCollection(string, collection, dateObject) : collection[dateObject.month];
      },
      yy: function yy(string, dateObject) {
        // If there's a string, then the length is always 2.
        // Otherwise return the selected year by slicing out the first 2 digits.
        return string ? 2 : ('' + dateObject.year).slice(2);
      },
      yyyy: function yyyy(string, dateObject) {
        // If there's a string, then the length is always 4.
        // Otherwise return the selected year.
        return string ? 4 : dateObject.year;
      },
      // Create an array by splitting the formatting string passed.
      toArray: function toArray(formatString) {
        return formatString.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
      },
      // Format an object into a string using the formatting options.
      toString: function toString(formatString, itemObject) {
        var calendar = this;
        return calendar.formats.toArray(formatString).map(function (label) {
          return _.trigger(calendar.formats[label], calendar, [0, itemObject]) || label.replace(/^!/, '');
        }).join('');
      }
    };
  }(); //DatePicker.prototype.formats

  /**
   * Check if two date units are the exact.
   */


  DatePicker.prototype.isDateExact = function (one, two) {
    var calendar = this; // When we’re working with weekdays, do a direct comparison.

    if (_.isInteger(one) && _.isInteger(two) || typeof one == 'boolean' && typeof two == 'boolean') {
      return one === two;
    } // When we’re working with date representations, compare the “pick” value.


    if ((_.isDate(one) || $.isArray(one)) && (_.isDate(two) || $.isArray(two))) {
      return calendar.create(one).pick === calendar.create(two).pick;
    } // When we’re working with range objects, compare the “from” and “to”.


    if ($.isPlainObject(one) && $.isPlainObject(two)) {
      return calendar.isDateExact(one.from, two.from) && calendar.isDateExact(one.to, two.to);
    }

    return false;
  };
  /**
   * Check if two date units overlap.
   */


  DatePicker.prototype.isDateOverlap = function (one, two) {
    var calendar = this,
        firstDay = calendar.settings.firstDay ? 1 : 0; // When we’re working with a weekday index, compare the days.

    if (_.isInteger(one) && (_.isDate(two) || $.isArray(two))) {
      one = one % 7 + firstDay;
      return one === calendar.create(two).day + 1;
    }

    if (_.isInteger(two) && (_.isDate(one) || $.isArray(one))) {
      two = two % 7 + firstDay;
      return two === calendar.create(one).day + 1;
    } // When we’re working with range objects, check if the ranges overlap.


    if ($.isPlainObject(one) && $.isPlainObject(two)) {
      return calendar.overlapRanges(one, two);
    }

    return false;
  };
  /**
   * Flip the “enabled” state.
   */


  DatePicker.prototype.flipEnable = function (val) {
    var itemObject = this.item;
    itemObject.enable = val || (itemObject.enable == -1 ? 1 : -1);
  };
  /**
   * Mark a collection of dates as “disabled”.
   */


  DatePicker.prototype.deactivate = function (type, datesToDisable) {
    var calendar = this,
        disabledItems = calendar.item.disable.slice(0); // If we’re flipping, that’s all we need to do.

    if (datesToDisable == 'flip') {
      calendar.flipEnable();
    } else if (datesToDisable === false) {
      calendar.flipEnable(1);
      disabledItems = [];
    } else if (datesToDisable === true) {
      calendar.flipEnable(-1);
      disabledItems = [];
    } // Otherwise go through the dates to disable.
    else {
        datesToDisable.map(function (unitToDisable) {
          var matchFound; // When we have disabled items, check for matches.
          // If something is matched, immediately break out.

          for (var index = 0; index < disabledItems.length; index += 1) {
            if (calendar.isDateExact(unitToDisable, disabledItems[index])) {
              matchFound = true;
              break;
            }
          } // If nothing was found, add the validated unit to the collection.


          if (!matchFound) {
            if (_.isInteger(unitToDisable) || _.isDate(unitToDisable) || $.isArray(unitToDisable) || $.isPlainObject(unitToDisable) && unitToDisable.from && unitToDisable.to) {
              disabledItems.push(unitToDisable);
            }
          }
        });
      } // Return the updated collection.


    return disabledItems;
  }; //DatePicker.prototype.deactivate

  /**
   * Mark a collection of dates as “enabled”.
   */


  DatePicker.prototype.activate = function (type, datesToEnable) {
    var calendar = this,
        disabledItems = calendar.item.disable,
        disabledItemsCount = disabledItems.length; // If we’re flipping, that’s all we need to do.

    if (datesToEnable == 'flip') {
      calendar.flipEnable();
    } else if (datesToEnable === true) {
      calendar.flipEnable(1);
      disabledItems = [];
    } else if (datesToEnable === false) {
      calendar.flipEnable(-1);
      disabledItems = [];
    } // Otherwise go through the disabled dates.
    else {
        datesToEnable.map(function (unitToEnable) {
          var matchFound, disabledUnit, index, isExactRange; // Go through the disabled items and try to find a match.

          for (index = 0; index < disabledItemsCount; index += 1) {
            disabledUnit = disabledItems[index]; // When an exact match is found, remove it from the collection.

            if (calendar.isDateExact(disabledUnit, unitToEnable)) {
              matchFound = disabledItems[index] = null;
              isExactRange = true;
              break;
            } // When an overlapped match is found, add the “inverted” state to it.
            else if (calendar.isDateOverlap(disabledUnit, unitToEnable)) {
                if ($.isPlainObject(unitToEnable)) {
                  unitToEnable.inverted = true;
                  matchFound = unitToEnable;
                } else if ($.isArray(unitToEnable)) {
                  matchFound = unitToEnable;
                  if (!matchFound[3]) matchFound.push('inverted');
                } else if (_.isDate(unitToEnable)) {
                  matchFound = [unitToEnable.getFullYear(), unitToEnable.getMonth(), unitToEnable.getDate(), 'inverted'];
                }

                break;
              }
          } // If a match was found, remove a previous duplicate entry.


          if (matchFound) for (index = 0; index < disabledItemsCount; index += 1) {
            if (calendar.isDateExact(disabledItems[index], unitToEnable)) {
              disabledItems[index] = null;
              break;
            }
          } // In the event that we’re dealing with an exact range of dates,
          // make sure there are no “inverted” dates because of it.

          if (isExactRange) for (index = 0; index < disabledItemsCount; index += 1) {
            if (calendar.isDateOverlap(disabledItems[index], unitToEnable)) {
              disabledItems[index] = null;
              break;
            }
          } // If something is still matched, add it into the collection.

          if (matchFound) {
            disabledItems.push(matchFound);
          }
        });
      } // Return the updated collection.


    return disabledItems.filter(function (val) {
      return val != null;
    });
  }; //DatePicker.prototype.activate

  /**
   * Create a string for the nodes in the picker.
   */


  DatePicker.prototype.nodes = function (isOpen) {
    var calendar = this,
        settings = calendar.settings,
        calendarItem = calendar.item,
        nowObject = calendarItem.now,
        selectedObject = calendarItem.select,
        highlightedObject = calendarItem.highlight,
        viewsetObject = calendarItem.view,
        disabledCollection = calendarItem.disable,
        minLimitObject = calendarItem.min,
        maxLimitObject = calendarItem.max,
        // Create the calendar table head using a copy of weekday labels collection.
    // * We do a copy so we don't mutate the original array.
    tableHead = function (collection, fullCollection) {
      // If the first day should be Monday, move Sunday to the end.
      if (settings.firstDay) {
        collection.push(collection.shift());
        fullCollection.push(fullCollection.shift());
      } // Create and return the table head group.


      return _.node('thead', _.node('tr', _.group({
        min: 0,
        max: DAYS_IN_WEEK - 1,
        i: 1,
        node: 'th',
        item: function item(counter) {
          return [collection[counter], settings.klass.weekdays, 'scope=col title="' + fullCollection[counter] + '"'];
        }
      }))); //endreturn
    }((settings.showWeekdaysFull ? settings.weekdaysFull : settings.weekdaysShort).slice(0), settings.weekdaysFull.slice(0)),
        //tableHead
    // Create the nav for next/prev month.
    createMonthNav = function createMonthNav(next) {
      // Otherwise, return the created month tag.
      return _.node('div', ' ', settings.klass['nav' + (next ? 'Next' : 'Prev')] + ( // If the focused month is outside the range, disabled the button.
      next && viewsetObject.year >= maxLimitObject.year && viewsetObject.month >= maxLimitObject.month || !next && viewsetObject.year <= minLimitObject.year && viewsetObject.month <= minLimitObject.month ? ' ' + settings.klass.navDisabled : ''), 'data-nav=' + (next || -1) + ' ' + 'tabindex="0" ' + _.ariaAttr({
        role: 'button',
        controls: calendar.$node[0].id + '_table'
      }) + ' ' + 'title="' + (next ? settings.labelMonthNext : settings.labelMonthPrev) + '"'); //endreturn
    },
        //createMonthNav
    // Create the month label.
    createMonthLabel = function createMonthLabel() {
      var monthsCollection = settings.showMonthsShort ? settings.monthsShort : settings.monthsFull; // If there are months to select, add a dropdown menu.

      if (settings.selectMonths) {
        return _.node('select', _.group({
          min: 0,
          max: 11,
          i: 1,
          node: 'option',
          item: function item(loopedMonth) {
            return [// The looped month and no classes.
            monthsCollection[loopedMonth], 0, // Set the value and selected index.
            'value=' + loopedMonth + (viewsetObject.month == loopedMonth ? ' selected' : '') + (viewsetObject.year == minLimitObject.year && loopedMonth < minLimitObject.month || viewsetObject.year == maxLimitObject.year && loopedMonth > maxLimitObject.month ? ' disabled' : '')];
          }
        }), settings.klass.selectMonth, (isOpen ? '' : 'disabled') + ' ' + _.ariaAttr({
          controls: calendar.$node[0].id + '_table'
        }) + ' ' + 'title="' + settings.labelMonthSelect + '"');
      } // If there's a need for a month selector


      return _.node('div', monthsCollection[viewsetObject.month], settings.klass.month);
    },
        //createMonthLabel
    // Create the year label.
    createYearLabel = function createYearLabel() {
      var focusedYear = viewsetObject.year,
          // If years selector is set to a literal "true", set it to 5. Otherwise
      // divide in half to get half before and half after focused year.
      numberYears = settings.selectYears === true ? 5 : ~~(settings.selectYears / 2); // If there are years to select, add a dropdown menu.

      if (numberYears) {
        var minYear = minLimitObject.year,
            maxYear = maxLimitObject.year,
            lowestYear = focusedYear - numberYears,
            highestYear = focusedYear + numberYears; // If the min year is greater than the lowest year, increase the highest year
        // by the difference and set the lowest year to the min year.

        if (minYear > lowestYear) {
          highestYear += minYear - lowestYear;
          lowestYear = minYear;
        } // If the max year is less than the highest year, decrease the lowest year
        // by the lower of the two: available and needed years. Then set the
        // highest year to the max year.


        if (maxYear < highestYear) {
          var availableYears = lowestYear - minYear,
              neededYears = highestYear - maxYear;
          lowestYear -= availableYears > neededYears ? neededYears : availableYears;
          highestYear = maxYear;
        }

        return _.node('select', _.group({
          min: lowestYear,
          max: highestYear,
          i: 1,
          node: 'option',
          item: function item(loopedYear) {
            return [// The looped year and no classes.
            loopedYear, 0, // Set the value and selected index.
            'value=' + loopedYear + (focusedYear == loopedYear ? ' selected' : '')];
          }
        }), settings.klass.selectYear, (isOpen ? '' : 'disabled') + ' ' + _.ariaAttr({
          controls: calendar.$node[0].id + '_table'
        }) + ' ' + 'title="' + settings.labelYearSelect + '"');
      } // Otherwise just return the year focused


      return _.node('div', focusedYear, settings.klass.year);
    }; //createYearLabel
    // Create and return the entire calendar.


    return _.node('div', (settings.selectYears ? createYearLabel() + createMonthLabel() : createMonthLabel() + createYearLabel()) + createMonthNav() + createMonthNav(1), settings.klass.header) + _.node('table', tableHead + _.node('tbody', _.group({
      min: 0,
      max: WEEKS_IN_CALENDAR - 1,
      i: 1,
      node: 'tr',
      item: function item(rowCounter) {
        // If Monday is the first day and the month starts on Sunday, shift the date back a week.
        var shiftDateBy = settings.firstDay && calendar.create([viewsetObject.year, viewsetObject.month, 1]).day === 0 ? -7 : 0;
        return [_.group({
          min: DAYS_IN_WEEK * rowCounter - viewsetObject.day + shiftDateBy + 1,
          // Add 1 for weekday 0index
          max: function max() {
            return this.min + DAYS_IN_WEEK - 1;
          },
          i: 1,
          node: 'td',
          item: function item(targetDate) {
            // Convert the time date from a relative date to a target date.
            targetDate = calendar.create([viewsetObject.year, viewsetObject.month, targetDate + (settings.firstDay ? 1 : 0)]);

            var isSelected = selectedObject && selectedObject.pick == targetDate.pick,
                isHighlighted = highlightedObject && highlightedObject.pick == targetDate.pick,
                isDisabled = disabledCollection && calendar.disabled(targetDate) || targetDate.pick < minLimitObject.pick || targetDate.pick > maxLimitObject.pick,
                formattedDate = _.trigger(calendar.formats.toString, calendar, [settings.format, targetDate]),
                calendarNodeUniqueId = settings.id + '_' + targetDate.pick;

            return [_.node('div', targetDate.date, function (klasses) {
              // Add the `infocus` or `outfocus` classes based on month in view.
              klasses.push(viewsetObject.month == targetDate.month ? settings.klass.infocus : settings.klass.outfocus); // Add the `today` class if needed.

              if (nowObject.pick == targetDate.pick) {
                klasses.push(settings.klass.now);
              } // Add the `selected` class if something's selected and the time matches.


              if (isSelected) {
                klasses.push(settings.klass.selected);
              } // Add the `highlighted` class if something's highlighted and the time matches.


              if (isHighlighted) {
                klasses.push(settings.klass.highlighted);
              } // Add the `disabled` class if something's disabled and the object matches.


              if (isDisabled) {
                klasses.push(settings.klass.disabled);
              }

              return klasses.join(' ');
            }([settings.klass.day]), 'data-pick=' + targetDate.pick + ' id=' + calendarNodeUniqueId + ' tabindex="0" ' + _.ariaAttr({
              role: 'gridcell',
              label: formattedDate,
              selected: isSelected && calendar.$node.val() === formattedDate ? true : null,
              activedescendant: isHighlighted ? targetDate.pick : null,
              disabled: isDisabled ? true : null
            })), '']; //endreturn
          }
        })]; //endreturn
      }
    })), settings.klass.table, 'id="' + calendar.$node[0].id + '_table' + '" ' + _.ariaAttr({
      role: 'grid',
      controls: calendar.$node[0].id,
      readonly: true
    })) + // * For Firefox forms to submit, make sure to set the buttons’ `type` attributes as “button”.
    _.node('div', _.node('button', settings.today, settings.klass.buttonToday, 'type=button data-pick=' + nowObject.pick + (isOpen && !calendar.disabled(nowObject) ? '' : ' disabled') + ' ' + _.ariaAttr({
      controls: calendar.$node[0].id
    })) + _.node('button', settings.clear, settings.klass.buttonClear, 'type=button data-clear=1' + (isOpen ? '' : ' disabled') + ' ' + _.ariaAttr({
      controls: calendar.$node[0].id
    })) + _.node('button', settings.close, settings.klass.buttonClose, 'type=button data-close=true ' + (isOpen ? '' : ' disabled') + ' ' + _.ariaAttr({
      controls: calendar.$node[0].id
    })), settings.klass.footer); //endreturn
  }; //DatePicker.prototype.nodes

  /**
   * The date picker defaults.
   */


  DatePicker.defaults = function (prefix) {
    return {
      // The title label to use for the month nav buttons
      labelMonthNext: 'Next month',
      labelMonthPrev: 'Previous month',
      // The title label to use for the dropdown selectors
      labelMonthSelect: 'Select a month',
      labelYearSelect: 'Select a year',
      // Months and weekdays
      monthsFull: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      weekdaysFull: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      // Today and clear
      today: 'Today',
      clear: 'Clear',
      close: 'Close',
      // Picker close behavior
      closeOnSelect: true,
      closeOnClear: true,
      // Update input value on select/clear
      updateInput: true,
      // The format to show on the `input` element
      format: 'd mmmm, yyyy',
      // Classes
      klass: {
        table: prefix + 'table',
        header: prefix + 'header',
        navPrev: prefix + 'nav--prev',
        navNext: prefix + 'nav--next',
        navDisabled: prefix + 'nav--disabled',
        month: prefix + 'month',
        year: prefix + 'year',
        selectMonth: prefix + 'select--month',
        selectYear: prefix + 'select--year',
        weekdays: prefix + 'weekday',
        day: prefix + 'day',
        disabled: prefix + 'day--disabled',
        selected: prefix + 'day--selected',
        highlighted: prefix + 'day--highlighted',
        now: prefix + 'day--today',
        infocus: prefix + 'day--infocus',
        outfocus: prefix + 'day--outfocus',
        footer: prefix + 'footer',
        buttonClear: prefix + 'button--clear',
        buttonToday: prefix + 'button--today',
        buttonClose: prefix + 'button--close'
      }
    };
  }(Picker.klasses().picker + '__');
  /**
   * Extend the picker to add the date picker.
   */


  Picker.extend('pickadate', DatePicker);
});

/***/ }),

/***/ "./app/javascript/channels/picker.js":
/*!*******************************************!*\
  !*** ./app/javascript/channels/picker.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * pickadate.js v3.6.4, 2019/05/25
 * By Amsul, http://amsul.ca
 * Hosted on http://amsul.github.io/pickadate.js
 * Licensed under MIT
 */
(function (factory) {
  // AMD.
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // Node.js/browserify.
  else {}
})(function ($) {
  var $window = $(window);
  var $document = $(document);
  var $html = $(document.documentElement);
  var supportsTransitions = document.documentElement.style.transition != null;
  /**
   * The picker constructor that creates a blank picker.
   */

  function PickerConstructor(ELEMENT, NAME, COMPONENT, OPTIONS) {
    // If there’s no element, return the picker constructor.
    if (!ELEMENT) return PickerConstructor;

    var IS_DEFAULT_THEME = false,
        // The state of the picker.
    STATE = {
      id: ELEMENT.id || 'P' + Math.abs(~~(Math.random() * new Date())),
      handlingOpen: false
    },
        // Merge the defaults and options passed.
    SETTINGS = COMPONENT ? $.extend(true, {}, COMPONENT.defaults, OPTIONS) : OPTIONS || {},
        // Merge the default classes with the settings classes.
    CLASSES = $.extend({}, PickerConstructor.klasses(), SETTINGS.klass),
        // The element node wrapper into a jQuery object.
    $ELEMENT = $(ELEMENT),
        // Pseudo picker constructor.
    PickerInstance = function PickerInstance() {
      return this.start();
    },
        // The picker prototype.
    P = PickerInstance.prototype = {
      constructor: PickerInstance,
      $node: $ELEMENT,

      /**
       * Initialize everything
       */
      start: function start() {
        // If it’s already started, do nothing.
        if (STATE && STATE.start) return P; // Update the picker states.

        STATE.methods = {};
        STATE.start = true;
        STATE.open = false;
        STATE.type = ELEMENT.type; // Confirm focus state, convert into text input to remove UA stylings,
        // and set as readonly to prevent keyboard popup.

        ELEMENT.autofocus = ELEMENT == getActiveElement();
        ELEMENT.readOnly = !SETTINGS.editable;
        SETTINGS.id = ELEMENT.id = ELEMENT.id || STATE.id;

        if (ELEMENT.type != 'text') {
          ELEMENT.type = 'text';
        } // Create a new picker component with the settings.


        P.component = new COMPONENT(P, SETTINGS); // Create the picker root and then prepare it.

        P.$root = $('<div class="' + CLASSES.picker + '" id="' + ELEMENT.id + '_root" />');
        prepareElementRoot(); // Create the picker holder and then prepare it.

        P.$holder = $(createWrappedComponent()).appendTo(P.$root);
        prepareElementHolder(); // If there’s a format for the hidden input element, create the element.

        if (SETTINGS.formatSubmit) {
          prepareElementHidden();
        } // Prepare the input element.


        prepareElement(); // Insert the hidden input as specified in the settings.

        if (SETTINGS.containerHidden) $(SETTINGS.containerHidden).append(P._hidden);else $ELEMENT.after(P._hidden); // Insert the root as specified in the settings.

        if (SETTINGS.container) $(SETTINGS.container).append(P.$root);else $ELEMENT.after(P.$root); // Bind the default component and settings events.

        P.on({
          start: P.component.onStart,
          render: P.component.onRender,
          stop: P.component.onStop,
          open: P.component.onOpen,
          close: P.component.onClose,
          set: P.component.onSet
        }).on({
          start: SETTINGS.onStart,
          render: SETTINGS.onRender,
          stop: SETTINGS.onStop,
          open: SETTINGS.onOpen,
          close: SETTINGS.onClose,
          set: SETTINGS.onSet
        }); // Once we’re all set, check the theme in use.

        IS_DEFAULT_THEME = isUsingDefaultTheme(P.$holder[0]); // If the element has autofocus, open the picker.

        if (ELEMENT.autofocus) {
          P.open();
        } // Trigger queued the “start” and “render” events.


        return P.trigger('start').trigger('render');
      },
      //start

      /**
       * Render a new picker
       */
      render: function render(entireComponent) {
        // Insert a new component holder in the root or box.
        if (entireComponent) {
          P.$holder = $(createWrappedComponent());
          prepareElementHolder();
          P.$root.html(P.$holder);
        } else P.$root.find('.' + CLASSES.box).html(P.component.nodes(STATE.open)); // Trigger the queued “render” events.


        return P.trigger('render');
      },
      //render

      /**
       * Destroy everything
       */
      stop: function stop() {
        // If it’s already stopped, do nothing.
        if (!STATE.start) return P; // Then close the picker.

        P.close(); // Remove the hidden field.

        if (P._hidden) {
          P._hidden.parentNode.removeChild(P._hidden);
        } // Remove the root.


        P.$root.remove(); // Remove the input class, remove the stored data, and unbind
        // the events (after a tick for IE - see `P.close`).

        $ELEMENT.removeClass(CLASSES.input).removeData(NAME);
        setTimeout(function () {
          $ELEMENT.off('.' + STATE.id);
        }, 0); // Restore the element state

        ELEMENT.type = STATE.type;
        ELEMENT.readOnly = false; // Trigger the queued “stop” events.

        P.trigger('stop'); // Reset the picker states.

        STATE.methods = {};
        STATE.start = false;
        return P;
      },
      //stop

      /**
       * Open up the picker
       */
      open: function open(dontGiveFocus) {
        // If it’s already open, do nothing.
        if (STATE.open) return P; // Add the “active” class.

        $ELEMENT.addClass(CLASSES.active); // * A Firefox bug, when `html` has `overflow:hidden`, results in
        //   killing transitions :(. So add the “opened” state on the next tick.
        //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289

        setTimeout(function () {
          // Add the “opened” class to the picker root.
          P.$root.addClass(CLASSES.opened);
          aria(P.$root[0], 'hidden', false);
        }, 0); // If we have to give focus, bind the element and doc events.

        if (dontGiveFocus !== false) {
          // Set it as open.
          STATE.open = true; // Prevent the page from scrolling.

          if (IS_DEFAULT_THEME) {
            $('body').css('overflow', 'hidden').css('padding-right', '+=' + getScrollbarWidth());
          } // Pass focus to the root element’s jQuery object.


          focusPickerOnceOpened(); // Bind the document events.

          $document.on('click.' + STATE.id + ' focusin.' + STATE.id, function (event) {
            // If the picker is currently midway through processing
            // the opening sequence of events then don't handle clicks
            // on any part of the DOM. This is caused by a bug in Chrome 73
            // where a click event is being generated with the incorrect
            // path in it.
            // In short, if someone does a click that finishes after the
            // new element is created then the path contains only the
            // parent element and not the input element itself.
            if (STATE.handlingOpen) {
              return;
            }

            var target = getRealEventTarget(event, ELEMENT); // If the target of the event is not the element, close the picker picker.
            // * Don’t worry about clicks or focusins on the root because those don’t bubble up.
            //   Also, for Firefox, a click on an `option` element bubbles up directly
            //   to the doc. So make sure the target wasn't the doc.
            // * In Firefox stopPropagation() doesn’t prevent right-click events from bubbling,
            //   which causes the picker to unexpectedly close when right-clicking it. So make
            //   sure the event wasn’t a right-click.
            // * In Chrome 62 and up, password autofill causes a simulated focusin event which
            //   closes the picker.

            if (!event.isSimulated && target != ELEMENT && target != document && event.which != 3) {
              // If the target was the holder that covers the screen,
              // keep the element focused to maintain tabindex.
              P.close(target === P.$holder[0]);
            }
          }).on('keydown.' + STATE.id, function (event) {
            var // Get the keycode.
            keycode = event.keyCode,
                // Translate that to a selection change.
            keycodeToMove = P.component.key[keycode],
                // Grab the target.
            target = getRealEventTarget(event, ELEMENT); // On escape, close the picker and give focus.

            if (keycode == 27) {
              P.close(true);
            } // Check if there is a key movement or “enter” keypress on the element.
            else if (target == P.$holder[0] && (keycodeToMove || keycode == 13)) {
                // Prevent the default action to stop page movement.
                event.preventDefault(); // Trigger the key movement action.

                if (keycodeToMove) {
                  PickerConstructor._.trigger(P.component.key.go, P, [PickerConstructor._.trigger(keycodeToMove)]);
                } // On “enter”, if the highlighted item isn’t disabled, set the value and close.
                else if (!P.$root.find('.' + CLASSES.highlighted).hasClass(CLASSES.disabled)) {
                    P.set('select', P.component.item.highlight);

                    if (SETTINGS.closeOnSelect) {
                      P.close(true);
                    }
                  }
              } // If the target is within the root and “enter” is pressed,
              // prevent the default action and trigger a click on the target instead.
              else if ($.contains(P.$root[0], target) && keycode == 13) {
                  event.preventDefault();
                  target.click();
                }
          });
        } // Trigger the queued “open” events.


        return P.trigger('open');
      },
      //open

      /**
       * Close the picker
       */
      close: function close(giveFocus) {
        // If we need to give focus, do it before changing states.
        if (giveFocus) {
          if (SETTINGS.editable) {
            ELEMENT.focus();
          } else {
            // ....ah yes! It would’ve been incomplete without a crazy workaround for IE :|
            // The focus is triggered *after* the close has completed - causing it
            // to open again. So unbind and rebind the event at the next tick.
            P.$holder.off('focus.toOpen').focus();
            setTimeout(function () {
              P.$holder.on('focus.toOpen', handleFocusToOpenEvent);
            }, 0);
          }
        } // Remove the “active” class.


        $ELEMENT.removeClass(CLASSES.active); // * A Firefox bug, when `html` has `overflow:hidden`, results in
        //   killing transitions :(. So remove the “opened” state on the next tick.
        //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289

        setTimeout(function () {
          // Remove the “opened” and “focused” class from the picker root.
          P.$root.removeClass(CLASSES.opened + ' ' + CLASSES.focused);
          aria(P.$root[0], 'hidden', true);
        }, 0); // If it’s already closed, do nothing more.

        if (!STATE.open) return P; // Set it as closed.

        STATE.open = false; // Allow the page to scroll.

        if (IS_DEFAULT_THEME) {
          $('body').css('overflow', '').css('padding-right', '-=' + getScrollbarWidth());
        } // Unbind the document events.


        $document.off('.' + STATE.id); // Trigger the queued “close” events.

        return P.trigger('close');
      },
      //close

      /**
       * Clear the values
       */
      clear: function clear(options) {
        return P.set('clear', null, options);
      },
      //clear

      /**
       * Set something
       */
      set: function set(thing, value, options) {
        var thingItem,
            thingValue,
            thingIsObject = $.isPlainObject(thing),
            thingObject = thingIsObject ? thing : {}; // Make sure we have usable options.

        options = thingIsObject && $.isPlainObject(value) ? value : options || {};

        if (thing) {
          // If the thing isn’t an object, make it one.
          if (!thingIsObject) {
            thingObject[thing] = value;
          } // Go through the things of items to set.


          for (thingItem in thingObject) {
            // Grab the value of the thing.
            thingValue = thingObject[thingItem]; // First, if the item exists and there’s a value, set it.

            if (thingItem in P.component.item) {
              if (thingValue === undefined) thingValue = null;
              P.component.set(thingItem, thingValue, options);
            } // Then, check to update the element value and broadcast a change.


            if ((thingItem == 'select' || thingItem == 'clear') && SETTINGS.updateInput) {
              $ELEMENT.val(thingItem == 'clear' ? '' : P.get(thingItem, SETTINGS.format)).trigger('change');
            }
          } // Render a new picker.


          P.render();
        } // When the method isn’t muted, trigger queued “set” events and pass the `thingObject`.


        return options.muted ? P : P.trigger('set', thingObject);
      },
      //set

      /**
       * Get something
       */
      get: function get(thing, format) {
        // Make sure there’s something to get.
        thing = thing || 'value'; // If a picker state exists, return that.

        if (STATE[thing] != null) {
          return STATE[thing];
        } // Return the submission value, if that.


        if (thing == 'valueSubmit') {
          if (P._hidden) {
            return P._hidden.value;
          }

          thing = 'value';
        } // Return the value, if that.


        if (thing == 'value') {
          return ELEMENT.value;
        } // Check if a component item exists, return that.


        if (thing in P.component.item) {
          if (typeof format == 'string') {
            var thingValue = P.component.get(thing);
            return thingValue ? PickerConstructor._.trigger(P.component.formats.toString, P.component, [format, thingValue]) : '';
          }

          return P.component.get(thing);
        }
      },
      //get

      /**
       * Bind events on the things.
       */
      on: function on(thing, method, internal) {
        var thingName,
            thingMethod,
            thingIsObject = $.isPlainObject(thing),
            thingObject = thingIsObject ? thing : {};

        if (thing) {
          // If the thing isn’t an object, make it one.
          if (!thingIsObject) {
            thingObject[thing] = method;
          } // Go through the things to bind to.


          for (thingName in thingObject) {
            // Grab the method of the thing.
            thingMethod = thingObject[thingName]; // If it was an internal binding, prefix it.

            if (internal) {
              thingName = '_' + thingName;
            } // Make sure the thing methods collection exists.


            STATE.methods[thingName] = STATE.methods[thingName] || []; // Add the method to the relative method collection.

            STATE.methods[thingName].push(thingMethod);
          }
        }

        return P;
      },
      //on

      /**
       * Unbind events on the things.
       */
      off: function off() {
        var i,
            thingName,
            names = arguments;

        for (i = 0, namesCount = names.length; i < namesCount; i += 1) {
          thingName = names[i];

          if (thingName in STATE.methods) {
            delete STATE.methods[thingName];
          }
        }

        return P;
      },

      /**
       * Fire off method events.
       */
      trigger: function trigger(name, data) {
        var _trigger = function _trigger(name) {
          var methodList = STATE.methods[name];

          if (methodList) {
            methodList.map(function (method) {
              PickerConstructor._.trigger(method, P, [data]);
            });
          }
        };

        _trigger('_' + name);

        _trigger(name);

        return P;
      } //trigger

    }; //PickerInstance.prototype

    /**
     * Wrap the picker holder components together.
     */


    function createWrappedComponent() {
      // Create a picker wrapper holder
      return PickerConstructor._.node('div', // Create a picker wrapper node
      PickerConstructor._.node('div', // Create a picker frame
      PickerConstructor._.node('div', // Create a picker box node
      PickerConstructor._.node('div', // Create the components nodes.
      P.component.nodes(STATE.open), // The picker box class
      CLASSES.box), // Picker wrap class
      CLASSES.wrap), // Picker frame class
      CLASSES.frame), // Picker holder class
      CLASSES.holder, 'tabindex="-1"'); //endreturn
    } //createWrappedComponent

    /**
     * Prepare the input element with all bindings.
     */


    function prepareElement() {
      $ELEMENT. // Store the picker data by component name.
      data(NAME, P). // Add the “input” class name.
      addClass(CLASSES.input). // If there’s a `data-value`, update the value of the element.
      val($ELEMENT.data('value') ? P.get('select', SETTINGS.format) : ELEMENT.value). // On focus/click, open the picker.
      on('focus.' + STATE.id + ' click.' + STATE.id, function (event) {
        event.preventDefault();
        P.open();
      }) // Mousedown handler to capture when the user starts interacting
      // with the picker. This is used in working around a bug in Chrome 73.
      .on('mousedown', function () {
        STATE.handlingOpen = true;

        var handler = function handler() {
          // By default mouseup events are fired before a click event.
          // By using a timeout we can force the mouseup to be handled
          // after the corresponding click event is handled.
          setTimeout(function () {
            $(document).off('mouseup', handler);
            STATE.handlingOpen = false;
          }, 0);
        };

        $(document).on('mouseup', handler);
      }); // Only bind keydown events if the element isn’t editable.

      if (!SETTINGS.editable) {
        $ELEMENT. // Handle keyboard event based on the picker being opened or not.
        on('keydown.' + STATE.id, handleKeydownEvent);
      } // Update the aria attributes.


      aria(ELEMENT, {
        haspopup: true,
        readonly: false,
        owns: ELEMENT.id + '_root'
      });
    }
    /**
     * Prepare the root picker element with all bindings.
     */


    function prepareElementRoot() {
      aria(P.$root[0], 'hidden', true);
    }
    /**
     * Prepare the holder picker element with all bindings.
     */


    function prepareElementHolder() {
      P.$holder.on({
        // For iOS8.
        keydown: handleKeydownEvent,
        'focus.toOpen': handleFocusToOpenEvent,
        blur: function blur() {
          // Remove the “target” class.
          $ELEMENT.removeClass(CLASSES.target);
        },
        // When something within the holder is focused, stop from bubbling
        // to the doc and remove the “focused” state from the root.
        focusin: function focusin(event) {
          P.$root.removeClass(CLASSES.focused);
          event.stopPropagation();
        },
        // When something within the holder is clicked, stop it
        // from bubbling to the doc.
        'mousedown click': function mousedownClick(event) {
          var target = getRealEventTarget(event, ELEMENT); // Make sure the target isn’t the root holder so it can bubble up.

          if (target != P.$holder[0]) {
            event.stopPropagation(); // * For mousedown events, cancel the default action in order to
            //   prevent cases where focus is shifted onto external elements
            //   when using things like jQuery mobile or MagnificPopup (ref: #249 & #120).
            //   Also, for Firefox, don’t prevent action on the `option` element.

            if (event.type == 'mousedown' && !$(target).is('input, select, textarea, button, option')) {
              event.preventDefault(); // Re-focus onto the holder so that users can click away
              // from elements focused within the picker.

              P.$holder.eq(0).focus();
            }
          }
        }
      }). // If there’s a click on an actionable element, carry out the actions.
      on('click', '[data-pick], [data-nav], [data-clear], [data-close]', function () {
        var $target = $(this),
            targetData = $target.data(),
            targetDisabled = $target.hasClass(CLASSES.navDisabled) || $target.hasClass(CLASSES.disabled),
            // * For IE, non-focusable elements can be active elements as well
        //   (http://stackoverflow.com/a/2684561).
        activeElement = getActiveElement();
        activeElement = activeElement && (activeElement.type || activeElement.href ? activeElement : null); // If it’s disabled or nothing inside is actively focused, re-focus the element.

        if (targetDisabled || activeElement && !$.contains(P.$root[0], activeElement)) {
          P.$holder.eq(0).focus();
        } // If something is superficially changed, update the `highlight` based on the `nav`.


        if (!targetDisabled && targetData.nav) {
          P.set('highlight', P.component.item.highlight, {
            nav: targetData.nav
          });
        } // If something is picked, set `select` then close with focus.
        else if (!targetDisabled && 'pick' in targetData) {
            P.set('select', targetData.pick);

            if (SETTINGS.closeOnSelect) {
              P.close(true);
            }
          } // If a “clear” button is pressed, empty the values and close with focus.
          else if (targetData.clear) {
              P.clear();

              if (SETTINGS.closeOnClear) {
                P.close(true);
              }
            } else if (targetData.close) {
              P.close(true);
            }
      }); //P.$holder
    }
    /**
     * Prepare the hidden input element along with all bindings.
     */


    function prepareElementHidden() {
      var name;

      if (SETTINGS.hiddenName === true) {
        name = ELEMENT.name;
        ELEMENT.name = '';
      } else {
        name = [typeof SETTINGS.hiddenPrefix == 'string' ? SETTINGS.hiddenPrefix : '', typeof SETTINGS.hiddenSuffix == 'string' ? SETTINGS.hiddenSuffix : '_submit'];
        name = name[0] + ELEMENT.name + name[1];
      }

      P._hidden = $('<input ' + 'type=hidden ' + // Create the name using the original input’s with a prefix and suffix.
      'name="' + name + '"' + ( // If the element has a value, set the hidden value as well.
      $ELEMENT.data('value') || ELEMENT.value ? ' value="' + P.get('select', SETTINGS.formatSubmit) + '"' : '') + '>')[0];
      $ELEMENT. // If the value changes, update the hidden input with the correct format.
      on('change.' + STATE.id, function () {
        P._hidden.value = ELEMENT.value ? P.get('select', SETTINGS.formatSubmit) : '';
      });
    } // Wait for transitions to end before focusing the holder. Otherwise, while
    // using the `container` option, the view jumps to the container.


    function focusPickerOnceOpened() {
      if (IS_DEFAULT_THEME && supportsTransitions) {
        P.$holder.find('.' + CLASSES.frame).one('transitionend', function () {
          P.$holder.eq(0).focus();
        });
      } else {
        setTimeout(function () {
          P.$holder.eq(0).focus();
        }, 0);
      }
    }

    function handleFocusToOpenEvent(event) {
      // Stop the event from propagating to the doc.
      event.stopPropagation(); // Add the “target” class.

      $ELEMENT.addClass(CLASSES.target); // Add the “focused” class to the root.

      P.$root.addClass(CLASSES.focused); // And then finally open the picker.

      P.open();
    } // For iOS8.


    function handleKeydownEvent(event) {
      var keycode = event.keyCode,
          // Check if one of the delete keys was pressed.
      isKeycodeDelete = /^(8|46)$/.test(keycode); // For some reason IE clears the input value on “escape”.

      if (keycode == 27) {
        P.close(true);
        return false;
      } // Check if `space` or `delete` was pressed or the picker is closed with a key movement.


      if (keycode == 32 || isKeycodeDelete || !STATE.open && P.component.key[keycode]) {
        // Prevent it from moving the page and bubbling to doc.
        event.preventDefault();
        event.stopPropagation(); // If `delete` was pressed, clear the values and close the picker.
        // Otherwise open the picker.

        if (isKeycodeDelete) {
          P.clear().close();
        } else {
          P.open();
        }
      }
    } // Return a new picker instance.


    return new PickerInstance();
  } //PickerConstructor

  /**
   * The default classes and prefix to use for the HTML classes.
   */


  PickerConstructor.klasses = function (prefix) {
    prefix = prefix || 'picker';
    return {
      picker: prefix,
      opened: prefix + '--opened',
      focused: prefix + '--focused',
      input: prefix + '__input',
      active: prefix + '__input--active',
      target: prefix + '__input--target',
      holder: prefix + '__holder',
      frame: prefix + '__frame',
      wrap: prefix + '__wrap',
      box: prefix + '__box'
    };
  }; //PickerConstructor.klasses

  /**
   * Check if the default theme is being used.
   */


  function isUsingDefaultTheme(element) {
    var theme,
        prop = 'position'; // For IE.

    if (element.currentStyle) {
      theme = element.currentStyle[prop];
    } // For normal browsers.
    else if (window.getComputedStyle) {
        theme = getComputedStyle(element)[prop];
      }

    return theme == 'fixed';
  }
  /**
   * Get the width of the browser’s scrollbar.
   * Taken from: https://github.com/VodkaBears/Remodal/blob/master/src/jquery.remodal.js
   */


  function getScrollbarWidth() {
    if ($html.height() <= $window.height()) {
      return 0;
    }

    var $outer = $('<div style="visibility:hidden;width:100px" />').appendTo('body'); // Get the width without scrollbars.

    var widthWithoutScroll = $outer[0].offsetWidth; // Force adding scrollbars.

    $outer.css('overflow', 'scroll'); // Add the inner div.

    var $inner = $('<div style="width:100%" />').appendTo($outer); // Get the width with scrollbars.

    var widthWithScroll = $inner[0].offsetWidth; // Remove the divs.

    $outer.remove(); // Return the difference between the widths.

    return widthWithoutScroll - widthWithScroll;
  }
  /**
   * Get the target element from the event.
   * If ELEMENT is supplied and present in the event path (ELEMENT is ancestor of the target),
   * returns ELEMENT instead
   */


  function getRealEventTarget(event, ELEMENT) {
    var path = [];

    if (event.path) {
      path = event.path;
    }

    if (event.originalEvent && event.originalEvent.path) {
      path = event.originalEvent.path;
    }

    if (path && path.length > 0) {
      if (ELEMENT && path.indexOf(ELEMENT) >= 0) {
        return ELEMENT;
      } else {
        return path[0];
      }
    }

    return event.target;
  }
  /**
   * PickerConstructor helper methods.
   */


  PickerConstructor._ = {
    /**
     * Create a group of nodes. Expects:
     * `
        {
            min:    {Integer},
            max:    {Integer},
            i:      {Integer},
            node:   {String},
            item:   {Function}
        }
     * `
     */
    group: function group(groupObject) {
      var // Scope for the looped object
      loopObjectScope,
          // Create the nodes list
      nodesList = '',
          // The counter starts from the `min`
      counter = PickerConstructor._.trigger(groupObject.min, groupObject); // Loop from the `min` to `max`, incrementing by `i`


      for (; counter <= PickerConstructor._.trigger(groupObject.max, groupObject, [counter]); counter += groupObject.i) {
        // Trigger the `item` function within scope of the object
        loopObjectScope = PickerConstructor._.trigger(groupObject.item, groupObject, [counter]); // Splice the subgroup and create nodes out of the sub nodes

        nodesList += PickerConstructor._.node(groupObject.node, loopObjectScope[0], // the node
        loopObjectScope[1], // the classes
        loopObjectScope[2] // the attributes
        );
      } // Return the list of nodes


      return nodesList;
    },
    //group

    /**
     * Create a dom node string
     */
    node: function node(wrapper, item, klass, attribute) {
      // If the item is false-y, just return an empty string
      if (!item) return ''; // If the item is an array, do a join

      item = $.isArray(item) ? item.join('') : item; // Check for the class

      klass = klass ? ' class="' + klass + '"' : ''; // Check for any attributes

      attribute = attribute ? ' ' + attribute : ''; // Return the wrapped item

      return '<' + wrapper + klass + attribute + '>' + item + '</' + wrapper + '>';
    },
    //node

    /**
     * Lead numbers below 10 with a zero.
     */
    lead: function lead(number) {
      return (number < 10 ? '0' : '') + number;
    },

    /**
     * Trigger a function otherwise return the value.
     */
    trigger: function trigger(callback, scope, args) {
      return typeof callback == 'function' ? callback.apply(scope, args || []) : callback;
    },

    /**
     * If the second character is a digit, length is 2 otherwise 1.
     */
    digits: function digits(string) {
      return /\d/.test(string[1]) ? 2 : 1;
    },

    /**
     * Tell if something is a date object.
     */
    isDate: function isDate(value) {
      return {}.toString.call(value).indexOf('Date') > -1 && this.isInteger(value.getDate());
    },

    /**
     * Tell if something is an integer.
     */
    isInteger: function isInteger(value) {
      return {}.toString.call(value).indexOf('Number') > -1 && value % 1 === 0;
    },

    /**
     * Create ARIA attribute strings.
     */
    ariaAttr: ariaAttr
  }; //PickerConstructor._

  /**
   * Extend the picker with a component and defaults.
   */

  PickerConstructor.extend = function (name, Component) {
    // Extend jQuery.
    $.fn[name] = function (options, action) {
      // Grab the component data.
      var componentData = this.data(name); // If the picker is requested, return the data object.

      if (options == 'picker') {
        return componentData;
      } // If the component data exists and `options` is a string, carry out the action.


      if (componentData && typeof options == 'string') {
        return PickerConstructor._.trigger(componentData[options], componentData, [action]);
      } // Otherwise go through each matched element and if the component
      // doesn’t exist, create a new picker using `this` element
      // and merging the defaults and options with a deep copy.


      return this.each(function () {
        var $this = $(this);

        if (!$this.data(name)) {
          new PickerConstructor(this, name, Component, options);
        }
      });
    }; // Set the defaults.


    $.fn[name].defaults = Component.defaults;
  }; //PickerConstructor.extend


  function aria(element, attribute, value) {
    if ($.isPlainObject(attribute)) {
      for (var key in attribute) {
        ariaSet(element, key, attribute[key]);
      }
    } else {
      ariaSet(element, attribute, value);
    }
  }

  function ariaSet(element, attribute, value) {
    element.setAttribute((attribute == 'role' ? '' : 'aria-') + attribute, value);
  }

  function ariaAttr(attribute, data) {
    if (!$.isPlainObject(attribute)) {
      attribute = {
        attribute: data
      };
    }

    data = '';

    for (var key in attribute) {
      var attr = (key == 'role' ? '' : 'aria-') + key,
          attrVal = attribute[key];
      data += attrVal == null ? '' : attr + '="' + attribute[key] + '"';
    }

    return data;
  } // IE8 bug throws an error for activeElements within iframes.


  function getActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  } // Expose the picker constructor.


  return PickerConstructor;
});

/***/ }),

/***/ "./app/javascript/channels/picker.time.js":
/*!************************************************!*\
  !*** ./app/javascript/channels/picker.time.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Time picker for pickadate.js v3.6.4
 * http://amsul.github.io/pickadate.js/time.htm
 */
(function (factory) {
  // AMD.
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./picker */ "./app/javascript/channels/picker.js"), !(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // Node.js/browserify.
  else {}
})(function (Picker, $) {
  /**
   * Globals and constants
   */
  var HOURS_IN_DAY = 24,
      MINUTES_IN_HOUR = 60,
      HOURS_TO_NOON = 12,
      MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR,
      _ = Picker._;
  /**
   * The time picker constructor
   */

  function TimePicker(picker, settings) {
    var clock = this,
        elementValue = picker.$node[0].value,
        elementDataValue = picker.$node.data('value'),
        valueString = elementDataValue || elementValue,
        formatString = elementDataValue ? settings.formatSubmit : settings.format;
    clock.settings = settings;
    clock.$node = picker.$node; // The queue of methods that will be used to build item objects.

    clock.queue = {
      interval: 'i',
      min: 'measure create',
      max: 'measure create',
      now: 'now create',
      select: 'parse create validate',
      highlight: 'parse create validate',
      view: 'parse create validate',
      disable: 'deactivate',
      enable: 'activate'
    }; // The component's item object.

    clock.item = {};
    clock.item.clear = null;
    clock.item.interval = settings.interval || 30;
    clock.item.disable = (settings.disable || []).slice(0);
    clock.item.enable = -function (collectionDisabled) {
      return collectionDisabled[0] === true ? collectionDisabled.shift() : -1;
    }(clock.item.disable);
    clock.set('min', settings.min).set('max', settings.max).set('now'); // When there’s a value, set the `select`, which in turn
    // also sets the `highlight` and `view`.

    if (valueString) {
      clock.set('select', valueString, {
        format: formatString
      });
    } // If there’s no value, default to highlighting “today”.
    else {
        clock.set('select', null).set('highlight', clock.item.now);
      } // The keycode to movement mapping.


    clock.key = {
      40: 1,
      // Down
      38: -1,
      // Up
      39: 1,
      // Right
      37: -1,
      // Left
      go: function go(timeChange) {
        clock.set('highlight', clock.item.highlight.pick + timeChange * clock.item.interval, {
          interval: timeChange * clock.item.interval
        });
        this.render();
      }
    }; // Bind some picker events.

    picker.on('render', function () {
      var $pickerHolder = picker.$root.children(),
          $viewset = $pickerHolder.find('.' + settings.klass.viewset),
          vendors = function vendors(prop) {
        return ['webkit', 'moz', 'ms', 'o', ''].map(function (vendor) {
          return (vendor ? '-' + vendor + '-' : '') + prop;
        });
      },
          animations = function animations($el, state) {
        vendors('transform').map(function (prop) {
          $el.css(prop, state);
        });
        vendors('transition').map(function (prop) {
          $el.css(prop, state);
        });
      };

      if ($viewset.length) {
        animations($pickerHolder, 'none');
        $pickerHolder[0].scrollTop = ~~$viewset.position().top - $viewset[0].clientHeight * 2;
        animations($pickerHolder, '');
      }
    }, 1).on('open', function () {
      picker.$root.find('button').attr('disabled', false);
    }, 1).on('close', function () {
      picker.$root.find('button').attr('disabled', true);
    }, 1);
  } //TimePicker

  /**
   * Set a timepicker item object.
   */


  TimePicker.prototype.set = function (type, value, options) {
    var clock = this,
        clockItem = clock.item; // If the value is `null` just set it immediately.

    if (value === null) {
      if (type == 'clear') type = 'select';
      clockItem[type] = value;
      return clock;
    } // Otherwise go through the queue of methods, and invoke the functions.
    // Update this as the time unit, and set the final value as this item.
    // * In the case of `enable`, keep the queue but set `disable` instead.
    //   And in the case of `flip`, keep the queue but set `enable` instead.


    clockItem[type == 'enable' ? 'disable' : type == 'flip' ? 'enable' : type] = clock.queue[type].split(' ').map(function (method) {
      value = clock[method](type, value, options);
      return value;
    }).pop(); // Check if we need to cascade through more updates.

    if (type == 'select') {
      clock.set('highlight', clockItem.select, options);
    } else if (type == 'highlight') {
      clock.set('view', clockItem.highlight, options);
    } else if (type == 'interval') {
      clock.set('min', clockItem.min, options).set('max', clockItem.max, options);
    } else if (type.match(/^(flip|min|max|disable|enable)$/)) {
      if (clockItem.select && clock.disabled(clockItem.select)) {
        clock.set('select', value, options);
      }

      if (clockItem.highlight && clock.disabled(clockItem.highlight)) {
        clock.set('highlight', value, options);
      }

      if (type == 'min') {
        clock.set('max', clockItem.max, options);
      }
    }

    return clock;
  }; //TimePicker.prototype.set

  /**
   * Get a timepicker item object.
   */


  TimePicker.prototype.get = function (type) {
    return this.item[type];
  }; //TimePicker.prototype.get

  /**
   * Create a picker time object.
   */


  TimePicker.prototype.create = function (type, value, options) {
    var clock = this; // If there’s no value, use the type as the value.

    value = value === undefined ? type : value; // If it’s a date object, convert it into an array.

    if (_.isDate(value)) {
      value = [value.getHours(), value.getMinutes()];
    } // If it’s an object, use the “pick” value.


    if ($.isPlainObject(value) && _.isInteger(value.pick)) {
      value = value.pick;
    } // If it’s an array, convert it into minutes.
    else if ($.isArray(value)) {
        value = +value[0] * MINUTES_IN_HOUR + +value[1];
      } // If no valid value is passed, set it to “now”.
      else if (!_.isInteger(value)) {
          value = clock.now(type, value, options);
        } // If we’re setting the max, make sure it’s greater than the min.


    if (type == 'max' && value < clock.item.min.pick) {
      value += MINUTES_IN_DAY;
    } // If the value doesn’t fall directly on the interval,
    // add one interval to indicate it as “passed”.


    if (type != 'min' && type != 'max' && (value - clock.item.min.pick) % clock.item.interval !== 0) {
      value += clock.item.interval;
    } // Normalize it into a “reachable” interval.


    value = clock.normalize(type, value, options); // Return the compiled object.

    return {
      // Divide to get hours from minutes.
      hour: ~~(HOURS_IN_DAY + value / MINUTES_IN_HOUR) % HOURS_IN_DAY,
      // The remainder is the minutes.
      mins: (MINUTES_IN_HOUR + value % MINUTES_IN_HOUR) % MINUTES_IN_HOUR,
      // The time in total minutes.
      time: (MINUTES_IN_DAY + value) % MINUTES_IN_DAY,
      // Reference to the “relative” value to pick.
      pick: value % MINUTES_IN_DAY
    };
  }; //TimePicker.prototype.create

  /**
   * Create a range limit object using an array, date object,
   * literal “true”, or integer relative to another time.
   */


  TimePicker.prototype.createRange = function (from, to) {
    var clock = this,
        createTime = function createTime(time) {
      if (time === true || $.isArray(time) || _.isDate(time)) {
        return clock.create(time);
      }

      return time;
    }; // Create objects if possible.


    if (!_.isInteger(from)) {
      from = createTime(from);
    }

    if (!_.isInteger(to)) {
      to = createTime(to);
    } // Create relative times.


    if (_.isInteger(from) && $.isPlainObject(to)) {
      from = [to.hour, to.mins + from * clock.settings.interval];
    } else if (_.isInteger(to) && $.isPlainObject(from)) {
      to = [from.hour, from.mins + to * clock.settings.interval];
    }

    return {
      from: createTime(from),
      to: createTime(to)
    };
  }; //TimePicker.prototype.createRange

  /**
   * Check if a time unit falls within a time range object.
   */


  TimePicker.prototype.withinRange = function (range, timeUnit) {
    range = this.createRange(range.from, range.to);
    return timeUnit.pick >= range.from.pick && timeUnit.pick <= range.to.pick;
  };
  /**
   * Check if two time range objects overlap.
   */


  TimePicker.prototype.overlapRanges = function (one, two) {
    var clock = this; // Convert the ranges into comparable times.

    one = clock.createRange(one.from, one.to);
    two = clock.createRange(two.from, two.to);
    return clock.withinRange(one, two.from) || clock.withinRange(one, two.to) || clock.withinRange(two, one.from) || clock.withinRange(two, one.to);
  };
  /**
   * Get the time relative to now.
   */


  TimePicker.prototype.now = function (type, value
  /*, options*/
  ) {
    var interval = this.item.interval,
        date = new Date(),
        nowMinutes = date.getHours() * MINUTES_IN_HOUR + date.getMinutes(),
        isValueInteger = _.isInteger(value),
        isBelowInterval; // Make sure “now” falls within the interval range.


    nowMinutes -= nowMinutes % interval; // Check if the difference is less than the interval itself.

    isBelowInterval = value < 0 && interval * value + nowMinutes <= -interval; // Add an interval because the time has “passed”.

    nowMinutes += type == 'min' && isBelowInterval ? 0 : interval; // If the value is a number, adjust by that many intervals.

    if (isValueInteger) {
      nowMinutes += interval * (isBelowInterval && type != 'max' ? value + 1 : value);
    } // Return the final calculation.


    return nowMinutes;
  }; //TimePicker.prototype.now

  /**
   * Normalize minutes to be “reachable” based on the min and interval.
   */


  TimePicker.prototype.normalize = function (type, value
  /*, options*/
  ) {
    var interval = this.item.interval,
        minTime = this.item.min && this.item.min.pick || 0; // If setting min time, don’t shift anything.
    // Otherwise get the value and min difference and then
    // normalize the difference with the interval.

    value -= type == 'min' ? 0 : (value - minTime) % interval; // Return the adjusted value.

    return value;
  }; //TimePicker.prototype.normalize

  /**
   * Measure the range of minutes.
   */


  TimePicker.prototype.measure = function (type, value, options) {
    var clock = this; // If it’s anything false-y, set it to the default.

    if (!value) {
      value = type == 'min' ? [0, 0] : [HOURS_IN_DAY - 1, MINUTES_IN_HOUR - 1];
    } // If it’s a string, parse it.


    if (typeof value == 'string') {
      value = clock.parse(type, value);
    } // If it’s a literal true, or an integer, make it relative to now.
    else if (value === true || _.isInteger(value)) {
        value = clock.now(type, value, options);
      } // If it’s an object already, just normalize it.
      else if ($.isPlainObject(value) && _.isInteger(value.pick)) {
          value = clock.normalize(type, value.pick, options);
        }

    return value;
  }; ///TimePicker.prototype.measure

  /**
   * Validate an object as enabled.
   */


  TimePicker.prototype.validate = function (type, timeObject, options) {
    var clock = this,
        interval = options && options.interval ? options.interval : clock.item.interval; // Check if the object is disabled.

    if (clock.disabled(timeObject)) {
      // Shift with the interval until we reach an enabled time.
      timeObject = clock.shift(timeObject, interval);
    } // Scope the object into range.


    timeObject = clock.scope(timeObject); // Do a second check to see if we landed on a disabled min/max.
    // In that case, shift using the opposite interval as before.

    if (clock.disabled(timeObject)) {
      timeObject = clock.shift(timeObject, interval * -1);
    } // Return the final object.


    return timeObject;
  }; //TimePicker.prototype.validate

  /**
   * Check if an object is disabled.
   */


  TimePicker.prototype.disabled = function (timeToVerify) {
    var clock = this,
        // Filter through the disabled times to check if this is one.
    isDisabledMatch = clock.item.disable.filter(function (timeToDisable) {
      // If the time is a number, match the hours.
      if (_.isInteger(timeToDisable)) {
        return timeToVerify.hour == timeToDisable;
      } // If it’s an array, create the object and match the times.


      if ($.isArray(timeToDisable) || _.isDate(timeToDisable)) {
        return timeToVerify.pick == clock.create(timeToDisable).pick;
      } // If it’s an object, match a time within the “from” and “to” range.


      if ($.isPlainObject(timeToDisable)) {
        return clock.withinRange(timeToDisable, timeToVerify);
      }
    }); // If this time matches a disabled time, confirm it’s not inverted.

    isDisabledMatch = isDisabledMatch.length && !isDisabledMatch.filter(function (timeToDisable) {
      return $.isArray(timeToDisable) && timeToDisable[2] == 'inverted' || $.isPlainObject(timeToDisable) && timeToDisable.inverted;
    }).length; // If the clock is "enabled" flag is flipped, flip the condition.

    return clock.item.enable === -1 ? !isDisabledMatch : isDisabledMatch || timeToVerify.pick < clock.item.min.pick || timeToVerify.pick > clock.item.max.pick;
  }; //TimePicker.prototype.disabled

  /**
   * Shift an object by an interval until we reach an enabled object.
   */


  TimePicker.prototype.shift = function (timeObject, interval) {
    var clock = this,
        minLimit = clock.item.min.pick,
        maxLimit = clock.item.max.pick;
    /*,
    safety = 1000*/

    interval = interval || clock.item.interval; // Keep looping as long as the time is disabled.

    while (
    /*safety &&*/
    clock.disabled(timeObject)) {
      /*safety -= 1
      if ( !safety ) {
          throw 'Fell into an infinite loop while shifting to ' + timeObject.hour + ':' + timeObject.mins + '.'
      }*/
      // Increase/decrease the time by the interval and keep looping.
      timeObject = clock.create(timeObject.pick += interval); // If we've looped beyond the limits, break out of the loop.

      if (timeObject.pick <= minLimit || timeObject.pick >= maxLimit) {
        break;
      }
    } // Return the final object.


    return timeObject;
  }; //TimePicker.prototype.shift

  /**
   * Scope an object to be within range of min and max.
   */


  TimePicker.prototype.scope = function (timeObject) {
    var minLimit = this.item.min.pick,
        maxLimit = this.item.max.pick;
    return this.create(timeObject.pick > maxLimit ? maxLimit : timeObject.pick < minLimit ? minLimit : timeObject);
  }; //TimePicker.prototype.scope

  /**
   * Parse a string into a usable type.
   */


  TimePicker.prototype.parse = function (type, value, options) {
    var hour,
        minutes,
        isPM,
        item,
        parseValue,
        clock = this,
        parsingObject = {}; // If it’s already parsed, we’re good.

    if (!value || typeof value != 'string') {
      return value;
    } // We need a `.format` to parse the value with.


    if (!(options && options.format)) {
      options = options || {};
      options.format = clock.settings.format;
    } // Convert the format into an array and then map through it.


    clock.formats.toArray(options.format).map(function (label) {
      var substring,
          // Grab the formatting label.
      formattingLabel = clock.formats[label],
          // The format length is from the formatting label function or the
      // label length without the escaping exclamation (!) mark.
      formatLength = formattingLabel ? _.trigger(formattingLabel, clock, [value, parsingObject]) : label.replace(/^!/, '').length; // If there's a format label, split the value up to the format length.
      // Then add it to the parsing object with appropriate label.

      if (formattingLabel) {
        substring = value.substr(0, formatLength);
        parsingObject[label] = substring.match(/^\d+$/) ? +substring : substring;
      } // Update the time value as the substring from format length to end.


      value = value.substr(formatLength);
    }); // Grab the hour and minutes from the parsing object.

    for (item in parsingObject) {
      parseValue = parsingObject[item];

      if (_.isInteger(parseValue)) {
        if (item.match(/^(h|hh)$/i)) {
          hour = parseValue;

          if (item == 'h' || item == 'hh') {
            hour %= 12;
          }
        } else if (item == 'i') {
          minutes = parseValue;
        }
      } else if (item.match(/^a$/i) && parseValue.match(/^p/i) && ('h' in parsingObject || 'hh' in parsingObject)) {
        isPM = true;
      }
    } // Calculate it in minutes and return.


    return (isPM ? hour + 12 : hour) * MINUTES_IN_HOUR + minutes;
  }; //TimePicker.prototype.parse

  /**
   * Various formats to display the object in.
   */


  TimePicker.prototype.formats = {
    h: function h(string, timeObject) {
      // If there's string, then get the digits length.
      // Otherwise return the selected hour in "standard" format.
      return string ? _.digits(string) : timeObject.hour % HOURS_TO_NOON || HOURS_TO_NOON;
    },
    hh: function hh(string, timeObject) {
      // If there's a string, then the length is always 2.
      // Otherwise return the selected hour in "standard" format with a leading zero.
      return string ? 2 : _.lead(timeObject.hour % HOURS_TO_NOON || HOURS_TO_NOON);
    },
    H: function H(string, timeObject) {
      // If there's string, then get the digits length.
      // Otherwise return the selected hour in "military" format as a string.
      return string ? _.digits(string) : '' + timeObject.hour % 24;
    },
    HH: function HH(string, timeObject) {
      // If there's string, then get the digits length.
      // Otherwise return the selected hour in "military" format with a leading zero.
      return string ? _.digits(string) : _.lead(timeObject.hour % 24);
    },
    i: function i(string, timeObject) {
      // If there's a string, then the length is always 2.
      // Otherwise return the selected minutes.
      return string ? 2 : _.lead(timeObject.mins);
    },
    a: function a(string, timeObject) {
      // If there's a string, then the length is always 4.
      // Otherwise check if it's more than "noon" and return either am/pm.
      return string ? 4 : MINUTES_IN_DAY / 2 > timeObject.time % MINUTES_IN_DAY ? 'a.m.' : 'p.m.';
    },
    A: function A(string, timeObject) {
      // If there's a string, then the length is always 2.
      // Otherwise check if it's more than "noon" and return either am/pm.
      return string ? 2 : MINUTES_IN_DAY / 2 > timeObject.time % MINUTES_IN_DAY ? 'AM' : 'PM';
    },
    // Create an array by splitting the formatting string passed.
    toArray: function toArray(formatString) {
      return formatString.split(/(h{1,2}|H{1,2}|i|a|A|!.)/g);
    },
    // Format an object into a string using the formatting options.
    toString: function toString(formatString, itemObject) {
      var clock = this;
      return clock.formats.toArray(formatString).map(function (label) {
        return _.trigger(clock.formats[label], clock, [0, itemObject]) || label.replace(/^!/, '');
      }).join('');
    }
  }; //TimePicker.prototype.formats

  /**
   * Check if two time units are the exact.
   */

  TimePicker.prototype.isTimeExact = function (one, two) {
    var clock = this; // When we’re working with minutes, do a direct comparison.

    if (_.isInteger(one) && _.isInteger(two) || typeof one == 'boolean' && typeof two == 'boolean') {
      return one === two;
    } // When we’re working with time representations, compare the “pick” value.


    if ((_.isDate(one) || $.isArray(one)) && (_.isDate(two) || $.isArray(two))) {
      return clock.create(one).pick === clock.create(two).pick;
    } // When we’re working with range objects, compare the “from” and “to”.


    if ($.isPlainObject(one) && $.isPlainObject(two)) {
      return clock.isTimeExact(one.from, two.from) && clock.isTimeExact(one.to, two.to);
    }

    return false;
  };
  /**
   * Check if two time units overlap.
   */


  TimePicker.prototype.isTimeOverlap = function (one, two) {
    var clock = this; // When we’re working with an integer, compare the hours.

    if (_.isInteger(one) && (_.isDate(two) || $.isArray(two))) {
      return one === clock.create(two).hour;
    }

    if (_.isInteger(two) && (_.isDate(one) || $.isArray(one))) {
      return two === clock.create(one).hour;
    } // When we’re working with range objects, check if the ranges overlap.


    if ($.isPlainObject(one) && $.isPlainObject(two)) {
      return clock.overlapRanges(one, two);
    }

    return false;
  };
  /**
   * Flip the “enabled” state.
   */


  TimePicker.prototype.flipEnable = function (val) {
    var itemObject = this.item;
    itemObject.enable = val || (itemObject.enable == -1 ? 1 : -1);
  };
  /**
   * Mark a collection of times as “disabled”.
   */


  TimePicker.prototype.deactivate = function (type, timesToDisable) {
    var clock = this,
        disabledItems = clock.item.disable.slice(0); // If we’re flipping, that’s all we need to do.

    if (timesToDisable == 'flip') {
      clock.flipEnable();
    } else if (timesToDisable === false) {
      clock.flipEnable(1);
      disabledItems = [];
    } else if (timesToDisable === true) {
      clock.flipEnable(-1);
      disabledItems = [];
    } // Otherwise go through the times to disable.
    else {
        timesToDisable.map(function (unitToDisable) {
          var matchFound; // When we have disabled items, check for matches.
          // If something is matched, immediately break out.

          for (var index = 0; index < disabledItems.length; index += 1) {
            if (clock.isTimeExact(unitToDisable, disabledItems[index])) {
              matchFound = true;
              break;
            }
          } // If nothing was found, add the validated unit to the collection.


          if (!matchFound) {
            if (_.isInteger(unitToDisable) || _.isDate(unitToDisable) || $.isArray(unitToDisable) || $.isPlainObject(unitToDisable) && unitToDisable.from && unitToDisable.to) {
              disabledItems.push(unitToDisable);
            }
          }
        });
      } // Return the updated collection.


    return disabledItems;
  }; //TimePicker.prototype.deactivate

  /**
   * Mark a collection of times as “enabled”.
   */


  TimePicker.prototype.activate = function (type, timesToEnable) {
    var clock = this,
        disabledItems = clock.item.disable,
        disabledItemsCount = disabledItems.length; // If we’re flipping, that’s all we need to do.

    if (timesToEnable == 'flip') {
      clock.flipEnable();
    } else if (timesToEnable === true) {
      clock.flipEnable(1);
      disabledItems = [];
    } else if (timesToEnable === false) {
      clock.flipEnable(-1);
      disabledItems = [];
    } // Otherwise go through the disabled times.
    else {
        timesToEnable.map(function (unitToEnable) {
          var matchFound, disabledUnit, index, isRangeMatched; // Go through the disabled items and try to find a match.

          for (index = 0; index < disabledItemsCount; index += 1) {
            disabledUnit = disabledItems[index]; // When an exact match is found, remove it from the collection.

            if (clock.isTimeExact(disabledUnit, unitToEnable)) {
              matchFound = disabledItems[index] = null;
              isRangeMatched = true;
              break;
            } // When an overlapped match is found, add the “inverted” state to it.
            else if (clock.isTimeOverlap(disabledUnit, unitToEnable)) {
                if ($.isPlainObject(unitToEnable)) {
                  unitToEnable.inverted = true;
                  matchFound = unitToEnable;
                } else if ($.isArray(unitToEnable)) {
                  matchFound = unitToEnable;
                  if (!matchFound[2]) matchFound.push('inverted');
                } else if (_.isDate(unitToEnable)) {
                  matchFound = [unitToEnable.getFullYear(), unitToEnable.getMonth(), unitToEnable.getDate(), 'inverted'];
                }

                break;
              }
          } // If a match was found, remove a previous duplicate entry.


          if (matchFound) for (index = 0; index < disabledItemsCount; index += 1) {
            if (clock.isTimeExact(disabledItems[index], unitToEnable)) {
              disabledItems[index] = null;
              break;
            }
          } // In the event that we’re dealing with an overlap of range times,
          // make sure there are no “inverted” times because of it.

          if (isRangeMatched) for (index = 0; index < disabledItemsCount; index += 1) {
            if (clock.isTimeOverlap(disabledItems[index], unitToEnable)) {
              disabledItems[index] = null;
              break;
            }
          } // If something is still matched, add it into the collection.

          if (matchFound) {
            disabledItems.push(matchFound);
          }
        });
      } // Return the updated collection.


    return disabledItems.filter(function (val) {
      return val != null;
    });
  }; //TimePicker.prototype.activate

  /**
   * The division to use for the range intervals.
   */


  TimePicker.prototype.i = function (type, value
  /*, options*/
  ) {
    return _.isInteger(value) && value > 0 ? value : this.item.interval;
  };
  /**
   * Create a string for the nodes in the picker.
   */


  TimePicker.prototype.nodes = function (isOpen) {
    var clock = this,
        settings = clock.settings,
        selectedObject = clock.item.select,
        highlightedObject = clock.item.highlight,
        viewsetObject = clock.item.view,
        disabledCollection = clock.item.disable;
    return _.node('ul', _.group({
      min: clock.item.min.pick,
      max: clock.item.max.pick,
      i: clock.item.interval,
      node: 'li',
      item: function item(loopedTime) {
        loopedTime = clock.create(loopedTime);

        var timeMinutes = loopedTime.pick,
            isSelected = selectedObject && selectedObject.pick == timeMinutes,
            isHighlighted = highlightedObject && highlightedObject.pick == timeMinutes,
            isDisabled = disabledCollection && clock.disabled(loopedTime),
            formattedTime = _.trigger(clock.formats.toString, clock, [settings.format, loopedTime]);

        return [_.trigger(clock.formats.toString, clock, [_.trigger(settings.formatLabel, clock, [loopedTime]) || settings.format, loopedTime]), function (klasses) {
          if (isSelected) {
            klasses.push(settings.klass.selected);
          }

          if (isHighlighted) {
            klasses.push(settings.klass.highlighted);
          }

          if (viewsetObject && viewsetObject.pick == timeMinutes) {
            klasses.push(settings.klass.viewset);
          }

          if (isDisabled) {
            klasses.push(settings.klass.disabled);
          }

          return klasses.join(' ');
        }([settings.klass.listItem]), 'data-pick=' + loopedTime.pick + ' ' + _.ariaAttr({
          role: 'option',
          label: formattedTime,
          selected: isSelected && clock.$node.val() === formattedTime ? true : null,
          activedescendant: isHighlighted ? true : null,
          disabled: isDisabled ? true : null
        })];
      }
    }) + // * For Firefox forms to submit, make sure to set the button’s `type` attribute as “button”.
    _.node('li', _.node('button', settings.clear, settings.klass.buttonClear, 'type=button data-clear=1' + (isOpen ? '' : ' disabled') + ' ' + _.ariaAttr({
      controls: clock.$node[0].id
    })), '', _.ariaAttr({
      role: 'presentation'
    })), settings.klass.list, _.ariaAttr({
      role: 'listbox',
      controls: clock.$node[0].id
    }));
  }; //TimePicker.prototype.nodes

  /**
   * Extend the picker to add the component with the defaults.
   */


  TimePicker.defaults = function (prefix) {
    return {
      // Clear
      clear: 'Clear',
      // The format to show on the `input` element
      format: 'h:i A',
      // The interval between each time
      interval: 30,
      // Picker close behavior
      closeOnSelect: true,
      closeOnClear: true,
      // Update input value on select/clear
      updateInput: true,
      // Classes
      klass: {
        picker: prefix + ' ' + prefix + '--time',
        holder: prefix + '__holder',
        list: prefix + '__list',
        listItem: prefix + '__list-item',
        disabled: prefix + '__list-item--disabled',
        selected: prefix + '__list-item--selected',
        highlighted: prefix + '__list-item--highlighted',
        viewset: prefix + '__list-item--viewset',
        now: prefix + '__list-item--now',
        buttonClear: prefix + '__button--clear'
      }
    };
  }(Picker.klasses().picker);
  /**
   * Extend the picker to add the time picker.
   */


  Picker.extend('pickatime', TimePicker);
});

/***/ }),

/***/ "./app/javascript/channels/pulldown_select_menu.js":
/*!*********************************************************!*\
  !*** ./app/javascript/channels/pulldown_select_menu.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Design tiré du site flatuicolors.com
$(document).ready(function () {
  var countOption = $('.old-select option').size();

  function openSelect() {
    var heightSelect = $('.new-select').height();
    var j = 1;
    $('.new-select .new-option').each(function () {
      $(this).addClass('reveal');
      $(this).css({
        'left': '0',
        'right': '0',
        'top': j * (heightSelect + 1) + 'px'
      });
      j++;
    });
  }

  function closeSelect() {
    var i = 0;
    $('.new-select .new-option').each(function () {
      $(this).removeClass('reveal');

      if (i < countOption - 3) {
        $(this).css('top', -3);
        $(this).css('box-shadow', 'none');
      } else if (i === countOption - 3) {
        $(this).css('top', '-1px');
      } else if (i === countOption - 2) {
        $(this).css({
          'top': '1px',
          'left': '2px',
          'right': '2px'
        });
      } else if (i === countOption - 1) {
        $(this).css({
          'top': '5.5px',
          'left': '4px',
          'right': '4px'
        });
      }

      i++;
    });
  } // 攻略アプリタイトル


  var app_strategies = document.getElementById("app-strategies-show-title"); // ステップ詳細の目的

  var app_strategies_step_purpose = document.getElementById("app_strategies_step_purpose"); // デートプランの目的

  var date_plans_purpose = document.getElementById("date_plans_purpose"); // Initialisation

  if ($('.old-select option[selected]').size() === 1) {
    // アプリ攻略
    if (app_strategies) {
      var app_strategies_text = app_strategies.textContent;

      if (app_strategies_text == 'Pairs（ペアーズ）攻略') {
        $('.old-select option[selected]').removeAttr('selected');
        $('.old-select option[value="pairs"]').attr('selected', '');
        $('.selection p span').html($('.old-select option[selected]').html());
      }

      if (app_strategies_text == 'with（ウィズ）攻略') {
        $('.old-select option[selected]').removeAttr('selected');
        $('.old-select option[value="with"]').attr('selected', '');
        $('.selection p span').html($('.old-select option[selected]').html());
      }

      if (app_strategies_text == 'tapple(タップル)攻略') {
        $('.old-select option[selected]').removeAttr('selected');
        $('.old-select option[value="tapple"]').attr('selected', '');
        $('.selection p span').html($('.old-select option[selected]').html());
      }

      if (app_strategies_text == 'Tinder(ティンダー)攻略') {
        $('.old-select option[selected]').removeAttr('selected');
        $('.old-select option[value="tinder"]').attr('selected', '');
        $('.selection p span').html($('.old-select option[selected]').html());
      }
    } // ステップ詳細


    if (app_strategies_step_purpose) {
      var app_strategies_step_purpose_text = app_strategies_step_purpose.textContent;

      if (app_strategies_step_purpose_text == '彼女作り') {
        $('.old-select option[selected]').removeAttr('selected');
        $('.old-select option[value="make_girlfriend"]').attr('selected', '');
        $('.selection p span').html($('.old-select option[selected]').html());
      }

      if (app_strategies_step_purpose_text == '遊び') {
        $('.old-select option[selected]').removeAttr('selected');
        $('.old-select option[value="play"]').attr('selected', '');
        $('.selection p span').html($('.old-select option[selected]').html());
      }

      if (app_strategies_step_purpose_text == '超遊び') {
        $('.old-select option[selected]').removeAttr('selected');
        $('.old-select option[value="super_play"]').attr('selected', '');
        $('.selection p span').html($('.old-select option[selected]').html());
      }
    } // デートプラン


    if (date_plans_purpose) {
      var date_plans_purpose_text = date_plans_purpose.textContent;

      if (date_plans_purpose_text == '彼女作り') {
        $('.old-select option[selected]').removeAttr('selected');
        $('.old-select option[value="make_girlfriend"]').attr('selected', '');
        $('.selection p span').html($('.old-select option[selected]').html());
      }

      if (date_plans_purpose_text == '遊び') {
        $('.old-select option[selected]').removeAttr('selected');
        $('.old-select option[value="play"]').attr('selected', '');
        $('.selection p span').html($('.old-select option[selected]').html());
      }

      if (date_plans_purpose_text == '超遊び') {
        $('.old-select option[selected]').removeAttr('selected');
        $('.old-select option[value="super_play"]').attr('selected', '');
        $('.selection p span').html($('.old-select option[selected]').html());
      }
    }
  } else {
    $('.selection p span').html($('.old-select option:first-child').html());
  }

  if ($('.new-option').size() == 0) {
    $('.old-select option').each(function () {
      newValue = $(this).val();
      newHTML = $(this).html();

      if (app_strategies) {
        // アプリ攻略
        if (newHTML == 'ペアーズ攻略') {
          $('.new-select').append('<div class="new-option" data-value="' + newValue + '"><p><a id="app-strategies-app-select-pulldown" href="1">' + newHTML + '</p></a></div>');
        }

        if (newHTML == 'ウィズ攻略') {
          $('.new-select').append('<div class="new-option" data-value="' + newValue + '"><p><a id="app-strategies-app-select-pulldown" href="2">' + newHTML + '</p></a></div>');
        }

        if (newHTML == 'タップル攻略') {
          $('.new-select').append('<div class="new-option" data-value="' + newValue + '"><p><a id="app-strategies-app-select-pulldown" href="3">' + newHTML + '</p></a></div>');
        }

        if (newHTML == 'ティンダー攻略') {
          $('.new-select').append('<div class="new-option" data-value="' + newValue + '"><p><a id="app-strategies-app-select-pulldown" href="4">' + newHTML + '</p></a></div>');
        }
      }

      if (app_strategies_step_purpose) {
        // ステップ詳細
        if (newHTML == '彼女作り') {
          $('.new-select').append('<div class="new-option" data-value="' + newValue + '"><p><a id="app-strategies-app-select-pulldown" href="../1/step">' + newHTML + '</p></a></div>');
        }

        if (newHTML == '遊び') {
          $('.new-select').append('<div class="new-option" data-value="' + newValue + '"><p><a id="app-strategies-app-select-pulldown" href="../2/step">' + newHTML + '</p></a></div>');
        }

        if (newHTML == '超遊び') {
          $('.new-select').append('<div class="new-option" data-value="' + newValue + '"><p><a id="app-strategies-app-select-pulldown" href="../3/step">' + newHTML + '</p></a></div>');
        }
      }

      if (date_plans_purpose) {
        // デートプラン
        if (newHTML == '彼女作り') {
          $('.new-select').append('<div class="new-option" data-value="' + newValue + '"><p><a id="app-strategies-app-select-pulldown" href="1">' + newHTML + '</p></a></div>');
        }

        if (newHTML == '遊び') {
          $('.new-select').append('<div class="new-option" data-value="' + newValue + '"><p><a id="app-strategies-app-select-pulldown" href="2">' + newHTML + '</p></a></div>');
        }

        if (newHTML == '超遊び') {
          $('.new-select').append('<div class="new-option" data-value="' + newValue + '"><p><a id="app-strategies-app-select-pulldown" href="3">' + newHTML + '</p></a></div>');
        }
      }
    });
  }

  var reverseIndex = countOption;
  $('.new-select .new-option').each(function () {
    $(this).css('z-index', reverseIndex);
    reverseIndex = reverseIndex - 1;
  });
  closeSelect();
  var selection = document.getElementById('selection');
  var selection_click_count = 0;
  var error_message = document.createElement('p');
  error_message.textContent = 'リロードして下さい';
  error_message.id = 'app-strategies-error-message'; // 攻略アプリdiv

  var app_strategies_show = document.getElementById('app-strategies-show'); // ステップ詳細div

  var app_strategies_step = document.getElementById('app-strategies-step'); // ステップ詳細div

  var date_plans_container = document.getElementById('date_plans_container');

  if (selection) {
    selection.addEventListener('click', function () {
      selection.classList.toggle('open');

      if (selection.classList.contains('open')) {
        openSelect();
        selection_click_count = selection_click_count + 1;
      } else {
        closeSelect();
        selection_click_count = 0;
      }

      if (selection_click_count == 2) {
        // 攻略アプリ
        if (app_strategies_show) {
          app_strategies_show.before(error_message);
        } // ステップ詳細


        if (app_strategies_step) {
          app_strategies_step.before(error_message);
        } // デートプラン


        if (date_plans_container) {
          date_plans_container.before(error_message);
        }

        var error_message_text = document.querySelectorAll('#app-strategies-error-message');

        if (error_message_text.length == 2) {
          error_message_text[1].remove();
        }
      }
    });
  } // Selection 


  $('.new-option').click(function () {
    var newValue = $(this).data('value'); // Selection New Select

    $('.selection p span').html($(this).find('p').html());
    $('.selection').click(); // Selection Old Select

    $('.old-select option[selected]').removeAttr('selected');
    $('.old-select option[value="' + newValue + '"]').attr('selected', '');
  }); // ステップ詳細の目的 タイトルの背景色変更

  if (app_strategies_step_purpose) {
    if (app_strategies_step_purpose.textContent == '彼女作り') {
      app_strategies_step_purpose.classList.add('make_girlfriend');
    }

    if (app_strategies_step_purpose.textContent == '遊び') {
      app_strategies_step_purpose.classList.add('play');
    }

    if (app_strategies_step_purpose.textContent == '超遊び') {
      app_strategies_step_purpose.classList.add('super_play');
    }
  }
});

/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _channels_app_diagnostic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../channels/app-diagnostic.js */ "./app/javascript/channels/app-diagnostic.js");
/* harmony import */ var _channels_app_diagnostic_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_channels_app_diagnostic_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _channels_app_strategies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../channels/app-strategies.js */ "./app/javascript/channels/app-strategies.js");
/* harmony import */ var _channels_app_strategies_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_channels_app_strategies_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _channels_pulldown_select_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../channels/pulldown_select_menu.js */ "./app/javascript/channels/pulldown_select_menu.js");
/* harmony import */ var _channels_pulldown_select_menu_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_channels_pulldown_select_menu_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _channels_date_plans_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../channels/date_plans.js */ "./app/javascript/channels/date_plans.js");
/* harmony import */ var _channels_date_plans_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_channels_date_plans_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _channels_Jquery_selmodal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../channels/Jquery.selmodal.js */ "./app/javascript/channels/Jquery.selmodal.js");
/* harmony import */ var _channels_Jquery_selmodal_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_channels_Jquery_selmodal_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _channels_datepicker_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../channels/datepicker.js */ "./app/javascript/channels/datepicker.js");
/* harmony import */ var _channels_datepicker_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_channels_datepicker_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _channels_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../channels/legacy.js */ "./app/javascript/channels/legacy.js");
/* harmony import */ var _channels_legacy_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_channels_legacy_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _channels_picker_date_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../channels/picker.date.js */ "./app/javascript/channels/picker.date.js");
/* harmony import */ var _channels_picker_date_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_channels_picker_date_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _channels_picker_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../channels/picker.js */ "./app/javascript/channels/picker.js");
/* harmony import */ var _channels_picker_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_channels_picker_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _channels_picker_time_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../channels/picker.time.js */ "./app/javascript/channels/picker.time.js");
/* harmony import */ var _channels_picker_time_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_channels_picker_time_js__WEBPACK_IMPORTED_MODULE_9__);
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
__webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js").start();

__webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js").start();

__webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js").start();

__webpack_require__(/*! channels */ "./app/javascript/channels/index.js");










 // Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

      function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }

      function md5blk(s) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }

        return md5blks;
      }

      function md5blk_array(a) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }

        return md5blks;
      }

      function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }

        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function rhex(n) {
        var s = "",
            j;

        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }

        return s;
      }

      function hex(x) {
        var i;

        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }

        return x.join("");
      }

      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;

      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;

            if (val < 0) {
              return Math.max(val + length, 0);
            }

            return Math.min(val, length);
          }

          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
                begin = clamp(from, length),
                end = length,
                num,
                target,
                targetArray,
                sourceArray;

            if (to !== undefined) {
              end = clamp(to, length);
            }

            if (begin > end) {
              return new ArrayBuffer(0);
            }

            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }

      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }

        return str;
      }

      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;

        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
      }

      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }

      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }

      function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
      }

      function SparkMD5() {
        this.reset();
      }

      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };

      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);
        return this;
      };

      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };

      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };

      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };

      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(this._hash, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };

      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };

      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };

      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;
        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };

      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };

      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      return SparkMD5;
    });
  });

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);

    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }

    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);

        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();

  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');

    if (element) {
      return element.getAttribute("content");
    }
  }

  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }

  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    return root.querySelector(selector);
  }

  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
        cancelable = eventInit.cancelable,
        detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};

    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }

    return event;
  }

  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }

  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;

      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type || "application/octet-stream",
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");

      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};

        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }

        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
            responseType = _xhr.responseType,
            response = _xhr.response;

        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();

  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;

      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
          url = _blob$directUploadDat.url,
          headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";

      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
            status = _xhr.status,
            response = _xhr.response;

        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();

  var id = 0;

  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }

    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }

          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();

  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }

      return object[methodName].apply(object, messages);
    }
  }

  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }

    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);

            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }

          _this.dispatch("end");

          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;

        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });

        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;

        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();

  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";

  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }

    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var controllers = this.createDirectUploadControllers();

        var startNextController = function startNextController() {
          var controller = controllers.shift();

          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);

                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();

            _this.dispatch("end");
          }
        };

        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();

  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;

  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }

  function didClick(event) {
    var target = event.target;

    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }

  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }

  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }

  function handleFormSubmissionEvent(event) {
    var form = event.target;

    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }

    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;

    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);

        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }

  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");

    if (button) {
      var _button = button,
          disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }

    submitButtonsByForm.delete(form);
  }

  function disable(input) {
    input.disabled = true;
  }

  function enable(input) {
    input.disabled = false;
  }

  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }

  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/main/actionview/app/assets/javascripts
Released under the MIT license
 */
;
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form:not([data-turbo=true])',
        formInputClickSelector: 'form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;

      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }

        return element[expando][key] = value;
      };

      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;

      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();

        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();

        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function CustomEvent(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;

        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);

          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function get() {
                return true;
              }
            });
          }

          return result;
        };
      }

      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;

          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }

          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));

          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }

          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });

        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }

        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function prepareOptions(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();

        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }

        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }

        options.accept = AcceptHeaders[options.dataType];

        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }

        return options;
      };

      createXHR = function createXHR(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);

        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }

        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          CSRFProtection(xhr);
        }

        xhr.withCredentials = !!options.withCredentials;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };

        return xhr;
      };

      processResponse = function processResponse(response, type) {
        var parser, script;

        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');

            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }

        return response;
      };

      Rails.href = function (element) {
        return element.href;
      };

      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');

        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;

      toArray = function toArray(e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];

        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }

        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }

          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }

          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });

        if (additionalParam) {
          params.push(additionalParam);
        }

        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      Rails.confirm = function (message, element) {
        return confirm(message);
      };

      allowAction = function allowAction(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');

        if (!message) {
          return true;
        }

        answer = false;

        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}

          callback = fire(element, 'confirm:complete', [answer]);
        }

        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;

        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function (e) {
        var element;

        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }

          element = e.target;
        } else {
          element = e;
        }

        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;

        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function disableLinkElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }

        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function enableLinkElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }

        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function disableFormElements(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function disableFormElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }

        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function enableFormElements(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function enableFormElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }

          setData(element, 'ujs:enable-with', null);
        }

        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

      isXhrRedirect = function isXhrRedirect(event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');

        if (!method) {
          return;
        }

        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";

        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }

        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
          fire,
          getData,
          isCrossDomain,
          isRemote,
          matches,
          serializeElement,
          setData,
          stopEverything,
          slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function isRemote(element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };

      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;

        if (!isRemote(element)) {
          return true;
        }

        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }

        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';

        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;

          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }

          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);

            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }

          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }

        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function beforeSend(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function success() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function error() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function complete() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;

        if (!form) {
          return;
        }

        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }

        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;

        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }

        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }

        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);

  if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/turbolinks/dist/turbolinks.js":
/*!****************************************************!*\
  !*** ./node_modules/turbolinks/dist/turbolinks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function () {
  var t = this;
  (function () {
    (function () {
      this.Turbolinks = {
        supported: function () {
          return null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener;
        }(),
        visit: function visit(t, r) {
          return e.controller.visit(t, r);
        },
        clearCache: function clearCache() {
          return e.controller.clearCache();
        },
        setProgressBarDelay: function setProgressBarDelay(t) {
          return e.controller.setProgressBarDelay(t);
        }
      };
    }).call(this);
  }).call(t);
  var e = t.Turbolinks;
  (function () {
    (function () {
      var t,
          r,
          n,
          o = [].slice;
      e.copyObject = function (t) {
        var e, r, n;
        r = {};

        for (e in t) {
          n = t[e], r[e] = n;
        }

        return r;
      }, e.closest = function (e, r) {
        return t.call(e, r);
      }, t = function () {
        var t, e;
        return t = document.documentElement, null != (e = t.closest) ? e : function (t) {
          var e;

          for (e = this; e;) {
            if (e.nodeType === Node.ELEMENT_NODE && r.call(e, t)) return e;
            e = e.parentNode;
          }
        };
      }(), e.defer = function (t) {
        return setTimeout(t, 1);
      }, e.throttle = function (t) {
        var e;
        return e = null, function () {
          var r;
          return r = 1 <= arguments.length ? o.call(arguments, 0) : [], null != e ? e : e = requestAnimationFrame(function (n) {
            return function () {
              return e = null, t.apply(n, r);
            };
          }(this));
        };
      }, e.dispatch = function (t, e) {
        var r, o, i, s, a, u;
        return a = null != e ? e : {}, u = a.target, r = a.cancelable, o = a.data, i = document.createEvent("Events"), i.initEvent(t, !0, r === !0), i.data = null != o ? o : {}, i.cancelable && !n && (s = i.preventDefault, i.preventDefault = function () {
          return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
            get: function get() {
              return !0;
            }
          }), s.call(this);
        }), (null != u ? u : document).dispatchEvent(i), i;
      }, n = function () {
        var t;
        return t = document.createEvent("Events"), t.initEvent("test", !0, !0), t.preventDefault(), t.defaultPrevented;
      }(), e.match = function (t, e) {
        return r.call(t, e);
      }, r = function () {
        var t, e, r, n;
        return t = document.documentElement, null != (e = null != (r = null != (n = t.matchesSelector) ? n : t.webkitMatchesSelector) ? r : t.msMatchesSelector) ? e : t.mozMatchesSelector;
      }(), e.uuid = function () {
        var t, e, r;

        for (r = "", t = e = 1; 36 >= e; t = ++e) {
          r += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
        }

        return r;
      };
    }).call(this), function () {
      e.Location = function () {
        function t(t) {
          var e, r;
          null == t && (t = ""), r = document.createElement("a"), r.href = t.toString(), this.absoluteURL = r.href, e = r.hash.length, 2 > e ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = r.hash.slice(1));
        }

        var e, r, n, o;
        return t.wrap = function (t) {
          return t instanceof this ? t : new this(t);
        }, t.prototype.getOrigin = function () {
          return this.absoluteURL.split("/", 3).join("/");
        }, t.prototype.getPath = function () {
          var t, e;
          return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/";
        }, t.prototype.getPathComponents = function () {
          return this.getPath().split("/").slice(1);
        }, t.prototype.getLastPathComponent = function () {
          return this.getPathComponents().slice(-1)[0];
        }, t.prototype.getExtension = function () {
          var t, e;
          return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : "";
        }, t.prototype.isHTML = function () {
          return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/);
        }, t.prototype.isPrefixedBy = function (t) {
          var e;
          return e = r(t), this.isEqualTo(t) || o(this.absoluteURL, e);
        }, t.prototype.isEqualTo = function (t) {
          return this.absoluteURL === (null != t ? t.absoluteURL : void 0);
        }, t.prototype.toCacheKey = function () {
          return this.requestURL;
        }, t.prototype.toJSON = function () {
          return this.absoluteURL;
        }, t.prototype.toString = function () {
          return this.absoluteURL;
        }, t.prototype.valueOf = function () {
          return this.absoluteURL;
        }, r = function r(t) {
          return e(t.getOrigin() + t.getPath());
        }, e = function e(t) {
          return n(t, "/") ? t : t + "/";
        }, o = function o(t, e) {
          return t.slice(0, e.length) === e;
        }, n = function n(t, e) {
          return t.slice(-e.length) === e;
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t, e) {
        return function () {
          return _t.apply(e, arguments);
        };
      };

      e.HttpRequest = function () {
        function r(r, n, o) {
          this.delegate = r, this.requestCanceled = t(this.requestCanceled, this), this.requestTimedOut = t(this.requestTimedOut, this), this.requestFailed = t(this.requestFailed, this), this.requestLoaded = t(this.requestLoaded, this), this.requestProgressed = t(this.requestProgressed, this), this.url = e.Location.wrap(n).requestURL, this.referrer = e.Location.wrap(o).absoluteURL, this.createXHR();
        }

        return r.NETWORK_FAILURE = 0, r.TIMEOUT_FAILURE = -1, r.timeout = 60, r.prototype.send = function () {
          var t;
          return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof (t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0;
        }, r.prototype.cancel = function () {
          return this.xhr && this.sent ? this.xhr.abort() : void 0;
        }, r.prototype.requestProgressed = function (t) {
          return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0;
        }, r.prototype.requestLoaded = function () {
          return this.endRequest(function (t) {
            return function () {
              var e;
              return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText));
            };
          }(this));
        }, r.prototype.requestFailed = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE);
            };
          }(this));
        }, r.prototype.requestTimedOut = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE);
            };
          }(this));
        }, r.prototype.requestCanceled = function () {
          return this.endRequest();
        }, r.prototype.notifyApplicationBeforeRequestStart = function () {
          return e.dispatch("turbolinks:request-start", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.notifyApplicationAfterRequestEnd = function () {
          return e.dispatch("turbolinks:request-end", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.createXHR = function () {
          return this.xhr = new XMLHttpRequest(), this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled;
        }, r.prototype.endRequest = function (t) {
          return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0;
        }, r.prototype.setProgress = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0;
        }, r.prototype.destroy = function () {
          var t;
          return this.setProgress(1), "function" == typeof (t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t2, e) {
        return function () {
          return _t2.apply(e, arguments);
        };
      };

      e.ProgressBar = function () {
        function e() {
          this.trickle = t(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement();
        }

        var r;
        return r = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + r + "ms ease-out, opacity " + r / 2 + "ms " + r / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function () {
          return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling());
        }, e.prototype.hide = function () {
          return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function (t) {
            return function () {
              return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1;
            };
          }(this))) : void 0;
        }, e.prototype.setValue = function (t) {
          return this.value = t, this.refresh();
        }, e.prototype.installStylesheetElement = function () {
          return document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
        }, e.prototype.installProgressElement = function () {
          return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh();
        }, e.prototype.fadeProgressElement = function (t) {
          return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * r);
        }, e.prototype.uninstallProgressElement = function () {
          return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0;
        }, e.prototype.startTrickling = function () {
          return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, r);
        }, e.prototype.stopTrickling = function () {
          return clearInterval(this.trickleInterval), this.trickleInterval = null;
        }, e.prototype.trickle = function () {
          return this.setValue(this.value + Math.random() / 100);
        }, e.prototype.refresh = function () {
          return requestAnimationFrame(function (t) {
            return function () {
              return t.progressElement.style.width = 10 + 90 * t.value + "%";
            };
          }(this));
        }, e.prototype.createStylesheetElement = function () {
          var t;
          return t = document.createElement("style"), t.type = "text/css", t.textContent = this.constructor.defaultCSS, t;
        }, e.prototype.createProgressElement = function () {
          var t;
          return t = document.createElement("div"), t.className = "turbolinks-progress-bar", t;
        }, e;
      }();
    }.call(this), function () {
      var t = function t(_t3, e) {
        return function () {
          return _t3.apply(e, arguments);
        };
      };

      e.BrowserAdapter = function () {
        function r(r) {
          this.controller = r, this.showProgressBar = t(this.showProgressBar, this), this.progressBar = new e.ProgressBar();
        }

        var n, o, i;
        return i = e.HttpRequest, n = i.NETWORK_FAILURE, o = i.TIMEOUT_FAILURE, r.prototype.visitProposedToLocationWithAction = function (t, e) {
          return this.controller.startVisitToLocationWithAction(t, e);
        }, r.prototype.visitStarted = function (t) {
          return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot();
        }, r.prototype.visitRequestStarted = function (t) {
          return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar();
        }, r.prototype.visitRequestProgressed = function (t) {
          return this.progressBar.setValue(t.progress);
        }, r.prototype.visitRequestCompleted = function (t) {
          return t.loadResponse();
        }, r.prototype.visitRequestFailedWithStatusCode = function (t, e) {
          switch (e) {
            case n:
            case o:
              return this.reload();

            default:
              return t.loadResponse();
          }
        }, r.prototype.visitRequestFinished = function (t) {
          return this.hideProgressBar();
        }, r.prototype.visitCompleted = function (t) {
          return t.followRedirect();
        }, r.prototype.pageInvalidated = function () {
          return this.reload();
        }, r.prototype.showProgressBarAfterDelay = function () {
          return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay);
        }, r.prototype.showProgressBar = function () {
          return this.progressBar.show();
        }, r.prototype.hideProgressBar = function () {
          return this.progressBar.hide(), clearTimeout(this.progressBarTimeout);
        }, r.prototype.reload = function () {
          return window.location.reload();
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t4, e) {
        return function () {
          return _t4.apply(e, arguments);
        };
      };

      e.History = function () {
        function r(e) {
          this.delegate = e, this.onPageLoad = t(this.onPageLoad, this), this.onPopState = t(this.onPopState, this);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0;
        }, r.prototype.push = function (t, r) {
          return t = e.Location.wrap(t), this.update("push", t, r);
        }, r.prototype.replace = function (t, r) {
          return t = e.Location.wrap(t), this.update("replace", t, r);
        }, r.prototype.onPopState = function (t) {
          var r, n, o, i;
          return this.shouldHandlePopState() && (i = null != (n = t.state) ? n.turbolinks : void 0) ? (r = e.Location.wrap(window.location), o = i.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(r, o)) : void 0;
        }, r.prototype.onPageLoad = function (t) {
          return e.defer(function (t) {
            return function () {
              return t.pageLoaded = !0;
            };
          }(this));
        }, r.prototype.shouldHandlePopState = function () {
          return this.pageIsLoaded();
        }, r.prototype.pageIsLoaded = function () {
          return this.pageLoaded || "complete" === document.readyState;
        }, r.prototype.update = function (t, e, r) {
          var n;
          return n = {
            turbolinks: {
              restorationIdentifier: r
            }
          }, history[t + "State"](n, null, e);
        }, r;
      }();
    }.call(this), function () {
      e.HeadDetails = function () {
        function t(t) {
          var e, r, n, s, a, u;

          for (this.elements = {}, n = 0, a = t.length; a > n; n++) {
            u = t[n], u.nodeType === Node.ELEMENT_NODE && (s = u.outerHTML, r = null != (e = this.elements)[s] ? e[s] : e[s] = {
              type: i(u),
              tracked: o(u),
              elements: []
            }, r.elements.push(u));
          }
        }

        var e, r, n, o, i;
        return t.fromHeadElement = function (t) {
          var e;
          return new this(null != (e = null != t ? t.childNodes : void 0) ? e : []);
        }, t.prototype.hasElementWithKey = function (t) {
          return t in this.elements;
        }, t.prototype.getTrackedElementSignature = function () {
          var t, e;
          return function () {
            var r, n;
            r = this.elements, n = [];

            for (t in r) {
              e = r[t].tracked, e && n.push(t);
            }

            return n;
          }.call(this).join("");
        }, t.prototype.getScriptElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("script", t);
        }, t.prototype.getStylesheetElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("stylesheet", t);
        }, t.prototype.getElementsMatchingTypeNotInDetails = function (t, e) {
          var r, n, o, i, s, a;
          o = this.elements, s = [];

          for (n in o) {
            i = o[n], a = i.type, r = i.elements, a !== t || e.hasElementWithKey(n) || s.push(r[0]);
          }

          return s;
        }, t.prototype.getProvisionalElements = function () {
          var t, e, r, n, o, i, s;
          r = [], n = this.elements;

          for (e in n) {
            o = n[e], s = o.type, i = o.tracked, t = o.elements, null != s || i ? t.length > 1 && r.push.apply(r, t.slice(1)) : r.push.apply(r, t);
          }

          return r;
        }, t.prototype.getMetaValue = function (t) {
          var e;
          return null != (e = this.findMetaElementByName(t)) ? e.getAttribute("content") : void 0;
        }, t.prototype.findMetaElementByName = function (t) {
          var r, n, o, i;
          r = void 0, i = this.elements;

          for (o in i) {
            n = i[o].elements, e(n[0], t) && (r = n[0]);
          }

          return r;
        }, i = function i(t) {
          return r(t) ? "script" : n(t) ? "stylesheet" : void 0;
        }, o = function o(t) {
          return "reload" === t.getAttribute("data-turbolinks-track");
        }, r = function r(t) {
          var e;
          return e = t.tagName.toLowerCase(), "script" === e;
        }, n = function n(t) {
          var e;
          return e = t.tagName.toLowerCase(), "style" === e || "link" === e && "stylesheet" === t.getAttribute("rel");
        }, e = function e(t, _e) {
          var r;
          return r = t.tagName.toLowerCase(), "meta" === r && t.getAttribute("name") === _e;
        }, t;
      }();
    }.call(this), function () {
      e.Snapshot = function () {
        function t(t, e) {
          this.headDetails = t, this.bodyElement = e;
        }

        return t.wrap = function (t) {
          return t instanceof this ? t : "string" == typeof t ? this.fromHTMLString(t) : this.fromHTMLElement(t);
        }, t.fromHTMLString = function (t) {
          var e;
          return e = document.createElement("html"), e.innerHTML = t, this.fromHTMLElement(e);
        }, t.fromHTMLElement = function (t) {
          var r, n, o, i;
          return o = t.querySelector("head"), r = null != (i = t.querySelector("body")) ? i : document.createElement("body"), n = e.HeadDetails.fromHeadElement(o), new this(n, r);
        }, t.prototype.clone = function () {
          return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0));
        }, t.prototype.getRootLocation = function () {
          var t, r;
          return r = null != (t = this.getSetting("root")) ? t : "/", new e.Location(r);
        }, t.prototype.getCacheControlValue = function () {
          return this.getSetting("cache-control");
        }, t.prototype.getElementForAnchor = function (t) {
          try {
            return this.bodyElement.querySelector("[id='" + t + "'], a[name='" + t + "']");
          } catch (e) {}
        }, t.prototype.getPermanentElements = function () {
          return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementById = function (t) {
          return this.bodyElement.querySelector("#" + t + "[data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementsPresentInSnapshot = function (t) {
          var e, r, n, o, i;

          for (o = this.getPermanentElements(), i = [], r = 0, n = o.length; n > r; r++) {
            e = o[r], t.getPermanentElementById(e.id) && i.push(e);
          }

          return i;
        }, t.prototype.findFirstAutofocusableElement = function () {
          return this.bodyElement.querySelector("[autofocus]");
        }, t.prototype.hasAnchor = function (t) {
          return null != this.getElementForAnchor(t);
        }, t.prototype.isPreviewable = function () {
          return "no-preview" !== this.getCacheControlValue();
        }, t.prototype.isCacheable = function () {
          return "no-cache" !== this.getCacheControlValue();
        }, t.prototype.isVisitable = function () {
          return "reload" !== this.getSetting("visit-control");
        }, t.prototype.getSetting = function (t) {
          return this.headDetails.getMetaValue("turbolinks-" + t);
        }, t;
      }();
    }.call(this), function () {
      var t = [].slice;

      e.Renderer = function () {
        function e() {}

        var r;
        return e.render = function () {
          var e, r, n, o;
          return n = arguments[0], r = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], o = function (t, e, r) {
            r.prototype = t.prototype;
            var n = new r(),
                o = t.apply(n, e);
            return Object(o) === o ? o : n;
          }(this, e, function () {}), o.delegate = n, o.render(r), o;
        }, e.prototype.renderView = function (t) {
          return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody);
        }, e.prototype.invalidateView = function () {
          return this.delegate.viewInvalidated();
        }, e.prototype.createScriptElement = function (t) {
          var e;
          return "false" === t.getAttribute("data-turbolinks-eval") ? t : (e = document.createElement("script"), e.textContent = t.textContent, e.async = !1, r(e, t), e);
        }, r = function r(t, e) {
          var r, n, o, i, s, a, u;

          for (i = e.attributes, a = [], r = 0, n = i.length; n > r; r++) {
            s = i[r], o = s.name, u = s.value, a.push(t.setAttribute(o, u));
          }

          return a;
        }, e;
      }();
    }.call(this), function () {
      var t,
          r,
          n = function n(t, e) {
        function r() {
          this.constructor = t;
        }

        for (var n in e) {
          o.call(e, n) && (t[n] = e[n]);
        }

        return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty;

      e.SnapshotRenderer = function (e) {
        function o(t, e, r) {
          this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = r, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement;
        }

        return n(o, e), o.prototype.render = function (t) {
          return this.shouldRender() ? (this.mergeHead(), this.renderView(function (e) {
            return function () {
              return e.replaceBody(), e.isPreview || e.focusFirstAutofocusableElement(), t();
            };
          }(this))) : this.invalidateView();
        }, o.prototype.mergeHead = function () {
          return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements();
        }, o.prototype.replaceBody = function () {
          var t;
          return t = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(t);
        }, o.prototype.shouldRender = function () {
          return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical();
        }, o.prototype.trackedElementsAreIdentical = function () {
          return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature();
        }, o.prototype.copyNewHeadStylesheetElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadStylesheetElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadScriptElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadScriptElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(this.createScriptElement(t)));
          }

          return o;
        }, o.prototype.removeCurrentHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getCurrentHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.removeChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.relocateCurrentBodyPermanentElements = function () {
          var e, n, o, i, s, a, u;

          for (a = this.getCurrentBodyPermanentElements(), u = [], e = 0, n = a.length; n > e; e++) {
            i = a[e], s = t(i), o = this.newSnapshot.getPermanentElementById(i.id), r(i, s.element), r(o, i), u.push(s);
          }

          return u;
        }, o.prototype.replacePlaceholderElementsWithClonedPermanentElements = function (t) {
          var e, n, o, i, s, a, u;

          for (u = [], o = 0, i = t.length; i > o; o++) {
            a = t[o], n = a.element, s = a.permanentElement, e = s.cloneNode(!0), u.push(r(n, e));
          }

          return u;
        }, o.prototype.activateNewBodyScriptElements = function () {
          var t, e, n, o, i, s;

          for (i = this.getNewBodyScriptElements(), s = [], e = 0, o = i.length; o > e; e++) {
            n = i[e], t = this.createScriptElement(n), s.push(r(n, t));
          }

          return s;
        }, o.prototype.assignNewBody = function () {
          return document.body = this.newBody;
        }, o.prototype.focusFirstAutofocusableElement = function () {
          var t;
          return null != (t = this.newSnapshot.findFirstAutofocusableElement()) ? t.focus() : void 0;
        }, o.prototype.getNewHeadStylesheetElements = function () {
          return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getNewHeadScriptElements = function () {
          return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getCurrentHeadProvisionalElements = function () {
          return this.currentHeadDetails.getProvisionalElements();
        }, o.prototype.getNewHeadProvisionalElements = function () {
          return this.newHeadDetails.getProvisionalElements();
        }, o.prototype.getCurrentBodyPermanentElements = function () {
          return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot);
        }, o.prototype.getNewBodyScriptElements = function () {
          return this.newBody.querySelectorAll("script");
        }, o;
      }(e.Renderer), t = function t(_t5) {
        var e;
        return e = document.createElement("meta"), e.setAttribute("name", "turbolinks-permanent-placeholder"), e.setAttribute("content", _t5.id), {
          element: e,
          permanentElement: _t5
        };
      }, r = function r(t, e) {
        var r;
        return (r = t.parentNode) ? r.replaceChild(e, t) : void 0;
      };
    }.call(this), function () {
      var t = function t(_t6, e) {
        function n() {
          this.constructor = _t6;
        }

        for (var o in e) {
          r.call(e, o) && (_t6[o] = e[o]);
        }

        return n.prototype = e.prototype, _t6.prototype = new n(), _t6.__super__ = e.prototype, _t6;
      },
          r = {}.hasOwnProperty;

      e.ErrorRenderer = function (e) {
        function r(t) {
          var e;
          e = document.createElement("html"), e.innerHTML = t, this.newHead = e.querySelector("head"), this.newBody = e.querySelector("body");
        }

        return t(r, e), r.prototype.render = function (t) {
          return this.renderView(function (e) {
            return function () {
              return e.replaceHeadAndBody(), e.activateBodyScriptElements(), t();
            };
          }(this));
        }, r.prototype.replaceHeadAndBody = function () {
          var t, e;
          return e = document.head, t = document.body, e.parentNode.replaceChild(this.newHead, e), t.parentNode.replaceChild(this.newBody, t);
        }, r.prototype.activateBodyScriptElements = function () {
          var t, e, r, n, o, i;

          for (n = this.getScriptElements(), i = [], e = 0, r = n.length; r > e; e++) {
            o = n[e], t = this.createScriptElement(o), i.push(o.parentNode.replaceChild(t, o));
          }

          return i;
        }, r.prototype.getScriptElements = function () {
          return document.documentElement.querySelectorAll("script");
        }, r;
      }(e.Renderer);
    }.call(this), function () {
      e.View = function () {
        function t(t) {
          this.delegate = t, this.htmlElement = document.documentElement;
        }

        return t.prototype.getRootLocation = function () {
          return this.getSnapshot().getRootLocation();
        }, t.prototype.getElementForAnchor = function (t) {
          return this.getSnapshot().getElementForAnchor(t);
        }, t.prototype.getSnapshot = function () {
          return e.Snapshot.fromHTMLElement(this.htmlElement);
        }, t.prototype.render = function (t, e) {
          var r, n, o;
          return o = t.snapshot, r = t.error, n = t.isPreview, this.markAsPreview(n), null != o ? this.renderSnapshot(o, n, e) : this.renderError(r, e);
        }, t.prototype.markAsPreview = function (t) {
          return t ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview");
        }, t.prototype.renderSnapshot = function (t, r, n) {
          return e.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), e.Snapshot.wrap(t), r);
        }, t.prototype.renderError = function (t, r) {
          return e.ErrorRenderer.render(this.delegate, r, t);
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t7, e) {
        return function () {
          return _t7.apply(e, arguments);
        };
      };

      e.ScrollManager = function () {
        function r(r) {
          this.delegate = r, this.onScroll = t(this.onScroll, this), this.onScroll = e.throttle(this.onScroll);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0;
        }, r.prototype.scrollToElement = function (t) {
          return t.scrollIntoView();
        }, r.prototype.scrollToPosition = function (t) {
          var e, r;
          return e = t.x, r = t.y, window.scrollTo(e, r);
        }, r.prototype.onScroll = function (t) {
          return this.updatePosition({
            x: window.pageXOffset,
            y: window.pageYOffset
          });
        }, r.prototype.updatePosition = function (t) {
          var e;
          return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0;
        }, r;
      }();
    }.call(this), function () {
      e.SnapshotCache = function () {
        function t(t) {
          this.size = t, this.keys = [], this.snapshots = {};
        }

        var r;
        return t.prototype.has = function (t) {
          var e;
          return e = r(t), e in this.snapshots;
        }, t.prototype.get = function (t) {
          var e;
          if (this.has(t)) return e = this.read(t), this.touch(t), e;
        }, t.prototype.put = function (t, e) {
          return this.write(t, e), this.touch(t), e;
        }, t.prototype.read = function (t) {
          var e;
          return e = r(t), this.snapshots[e];
        }, t.prototype.write = function (t, e) {
          var n;
          return n = r(t), this.snapshots[n] = e;
        }, t.prototype.touch = function (t) {
          var e, n;
          return n = r(t), e = this.keys.indexOf(n), e > -1 && this.keys.splice(e, 1), this.keys.unshift(n), this.trim();
        }, t.prototype.trim = function () {
          var t, e, r, n, o;

          for (n = this.keys.splice(this.size), o = [], t = 0, r = n.length; r > t; t++) {
            e = n[t], o.push(delete this.snapshots[e]);
          }

          return o;
        }, r = function r(t) {
          return e.Location.wrap(t).toCacheKey();
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t8, e) {
        return function () {
          return _t8.apply(e, arguments);
        };
      };

      e.Visit = function () {
        function r(r, n, o) {
          this.controller = r, this.action = o, this.performScroll = t(this.performScroll, this), this.identifier = e.uuid(), this.location = e.Location.wrap(n), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {};
        }

        var n;
        return r.prototype.start = function () {
          return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0;
        }, r.prototype.cancel = function () {
          var t;
          return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0;
        }, r.prototype.complete = function () {
          var t;
          return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof (t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0;
        }, r.prototype.fail = function () {
          var t;
          return "started" === this.state ? (this.state = "failed", "function" == typeof (t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0;
        }, r.prototype.changeHistory = function () {
          var t, e;
          return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = n(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0);
        }, r.prototype.issueRequest = function () {
          return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new e.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0;
        }, r.prototype.getCachedSnapshot = function () {
          var t;
          return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t;
        }, r.prototype.hasCachedSnapshot = function () {
          return null != this.getCachedSnapshot();
        }, r.prototype.loadCachedSnapshot = function () {
          var t, e;
          return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function () {
            var r;
            return this.cacheSnapshot(), this.controller.render({
              snapshot: e,
              isPreview: t
            }, this.performScroll), "function" == typeof (r = this.adapter).visitRendered && r.visitRendered(this), t ? void 0 : this.complete();
          })) : void 0;
        }, r.prototype.loadResponse = function () {
          return null != this.response ? this.render(function () {
            var t, e;
            return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
              error: this.response
            }, this.performScroll), "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
              snapshot: this.response
            }, this.performScroll), "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this), this.complete());
          }) : void 0;
        }, r.prototype.followRedirect = function () {
          return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0;
        }, r.prototype.requestStarted = function () {
          var t;
          return this.recordTimingMetric("requestStart"), "function" == typeof (t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0;
        }, r.prototype.requestProgressed = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0;
        }, r.prototype.requestCompletedWithResponse = function (t, r) {
          return this.response = t, null != r && (this.redirectedToLocation = e.Location.wrap(r)), this.adapter.visitRequestCompleted(this);
        }, r.prototype.requestFailedWithStatusCode = function (t, e) {
          return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t);
        }, r.prototype.requestFinished = function () {
          var t;
          return this.recordTimingMetric("requestEnd"), "function" == typeof (t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0;
        }, r.prototype.performScroll = function () {
          return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0);
        }, r.prototype.scrollToRestoredPosition = function () {
          var t, e;
          return t = null != (e = this.restorationData) ? e.scrollPosition : void 0, null != t ? (this.controller.scrollToPosition(t), !0) : void 0;
        }, r.prototype.scrollToAnchor = function () {
          return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0;
        }, r.prototype.scrollToTop = function () {
          return this.controller.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.recordTimingMetric = function (t) {
          var e;
          return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = new Date().getTime();
        }, r.prototype.getTimingMetrics = function () {
          return e.copyObject(this.timingMetrics);
        }, n = function n(t) {
          switch (t) {
            case "replace":
              return "replaceHistoryWithLocationAndRestorationIdentifier";

            case "advance":
            case "restore":
              return "pushHistoryWithLocationAndRestorationIdentifier";
          }
        }, r.prototype.shouldIssueRequest = function () {
          return "restore" === this.action ? !this.hasCachedSnapshot() : !0;
        }, r.prototype.cacheSnapshot = function () {
          return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0);
        }, r.prototype.render = function (t) {
          return this.cancelRender(), this.frame = requestAnimationFrame(function (e) {
            return function () {
              return e.frame = null, t.call(e);
            };
          }(this));
        }, r.prototype.cancelRender = function () {
          return this.frame ? cancelAnimationFrame(this.frame) : void 0;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t9, e) {
        return function () {
          return _t9.apply(e, arguments);
        };
      };

      e.Controller = function () {
        function r() {
          this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new e.History(this), this.view = new e.View(this), this.scrollManager = new e.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500);
        }

        return r.prototype.start = function () {
          return e.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0;
        }, r.prototype.disable = function () {
          return this.enabled = !1;
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0;
        }, r.prototype.clearCache = function () {
          return this.cache = new e.SnapshotCache(10);
        }, r.prototype.visit = function (t, r) {
          var n, o;
          return null == r && (r = {}), t = e.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (n = null != (o = r.action) ? o : "advance", this.adapter.visitProposedToLocationWithAction(t, n)) : window.location = t : void 0;
        }, r.prototype.startVisitToLocationWithAction = function (t, r, n) {
          var o;
          return e.supported ? (o = this.getRestorationDataForIdentifier(n), this.startVisit(t, r, {
            restorationData: o
          })) : window.location = t;
        }, r.prototype.setProgressBarDelay = function (t) {
          return this.progressBarDelay = t;
        }, r.prototype.startHistory = function () {
          return this.location = e.Location.wrap(window.location), this.restorationIdentifier = e.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.stopHistory = function () {
          return this.history.stop();
        }, r.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier);
        }, r.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.historyPoppedToLocationWithRestorationIdentifier = function (t, r) {
          var n;
          return this.restorationIdentifier = r, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
            restorationIdentifier: this.restorationIdentifier,
            restorationData: n,
            historyChanged: !0
          }), this.location = e.Location.wrap(t)) : this.adapter.pageInvalidated();
        }, r.prototype.getCachedSnapshotForLocation = function (t) {
          var e;
          return null != (e = this.cache.get(t)) ? e.clone() : void 0;
        }, r.prototype.shouldCacheSnapshot = function () {
          return this.view.getSnapshot().isCacheable();
        }, r.prototype.cacheSnapshot = function () {
          var t, r;
          return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), r = this.view.getSnapshot(), t = this.lastRenderedLocation, e.defer(function (e) {
            return function () {
              return e.cache.put(t, r.clone());
            };
          }(this))) : void 0;
        }, r.prototype.scrollToAnchor = function (t) {
          var e;
          return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.scrollToElement = function (t) {
          return this.scrollManager.scrollToElement(t);
        }, r.prototype.scrollToPosition = function (t) {
          return this.scrollManager.scrollToPosition(t);
        }, r.prototype.scrollPositionChanged = function (t) {
          var e;
          return e = this.getCurrentRestorationData(), e.scrollPosition = t;
        }, r.prototype.render = function (t, e) {
          return this.view.render(t, e);
        }, r.prototype.viewInvalidated = function () {
          return this.adapter.pageInvalidated();
        }, r.prototype.viewWillRender = function (t) {
          return this.notifyApplicationBeforeRender(t);
        }, r.prototype.viewRendered = function () {
          return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender();
        }, r.prototype.pageLoaded = function () {
          return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad();
        }, r.prototype.clickCaptured = function () {
          return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1);
        }, r.prototype.clickBubbled = function (t) {
          var e, r, n;
          return this.enabled && this.clickEventIsSignificant(t) && (r = this.getVisitableLinkForNode(t.target)) && (n = this.getVisitableLocationForLink(r)) && this.applicationAllowsFollowingLinkToLocation(r, n) ? (t.preventDefault(), e = this.getActionForLink(r), this.visit(n, {
            action: e
          })) : void 0;
        }, r.prototype.applicationAllowsFollowingLinkToLocation = function (t, e) {
          var r;
          return r = this.notifyApplicationAfterClickingLinkToLocation(t, e), !r.defaultPrevented;
        }, r.prototype.applicationAllowsVisitingLocation = function (t) {
          var e;
          return e = this.notifyApplicationBeforeVisitingLocation(t), !e.defaultPrevented;
        }, r.prototype.notifyApplicationAfterClickingLinkToLocation = function (t, r) {
          return e.dispatch("turbolinks:click", {
            target: t,
            data: {
              url: r.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationBeforeVisitingLocation = function (t) {
          return e.dispatch("turbolinks:before-visit", {
            data: {
              url: t.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationAfterVisitingLocation = function (t) {
          return e.dispatch("turbolinks:visit", {
            data: {
              url: t.absoluteURL
            }
          });
        }, r.prototype.notifyApplicationBeforeCachingSnapshot = function () {
          return e.dispatch("turbolinks:before-cache");
        }, r.prototype.notifyApplicationBeforeRender = function (t) {
          return e.dispatch("turbolinks:before-render", {
            data: {
              newBody: t
            }
          });
        }, r.prototype.notifyApplicationAfterRender = function () {
          return e.dispatch("turbolinks:render");
        }, r.prototype.notifyApplicationAfterPageLoad = function (t) {
          return null == t && (t = {}), e.dispatch("turbolinks:load", {
            data: {
              url: this.location.absoluteURL,
              timing: t
            }
          });
        }, r.prototype.startVisit = function (t, e, r) {
          var n;
          return null != (n = this.currentVisit) && n.cancel(), this.currentVisit = this.createVisit(t, e, r), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t);
        }, r.prototype.createVisit = function (t, r, n) {
          var o, i, s, a, u;
          return i = null != n ? n : {}, a = i.restorationIdentifier, s = i.restorationData, o = i.historyChanged, u = new e.Visit(this, t, r), u.restorationIdentifier = null != a ? a : e.uuid(), u.restorationData = e.copyObject(s), u.historyChanged = o, u.referrer = this.location, u;
        }, r.prototype.visitCompleted = function (t) {
          return this.notifyApplicationAfterPageLoad(t.getTimingMetrics());
        }, r.prototype.clickEventIsSignificant = function (t) {
          return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey);
        }, r.prototype.getVisitableLinkForNode = function (t) {
          return this.nodeIsVisitable(t) ? e.closest(t, "a[href]:not([target]):not([download])") : void 0;
        }, r.prototype.getVisitableLocationForLink = function (t) {
          var r;
          return r = new e.Location(t.getAttribute("href")), this.locationIsVisitable(r) ? r : void 0;
        }, r.prototype.getActionForLink = function (t) {
          var e;
          return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance";
        }, r.prototype.nodeIsVisitable = function (t) {
          var r;
          return (r = e.closest(t, "[data-turbolinks]")) ? "false" !== r.getAttribute("data-turbolinks") : !0;
        }, r.prototype.locationIsVisitable = function (t) {
          return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML();
        }, r.prototype.getCurrentRestorationData = function () {
          return this.getRestorationDataForIdentifier(this.restorationIdentifier);
        }, r.prototype.getRestorationDataForIdentifier = function (t) {
          var e;
          return null != (e = this.restorationData)[t] ? e[t] : e[t] = {};
        }, r;
      }();
    }.call(this), function () {
      !function () {
        var t, e;
        if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning")) for (; t = t.parentNode;) {
          if (t === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML);
        }
      }();
    }.call(this), function () {
      var t, r, n;
      e.start = function () {
        return r() ? (null == e.controller && (e.controller = t()), e.controller.start()) : void 0;
      }, r = function r() {
        return null == window.Turbolinks && (window.Turbolinks = e), n();
      }, t = function t() {
        var t;
        return t = new e.Controller(), t.adapter = new e.BrowserAdapter(t), t;
      }, n = function n() {
        return window.Turbolinks === e;
      }, n() && e.start();
    }.call(this);
  }).call(this), "object" == ( false ? undefined : _typeof(module)) && module.exports ? module.exports = e :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=application-f4f91cb16150900a268a.js.map