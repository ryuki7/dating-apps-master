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
        document.getElementById("liffErrorMessage").classList.remove('hidden');
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
        .then(async() => {
            if (liff.isInClient()) {
                // LIFFブラウザ内で動作
                const idToken = liff.getIDToken();  // lineのユーザーIDトークンを取得する
                const body =`idToken=${idToken}`
                const request = new Request('/users', {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                },
                method: 'POST',
                body: body
                });
                fetch(request)
                .then(response => {
                    // このブロックの中ではPromiseではなくて、通常の値として扱える
                    //if (response.status == 500) {
                    //  document.getElementById("liffAppContent").classList.add('hidden');
                    // document.getElementById("liffErrorMessage").classList.remove('hidden');
                    //}
                })
                .catch(error => {
                    document.getElementById("liffAppContent").classList.add('hidden');
                    document.getElementById("liffErrorMessage").classList.remove('hidden');
                });
            }else {
                // 外部ブラウザ内で動作
                if (liff.isLoggedIn()) {
                    console.log('Logged in.');
                    const idToken = liff.getIDToken();  // lineのユーザーIDトークンを取得する
                    const body =`idToken=${idToken}`
                    const request = new Request('/users', {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                        },
                        method: 'POST',
                        body: body
                    });
                    // lineのユーザーIDトークンをcontrollerに送る
                    fetch(request)
                        .then(response => {
                            // このブロックの中ではPromiseではなくて、通常の値として扱える
                            //if (response.status == 500) {
                            //  document.getElementById("liffAppContent").classList.add('hidden');
                            // document.getElementById("liffErrorMessage").classList.remove('hidden');
                            //}
                        })
                        .catch(error => {
                            document.getElementById("liffAppContent").classList.add('hidden');
                            document.getElementById("liffErrorMessage").classList.remove('hidden');
                        });
                }else {
                    liff.login();
                }
            }
        })
        .catch((err) => {
            document.getElementById("liffAppContent").classList.add('hidden');
            document.getElementById("liffErrorMessage").classList.remove('hidden');
        });
};
