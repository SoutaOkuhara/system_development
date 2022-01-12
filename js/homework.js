firebase.auth().onAuthStateChanged(user => {
    //月曜日
    (async () => {
        try {
        // 省略 
        // (Cloud Firestoreのインスタンスを初期化してdbにセット)
        let timetable = ['one','two','three','four','five','six','seven','eight'];
        var stocklist = '<h2>月</h2><table class="table table-striped"><thead><tr><th scope="col">時間</th><th scope="col">内容</th><th scope="col">提出期限</th><th scope="col">優先度</th><th scope="col">完了・未完了</th></thead><tbody>';
        for(let i = 0; i < timetable.length;i++){
            const HomeworkDB = await db.collection('Homework').doc(user.uid).collection('Monday').doc(timetable[i]).get();
            stocklist += '<tr><th scope = "col">' + (i+1) +'</th>' + '<th>' + HomeworkDB.get('Content') +'</th><th>' + HomeworkDB.get('submission_period') + '</th><th>'+ HomeworkDB.get('priority') +'</th><th>'+ HomeworkDB.get('checkbox') +'</th></tr>';
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
        var stocklist = '<h2>火</h2><table class="table table-striped"><thead><tr><th scope="col">時間</th><th scope="col">内容</th><th scope="col">提出期限</th><th scope="col">優先度</th><th scope="col">完了・未完了</th></thead><tbody>';
        for(let i = 0; i < timetable.length;i++){
            const HomeworkDB = await db.collection('Homework').doc(user.uid).collection('Tuesday').doc(timetable[i]).get();
            stocklist += '<tr><th scope = "col">' + (i+1) +'</th>' + '<th>' + HomeworkDB.get('Content') +'</th><th>' + HomeworkDB.get('submission_period') + '</th><th>'+ HomeworkDB.get('priority') +'</th><th>'+ HomeworkDB.get('checkbox') +'</th></tr>';
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
        var stocklist = '<h2>水</h2><table class="table table-striped"><thead><tr><th scope="col">時間</th><th scope="col">内容</th><th scope="col">提出期限</th><th scope="col">優先度</th><th scope="col">完了・未完了</th></thead><tbody>';
        for(let i = 0; i < timetable.length;i++){
            const HomeworkDB = await db.collection('Homework').doc(user.uid).collection('Wednesday').doc(timetable[i]).get();
            stocklist += '<tr><th scope = "col">' + (i+1) +'</th>' + '<th>' + HomeworkDB.get('Content') +'</th><th>' + HomeworkDB.get('submission_period') + '</th><th>'+ HomeworkDB.get('priority') +'</th><th>'+ HomeworkDB.get('checkbox') +'</th></tr>';
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
        var stocklist = '<h2>木</h2><table class="table table-striped"><thead><tr><th scope="col">時間</th><th scope="col">内容</th><th scope="col">提出期限</th><th scope="col">優先度</th><th scope="col">完了・未完了</th></thead><tbody>';
        for(let i = 0; i < timetable.length;i++){
            const HomeworkDB = await db.collection('Homework').doc(user.uid).collection('Thursday').doc(timetable[i]).get();
            stocklist += '<tr><th scope = "col">' + (i+1) +'</th>' + '<th>' + HomeworkDB.get('Content') +'</th><th>' + HomeworkDB.get('submission_period') + '</th><th>'+ HomeworkDB.get('priority') +'</th><th>'+ HomeworkDB.get('checkbox') +'</th></tr>';
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
        var stocklist = '<h2>金</h2><table class="table table-striped"><thead><tr><th scope="col">時間</th><th scope="col">内容</th><th scope="col">提出期限</th><th scope="col">優先度</th><th scope="col">完了・未完了</th></thead><tbody>';
        for(let i = 0; i < timetable.length;i++){
            const HomeworkDB = await db.collection('Homework').doc(user.uid).collection('Friday').doc(timetable[i]).get();
            stocklist += '<tr><th scope = "col">' + (i+1) +'</th>' + '<th>' + HomeworkDB.get('Content') +'</th><th>' + HomeworkDB.get('submission_period') + '</th><th>'+ HomeworkDB.get('priority') +'</th><th>'+ HomeworkDB.get('checkbox') +'</th></tr>';
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
        var stocklist = '<h2>土</h2><table class="table table-striped"><thead><tr><th scope="col">時間</th><th scope="col">内容</th><th scope="col">提出期限</th><th scope="col">優先度</th><th scope="col">完了・未完了</th></thead><tbody>';
        for(let i = 0; i < timetable.length;i++){
            const HomeworkDB = await db.collection('Homework').doc(user.uid).collection('Saturday').doc(timetable[i]).get();
            stocklist += '<tr><th scope = "col">' + (i+1) +'</th>' + '<th>' + HomeworkDB.get('Content') +'</th><th>' + HomeworkDB.get('submission_period') + '</th><th>'+ HomeworkDB.get('priority') +'</th><th>'+ HomeworkDB.get('checkbox') +'</th></tr>';
        }
        stocklist += '</tbody></table>'
        document.getElementById('timetable_Saturday').innerHTML = stocklist;

        } catch (err) {
        console.log(`Error: ${JSON.stringify(err)}`)
        }
    })();
});

function HomeworkUpdate(){
    var week = document.getElementById('week').value;
    var time = document.getElementById('time').value;
    var homework_content = document.getElementById('homework_content').value;
    var submission_period = document.getElementById('submission_period').value;
    var priority = document.getElementById('priority').value;
    var checkbox = "";
    var checkbox_input = document.getElementById('checkbox_input');
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
                    const carrentHomeworkDB = await db.collection('Homework').doc(user.uid).collection(week).doc(time).get();
                    if(homework_content == ""){
                        homework_content = carrentHomeworkDB.get('Content');
                    }
                
                    if(submission_period == ""){
                        submission_period = carrentHomeworkDB.get('submission_period');
                    }
                
                    if(priority == ""){
                        priority = carrentHomeworkDB.get('priority');
                    }

                    if(checkbox_input.checked){
                        checkbox = "完了";
                    }else{
                        checkbox = '未完了';
                    }

                    const updateHomeworkDB = await db.collection('Homework').doc(user.uid).collection(week).doc(time);
                    updateHomeworkDB.update({
                        Content:homework_content,
                        submission_period:submission_period,
                        priority:priority,
                        checkbox:checkbox
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