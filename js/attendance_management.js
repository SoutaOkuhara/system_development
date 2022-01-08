
const week = ["日", "月", "火", "水", "木", "金", "土"];
const today = new Date();
// 月末だとずれる可能性があるため、1日固定で取得
var showDate = new Date(today.getFullYear(), today.getMonth(), 1);

// 初期表示
window.onload = function () {
    showProcess(today, calendar);
};
// 前の月表示
function prev(){
    showDate.setMonth(showDate.getMonth() - 1);
    showProcess(showDate);
}

// 次の月表示
function next(){
    showDate.setMonth(showDate.getMonth() + 1);
    showProcess(showDate);
}

// カレンダー表示
function showProcess(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    document.querySelector('#header').innerHTML = year + "年 " + (month + 1) + "月";

    var calendar = createProcess(year, month);
    document.querySelector('#calendar').innerHTML = calendar;
}

// カレンダー作成
function createProcess(year, month) {
    // 曜日
    var calendar = "<table><tr class='dayOfWeek'>";
    for (var i = 0; i < week.length; i++) {
        calendar += "<th>" + week[i] + "</th>";
    }
    calendar += "</tr>";

    var count = 0;
    var startDayOfWeek = new Date(year, month, 1).getDay();
    var endDate = new Date(year, month + 1, 0).getDate();
    var lastMonthEndDate = new Date(year, month, 0).getDate();
    var row = Math.ceil((startDayOfWeek + endDate) / week.length);

    // 1行ずつ設定
    for (var i = 0; i < row; i++) {
        calendar += "<tr>";
        // 1colum単位で設定
        for (var j = 0; j < week.length; j++) {
            if (i == 0 && j < startDayOfWeek) {
                // 1行目で1日まで先月の日付を設定
                calendar += "<td class='disabled'>" + (lastMonthEndDate - startDayOfWeek + j + 1) + "</td>";
            } else if (count >= endDate) {
                // 最終行で最終日以降、翌月の日付を設定
                count++;
                calendar += "<td class='disabled'>" + (count - endDate) + "</td>";
            } else {
                // 当月の日付を曜日に照らし合わせて設定
                count++;
                if(year == today.getFullYear()
                  && month == (today.getMonth())
                  && count == today.getDate()){
                    calendar += "<td class='today'><a href = '#attendancedetail'><button onclick = 'attendanceUpdate("+ count + ","+ month +")'>" + count + "</button></a></td>";
                } else {
                    calendar += "<td><a href = '#attendancedetail'><button onclick = 'attendanceUpdate("+ count + ","+ month +")'>" + count + "</button></a></td>";
                }
            }
        }
        calendar += "</tr>";
    }
    return calendar;
}


//日別出席詳細
function attendanceUpdate(count,month){
    firebase.auth().onAuthStateChanged(user => {
        (async () => {
            try {
                document.querySelector('#count').innerHTML = '<p>日別出席詳細:' + count + '日</p>';
                var stocklist = "<table><tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th></tr><tr>";
                console.log(month);
                let Month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
                const attendanceDB = await db.collection('attendance_management').doc(user.uid).collection(Month[month]).doc('Day' + count).get();
                stocklist += '<th>' + attendanceDB.get('firstHour') + '</th>' + '<th>' + attendanceDB.get('secondHour') + '</th>' + '<th>' + attendanceDB.get('thirdHour') + '</th>' + '<th>' + attendanceDB.get('fourthHour') + '</th>' + '<th>' + attendanceDB.get('fifthHour') + '</th>' + '<th>' + attendanceDB.get('sixthHour') + '</th>' + '<th>' + attendanceDB.get('sevenHour') + '</th>' + '<th>' + attendanceDB.get('eightHour') + '</th>';
                stocklist += '</tr></table>';
                var button_stocklist  = stocklist + '<button type="button" class="btn btn-success js-modal-open1">編集する</button>';
                document.querySelector('#attendancedetail').innerHTML = button_stocklist;
                document.querySelector('#attendancedetail_input').innerHTML = stocklist;
                document.querySelector('#attendance_month').textContent = month + 1;
                document.querySelector('#attendance_day').textContent = count;
            } catch (err) {
            console.log(`Error: ${JSON.stringify(err)}`)
            }
        })();
    });
};

//modalの全選択用
$(function() {
    // 「全選択」する
    $('#all').on('click', function() {
      $("input[name='attend_input']").prop('checked', this.checked);
    });

    // 「全選択」以外のチェックボックスがクリックされたら、
    $("input[name='attend_input']").on('click', function() {
      if ($('#boxes :checked').length == $('#boxes :input').length) {
        // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
        $('#all').prop('checked', true);
      } else {
        // 1つでもチェックが入っていたら、「全選択」 = checked
        $('#all').prop('checked', false);
      }
    });
  });

  //DBへの更新
function attendance_manage_Update(){
    firebase.auth().onAuthStateChanged(user => {
        (async () => {
            try {
                var first = document.getElementById('attend_first').checked;
                var firstContent = '欠席';
                if(first == true){
                    firstContent = '登校';
                }else{};
                var second = document.getElementById('attend_second').checked;
                var secondContent = '欠席';
                if(second == true){
                    secondContent = '登校';
                }else{};
                var third = document.getElementById('attend_third').checked;
                var thirdContent = '欠席';
                if(third == true){
                    thirdContent = '登校';
                }else{};
                var fourth = document.getElementById('attend_fourth').checked;
                var fourthContent = '欠席';
                if(fourth == true){
                    fourthContent = '登校';
                }else{};
                var fifth = document.getElementById('attend_fifth').checked;
                var fifthContent = '欠席';
                if(fifth == true){
                    fifthContent = '登校';
                }else{};
                var sixth = document.getElementById('attend_sixth').checked;
                var sixthContent = '欠席';
                if(sixth == true){
                    sixthContent = '登校';
                }else{};
                var seventh = document.getElementById('attend_seventh').checked;
                var seventhContent = '欠席';
                if(seventh == true){
                    seventhContent = '登校';
                }else{};
                var eighth = document.getElementById('attend_eighth').checked;
                var eighthContent = '欠席';
                if(eighth == true){
                    eighthContent = '登校';
                }else{};

                var month = document.getElementById('attendance_month').textContent;
                var day = document.getElementById('attendance_day').textContent;
                let Month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
                const attendanceRef = await db.collection('attendance_management').doc(user.uid).collection(Month[month-1]).doc('Day' + day);
                attendanceRef.update({
                    firstHour:firstContent,
                    secondHour:secondContent,
                    thirdHour:thirdContent,
                    fourthHour:fourthContent,
                    fifthHour:fifthContent,
                    sixthHour:sixthContent,
                    sevenHour:seventhContent,
                    eightHour:eighthContent
                });

                var collectAlert = document.getElementById('collectAlert');
                collectAlert.innerHTML = '<div class="alert alert-success" role="alert">編集完了!リロードします。</div>';
                setTimeout("location.reload()",2000);
            } catch (err) {
            console.log(`Error: ${JSON.stringify(err)}`)
            }
        })();
    });
}
