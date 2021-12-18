firebase.auth().onAuthStateChanged(user => {
    //月曜日
    (async () => {
        try {
        // 省略 
        // (Cloud Firestoreのインスタンスを初期化してdbにセット)
        let timetable = ['one','two','three','four','five','six','seven','eight'];
        var stocklist = '<h2>月</h2><table class="table table-striped"><thead><tr><th scope="col">時間</th><th scope="col">内容</th></thead><tbody>';
        for(let i = 0; i < timetable.length;i++){
            const TimetableDB = await db.collection('Timetable').doc(user.uid).collection('Monday').doc(timetable[i]).get();
            stocklist += '<tr><th scope = "col">' + (i+1) +'</th>' + '<th>' + '<p>科目:<span>' + TimetableDB.get('Subject') + '</span></p><p>担当教諭:<span>' + TimetableDB.get('Teacher') + '</span></p><p>教室:<span>' + TimetableDB.get('Classroom') + '</span></p><p>一言メモ:<span>' + TimetableDB.get('memo') +'</span></p></th></tr>';
        }
        stocklist += '</tbody></table>';
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
        var stocklist = '<h2>火</h2><table class="table table-striped"><thead><tr><th scope="col">時間</th><th scope="col">内容</th></thead><tbody>';
        for(let i = 0; i < timetable.length;i++){
            const TimetableDB = await db.collection('Timetable').doc(user.uid).collection('Tuesday').doc(timetable[i]).get();
            stocklist += '<tr><th scope = "col">' + (i+1) +'</th>' + '<th>' + '<p>科目:<span>' + TimetableDB.get('Subject') + '</span></p><p>担当教諭:<span>' + TimetableDB.get('Teacher') + '</span></p><p>教室:<span>' + TimetableDB.get('Classroom') + '</span></p><p>一言メモ:<span>' + TimetableDB.get('memo') +'</span></p></th></tr>';
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
        var stocklist = '<h2>水</h2><table class="table table-striped"><thead><tr><th scope="col">時間</th><th scope="col">内容</th></thead><tbody>';
        for(let i = 0; i < timetable.length;i++){
            const TimetableDB = await db.collection('Timetable').doc(user.uid).collection('Wednesday').doc(timetable[i]).get();
            stocklist += '<tr><th scope = "col">' + (i+1) +'</th>' + '<th>' + '<p>科目:<span>' + TimetableDB.get('Subject') + '</span></p><p>担当教諭:<span>' + TimetableDB.get('Teacher') + '</span></p><p>教室:<span>' + TimetableDB.get('Classroom') + '</span></p><p>一言メモ:<span>' + TimetableDB.get('memo') +'</span></p></th></tr>';
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
        var stocklist = '<h2>木</h2><table class="table table-striped"><thead><tr><th scope="col">時間</th><th scope="col">内容</th></thead><tbody>';
        for(let i = 0; i < timetable.length;i++){
            const TimetableDB = await db.collection('Timetable').doc(user.uid).collection('Thursday').doc(timetable[i]).get();
            stocklist += '<tr><th scope = "col">' + (i+1) +'</th>' + '<th>' + '<p>科目:<span>' + TimetableDB.get('Subject') + '</span></p><p>担当教諭:<span>' + TimetableDB.get('Teacher') + '</span></p><p>教室:<span>' + TimetableDB.get('Classroom') + '</span></p><p>一言メモ:<span>' + TimetableDB.get('memo') +'</span></p></th></tr>';
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
        var stocklist = '<h2>金</h2><table class="table table-striped"><thead><tr><th scope="col">時間</th><th scope="col">内容</th></thead><tbody>';
        for(let i = 0; i < timetable.length;i++){
            const TimetableDB = await db.collection('Timetable').doc(user.uid).collection('Friday').doc(timetable[i]).get();
            stocklist += '<tr><th scope = "col">' + (i+1) +'</th>' + '<th>' + '<p>科目:<span>' + TimetableDB.get('Subject') + '</span></p><p>担当教諭:<span>' + TimetableDB.get('Teacher') + '</span></p><p>教室:<span>' + TimetableDB.get('Classroom') + '</span></p><p>一言メモ:<span>' + TimetableDB.get('memo') +'</span></p></th></tr>';
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
        var stocklist = '<h2>土</h2><table class="table table-striped"><thead><tr><th scope="col">時間</th><th scope="col">内容</th></thead><tbody>';
        for(let i = 0; i < timetable.length;i++){
            const TimetableDB = await db.collection('Timetable').doc(user.uid).collection('Saturday').doc(timetable[i]).get();
            stocklist += '<tr><th scope = "col">' + (i+1) +'</th>' + '<th>' + '<p>科目:<span>' + TimetableDB.get('Subject') + '</span></p><p>担当教諭:<span>' + TimetableDB.get('Teacher') + '</span></p><p>教室:<span>' + TimetableDB.get('Classroom') + '</span></p><p>一言メモ:<span>' + TimetableDB.get('memo') +'</span></p></th></tr>';
        }
        stocklist += '</tbody></table>'
        document.getElementById('timetable_Saturday').innerHTML = stocklist;

        } catch (err) {
        console.log(`Error: ${JSON.stringify(err)}`)
        }
    })();
});

function TimetableUpdate(){
    var week = document.getElementById('week').value;
    var time = document.getElementById('time').value;
    var Subject_input = document.getElementById('subject_input').value;
    var Teacher_input = document.getElementById('Teacher_input').value;
    var Classroom_input = document.getElementById('ClassRoom_input').value;
    var Memo_input = document.getElementById('Memo_input').value;
    var weekalert = document.getElementById('getWeekAlert');
    var Timealert = document.getElementById('getTimeAlert');
    weekalert.textContent = "";
    Timealert.textContent = "";
    var isSend = true;
    if(week == ""){
        weekalert.innerHTML = '<div class="alert alert-danger" role="alert">曜日欄が未記入です。</div>';
        isSend = false;
    }
    if(time == ""){
        Timealert.innerHTML = '<div class="alert alert-danger" role="alert">時間欄が未記入です。</div>';
        isSend = false;
    }

    // 各種情報が空白の時に現在置かれている内容を保持する
    //DBをUpdateする
    if(isSend == true){
        firebase.auth().onAuthStateChanged(user => {
            (async () => {
                try {
                    const carrentTimetableDB = await db.collection('Timetable').doc(user.uid).collection(week).doc(time).get();
                    if(Subject_input == ""){
                        Subject_input = carrentTimetableDB.get('Subject');
                    }
                
                    if(Classroom_input == ""){
                        Classroom_input = carrentTimetableDB.get('Classroom');
                    }
                
                    if(Teacher_input == ""){
                        Teacher_input = carrentTimetableDB.get('Teacher');
                    }

                    if(Memo_input == ""){
                        Memo_input = carrentTimetableDB.get('memo');
                    }

                    const updateTimetableDB = await db.collection('Timetable').doc(user.uid).collection(week).doc(time);
                    updateTimetableDB.update({
                        Subject:Subject_input,
                        Teacher:Teacher_input,
                        Classroom:Classroom_input,
                        memo:Memo_input
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