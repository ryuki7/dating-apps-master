window.onload = function() {
  const myLiffId = "1656234930-4MZoRoZd";
  initializeLiffOrDie(myLiffId);
};

/** 関数(function)の引数を宣言する
* @param {string} myLiffId 

*「myLiffId」が代入(記載)されているかのチェック。代入(記載)されていない場合、LIFFを開始しない。 */
function initializeLiffOrDie(myLiffId) {
    if (!myLiffId) {
        document.getElementById("liffAppContent").classList.add('hidden');
        document.getElementById("liffIdErrorMessage").classList.remove('hidden');
    } else {
        initializeLiff(myLiffId);
    }
};


/** 関数(function)の引数を宣言する
* @param {string} myLiffId 

* LIFFを初期化する。 */
function initializeLiff(myLiffId) {
    liff
        .init({
            liffId: myLiffId
        })
        .catch((err) => {
            document.getElementById("liffAppContent").classList.add('hidden');
            document.getElementById("liffInitErrorMessage").classList.remove('hidden');
        });
};
