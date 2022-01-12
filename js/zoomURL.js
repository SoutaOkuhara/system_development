firebase.auth().onAuthStateChanged(user => {
    //月曜日
    (async () => {
        try {
        // 省略 
        // (Cloud Firestoreのインスタンスを初期化してdbにセット)
        let timetable = ['one','two','three','four','five','six','seven','eight'];
        var stocklist = '<table class="table table-striped"><thead><tr><th scope="col">曜日</th><th scope="col">時間</th><th scope="col">ZoomURL</th><th scope="col">Zoomパスワード</th><th scope="col">科目</th></tr></thead><tbody><tr><th scope="col" class="month">月</th><th></th><th></th><th></th><th></th></tr>'
        for(let i = 0; i < timetable.length;i++){
            const zoomURLDB = await db.collection('zoomURL').doc(user.uid).collection('Monday').doc(timetable[i]).get();
            const zoomURL = zoomURLDB.get('URL');
            var zoomURL_tag = "";
            if(zoomURL == '未入力'){
                zoomURL_tag = '<th>' + zoomURLDB.get('URL') +'</th>';
            }else{
                zoomURL_tag = '<th><a href = "' + zoomURLDB.get('URL') + '" target = "blank">' + zoomURLDB.get('URL') + '</a></th>';
            }
            stocklist += '<tr><th></th><th scope = "col">' + (i+1) +'</th>' + zoomURL_tag + '<th>' + zoomURLDB.get('Pass') +'</th><th>' + zoomURLDB.get('Subject') + '</th></tr>';
        }
        stocklist += '</tbody></table>'
        document.getElementById('timetable_Monday').innerHTML = stocklist;

        } catch (err) {
        console.log(`Error: ${JSON.stringify(err)}`)
        }
    })();

    //火曜日
    (async () => {
        try {
        // 省略 
        // (Cloud Firestoreのインスタンスを初期化してdbにセット)
        let timetable = ['one','two','three','four','five','six','seven','eight'];
        var stocklist = '<table class="table table-striped"><thead><tr><th scope="col">曜日</th><th scope="col">時間</th><th scope="col">ZoomURL</th><th scope="col">Zoomパスワード</th><th scope="col">科目</th></tr></thead><tbody><tr><th scope="col" class="month">火</th><th></th><th></th><th></th><th></th></tr>'
        for(let i = 0; i < timetable.length;i++){
            const zoomURLDB = await db.collection('zoomURL').doc(user.uid).collection('Tuesday').doc(timetable[i]).get();
            const zoomURL = zoomURLDB.get('URL');
            var zoomURL_tag = "";
            if(zoomURL == '未入力'){
                zoomURL_tag = '<th>' + zoomURLDB.get('URL') +'</th>';
            }else{
                zoomURL_tag = '<th><a href = "' + zoomURLDB.get('URL') + '" target = "blank">' + zoomURLDB.get('URL') + '</a></th>';
            }
            stocklist += '<tr><th></th><th scope = "col">' + (i+1) +'</th>' + zoomURL_tag + '<th>' + zoomURLDB.get('Pass') +'</th><th>' + zoomURLDB.get('Subject') + '</th></tr>';
        }
        stocklist += '</tbody></table>'
        document.getElementById('timetable_Tuesday').innerHTML = stocklist;

        } catch (err) {
        console.log(`Error: ${JSON.stringify(err)}`)
        }
    })();

    //水曜日
    (async () => {
        try {
        // 省略 
        // (Cloud Firestoreのインスタンスを初期化してdbにセット)
        let timetable = ['one','two','three','four','five','six','seven','eight'];
        var stocklist = '<table class="table table-striped"><thead><tr><th scope="col">曜日</th><th scope="col">時間</th><th scope="col">ZoomURL</th><th scope="col">Zoomパスワード</th><th scope="col">科目</th></tr></thead><tbody><tr><th scope="col" class="month">水</th><th></th><th></th><th></th><th></th></tr>'
        for(let i = 0; i < timetable.length;i++){
            const zoomURLDB = await db.collection('zoomURL').doc(user.uid).collection('Wednesday').doc(timetable[i]).get();
            const zoomURL = zoomURLDB.get('URL');
            var zoomURL_tag = "";
            if(zoomURL == '未入力'){
                zoomURL_tag = '<th>' + zoomURLDB.get('URL') +'</th>';
            }else{
                zoomURL_tag = '<th><a href = "' + zoomURLDB.get('URL') + '" target = "blank">' + zoomURLDB.get('URL') + '</a></th>';
            }
            stocklist += '<tr><th></th><th scope = "col">' + (i+1) +'</th>' + zoomURL_tag + '<th>' + zoomURLDB.get('Pass') +'</th><th>' + zoomURLDB.get('Subject') + '</th></tr>';
        }
        stocklist += '</tbody></table>'
        document.getElementById('timetable_Wednesday').innerHTML = stocklist;

        } catch (err) {
        console.log(`Error: ${JSON.stringify(err)}`)
        }
    })();

    //木曜日
    (async () => {
        try {
        // 省略 
        // (Cloud Firestoreのインスタンスを初期化してdbにセット)
        let timetable = ['one','two','three','four','five','six','seven','eight'];
        var stocklist = '<table class="table table-striped"><thead><tr><th scope="col">曜日</th><th scope="col">時間</th><th scope="col">ZoomURL</th><th scope="col">Zoomパスワード</th><th scope="col">科目</th></tr></thead><tbody><tr><th scope="col" class="month">木</th><th></th><th></th><th></th><th></th></tr>'
        for(let i = 0; i < timetable.length;i++){
            const zoomURLDB = await db.collection('zoomURL').doc(user.uid).collection('Thursday').doc(timetable[i]).get();
            const zoomURL = zoomURLDB.get('URL');
            var zoomURL_tag = "";
            if(zoomURL == '未入力'){
                zoomURL_tag = '<th>' + zoomURLDB.get('URL') +'</th>';
            }else{
                zoomURL_tag = '<th><a href = "' + zoomURLDB.get('URL') + '" target = "blank">' + zoomURLDB.get('URL') + '</a></th>';
            }
            stocklist += '<tr><th></th><th scope = "col">' + (i+1) +'</th>' + zoomURL_tag + '<th>' + zoomURLDB.get('Pass') +'</th><th>' + zoomURLDB.get('Subject') + '</th></tr>';
        }
        stocklist += '</tbody></table>'
        document.getElementById('timetable_Thursday').innerHTML = stocklist;

        } catch (err) {
        console.log(`Error: ${JSON.stringify(err)}`)
        }
    })();

    //金曜日
    (async () => {
        try {
        // 省略 
        // (Cloud Firestoreのインスタンスを初期化してdbにセット)
        let timetable = ['one','two','three','four','five','six','seven','eight'];
        var stocklist = '<table class="table table-striped"><thead><tr><th scope="col">曜日</th><th scope="col">時間</th><th scope="col">ZoomURL</th><th scope="col">Zoomパスワード</th><th scope="col">科目</th></tr></thead><tbody><tr><th scope="col" class="month">金</th><th></th><th></th><th></th><th></th></tr>'
        for(let i = 0; i < timetable.length;i++){
            const zoomURLDB = await db.collection('zoomURL').doc(user.uid).collection('Friday').doc(timetable[i]).get();
            const zoomURL = zoomURLDB.get('URL');
            var zoomURL_tag = "";
            if(zoomURL == '未入力'){
                zoomURL_tag = '<th>' + zoomURLDB.get('URL') +'</th>';
            }else{
                zoomURL_tag = '<th><a href = "' + zoomURLDB.get('URL') + '" target = "blank">' + zoomURLDB.get('URL') + '</a></th>';
            }
            stocklist += '<tr><th></th><th scope = "col">' + (i+1) +'</th>' + zoomURL_tag + '<th>' + zoomURLDB.get('Pass') +'</th><th>' + zoomURLDB.get('Subject') + '</th></tr>';
        }
        stocklist += '</tbody></table>'
        document.getElementById('timetable_Friday').innerHTML = stocklist;

        } catch (err) {
        console.log(`Error: ${JSON.stringify(err)}`)
        }
    })();

    //土曜日
    (async () => {
        try {
        // 省略 
        // (Cloud Firestoreのインスタンスを初期化してdbにセット)
        let timetable = ['one','two','three','four','five','six','seven','eight'];
        var stocklist = '<table class="table table-striped"><thead><tr><th scope="col">曜日</th><th scope="col">時間</th><th scope="col">ZoomURL</th><th scope="col">Zoomパスワード</th><th scope="col">科目</th></tr></thead><tbody><tr><th scope="col" class="month">土</th><th></th><th></th><th></th><th></th></tr>'
        for(let i = 0; i < timetable.length;i++){
            const zoomURLDB = await db.collection('zoomURL').doc(user.uid).collection('Saturday').doc(timetable[i]).get();
            const zoomURL = zoomURLDB.get('URL');
            var zoomURL_tag = "";
            if(zoomURL == '未入力'){
                zoomURL_tag = '<th>' + zoomURLDB.get('URL') +'</th>';
            }else{
                zoomURL_tag = '<th><a href = "' + zoomURLDB.get('URL') + '" target = "blank">' + zoomURLDB.get('URL') + '</a></th>';
            }
            stocklist += '<tr><th></th><th scope = "col">' + (i+1) +'</th>' + zoomURL_tag + '<th>' + zoomURLDB.get('Pass') +'</th><th>' + zoomURLDB.get('Subject') + '</th></tr>';
        }
        stocklist += '</tbody></table>'
        document.getElementById('timetable_Saturday').innerHTML = stocklist;

        } catch (err) {
        console.log(`Error: ${JSON.stringify(err)}`)
        }
    })();
});

function ZoomURLUpdate(){
    var week = document.getElementById('week').value;
    var time = document.getElementById('time').value;
    var ZoomURL_input = document.getElementById('zoomURL_input').value;
    var Pass_input = document.getElementById('Pass_input').value;
    var Subject_input = document.getElementById('subject_input').value;
    var weekalert = document.getElementById('getWeekAlert');
    var Timealert = document.getElementById('getTimeAlert');
    var ZoomURLalert = document.getElementById('getzoomAlert');
    weekalert.textContent = "";
    Timealert.textContent = "";
    ZoomURLalert.textContent = "";
    var isSend = true;
    if(week == ""){
        weekalert.innerHTML = '<div class="alert alert-danger" role="alert">曜日欄が未記入です。</div>';
        isSend = false;
    }
    if(time == ""){
        Timealert.innerHTML = '<div class="alert alert-danger" role="alert">時間欄が未記入です。</div>';
        isSend = false;
    }

    if(ZoomURL_input != '/^http' || ZoomURL_input != '/^https'){
        ZoomURLalert.innerHTML = '<div class="alert alert-danger" role="alert">URL以外は入力できません。</div>';
        isSend = false;
    }

    // 各種情報が空白の時に現在置かれている内容を保持する
    //DBをUpdateする
    if(isSend == true){
        firebase.auth().onAuthStateChanged(user => {
            (async () => {
                try {
                    const carrentZoomURLDB = await db.collection('zoomURL').doc(user.uid).collection(week).doc(time).get();
                    if(ZoomURL_input == ""){
                        ZoomURL_input = carrentZoomURLDB.get('URL');
                    }
                
                    if(Pass_input == ""){
                        Pass_input = carrentZoomURLDB.get('Pass');
                    }
                
                    if(Subject_input == ""){
                        Subject_input = carrentZoomURLDB.get('Subject');
                    }

                    const updateZoomURLDB = await db.collection('zoomURL').doc(user.uid).collection(week).doc(time);
                    updateZoomURLDB.update({
                        Pass:Pass_input,
                        Subject:Subject_input,
                        URL:ZoomURL_input
                    });
                    console.log('ok');
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