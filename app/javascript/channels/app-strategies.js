// 彼女作り
const make_girlfriend_character = document.getElementById("make_girlfriend_character");
const make_girlfriend_character_css = getComputedStyle(make_girlfriend_character);

// 遊び
const play_character = document.getElementById("play_character");

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
const toggle_switch_css = getComputedStyle(toggle_switch);

// make_girlfriend_hidden フィールド
const make_girlfriend_hidden_field = document.getElementById("make_girlfriend_hidden_field");

// play_hidden フィールド作成 
const play_hidden_field_create = document.createElement('input');
play_hidden_field_create.type = 'hidden';
play_hidden_field_create.id = 'play_hidden_field';

const toggle_radius_button = document.getElementById("toggle-radius-button");

const toggle_radius_button_create = document.createElement('button');
toggle_radius_button_create.type = 'button';
toggle_radius_button_create.id = 'toggle-radius-button';

// トグルスイッチをクリックする(切り替える)と、ステップボタンの色を変更
// 「彼女作り」 => 「遊び」 にトグルスイッチを切り替える。(青 => ピンク)
toggle_switch.addEventListener('click', function () {
    // classをadd
    step_button_1.classList.add('play-button');
    step_button_2.classList.add('play-button');
    step_button_3.classList.add('play-button');
    step_button_4.classList.add('play-button');
    step_button_5.classList.add('play-button');
    step_button_6.classList.add('play-button');
    step_button_7.classList.add('play-button');
    step_button_8.classList.add('play-button');

    // classをremove
    step_button_1.classList.remove('make_girlfriend-button');
    step_button_2.classList.remove('make_girlfriend-button');
    step_button_3.classList.remove('make_girlfriend-button');
    step_button_4.classList.remove('make_girlfriend-button');
    step_button_5.classList.remove('make_girlfriend-button');
    step_button_6.classList.remove('make_girlfriend-button');
    step_button_7.classList.remove('make_girlfriend-button');
    step_button_8.classList.remove('make_girlfriend-button');
    play_character.after(play_hidden_field_create);
    make_girlfriend_hidden_field.remove();
    toggle_radius_button.style.zIndex = '1'; 
});

if (toggle_radius_button) {
    toggle_radius_button.addEventListener('click', function () {
        toggle_switch.click();
        toggle_radius_button.style.zIndex = '-1'; 
        // classをadd
        step_button_1.classList.add('make_girlfriend-button');
        step_button_2.classList.add('make_girlfriend-button');
        step_button_3.classList.add('make_girlfriend-button');
        step_button_4.classList.add('make_girlfriend-button');
        step_button_5.classList.add('make_girlfriend-button');
        step_button_6.classList.add('make_girlfriend-button');
        step_button_7.classList.add('make_girlfriend-button');
        step_button_8.classList.add('make_girlfriend-button');

        // classをremove
        step_button_1.classList.remove('play-button');
        step_button_2.classList.remove('play-button');
        step_button_3.classList.remove('play-button');
        step_button_4.classList.remove('play-button');
        step_button_5.classList.remove('play-button');
        step_button_6.classList.remove('play-button');
        step_button_7.classList.remove('play-button');
        step_button_8.classList.remove('play-button');
        play_character.after(play_hidden_field_create);
        make_girlfriend_hidden_field.remove();
    });
}

// play_hidden フィールド
const play_hidden_field = document.getElementById("play_hidden_field");

// make_girlfriend_hidden フィールド作成 
const make_girlfriend_hidden_field_create = document.createElement('input');
make_girlfriend_hidden_field_create.type = 'hidden';
make_girlfriend_hidden_field_create.id = 'make_girlfriend_hidden_field';

// 「遊び」 => 「彼女作り」 にトグルスイッチを切り替える。(ピンク => 青)
function buttonClick(){
    alert('Click');
}
        

