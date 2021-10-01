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
