// アプリ診断

const app_diagnostics_text = document.getElementById("app-diagnostics-text");
const error_message = document.createElement('p');
error_message.textContent = 'どれか1つは選択して下さい';
error_message.id = 'app-diagnostics-error-message';

// question-1 answer-1
const button_1_1 = document.getElementById("app-diagnostics-description-select-button-1-1");
const hidden_field_1_1 = document.getElementById("allocation-1-1");

if (button_1_1) {
    button_1_1.addEventListener('click', function () {
        if (button_1_1.classList.contains("buttonwhite")) {
            button_1_1.classList.add('buttonred');
            button_1_1.classList.remove('buttonwhite');
        }else{
            button_1_1.classList.add('buttonwhite');
            button_1_1.classList.remove('buttonred');
        }
    });
}

// question-1 answer-2
const button_1_2 = document.getElementById("app-diagnostics-description-select-button-1-2");
const hidden_field_1_2 = document.getElementById("allocation-1-2");

if (button_1_2) {
    button_1_2.addEventListener('click', function () {
        if (button_1_2.classList.contains("buttonwhite")) {
            button_1_2.classList.add('buttonred');
            button_1_2.classList.remove('buttonwhite');
        }else{
            button_1_2.classList.add('buttonwhite');
            button_1_2.classList.remove('buttonred');
        }
    });
}


// question-1 submit
if (document.app_diagnostics_form_1) {
    document.app_diagnostics_form_1.app_diagnostics_submit_1.addEventListener('click', function() {
        beforesubmit_1_select_check();
    });
}

function beforesubmit_1_select_check() {
    if (button_1_1.classList.contains("buttonwhite") && button_1_2.classList.contains("buttonwhite")) {
        app_diagnostics_text.appendChild(error_message);
    }else{
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
}


// question-2 answer-1
const button_2_1 = document.getElementById("app-diagnostics-description-select-button-2-1");
const hidden_field_2_1 = document.getElementById("allocation-2-1");

if (button_2_1) {
    button_2_1.addEventListener('click', function () {
        if (button_2_1.classList.contains("buttonwhite")) {
            button_2_1.classList.add('buttonblue');
            button_2_1.classList.remove('buttonwhite');
        }else{
            button_2_1.classList.add('buttonwhite');
            button_2_1.classList.remove('buttonblue');
        }
    });
}

// question-2 answer-2
const button_2_2 = document.getElementById("app-diagnostics-description-select-button-2-2");
const hidden_field_2_2 = document.getElementById("allocation-2-2");

if (button_2_2) {
    button_2_2.addEventListener('click', function () {
        if (button_2_2.classList.contains("buttonwhite")) {
            button_2_2.classList.add('buttonblue');
            button_2_2.classList.remove('buttonwhite');
        }else{
            button_2_2.classList.add('buttonwhite');
            button_2_2.classList.remove('buttonblue');
        }
    });
}

// question-2 answer-3
const button_2_3 = document.getElementById("app-diagnostics-description-select-button-2-3")
const hidden_field_2_3 = document.getElementById("allocation-2-3")

if (button_2_3) {
    button_2_3.addEventListener('click', function () {
        if (button_2_3.classList.contains("buttonwhite")) {
            button_2_3.classList.add('buttonblue');
            button_2_3.classList.remove('buttonwhite');
        }else{
            button_2_3.classList.add('buttonwhite');
            button_2_3.classList.remove('buttonblue');
        }
    });
}

// question-2 answer-4
const button_2_4 = document.getElementById("app-diagnostics-description-select-button-2-4");
const hidden_field_2_4 = document.getElementById("allocation-2-4");

if (button_2_4) {
    button_2_4.addEventListener('click', function () {
        if (button_2_4.classList.contains("buttonwhite")) {
            button_2_4.classList.add('buttonblue');
            button_2_4.classList.remove('buttonwhite');
        }else{
            button_2_4.classList.add('buttonwhite');
            button_2_4.classList.remove('buttonblue');
        }
    });
}

// question-2 submit
if (document.app_diagnostics_form_2) {
    document.app_diagnostics_form_2.app_diagnostics_submit_2.addEventListener('click', function() {
        beforesubmit_2_select_check();
    });
}

function beforesubmit_2_select_check() {
    if (button_2_1.classList.contains("buttonwhite") && button_2_2.classList.contains("buttonwhite") && button_2_3.classList.contains("buttonwhite") && button_2_4.classList.contains("buttonwhite")) {
        app_diagnostics_text.appendChild(error_message);
    }else{
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
}


// question-3 answer-1
const button_3_1 = document.getElementById("app-diagnostics-description-select-button-3-1");
const hidden_field_3_1 = document.getElementById("allocation-3-1");

if (button_3_1) {
    button_3_1.addEventListener('click', function () {
        if (button_3_1.classList.contains("buttonwhite")) {
            button_3_1.classList.add('buttongreen');
            button_3_1.classList.remove('buttonwhite');
        }else{
            button_3_1.classList.add('buttonwhite');
            button_3_1.classList.remove('buttongreen');
        }
    });
}

// question-3 answer-2
const button_3_2 = document.getElementById("app-diagnostics-description-select-button-3-2");
const hidden_field_3_2 = document.getElementById("allocation-3-2");

if (button_3_2) {
    button_3_2.addEventListener('click', function () {
        if (button_3_2.classList.contains("buttonwhite")) {
            button_3_2.classList.add('buttongreen');
            button_3_2.classList.remove('buttonwhite');
        }else{
            button_3_2.classList.add('buttonwhite');
            button_3_2.classList.remove('buttongreen');
        }
    });
}

// question-3 answer-3
const button_3_3 = document.getElementById("app-diagnostics-description-select-button-3-3");
const hidden_field_3_3 = document.getElementById("allocation-3-3");

if (button_3_3) {
    button_3_3.addEventListener('click', function () {
        if (button_3_3.classList.contains("buttonwhite")) {
            button_3_3.classList.add('buttongreen');
            button_3_3.classList.remove('buttonwhite');
        }else{
            button_3_3.classList.add('buttonwhite');
            button_3_3.classList.remove('buttongreen');
        }
    });
}

// question-3 answer-4
const button_3_4 = document.getElementById("app-diagnostics-description-select-button-3-4");
const hidden_field_3_4 = document.getElementById("allocation-3-4");

if (button_3_4) {
    button_3_4.addEventListener('click', function () {
        if (button_3_4.classList.contains("buttonwhite")) {
            button_3_4.classList.add('buttongreen');
            button_3_4.classList.remove('buttonwhite');
        }else{
            button_3_4.classList.add('buttonwhite');
            button_3_4.classList.remove('buttongreen');
        }
    });
}

// question-3 answer-5
const button_3_5 = document.getElementById("app-diagnostics-description-select-button-3-5");
const hidden_field_3_5 = document.getElementById("allocation-3-5");

if (button_3_5) {
    button_3_5.addEventListener('click', function () {
        if (button_3_5.classList.contains("buttonwhite")) {
            button_3_5.classList.add('buttongreen');
            button_3_5.classList.remove('buttonwhite');
        }else{
            button_3_5.classList.add('buttonwhite');
            button_3_5.classList.remove('buttongreen');
        }
    });
}


// question-3 submit
if (document.app_diagnostics_form_3) {
    document.app_diagnostics_form_3.app_diagnostics_submit_3.addEventListener('click', function() {
        beforesubmit_3_select_check();
    });
}

function beforesubmit_3_select_check() {
    if (button_3_1.classList.contains("buttonwhite") && button_3_2.classList.contains("buttonwhite") && button_3_3.classList.contains("buttonwhite") && button_3_4.classList.contains("buttonwhite") && button_3_5.classList.contains("buttonwhite")) {
        app_diagnostics_text.appendChild(error_message);
    }else{
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
