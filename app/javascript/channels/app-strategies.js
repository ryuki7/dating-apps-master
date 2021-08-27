// 彼女作り
const make_girlfriend_character = document.getElementById("make_girlfriend_character");
const make_girlfriend_character_css = getComputedStyle(make_girlfriend_character);

// 遊び
const play_character = document.getElementById("play_character");
const play_character_css = getComputedStyle(play_character);

// ステップボタン
const step_button = document.getElementById("app-strategies-step-button");

// トグルスイッチ
const toggle_switch = document.getElementById("toggle_switch");

toggle_switch.addEventListener('click', function () {
    if (make_girlfriend_character_css.getPropertyValue("color") = '#4481eb') {
        step_button.classList.add('make-girlfriend-button');
        step_button.classList.remove('play-button');
    }
    if (play_character_css.getPropertyValue("color") = 'lightblue') {
        step_button.classList.add('play-button');
        step_button.classList.remove('make-girlfriend-button');
    }
});
