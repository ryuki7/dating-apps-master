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

    // 攻略アプリタイトル
    const app_strategies = document.getElementById("app-strategies-show-title");

    // ステップ詳細の目的
    const app_strategies_step_purpose = document.getElementById("app_strategies_step_purpose");

    // デートプランの目的
    const date_plans_purpose = document.getElementById("date_plans_purpose");
    
    // Initialisation
    if($('.old-select option[selected]').size() === 1){
        // アプリ攻略
        if (app_strategies) {
            const app_strategies_text = app_strategies.textContent;
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

        // ステップ詳細
        if (app_strategies_step_purpose) {
            const app_strategies_step_purpose_text = app_strategies_step_purpose.textContent;
            if (app_strategies_step_purpose_text == '彼女作り') {
                $('.old-select option[selected]').removeAttr('selected');
                $('.old-select option[value="make_girlfriend"]').attr('selected','');
                $('.selection p span').html($('.old-select option[selected]').html());
            }
            if (app_strategies_step_purpose_text == '遊び') {
                $('.old-select option[selected]').removeAttr('selected');
                $('.old-select option[value="play"]').attr('selected','');
                $('.selection p span').html($('.old-select option[selected]').html());
            }
            if (app_strategies_step_purpose_text == '超遊び') {
                $('.old-select option[selected]').removeAttr('selected');
                $('.old-select option[value="super_play"]').attr('selected','');
                $('.selection p span').html($('.old-select option[selected]').html());
            }
        }

        // デートプラン
        if (date_plans_purpose) {
            const date_plans_purpose_text = date_plans_purpose.textContent;
            if (date_plans_purpose_text == '彼女作り') {
                $('.old-select option[selected]').removeAttr('selected');
                $('.old-select option[value="make_girlfriend"]').attr('selected','');
                $('.selection p span').html($('.old-select option[selected]').html());
            }
            if (date_plans_purpose_text == '遊び') {
                $('.old-select option[selected]').removeAttr('selected');
                $('.old-select option[value="play"]').attr('selected','');
                $('.selection p span').html($('.old-select option[selected]').html());
            }
            if (date_plans_purpose_text == '超遊び') {
                $('.old-select option[selected]').removeAttr('selected');
                $('.old-select option[value="super_play"]').attr('selected','');
                $('.selection p span').html($('.old-select option[selected]').html());
            }
        }
    }
    else{
        $('.selection p span').html($('.old-select option:first-child').html());
    }

    if ($('.new-option').size() == 0) {
        $('.old-select option').each(function(){
            newValue = $(this).val();
            newHTML = $(this).html();

            if (app_strategies) {
                // アプリ攻略
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
            }

            if (app_strategies_step_purpose) {
                // ステップ詳細
                if (newHTML == '彼女作り') {
                    $('.new-select').append('<div class="new-option" data-value="'+newValue+'"><p><a id="app-strategies-app-select-pulldown" href="../1/step">'+newHTML+'</p></a></div>');
                }
                if (newHTML == '遊び') {
                    $('.new-select').append('<div class="new-option" data-value="'+newValue+'"><p><a id="app-strategies-app-select-pulldown" href="../2/step">'+newHTML+'</p></a></div>');
                }
                if (newHTML == '超遊び') {
                    $('.new-select').append('<div class="new-option" data-value="'+newValue+'"><p><a id="app-strategies-app-select-pulldown" href="../3/step">'+newHTML+'</p></a></div>');
                }
            }

            if (date_plans_purpose) {
                // デートプラン
                if (newHTML == '彼女作り') {
                    $('.new-select').append('<div class="new-option" data-value="'+newValue+'"><p><a id="app-strategies-app-select-pulldown" href="1">'+newHTML+'</p></a></div>');
                }
                if (newHTML == '遊び') {
                    $('.new-select').append('<div class="new-option" data-value="'+newValue+'"><p><a id="app-strategies-app-select-pulldown" href="2">'+newHTML+'</p></a></div>');
                }
                if (newHTML == '超遊び') {
                    $('.new-select').append('<div class="new-option" data-value="'+newValue+'"><p><a id="app-strategies-app-select-pulldown" href="3">'+newHTML+'</p></a></div>');
                }
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
    // 攻略アプリdiv
    const app_strategies_show = document.getElementById('app-strategies-show');

    // ステップ詳細div
    const app_strategies_step = document.getElementById('app-strategies-step');

    // ステップ詳細div
    const date_plans_container = document.getElementById('date_plans_container');

    if (selection) {
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
                // 攻略アプリ
                if (app_strategies_show) {
                    app_strategies_show.before(error_message);
                }

                // ステップ詳細
                if (app_strategies_step) {
                    app_strategies_step.before(error_message);
                }

                // デートプラン
                if (date_plans_container) {
                    date_plans_container.before(error_message);
                }

                let error_message_text = document.querySelectorAll('#app-strategies-error-message');
                if (error_message_text.length == 2) {
                    error_message_text[1].remove();
                }
            }
        });
    }
    
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


    // ステップ詳細の目的 タイトルの背景色変更
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
