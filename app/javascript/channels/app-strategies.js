// アプリアイコン画像
const app_icon_image = document.getElementById("app_icon_image");

// アプリ攻略タイトル
const app_strategies_show_title = document.getElementById("app-strategies-show-title");

if (app_strategies_show_title) {
    if (app_strategies_show_title.textContent == 'tapple(タップル)攻略') {
        app_icon_image.classList.add('app-image-tapple');
    }
}

// ステップボタン
const step_button_1 = document.getElementById("app-strategies-step-button-1");
const step_button_2 = document.getElementById("app-strategies-step-button-2");
const step_button_3 = document.getElementById("app-strategies-step-button-3");
const step_button_4 = document.getElementById("app-strategies-step-button-4");
const step_button_5 = document.getElementById("app-strategies-step-button-5");
const step_button_6 = document.getElementById("app-strategies-step-button-6");
const step_button_7 = document.getElementById("app-strategies-step-button-7");
const step_button_8 = document.getElementById("app-strategies-step-button-8");

// ステップボタンラッパー
const app_strategies_step_button_wrapper = document.getElementById("app-strategies-step-button-wrapper");

// 矢印バー
const show_bar = document.getElementById("app-strategies-show-bar");

//
const show_arrow = document.getElementById("app-strategies-show-arrow");

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
        app_strategies_step_button_wrapper.classList.add('step-play-button');
        make_girlfriend_character.classList.remove('on');
        toggle_radius_button.classList.remove('hidden');
        show_bar.classList.add('step-play-button-bar');
        show_arrow.classList.add('step-play-button-arrow');
        // ステップボタンのhref(url)を変更
        // ステップボタン1
        let step_button_1_red = document.getElementById('app-strategies-step-button-1');
        let step_button_1_red_href = '2/step#1';
        //href属性の値を書き換える
        step_button_1_red.setAttribute('href', step_button_1_red_href);
        // ステップボタン2
        let step_button_2_red = document.getElementById('app-strategies-step-button-2');
        let step_button_2_red_href = '2/step#2';
        //href属性の値を書き換える
        step_button_2_red.setAttribute('href', step_button_2_red_href);
        // ステップボタン3
        let step_button_3_red = document.getElementById('app-strategies-step-button-3');
        let step_button_3_red_href = '2/step#3';
        //href属性の値を書き換える
        step_button_3_red.setAttribute('href', step_button_3_red_href);
        // ステップボタン4
        let step_button_4_red = document.getElementById('app-strategies-step-button-4');
        let step_button_4_red_href = '2/step#4';
        //href属性の値を書き換える
        step_button_4_red.setAttribute('href', step_button_4_red_href);
        // ステップボタン5
        let step_button_5_red = document.getElementById('app-strategies-step-button-5');
        let step_button_5_red_href = '2/step#5';
        //href属性の値を書き換える
        step_button_5_red.setAttribute('href', step_button_5_red_href);
        //ステップボタン6
        let step_button_6_red = document.getElementById('app-strategies-step-button-6');
        let step_button_6_red_href = '2/step#6';
        //href属性の値を書き換える
        step_button_6_red.setAttribute('href', step_button_6_red_href);
        // ステップボタン7
        let step_button_7_red = document.getElementById('app-strategies-step-button-7');
        let step_button_7_red_href = '2/step#7';
        //href属性の値を書き換える
        step_button_7_red.setAttribute('href', step_button_7_red_href);
        // ステップボタン8
        let step_button_8_red = document.getElementById('app-strategies-step-button-8');
        let step_button_8_red_href = '2/step#8';
        //href属性の値を書き換える
        step_button_8_red.setAttribute('href', step_button_8_red_href); 
    });
}


// 「遊び」 => 「彼女作り」 にトグルスイッチを切り替える。(赤 => 青)
if (toggle_radius_button) {
    toggle_radius_button.addEventListener('click', function () {
        toggle_switch.click();
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
        app_strategies_step_button_wrapper.classList.remove('step-play-button');
        play_character.classList.remove('on');
        show_bar.classList.remove('step-play-button-bar');
        show_arrow.classList.remove('step-play-button-arrow');
        // ステップボタンのhref(url)を変更
        // ステップボタン1
        let step_button_1_red = document.getElementById('app-strategies-step-button-1');
        let step_button_1_red_href = '1/step#1';
        //href属性の値を書き換える
        step_button_1_red.setAttribute('href', step_button_1_red_href);
        // ステップボタン2
        let step_button_2_red = document.getElementById('app-strategies-step-button-2');
        let step_button_2_red_href = '1/step#2';
        //href属性の値を書き換える
        step_button_2_red.setAttribute('href', step_button_2_red_href);
        // ステップボタン3
        let step_button_3_red = document.getElementById('app-strategies-step-button-3');
        let step_button_3_red_href = '1/step#3';
        //href属性の値を書き換える
        step_button_3_red.setAttribute('href', step_button_3_red_href);
        // ステップボタン4
        let step_button_4_red = document.getElementById('app-strategies-step-button-4');
        let step_button_4_red_href = '1/step#4';
        //href属性の値を書き換える
        step_button_4_red.setAttribute('href', step_button_4_red_href);
        // ステップボタン5
        let step_button_5_red = document.getElementById('app-strategies-step-button-5');
        let step_button_5_red_href = '1/step#5';
        //href属性の値を書き換える
        step_button_5_red.setAttribute('href', step_button_5_red_href);
        //ステップボタン6
        let step_button_6_red = document.getElementById('app-strategies-step-button-6');
        let step_button_6_red_href = '1/step#6';
        //href属性の値を書き換える
        step_button_6_red.setAttribute('href', step_button_6_red_href);
        // ステップボタン7
        let step_button_7_red = document.getElementById('app-strategies-step-button-7');
        let step_button_7_red_href = '1/step#7';
        //href属性の値を書き換える
        step_button_7_red.setAttribute('href', step_button_7_red_href);
        // ステップボタン8
        let step_button_8_red = document.getElementById('app-strategies-step-button-8');
        let step_button_8_red_href = '1/step#8';
        //href属性の値を書き換える
        step_button_8_red.setAttribute('href', step_button_8_red_href);
    });
}
