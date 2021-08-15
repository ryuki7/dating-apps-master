const button = document.getElementById("app-diagnostics-description-select-button")
const hidden_field_1_1 = document.getElementById("allocation-1-1")
button.addEventListener('click', function () {
    if (button.classList.contains("buttonwhite")) {
        button.classList.add('buttongreen');
        button.classList.remove('buttonwhite');
    }else{
        button.classList.add('buttonwhite');
        button.classList.remove('buttongreen');
    }
});

document.myform.btn.addEventListener('click', function() {
    beforesubmit();
    document.myform.submit();
 
});

function beforesubmit() {
    if (button.classList.contains("buttonwhite")) {
        hidden_field_1_1.remove();
    }
}