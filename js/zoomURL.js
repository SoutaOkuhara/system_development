firebase.auth().onAuthStateChanged(user => {
    //月曜日
    (async () => {
        try {
        // 省略 
        // (Cloud Firestoreのインスタンスを初期化してdbにセット)
        let timetable = ['one','two','three','four','five','six','seven','eight'];
        var stocklist = '<table class="table table-striped"><thead><tr><th scope="col">曜日</th><th scope="col">時間</th><th scope="col">ZoomURL</th><th scope="col">Zoomパスワード</th><th scope="col">科目</th><th scope="col"></th></tr></thead><tbody><tr><th scope="col" class="month">月</th><th></th><th></th><th></th><th></th><th></th></tr>'
        for(let i = 0; i < timetable.length;i++){
            const zoomURLDB = await db.collection('zoomURL').doc(user.uid).collection('Monday').doc(timetable[i]).get();
            const zoomURL = zoomURLDB.get('URL');
            var zoomURL_tag = "";
            if(zoomURL == '未入力'){
                zoomURL_tag = '<th>' + zoomURLDB.get('URL') +'</th>';
            }else{
                zoomURL_tag = '<th><a href = "' + zoomURLDB.get('URL') + '" target = "blank">' + zoomURLDB.get('URL') + '</a></th>';
            }
            stocklist += '<tr><th></th><th scope = "col">' + (i+1) +'</th>' + zoomURL_tag + '<th>' + zoomURLDB.get('Pass') +'</th><th>' + zoomURLDB.get('Subject') + '</th><th><button type="button" class="btn btn-outline-secondary">編集する</button></th></tr>';
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
        var stocklist = '<table class="table table-striped"><thead><tr><th scope="col">曜日</th><th scope="col">時間</th><th scope="col">ZoomURL</th><th scope="col">Zoomパスワード</th><th scope="col">科目</th><th scope="col"></th></tr></thead><tbody><tr><th scope="col" class="month">火</th><th></th><th></th><th></th><th></th><th></th></tr>'
        for(let i = 0; i < timetable.length;i++){
            const zoomURLDB = await db.collection('zoomURL').doc(user.uid).collection('Tuesday').doc(timetable[i]).get();
            const zoomURL = zoomURLDB.get('URL');
            var zoomURL_tag = "";
            if(zoomURL == '未入力'){
                zoomURL_tag = '<th>' + zoomURLDB.get('URL') +'</th>';
            }else{
                zoomURL_tag = '<th><a href = "' + zoomURLDB.get('URL') + '" target = "blank">' + zoomURLDB.get('URL') + '</a></th>';
            }
            stocklist += '<tr><th></th><th scope = "col">' + (i+1) +'</th>' + zoomURL_tag + '<th>' + zoomURLDB.get('Pass') +'</th><th>' + zoomURLDB.get('Subject') + '</th><th><button type="button" class="btn btn-outline-secondary">編集する</button></th></tr>';
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
        var stocklist = '<table class="table table-striped"><thead><tr><th scope="col">曜日</th><th scope="col">時間</th><th scope="col">ZoomURL</th><th scope="col">Zoomパスワード</th><th scope="col">科目</th><th scope="col"></th></tr></thead><tbody><tr><th scope="col" class="month">水</th><th></th><th></th><th></th><th></th><th></th></tr>'
        for(let i = 0; i < timetable.length;i++){
            const zoomURLDB = await db.collection('zoomURL').doc(user.uid).collection('Wednesday').doc(timetable[i]).get();
            const zoomURL = zoomURLDB.get('URL');
            var zoomURL_tag = "";
            if(zoomURL == '未入力'){
                zoomURL_tag = '<th>' + zoomURLDB.get('URL') +'</th>';
            }else{
                zoomURL_tag = '<th><a href = "' + zoomURLDB.get('URL') + '" target = "blank">' + zoomURLDB.get('URL') + '</a></th>';
            }
            stocklist += '<tr><th></th><th scope = "col">' + (i+1) +'</th>' + zoomURL_tag + '<th>' + zoomURLDB.get('Pass') +'</th><th>' + zoomURLDB.get('Subject') + '</th><th><button type="button" class="btn btn-outline-secondary">編集する</button></th></tr>';
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
        var stocklist = '<table class="table table-striped"><thead><tr><th scope="col">曜日</th><th scope="col">時間</th><th scope="col">ZoomURL</th><th scope="col">Zoomパスワード</th><th scope="col">科目</th><th scope="col"></th></tr></thead><tbody><tr><th scope="col" class="month">木</th><th></th><th></th><th></th><th></th><th></th></tr>'
        for(let i = 0; i < timetable.length;i++){
            const zoomURLDB = await db.collection('zoomURL').doc(user.uid).collection('Thursday').doc(timetable[i]).get();
            const zoomURL = zoomURLDB.get('URL');
            var zoomURL_tag = "";
            if(zoomURL == '未入力'){
                zoomURL_tag = '<th>' + zoomURLDB.get('URL') +'</th>';
            }else{
                zoomURL_tag = '<th><a href = "' + zoomURLDB.get('URL') + '" target = "blank">' + zoomURLDB.get('URL') + '</a></th>';
            }
            stocklist += '<tr><th></th><th scope = "col">' + (i+1) +'</th>' + zoomURL_tag + '<th>' + zoomURLDB.get('Pass') +'</th><th>' + zoomURLDB.get('Subject') + '</th><th><button type="button" class="btn btn-outline-secondary">編集する</button></th></tr>';
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
        var stocklist = '<table class="table table-striped"><thead><tr><th scope="col">曜日</th><th scope="col">時間</th><th scope="col">ZoomURL</th><th scope="col">Zoomパスワード</th><th scope="col">科目</th><th scope="col"></th></tr></thead><tbody><tr><th scope="col" class="month">金</th><th></th><th></th><th></th><th></th><th></th></tr>'
        for(let i = 0; i < timetable.length;i++){
            const zoomURLDB = await db.collection('zoomURL').doc(user.uid).collection('Friday').doc(timetable[i]).get();
            const zoomURL = zoomURLDB.get('URL');
            var zoomURL_tag = "";
            if(zoomURL == '未入力'){
                zoomURL_tag = '<th>' + zoomURLDB.get('URL') +'</th>';
            }else{
                zoomURL_tag = '<th><a href = "' + zoomURLDB.get('URL') + '" target = "blank">' + zoomURLDB.get('URL') + '</a></th>';
            }
            stocklist += '<tr><th></th><th scope = "col">' + (i+1) +'</th>' + zoomURL_tag + '<th>' + zoomURLDB.get('Pass') +'</th><th>' + zoomURLDB.get('Subject') + '</th><th><button type="button" class="btn btn-outline-secondary">編集する</button></th></tr>';
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
        var stocklist = '<table class="table table-striped"><thead><tr><th scope="col">曜日</th><th scope="col">時間</th><th scope="col">ZoomURL</th><th scope="col">Zoomパスワード</th><th scope="col">科目</th><th scope="col"></th></tr></thead><tbody><tr><th scope="col" class="month">土</th><th></th><th></th><th></th><th></th><th></th></tr>'
        for(let i = 0; i < timetable.length;i++){
            const zoomURLDB = await db.collection('zoomURL').doc(user.uid).collection('Saturday').doc(timetable[i]).get();
            const zoomURL = zoomURLDB.get('URL');
            var zoomURL_tag = "";
            if(zoomURL == '未入力'){
                zoomURL_tag = '<th>' + zoomURLDB.get('URL') +'</th>';
            }else{
                zoomURL_tag = '<th><a href = "' + zoomURLDB.get('URL') + '" target = "blank">' + zoomURLDB.get('URL') + '</a></th>';
            }
            stocklist += '<tr><th></th><th scope = "col">' + (i+1) +'</th>' + zoomURL_tag + '<th>' + zoomURLDB.get('Pass') +'</th><th>' + zoomURLDB.get('Subject') + '</th><th><button type="button" class="btn btn-outline-secondary">編集する</button></th></tr>';
        }
        stocklist += '</tbody></table>'
        document.getElementById('timetable_Saturday').innerHTML = stocklist;

        } catch (err) {
        console.log(`Error: ${JSON.stringify(err)}`)
        }
    })();
});