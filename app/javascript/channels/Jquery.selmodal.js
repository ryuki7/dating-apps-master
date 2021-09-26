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
var city_select_tag_create = "unnecessary";

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
const city_select_element_children = city_select_element_fake.children;


// リセットボタン(「市を入力するボタン」をクリック後、再度「都道府県ボタン」をクリックすると、初期状態に戻す。)
if (prefectures_select_button) {
	prefectures_select_button.addEventListener('mousedown', function () {
		const city_select_button_fake_delete = document.getElementById("hidden");
		if (city_select_button_fake_delete) {
			const selModal = document.getElementsByClassName("selModal")
			selModal[10].remove();
			$("#city_select_element").empty();
			city_select_start_button.classList.remove('hidden');
			city_select_button.remove();
			city_select_button = document.createElement('button');
			city_select_button.textContent = '市を選択してください';
			city_select_button.id = 'city_select_button';
			city_select_button.type = 'button';
			city_select_button.classList.add('selModalButton');
			city_select_button.classList.add('hidden');
			city_select_element.after(city_select_button);
			city_select_button_fake_delete.remove();

			// 元のselectタグ生成判別
			city_select_tag_create = "necessary";
		}
	});
}


// 「市を入力するボタン」のクリック(都道府県を選択してから「市を入力するボタン」をクリックすると、市を選択出来るようになる。)
if (prefectures_select_button && city_select_start_button) {
	city_select_start_button.addEventListener('mouseup', function () {
		if (prefectures_select_button.textContent == '都道府県を選択してください') {

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
									if(selected != i){
										modal_html += '<li class="selModalClose" id="' + aryChild.eq(i).attr('value') + '" data-value="' + aryChild.eq(i).attr('value') + '">' + img_div + aryChild.eq(i).text() + '</li>';	
									}else{
										modal_html += '<li class="selected selModalClose" data-value="' + aryChild.eq(i).attr('value') + '">' + img_div + aryChild.eq(i).text() + '</li>';
										selected_name = aryChild.eq(i).text();
									}
								}
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
						if (i == 3) {
							img_div = '<img src="' + aryChild.eq(i).attr('data-image') + '" class="app-image-tapple-select">';
						} else {
							img_div = '<img src="' + aryChild.eq(i).attr('data-image') + '">';
						}
					}
					if(selected != i){
						modal_html += '<li class="selModalClose" id="' + aryChild.eq(i).attr('value') + '" data-value="' + aryChild.eq(i).attr('value') + '">' + img_div + aryChild.eq(i).text() + '</li>';	
					}else{
						modal_html += '<li class="selected selModalClose" data-value="' + aryChild.eq(i).attr('value') + '">' + img_div + aryChild.eq(i).text() + '</li>';
						selected_name = aryChild.eq(i).text();
					}
				}
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
