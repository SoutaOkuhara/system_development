firebase.auth().onAuthStateChanged(user => {
    if (user) {
        (async () => {
            try {
                //ClassDBに反映されているかの判定
                const Userclass = await db.collection('user').doc(user.uid).get();
                const ClassId = Userclass.get('Class');
                var ClassDB = await db.collection('Class').doc(ClassId).get(); 
                if(ClassId != undefined){
                    var className = '<p>在籍先：' + ClassDB.get('title') + '</p>';
                    document.getElementById('className').innerHTML = className;
                }

                //投稿の表示
                var stocklist = "";
                const articleDB = await db.collection('bbs').doc(ClassId).collection('articles').orderBy('date','desc').get();
                articleDB.forEach((postDoc) => {
                    stocklist += '<div class="articles"><h2>' + postDoc.get('title') + '</h2><p class="articles_date">追加日:' + postDoc.get('date').toDate().toLocaleString('ja-JP', {year:'numeric',month:'numeric',day:'numeric',hour:'numeric',minute:'numeric'}) + '</p><p class="articles_content">' + postDoc.get('content') + '</p></div>';
                });

                document.getElementById('Article').innerHTML = stocklist;

            } catch (err) {
            console.log(`Error: ${JSON.stringify(err)}`);
            }
            })();
    }else{
        document.getElementById('button').style.display = "none";
    }
});

function bbsUpdate(){
    var bbs_title = document.getElementById('bbs_title').value;
    var bbs_content = document.getElementById('bbs_content').value;
    var titlealert = document.getElementById('getWeekAlert');
    var contentalert = document.getElementById('getTimeAlert');
    titlealert.textContent = "";
    contentalert.textContent = "";
    var isSend = true;
    if(bbs_title == ""){
        titlealert.innerHTML = '<div class="alert alert-danger" role="alert">タイトル欄が未記入です。</div>';
        isSend = false;
    }
    if(bbs_content == ""){
        contentalert.innerHTML = '<div class="alert alert-danger" role="alert">内容欄が未記入です。</div>';
        isSend = false;
    }

    //DBをUpdateする
    if(isSend == true){
        firebase.auth().onAuthStateChanged(user => {
            (async () => {
                try {
                    const Userclass = await db.collection('user').doc(user.uid).get();
                    const ClassId = Userclass.get('Class');
                    const bbsRef = db.collection('bbs').doc(ClassId).collection('articles');
                    bbsRef.add({
                        title:bbs_title,
                        date:firebase.firestore.FieldValue.serverTimestamp(),
                        content:bbs_content
                    });
                    var collectAlert = document.getElementById('collectAlert');
                    collectAlert.innerHTML = '<div class="alert alert-success" role="alert">編集完了!リロードします。</div>';
                    setTimeout("location.reload()",2000);
        
                } catch (err) {
                console.log(`Error: ${JSON.stringify(err)}`)
                }
            })();
        });
    }else{
    }
}
