inter_en = {
  cancel: '戻る',
  clear: 'クリア',
  previousMonth:    '‹',
  nextMonth:    '›',
  months:    ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  monthsShort:    ["1/", "2/", "3/", "4/", "5/", "6/", "7/", "8/", "9/", "10/", "11/", "12/"],

  weekdays:    ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],

  weekdaysShort:    ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],

  weekdaysAbbrev:    ["日", "月", "火", "水", "木", "金", "土"]
};


var options = {
  autoClose: true,
  format: "yyyy年 m月d日",
  showDaysInNextAndPreviousMonths: true,
  i18n: inter_en,
  showClearBtn: true,
  onDraw: function button_text_color_change_Saturday_and_Sunday() {
            var datepicker_row_array = document.querySelectorAll(".datepicker-row");
            for(let i = 0; i < datepicker_row_array.length; i++) {

              // 日曜日 ボタンカラー変更 (ピンク色)
              Sunday_td = datepicker_row_array[i].firstElementChild;
              if (!Sunday_td.classList.contains("is-selected")) {
                Sunday_button = Sunday_td.firstElementChild;
                Sunday_button.style = "background-color: rgb(255, 225, 225);"
              }

              // 土曜日 ボタンカラー変更 (水色)
              Saturday_td = datepicker_row_array[i].lastElementChild;
              if (!Saturday_td.classList.contains("is-selected")) {
                Saturday_button = Saturday_td.firstElementChild;
                Saturday_button.style = "background-color: rgb(225, 233, 255);"
              }

              // 今日(today) ボタンカラー変更 (赤色)
              one_row_of_all_td_array = datepicker_row_array[i].children;
              for(let i = 0; i < one_row_of_all_td_array.length; i++) {
                if (one_row_of_all_td_array[i].classList.contains("is-today")) {
                  today_button = one_row_of_all_td_array[i].firstElementChild;
                  today_button.style = "background-color: rgb(255, 118, 118);"
                }
              }
            }

            var weekdaysAbbrev_array = document.getElementsByTagName("abbr");
            for(let i = 0; i < weekdaysAbbrev_array.length; i++) {
              // 日曜日 abbrev(アブリーヴ)カラー変更 (赤色)
              if (weekdaysAbbrev_array[i].title == "日曜日") {
                weekdaysAbbrev_array[i].style = "color: rgb(255, 225, 225);"
              }

              // 土曜日 abbrev(アブリーヴ)カラー変更 (青色)
              if (weekdaysAbbrev_array[i].title == "土曜日") {
                weekdaysAbbrev_array[i].style = "color: rgb(225, 233, 255);"
              }
            }
            
          }
};

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.datepicker').datepicker();
  });

  document.addEventListener('DOMContentLoaded', () => {
    const datepicker_ok_button = document.getElementsByClassName("datepicker-done");
    if (datepicker_ok_button) {
        datepicker_ok_button[0].remove();
    }
  });
