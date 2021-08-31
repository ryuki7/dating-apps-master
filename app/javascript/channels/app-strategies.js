// ステップボタン
const step_button_1 = document.getElementById("app-strategies-step-button-1");
const step_button_2 = document.getElementById("app-strategies-step-button-2");
const step_button_3 = document.getElementById("app-strategies-step-button-3");
const step_button_4 = document.getElementById("app-strategies-step-button-4");
const step_button_5 = document.getElementById("app-strategies-step-button-5");
const step_button_6 = document.getElementById("app-strategies-step-button-6");
const step_button_7 = document.getElementById("app-strategies-step-button-7");
const step_button_8 = document.getElementById("app-strategies-step-button-8");

// トグルスイッチ
const toggle_switch = document.getElementById("toggle_switch");

// トグルスイッチの丸の部分(赤色の丸)
const toggle_radius_button = document.getElementById("toggle-radius-button");

// 彼女作り 文字
const make_girlfriend_character = document.getElementById("make_girlfriend_character");

// 遊び 文字
const play_character = document.getElementById("play_character");

// トグルスイッチをクリックする(切り替える)と、ステップボタンの色を変更
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
        play_character.classList.add('on');

        // classをremove
        step_button_1.classList.remove('make_girlfriend-button');
        step_button_2.classList.remove('make_girlfriend-button');
        step_button_3.classList.remove('make_girlfriend-button');
        step_button_4.classList.remove('make_girlfriend-button');
        step_button_5.classList.remove('make_girlfriend-button');
        step_button_6.classList.remove('make_girlfriend-button');
        step_button_7.classList.remove('make_girlfriend-button');
        step_button_8.classList.remove('make_girlfriend-button');
        make_girlfriend_character.classList.remove('on');
        toggle_radius_button.classList.remove('hidden');
        toggle_switch.classList.add('hidden');
        // ステップボタンのhref(url)を変更
        // ステップボタン1
        let step_button_1_red = document.getElementById('app-strategies-step-button-1');
        let step_button_1_red_href = 'play';
        //href属性の値を書き換える
        step_button_1_red.setAttribute('href', step_button_1_red_href);
        // ステップボタン2
        let step_button_2_red = document.getElementById('app-strategies-step-button-2');
        let step_button_2_red_href = 'play';
        //href属性の値を書き換える
        step_button_2_red.setAttribute('href', step_button_2_red_href);
        // ステップボタン3
        let step_button_3_red = document.getElementById('app-strategies-step-button-3');
        let step_button_3_red_href = 'play';
        //href属性の値を書き換える
        step_button_3_red.setAttribute('href', step_button_3_red_href);
        // ステップボタン4
        let step_button_4_red = document.getElementById('app-strategies-step-button-4');
        let step_button_4_red_href = 'play';
        //href属性の値を書き換える
        step_button_4_red.setAttribute('href', step_button_4_red_href);
        // ステップボタン5
        let step_button_5_red = document.getElementById('app-strategies-step-button-5');
        let step_button_5_red_href = 'play';
        //href属性の値を書き換える
        step_button_5_red.setAttribute('href', step_button_5_red_href);
        //ステップボタン6
        let step_button_6_red = document.getElementById('app-strategies-step-button-6');
        let step_button_6_red_href = 'play';
        //href属性の値を書き換える
        step_button_6_red.setAttribute('href', step_button_6_red_href);
        // ステップボタン7
        let step_button_7_red = document.getElementById('app-strategies-step-button-7');
        let step_button_7_red_href = 'play';
        //href属性の値を書き換える
        step_button_7_red.setAttribute('href', step_button_7_red_href);
        // ステップボタン8
        let step_button_8_red = document.getElementById('app-strategies-step-button-8');
        let step_button_8_red_href = 'play';
        //href属性の値を書き換える
        step_button_8_red.setAttribute('href', step_button_8_red_href); 
    });
}


// 「遊び」 => 「彼女作り」 にトグルスイッチを切り替える。(赤 => 青)
if (toggle_radius_button) {
    toggle_radius_button.addEventListener('click', function () {
        toggle_switch.click();
        toggle_switch.classList.remove('hidden');
        toggle_radius_button.classList.add('hidden');
        // classをadd (ステップボタンを青色にする)
        step_button_1.classList.add('make_girlfriend-button');
        step_button_2.classList.add('make_girlfriend-button');
        step_button_3.classList.add('make_girlfriend-button');
        step_button_4.classList.add('make_girlfriend-button');
        step_button_5.classList.add('make_girlfriend-button');
        step_button_6.classList.add('make_girlfriend-button');
        step_button_7.classList.add('make_girlfriend-button');
        step_button_8.classList.add('make_girlfriend-button');
        make_girlfriend_character.classList.add('on');

        // classをremove
        step_button_1.classList.remove('play-button');
        step_button_2.classList.remove('play-button');
        step_button_3.classList.remove('play-button');
        step_button_4.classList.remove('play-button');
        step_button_5.classList.remove('play-button');
        step_button_6.classList.remove('play-button');
        step_button_7.classList.remove('play-button');
        step_button_8.classList.remove('play-button');
        play_character.classList.remove('on');
        // ステップボタンのhref(url)を変更
        // ステップボタン1
        let step_button_1_red = document.getElementById('app-strategies-step-button-1');
        let step_button_1_red_href = 'make_girlfriend#test';
        //href属性の値を書き換える
        step_button_1_red.setAttribute('href', step_button_1_red_href);
        // ステップボタン2
        let step_button_2_red = document.getElementById('app-strategies-step-button-2');
        let step_button_2_red_href = 'make_girlfriend#test';
        //href属性の値を書き換える
        step_button_2_red.setAttribute('href', step_button_2_red_href);
        // ステップボタン3
        let step_button_3_red = document.getElementById('app-strategies-step-button-3');
        let step_button_3_red_href = 'make_girlfriend#test';
        //href属性の値を書き換える
        step_button_3_red.setAttribute('href', step_button_3_red_href);
        // ステップボタン4
        let step_button_4_red = document.getElementById('app-strategies-step-button-4');
        let step_button_4_red_href = 'make_girlfriend#test';
        //href属性の値を書き換える
        step_button_4_red.setAttribute('href', step_button_4_red_href);
        // ステップボタン5
        let step_button_5_red = document.getElementById('app-strategies-step-button-5');
        let step_button_5_red_href = 'make_girlfriend#test';
        //href属性の値を書き換える
        step_button_5_red.setAttribute('href', step_button_5_red_href);
        //ステップボタン6
        let step_button_6_red = document.getElementById('app-strategies-step-button-6');
        let step_button_6_red_href = 'make_girlfriend#test';
        //href属性の値を書き換える
        step_button_6_red.setAttribute('href', step_button_6_red_href);
        // ステップボタン7
        let step_button_7_red = document.getElementById('app-strategies-step-button-7');
        let step_button_7_red_href = 'make_girlfriend#test';
        //href属性の値を書き換える
        step_button_7_red.setAttribute('href', step_button_7_red_href);
        // ステップボタン8
        let step_button_8_red = document.getElementById('app-strategies-step-button-8');
        let step_button_8_red_href = 'make_girlfriend#test';
        //href属性の値を書き換える
        step_button_8_red.setAttribute('href', step_button_8_red_href);
    });
}

// Design tiré du site flatuicolors.com
$(document).ready(function(){    
    var countOption = $('.old-select option').size();
    
    function openSelect(){
        var heightSelect = $('.new-select').height();
        var j=1;
        $('.new-select .new-option').each(function(){
            $(this).addClass('reveal');
            $(this).css({
                'left':'0',
                'right':'0',
                'top': j*(heightSelect+1)+'px'
            });
            j++;
        });
    }
    
    function closeSelect(){
        var i=0;
        $('.new-select .new-option').each(function(){
            $(this).removeClass('reveal');
            if(i<countOption-3){
                $(this).css('top',-3);
                $(this).css('box-shadow','none');
            }
            else if(i===countOption-3){
                $(this).css('top','-1px');
            }
            else if(i===countOption-2){
                $(this).css({
                    'top':'1px',
                    'left':'2px',
                    'right':'2px'
                });
            }
            else if(i===countOption-1){
                $(this).css({
                    'top':'5.5px',
                    'left':'4px',
                    'right':'4px'
                });
            }
            i++;
        });
    }

    // 攻略アプリタイトル名
    const app_strategies_text = document.getElementById("app-strategies-show-title").textContent;
    
    // Initialisation
    if($('.old-select option[selected]').size() === 1){
        if (app_strategies_text == 'Pairs（ペアーズ）攻略') {
            $('.old-select option[selected]').removeAttr('selected');
            $('.old-select option[value="pairs"]').attr('selected','');
            $('.selection p span').html($('.old-select option[selected]').html());
        }
        if (app_strategies_text == 'with（ウィズ）攻略') {
            $('.old-select option[selected]').removeAttr('selected');
            $('.old-select option[value="with"]').attr('selected','');
            $('.selection p span').html($('.old-select option[selected]').html());
        }
        if (app_strategies_text == 'tapple(タップル)攻略') {
            $('.old-select option[selected]').removeAttr('selected');
            $('.old-select option[value="tapple"]').attr('selected','');
            $('.selection p span').html($('.old-select option[selected]').html());
        }
        if (app_strategies_text == 'Tinder(ティンダー)攻略') {
            $('.old-select option[selected]').removeAttr('selected');
            $('.old-select option[value="tinder"]').attr('selected','');
            $('.selection p span').html($('.old-select option[selected]').html());
        }
    }
    else{
        $('.selection p span').html($('.old-select option:first-child').html());
    }

    if ($('.new-option').size() == 0) {
        $('.old-select option').each(function(){
            newValue = $(this).val();
            newHTML = $(this).html();
            if (newHTML == 'ペアーズ攻略') {
                $('.new-select').append('<div class="new-option" data-value="'+newValue+'"><p><a id="app-strategies-app-select-pulldown" href="1">'+newHTML+'</p></a></div>');
            }
            if (newHTML == 'ウィズ攻略') {
                $('.new-select').append('<div class="new-option" data-value="'+newValue+'"><p><a id="app-strategies-app-select-pulldown" href="2">'+newHTML+'</p></a></div>');
            }
            if (newHTML == 'タップル攻略') {
                $('.new-select').append('<div class="new-option" data-value="'+newValue+'"><p><a id="app-strategies-app-select-pulldown" href="3">'+newHTML+'</p></a></div>');
            }
            if (newHTML == 'ティンダー攻略') {
                $('.new-select').append('<div class="new-option" data-value="'+newValue+'"><p><a id="app-strategies-app-select-pulldown" href="4">'+newHTML+'</p></a></div>');
            }
        });
    }
    
    var reverseIndex = countOption;
    $('.new-select .new-option').each(function(){
        $(this).css('z-index',reverseIndex);
        reverseIndex = reverseIndex-1;        
    });
    
    closeSelect();

    const selection = document.getElementById('selection');
    var selection_click_count = 0;
    const error_message = document.createElement('p');
    error_message.textContent = 'リロードして下さい';
    error_message.id = 'app-strategies-error-message';
    const app_strategies_show = document.getElementById('app-strategies-show');

    selection.addEventListener('click', function(){
        selection.classList.toggle('open');
        if(selection.classList.contains('open')){
            openSelect();
            selection_click_count = selection_click_count + 1;
        }else{
            closeSelect();
            selection_click_count = 0;
        }

        if (selection_click_count == 2) {
            app_strategies_show.before(error_message);
            let error_message_text = document.querySelectorAll('#app-strategies-error-message');
            if (error_message_text.length == 2) {
                error_message_text[1].remove();
            }
        }
    });
    
    // Selection 
    $('.new-option').click(function(){
        var newValue = $(this).data('value');
        
        // Selection New Select
        $('.selection p span').html($(this).find('p').html());
        $('.selection').click();
        
        // Selection Old Select
        $('.old-select option[selected]').removeAttr('selected');
        $('.old-select option[value="'+newValue+'"]').attr('selected','');
        
    });
});