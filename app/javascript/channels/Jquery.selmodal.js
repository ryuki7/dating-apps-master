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
var city_input_error_message_create = "not_exist";

// edit用
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

var city_select_start_button_click_discrimination = "ok";

//


$(function(){
	//後者のセレクトをプラグインに適用
	$('.selmodaltest').selModal();
	//すべてのセレクトボックスに同じ処理する場合は下記のように書く
	//$('select').selModal();
});


const prefectures_select_button = document.getElementById("prefectures_select_button");
const city_select_start_button = document.getElementById("city_select_start_button");
var city_select_button = document.getElementById("city_select_button");
var city_select_button_fake = null;
const city_select_element = document.getElementById("city_select_element");
const city_select_element_fake = document.getElementById("city_select_element_fake");
if (city_select_element_fake) {
	var city_select_element_children = city_select_element_fake.children;
	var city_select_element_option_value_0 = city_select_element_fake.firstElementChild;
}
const name_select = document.getElementById("name_select");


// リセットボタン(「市を入力するボタン」をクリック後、再度「都道府県ボタン」をクリックすると、初期状態に戻す。)
if (prefectures_select_button) {
	prefectures_select_button.addEventListener('click', function () {

		// エラーメッセージ削除(都道府県を選択していない時に、「市区町村を入力する」をクリックしたエラー)
		var targets_registration_city_input_error_message = document.getElementById("targets_registration_city_input_error_message");
		if (targets_registration_city_input_error_message) {
			targets_registration_city_input_error_message.remove();
			city_input_error_message_create = "not_exist";
		}

		const city_select_button_fake_delete = document.getElementById("hidden");
		if (city_select_button_fake_delete) {
			const selModal = document.getElementsByClassName("selModal")
			selModal[8].remove();
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
}


// 「市を入力するボタン」のクリック(都道府県を選択してから「市を入力するボタン」をクリックすると、市を選択出来るようになる。)
if (prefectures_select_button && city_select_start_button) {
	city_select_start_button.addEventListener('click', function () {
		if (prefectures_select_button.textContent == '都道府県を選択してください') {
			const city_select_start_button = document.getElementById("city_select_start_button");

			// エラーメッセージ生成(都道府県を選択していない時に、「市区町村を入力する」をクリックしたエラー)
			if (city_input_error_message_create == "not_exist") {
				const error_message = document.createElement('p');
				error_message.textContent = '「都道府県」を選択して下さい。';
				error_message.id = 'targets_registration_city_input_error_message';
				city_select_start_button.before(error_message);
				city_input_error_message_create = "exist";
			}
		}else{
			const city_select_button_fake_delete = document.getElementById("hidden");
			if (!city_select_button_fake_delete) {
				city_select_start_button.classList.add('hidden');
				city_select_button.classList.remove('hidden');

				// 市のセレクトボタン(button)のフェイク
				city_select_button_fake = document.createElement('button');
				city_select_button_fake.textContent = 'フェイク';
				city_select_button_fake.id = 'hidden';
				city_select_button_fake.type = 'button';
				city_select_start_button.after(city_select_button_fake);

				// 「市」selectタグのoption選択データを追加(子要素)
				const city_select_option_elements_array = document.querySelectorAll(`#${prefectures_select_button.textContent}オプション`);
				var each_city_name_array = [];
				for(var i = 0; i < city_select_option_elements_array.length; i++) {
					each_city_name_array.push(city_select_option_elements_array[i].textContent); 
				}

				for(var i = 0; i < each_city_name_array.length; i++) {
					let city_select_element_child_option_create = document.createElement('option');
					city_select_element_child_option_create.textContent = each_city_name_array[i];
					city_select_element_child_option_create.value = each_city_name_array[i];
					city_select_element.appendChild(city_select_element_child_option_create);
				}

				city_select_button_create_OK = 1;

				//後者のセレクトをプラグインに適用
				$('#city_select_element').selModal();
				//すべてのセレクトボックスに同じ処理する場合は下記のように書く
				//$('select').selModal();
				(function($){
			
					$.fn.selModal = function(){
				
						var SEL_PARENT = $(this);
						
						SEL_PARENT.each(function(i){
							
							var select_this = $(this);
						
							var sel_name_attr = $(this).attr('name');
							var selected = $(this).prop('selectedIndex');
							var selected_name; 
							var modal_html = '';
							var button_html = '';
							var sel_default_text = '選択してください。';
				
							if (select_this[0].id == "city_select_element" && city_select_button_create_OK == 0) {
				
							}else{
							
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
								for(var i = 0; i < aryChild.length; i++){
									var img_div = '';
									if(aryChild.eq(i).attr('data-image')){
										if (i == 3) {
											img_div = '<img src="' + aryChild.eq(i).attr('data-image') + '" class="app-image-tapple-select">';
										} else {
											img_div = '<img src="' + aryChild.eq(i).attr('data-image') + '">';
										}
									}

									// app
									if (targets_edit_sign_input && targets_edit_discrimination == "start" && app_start == "ok" && select_this[0].name == "app_id") {
										const targets_edit_app = document.getElementById("targets_edit_app");
										selected = targets_edit_app.textContent;
										app_start = "no";
									}

									// appearance
									if (targets_edit_sign_input && targets_edit_discrimination == "start" && appearance_start == "ok" && select_this[0].name == "appearance_id") {
										const targets_edit_appearance = document.getElementById("targets_edit_appearance");
										selected = targets_edit_appearance.textContent;
										appearance_start = "no";
									}

									// age
									if (targets_edit_sign_input && targets_edit_discrimination == "start" && age_start == "ok" && select_this[0].name == "age") {
										const targets_edit_age = document.getElementById("targets_edit_age");
										selected = targets_edit_age.textContent;
										age_start = "no";
									}

									// purpose
									if (targets_edit_sign_input && targets_edit_discrimination == "start" && purpose_start == "ok" && select_this[0].name == "purpose_id") {
										const targets_edit_purpose = document.getElementById("targets_edit_purpose");
										selected = targets_edit_purpose.textContent;
										purpose_start = "no";
									}

									// job
									if (targets_edit_sign_input && targets_edit_discrimination == "start" && job_start == "ok" && select_this[0].name == "job_id") {
										const targets_edit_job = document.getElementById("targets_edit_job");
										selected = targets_edit_job.textContent;
										job_start = "no";
									}

									// height
									if (targets_edit_sign_input && targets_edit_discrimination == "start" && height_start == "ok" && select_this[0].name == "height") {
										const targets_edit_height = document.getElementById("targets_edit_height");
										selected = targets_edit_height.textContent;
										height_start = "no";
									}

									// prefecture
									if (targets_edit_sign_input && targets_edit_discrimination == "start" && prefecture_start == "ok" && select_this[0].name == "prefecture") {
										const targets_edit_prefecture = document.getElementById("targets_edit_prefecture");
										prefecture_name = targets_edit_prefecture.textContent;
										const prefectures_select_element = document.getElementById("prefectures_select_element");
										const prefecture_option_array = prefectures_select_element.children;
										for(let i = 0; i < prefecture_option_array.length; i++) {
											if (prefecture_name == prefecture_option_array[i].textContent) {
												selected = i;
											}
										}
										prefecture_start = "no";
									}

									// city
									if (targets_edit_sign_input && targets_edit_discrimination == "start" && city_start == "ok" && select_this[0].name == "city") {
										const targets_edit_city = document.getElementById("targets_edit_city");
										city_name = targets_edit_city.textContent;

										// "{県名}オプション"
										const targets_edit_prefecture_city = document.getElementById("targets_edit_prefecture_city");
										prefecture_name_option_name = targets_edit_prefecture_city.textContent;

										const city_option_array = document.querySelectorAll(`#${prefecture_name_option_name}`);
										for(let i = 0; i < city_option_array.length; i++) {
											if (city_name == city_option_array[i].textContent) {
												selected = i + 1;
											}
										}
										city_start = "no";
									}

									// personality
									if (targets_edit_sign_input && targets_edit_discrimination == "start" && personality_start == "ok" && select_this[0].name == "personality_id") {
										const targets_edit_personality = document.getElementById("targets_edit_personality");
										selected = targets_edit_personality.textContent;
										personality_start = "no";
									}

									if(selected != i){
										modal_html += '<li class="selModalClose" id="' + aryChild.eq(i).attr('value') + '" data-value="' + aryChild.eq(i).attr('value') + '">' + img_div + aryChild.eq(i).text() + '</li>';	
									}else{
										modal_html += '<li class="selected selModalClose" data-value="' + aryChild.eq(i).attr('value') + '">' + img_div + aryChild.eq(i).text() + '</li>';
										selected_name = aryChild.eq(i).text();
									}
								}

								targets_edit_discrimination == "end"

								modal_html += '</ul>';
								modal_html += '</div>';
								modal_html += '</div>';	
								
								if(selected_name === undefined){
									button_html = '<button type="button" class="selModalButton" data-selmodalbtn="' + sel_name_attr + '">' + sel_default_text + '</button>';
								}else{
									if (select_this[0].id == "prefectures_select_element" || select_this[0].id == "city_select_element") {
										button_html = ''
									}else{
										button_html = '<button type="button" class="selModalButton" data-selmodalbtn="' + sel_name_attr + '">' + selected_name + '</button>';
									}
								}
						
								// 元のセレクトボックスは非表示
								$(this).hide();
				
								//ボタン生成
								if (select_this[0].id == "prefectures_select_element") {
									prefectures_select_button_create(sel_name_attr);
								}else if (select_this[0].id == "city_select_element") {
									city_select_button_create(sel_name_attr);
								}else{
									$(this).after(button_html);
								}
				
								//モーダルウインドウ生成
								$('body').append(modal_html);
								
								//ボタンクリック
								$('[data-selmodalbtn="' + sel_name_attr + '"]').click(function(){
								
									href = $('[data-selmodal="' + $(this).data('selmodalbtn') + '"]');
										
									$(href).show();
									$('body').addClass('selModalBody');
										
									var par_height = $(href).find('.selModalInner').outerHeight();
									var c_head = $(href).find('.selModalHeader').outerHeight();
									$(href).find('.selModalList').css('height', (par_height - c_head) + 'px');
										
									var pos = 0;
									var tr = 0;
									$(href).find('.selModalList ul li').each(function(key, value){
										if($(value).hasClass('selected')){
											tr = $(value).outerHeight(true);
											return false;
										}else{
											pos += $(value).outerHeight(true);
										}
									});
										
									var sh = $(href).find('.selModalList').height();
									if(sh > 0) pos -= (sh / 2);
									if(tr > 0) pos += (tr / 2);
									$(href).find('.selModalList').scrollTop(pos);
								});
									
								$('[data-selmodal="' + sel_name_attr + '"]').find('.selModalList').on('touchstart', function(){
									if($(this).scrollTop() == 0){
										$(this).scrollTop(1);
									}
									var scrollHeight = $(this)[0].scrollHeight;
									var scrollPosition = $(this).scrollTop() + $(this).height();
									if(scrollHeight == scrollPosition){
										$(this).scrollTop(($(this).scrollTop() - 1));
									}
								});
									
								$('[data-selmodal="' + sel_name_attr + '"]').find('.selModalList li').on('touchstart', function(){
									$(this).addClass('totch');
								});
									
								$('[data-selmodal="' + sel_name_attr + '"]').find('.selModalList li').on('touchend', function(){
									$(this).closest('ul').find('li').removeClass('totch');
								});
									
								//ボタンクリック
								$('[data-selmodal="' + sel_name_attr + '"]').find('li').click(function(){
									$(this).closest('ul').find('li').removeClass('selected');
									$(this).addClass('selected');
									var hoge = $(this).closest('.selModal').data('selmodal');
									var this_no = $(this).closest('ul').find('li').index(this);
									var before_no = $('select[name="' + hoge + '"]').prop("selectedIndex");
									$('select[name="' + hoge + '"]').prop("selectedIndex", this_no);
									$('[data-selmodalbtn="' + hoge + '"]').text($(this).text());
									if(this_no != before_no){
										select_this.trigger('change');
									}
								});
									
								$('[data-selmodal="' + sel_name_attr + '"]').find('.selModalClose').click(function(){
									$(this).parents(".selModal").hide();
									$('body').removeClass('selModalBody');
								});
							}
						});
					}
					
						$.fn.selModalSetValue = function(value){
							var sel_dom = $(this);
							if (sel_dom[0].id == "city_select_element" && city_select_button_create_OK == 0) {
				
							}else{
							sel_dom.val(value);
							var sel_text = $(sel_dom).find('option:selected').text();
							var name = sel_dom.attr('name');
							var sel_list = $('[data-selmodal="' + name + '"]');
							var sel_btn = $('[data-selmodalbtn="' + name + '"]');
							
							sel_list.find('li').removeClass('selected');
							sel_list.find('[data-value="' + value + '"]').addClass('selected');
							sel_btn.text(sel_text);
						}
					}

				})(jQuery);
				city_select_button_create_OK = 0;

				
			}
		}
	});
}


(function($){
	
	$.fn.selModal = function(){

		var SEL_PARENT = $(this);
		
		SEL_PARENT.each(function(i){
			
			var select_this = $(this);
		 
			var sel_name_attr = $(this).attr('name');
			var selected = $(this).prop('selectedIndex');
			var selected_name; 
			var modal_html = '';
			var button_html = '';
			var sel_default_text = '選択してください。';

			if (select_this[0].id == "city_select_element" && city_select_button_create_OK == 0) {

			}else{
			
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
				for(var i = 0; i < aryChild.length; i++){
					var img_div = '';
					if(aryChild.eq(i).attr('data-image')){
						if (select_this[0].id == "app_select_element" && i == 3) {
							img_div = '<img src="' + aryChild.eq(i).attr('data-image') + '" class="app-image-tapple-select">';
						} else {
							img_div = '<img src="' + aryChild.eq(i).attr('data-image') + '">';
						}
					}
                    
					// app
					if (targets_edit_sign_input && targets_edit_discrimination == "start" && app_start == "ok" && select_this[0].name == "app_id") {
						const targets_edit_app = document.getElementById("targets_edit_app");
						selected = targets_edit_app.textContent;
						app_start = "no";
					}

					// appearance
					if (targets_edit_sign_input && targets_edit_discrimination == "start" && appearance_start == "ok" && select_this[0].name == "appearance_id") {
						const targets_edit_appearance = document.getElementById("targets_edit_appearance");
						selected = targets_edit_appearance.textContent;
						appearance_start = "no";
					}

					// age
					if (targets_edit_sign_input && targets_edit_discrimination == "start" && age_start == "ok" && select_this[0].name == "age") {
						const targets_edit_age = document.getElementById("targets_edit_age");
						selected = targets_edit_age.textContent;
						age_start = "no";
					}

					// purpose
					if (targets_edit_sign_input && targets_edit_discrimination == "start" && purpose_start == "ok" && select_this[0].name == "purpose_id") {
						const targets_edit_purpose = document.getElementById("targets_edit_purpose");
						selected = targets_edit_purpose.textContent;
						purpose_start = "no";
					}

					// job
					if (targets_edit_sign_input && targets_edit_discrimination == "start" && job_start == "ok" && select_this[0].name == "job_id") {
						const targets_edit_job = document.getElementById("targets_edit_job");
						selected = targets_edit_job.textContent;
						job_start = "no";
					}

					// height
					if (targets_edit_sign_input && targets_edit_discrimination == "start" && height_start == "ok" && select_this[0].name == "height") {
						const targets_edit_height = document.getElementById("targets_edit_height");
						selected = targets_edit_height.textContent;
						height_start = "no";
					}

					// prefecture
					if (targets_edit_sign_input && targets_edit_discrimination == "start" && prefecture_start == "ok" && select_this[0].name == "prefecture") {
						const targets_edit_prefecture = document.getElementById("targets_edit_prefecture");
						prefecture_name = targets_edit_prefecture.textContent;
						const prefectures_select_element = document.getElementById("prefectures_select_element");
						const prefecture_option_array = prefectures_select_element.children;
						for(let i = 0; i < prefecture_option_array.length; i++) {
							if (prefecture_name == prefecture_option_array[i].textContent) {
								selected = i;
							}
						}
						prefecture_start = "no";
					}

					// city
					if (targets_edit_sign_input && targets_edit_discrimination == "start" && city_start == "ok" && select_this[0].name == "city") {
						const targets_edit_city = document.getElementById("targets_edit_city");
						city_name = targets_edit_city.textContent;

						// "{県名}オプション"
						const targets_edit_prefecture_city = document.getElementById("targets_edit_prefecture_city");
						prefecture_name_option_name = targets_edit_prefecture_city.textContent;

						const city_option_array = document.querySelectorAll(`#${prefecture_name_option_name}`);
						for(let i = 0; i < city_option_array.length; i++) {
							if (city_name == city_option_array[i].textContent) {
								selected = i + 1;
							}
						}
						city_start = "no";
					}

					// personality
					if (targets_edit_sign_input && targets_edit_discrimination == "start" && personality_start == "ok" && select_this[0].name == "personality_id") {
						const targets_edit_personality = document.getElementById("targets_edit_personality");
						selected = targets_edit_personality.textContent;
						personality_start = "no";
					}

					if(selected != i){
						modal_html += '<li class="selModalClose" id="' + aryChild.eq(i).attr('value') + '" data-value="' + aryChild.eq(i).attr('value') + '">' + img_div + aryChild.eq(i).text() + '</li>';	
					}else{
						modal_html += '<li class="selected selModalClose" data-value="' + aryChild.eq(i).attr('value') + '">' + img_div + aryChild.eq(i).text() + '</li>';
						selected_name = aryChild.eq(i).text();
					}
				}

				targets_edit_discrimination == "end"

				modal_html += '</ul>';
				modal_html += '</div>';
				modal_html += '</div>';	
				
				if(selected_name === undefined){
					button_html = '<button type="button" class="selModalButton" data-selmodalbtn="' + sel_name_attr + '">' + sel_default_text + '</button>';
				}else{
					if (select_this[0].id == "prefectures_select_element" || select_this[0].id == "city_select_element") {
						button_html = ''
					}else{
						button_html = '<button type="button" class="selModalButton" data-selmodalbtn="' + sel_name_attr + '">' + selected_name + '</button>';
					}
				}
		
				// 元のセレクトボックスは非表示
				$(this).hide();

				//ボタン生成
				if (select_this[0].id == "prefectures_select_element") {
					prefectures_select_button_create(sel_name_attr);
				}else if (select_this[0].id == "city_select_element") {
					city_select_button_create(sel_name_attr);
				}else if (select_this[0].id == "app_select_element") {
					app_select_button_create(sel_name_attr);
				}else if (select_this[0].id == "appearance_select_element") {
					appearance_select_button_create(sel_name_attr);
				}else if (select_this[0].id == "purpose_select_element") {
					purpose_select_button_create(sel_name_attr);
				}else{
					$(this).after(button_html);
				}

				//モーダルウインドウ生成
				$('body').append(modal_html);
				
				//ボタンクリック
				$('[data-selmodalbtn="' + sel_name_attr + '"]').click(function(){
				
					href = $('[data-selmodal="' + $(this).data('selmodalbtn') + '"]');
						
					$(href).show();
					$('body').addClass('selModalBody');
						
					var par_height = $(href).find('.selModalInner').outerHeight();
					var c_head = $(href).find('.selModalHeader').outerHeight();
					$(href).find('.selModalList').css('height', (par_height - c_head) + 'px');
						
					var pos = 0;
					var tr = 0;
					$(href).find('.selModalList ul li').each(function(key, value){
						if($(value).hasClass('selected')){
							tr = $(value).outerHeight(true);
							return false;
						}else{
							pos += $(value).outerHeight(true);
						}
					});
						
					var sh = $(href).find('.selModalList').height();
					if(sh > 0) pos -= (sh / 2);
					if(tr > 0) pos += (tr / 2);
					$(href).find('.selModalList').scrollTop(pos);
				});
					
				$('[data-selmodal="' + sel_name_attr + '"]').find('.selModalList').on('touchstart', function(){
					if($(this).scrollTop() == 0){
						$(this).scrollTop(1);
					}
					var scrollHeight = $(this)[0].scrollHeight;
					var scrollPosition = $(this).scrollTop() + $(this).height();
					if(scrollHeight == scrollPosition){
						$(this).scrollTop(($(this).scrollTop() - 1));
					}
				});
					
				$('[data-selmodal="' + sel_name_attr + '"]').find('.selModalList li').on('touchstart', function(){
					$(this).addClass('totch');
				});
					
				$('[data-selmodal="' + sel_name_attr + '"]').find('.selModalList li').on('touchend', function(){
					$(this).closest('ul').find('li').removeClass('totch');
				});
					
				//ボタンクリック
				$('[data-selmodal="' + sel_name_attr + '"]').find('li').click(function(){
					$(this).closest('ul').find('li').removeClass('selected');
					$(this).addClass('selected');
					var hoge = $(this).closest('.selModal').data('selmodal');
					var this_no = $(this).closest('ul').find('li').index(this);
					var before_no = $('select[name="' + hoge + '"]').prop("selectedIndex");
					$('select[name="' + hoge + '"]').prop("selectedIndex", this_no);
					$('[data-selmodalbtn="' + hoge + '"]').text($(this).text());
					if(this_no != before_no){
						select_this.trigger('change');
					}
				});
					
				$('[data-selmodal="' + sel_name_attr + '"]').find('.selModalClose').click(function(){
					$(this).parents(".selModal").hide();
					$('body').removeClass('selModalBody');
				});
			}
		});
	}
	
		$.fn.selModalSetValue = function(value){
			var sel_dom = $(this);
			if (sel_dom[0].id == "city_select_element" && city_select_button_create_OK == 0) {

			}else{
			sel_dom.val(value);
			var sel_text = $(sel_dom).find('option:selected').text();
			var name = sel_dom.attr('name');
			var sel_list = $('[data-selmodal="' + name + '"]');
			var sel_btn = $('[data-selmodalbtn="' + name + '"]');
			
			sel_list.find('li').removeClass('selected');
			sel_list.find('[data-value="' + value + '"]').addClass('selected');
			sel_btn.text(sel_text);
		}
	}

})(jQuery);

if (targets_edit_sign_input && city_select_start_button_click_discrimination == "ok") {
	const city_select_start_button_click = document.getElementById("city_select_start_button");
	city_select_start_button_click.click();
	city_select_start_button_click_discrimination = "no";
}



function prefectures_select_button_create(sel_name_attr) {
		const prefectures_select_button = document.getElementById("prefectures_select_button");
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
}


// 女性登録 submit
if (document.targets_registration_form) {
    document.targets_registration_form.targets_registration_submit.addEventListener('click', function() {
        beforesubmit_select_check();
    });
}

function beforesubmit_select_check() {
	const targets_registration_submit_button = document.getElementById("targets_registration_submit_button");
	const targets_registration_app_error_message = document.getElementById("targets_registration_app_error_message");
	const targets_registration_appearance_error_message = document.getElementById("targets_registration_appearance_error_message");
	const targets_registration_name_error_message = document.getElementById("targets_registration_name_error_message");
	const targets_registration_name_word_count_error_message = document.getElementById("targets_registration_name_word_count_error_message");
	const targets_registration_purpose_error_message = document.getElementById("targets_registration_purpose_error_message");
	
	// バリデーション失敗(アプリ)
	if (app_select_button.textContent == 'アプリを選択してください' && targets_registration_app_error_message == null) {
		// エラーメッセージ生成
		const app_error_message = document.createElement('p');
		app_error_message.textContent = '「アプリ」は選択必須です。';
		app_error_message.id = 'targets_registration_app_error_message';
		targets_registration_submit_button.before(app_error_message);
    }else if (app_select_button.textContent !== 'アプリを選択してください' && targets_registration_app_error_message !== null) {
		targets_registration_app_error_message.remove();
	}

	// バリデーション失敗(容姿)
	if (appearance_select_button.textContent == '容姿を選択してください' && targets_registration_appearance_error_message == null) {
		// エラーメッセージ生成
		const appearance_error_message = document.createElement('p');
		appearance_error_message.textContent = '「容姿」は選択必須です。';
		appearance_error_message.id = 'targets_registration_appearance_error_message';
		targets_registration_submit_button.before(appearance_error_message);
    }else if (appearance_select_button.textContent !== '容姿を選択してください' && targets_registration_appearance_error_message !== null) {
		targets_registration_appearance_error_message.remove();
	}

	// バリデーション失敗(名前未入力)
	if (!name_select.classList.contains("valid") && !name_select.classList.contains("invalid") && targets_registration_name_error_message == null) {
		// エラーメッセージ生成
		const name_error_message = document.createElement('p');
		name_error_message.textContent = '「名前」は入力必須です。';
		name_error_message.id = 'targets_registration_name_error_message';
		targets_registration_submit_button.before(name_error_message);
    }else if (name_select.classList.contains("valid") && targets_registration_name_error_message !== null) {
		targets_registration_name_error_message.remove();
	}else if (name_select.classList.contains("invalid") && targets_registration_name_error_message !== null) {
		targets_registration_name_error_message.remove();
	}

	// バリデーション失敗(名前文字数制限) # 4文字まで
	if (name_select.classList.contains("invalid") && targets_registration_name_word_count_error_message == null) {
		// エラーメッセージ生成
		const name_word_count_error_message = document.createElement('p');
		name_word_count_error_message.textContent = '「名前」は4文字以下にして下さい。';
		name_word_count_error_message.id = 'targets_registration_name_word_count_error_message';
		targets_registration_submit_button.before(name_word_count_error_message);
    }else if (!name_select.classList.contains("invalid") && targets_registration_name_word_count_error_message !== null) {
		targets_registration_name_word_count_error_message.remove();
	}

	// バリデーション失敗(目的)
	if (purpose_select_button.textContent == '目的を選択してください' && targets_registration_purpose_error_message == null) {
		// エラーメッセージ生成
		const purpose_error_message = document.createElement('p');
		purpose_error_message.textContent = '「目的」は選択必須です。';
		purpose_error_message.id = 'targets_registration_purpose_error_message';
		targets_registration_submit_button.before(purpose_error_message);
    }else if (purpose_select_button.textContent !== '目的を選択してください' && targets_registration_purpose_error_message !== null) {
		targets_registration_purpose_error_message.remove();
	}

	// バリデーション成功(全て)
    if (app_select_button.textContent !== 'アプリを選択してください' && appearance_select_button.textContent !== '容姿を選択してください' && purpose_select_button.textContent !== '目的を選択してください' && name_select.classList.contains("valid")) {
        document.targets_registration_form.submit();
    }
}