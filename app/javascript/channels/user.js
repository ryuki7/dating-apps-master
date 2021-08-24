document.addEventListener('DOMContentLoaded', () => {
  const myLiffId = "1656234930-4MZoRoZd";
  initializeLiffOrDie(myLiffId);

  /*「myLiffId」が代入(記載)されているかのチェック。代入(記載)されていない場合、LIFFを開始しない。 */
  function initializeLiffOrDie(myLiffId) {
      if (!myLiffId) {
          document.getElementById("liffAppContent").classList.add('hidden');
          document.getElementById("liffErrorMessage").classList.remove('hidden');
      } else {
          initializeLiff(myLiffId);
      }
  };

  /* LIFFを初期化する。 */
  function initializeLiff(myLiffId) {
      liff
          .init({
              liffId: myLiffId
          })
          .then(async() => {
              if (liff.isInClient()) {
                  // LIFFブラウザ内で動作
                  idTokenSendToController();
                }else {
                    // 外部ブラウザ内で動作
                    if (liff.isLoggedIn()) {
                        console.log('Logged in.');
                        idTokenSendToController();
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

  // lineのユーザーIDトークンをcontrollerに送る
  function idTokenSendToController() {
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
  };
})