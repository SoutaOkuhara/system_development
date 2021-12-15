const firebaseConfig = {
    apiKey: "AIzaSyCwGZJIApU_ug8lQ1KFHYPR3HC4ZS_8O28",
    authDomain: "studeasy-32a84.firebaseapp.com",
    databaseURL: "https://studeasy-32a84-default-rtdb.firebaseio.com",
    projectId: "studeasy-32a84",
    storageBucket: "studeasy-32a84.appspot.com",
    messagingSenderId: "910710358967",
    appId: "1:910710358967:web:b53110bdd2a8411465de32",
    measurementId: "G-L2FJ73B9LG"
  };
  
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
        document.querySelector('.login').innerHTML = "<div class='login_userInfo'><button class='btn btn-outline-danger' id='logout'>ログアウトする</button><p>" + user.displayName + "さんとしてログインしています</p>" + "<p>メールアドレス：" + user.email + "</p></div>";
        //Userテーブルに追加されているかの確認
        (async () => {
            try {
            // 省略 
            // (Cloud Firestoreのインスタンスを初期化してdbにセット)
            var existing = 0;
            const querySnapshot = await db.collection('user').get() // firebase.firestore.QuerySnapshotのインスタンスを取得
            console.log(querySnapshot.docs.map(postDoc => postDoc.id))
            querySnapshot.forEach((postDoc) => {
                if(postDoc.id == user.uid){
                console.log('既に存在しています。');
                existing = 1;
                }else{
                console.log('存在していません。');
                }
            });

            if(existing == 0){
                //DBに値を追加
                const userRef = db.collection('user').doc(user.uid);
                console.log(userRef);
                userRef.set({
                    Name:user.displayName,
                })
                .then(function(docRef) {
                console.log("collect");
                })
                .catch(function(error) {
                console.error("Error adding document: ", error);
                });
            }else{

            };

            } catch (err) {
            console.log(`Error: ${JSON.stringify(err)}`);
            }
            })();
    }else{
        var uiConfig = {
        signInSuccessUrl:'index.html',
        // 利用する認証機能
        signInOptions: [{
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,  //メール認証
        }
        ],

        // 利用規約のURL(任意で設定)
        tosUrl: 'HTML/others/terms.html',
        // プライバシーポリシーのURL(任意で設定)
        privacyPolicyUrl: 'HTML/others/privacy_policy.html'
        };

        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebaseui-auth-container', uiConfig);
    }
});

//ログアウト
$(function(){
    $(document).on('click','#logout',function(){
        var res = window.confirm("本当にログアウトしますか？");
        if( res ) {
            firebase.auth().onAuthStateChanged(user => {
                firebase
                .auth()
                .signOut()
                .then(() => {
                    console.log('ログアウトしました');
                    setTimeout("location.reload()",500);
                })
                .catch((error) => {
                    console.log(`ログアウト時にエラーが発生しました (${error})`);
                });
            });
        }
        else {
            // キャンセルならアラートボックスを表示
            alert("ログアウトをキャンセルしました。");
        }
    });
});
