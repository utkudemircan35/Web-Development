const UIController = (function() {

    const Selectors = {
        homework: "#homeworkInput",
        code: "#code",
        bookCheck: "#bookCheck",
        sportCheck: "#sportCheck",
        dailyScore: "#dailyScore",
        itemList: "#item-list"
    }

    var homework = document.querySelector(Selectors.homework).value;
    var code = document.querySelector(Selectors.code).value;
    var bookCheck = $(Selectors.bookCheck).is(":checked");
    var sportCheck = $(Selectors.sportCheck).is(":checked");
    var dailyScore = $(Selectors.dailyScore).val();
    var d = new Date();
    var n = d.getDay();
    return {

        getScore: function() {
            html = "";

            var bookmsg;
            var sportmsg;
            if (bookCheck == true) {
                bookmsg = "Okundu";
            } else {
                bookmsg = "Okunmadı";
            }

            if (sportCheck == true) {
                sportmsg = "Yapıldı";
            } else {
                sportmsg = "Yapılmadı";
            }


            var today = "";
            if (n == 1) {
                today = "Pazartesi";
            } else if (n == 2) {
                today = "Salı";
            } else if (n == 3) {
                today = "Çarşamba";
            } else if (n == 4) {
                today = "Perşembe";
            } else if (n == 5) {
                today = "Cuma";
            } else if (n == 6) {
                today = "Cumartesi";
            } else if (n == 7) {
                today = "Pazar";
            }

            html = `<tr>
            <th scope="row">${today}</th>
                <td>${dailyScore}</td>
                <td>${homework}</td>
                <td>${code}</td>
                <td>${bookmsg}</td>
                <td>${sportmsg}</td>
            </tr>`;

            document.querySelector(Selectors.itemList).innerHTML += html;
        },
        clearInputs: function() {
            document.querySelector(Selectors.homework).value = "";
            document.querySelector(Selectors.code).value = "";
        }
    }
})


const ScoreController = (function() {

    const Score = function(homework, code, bookCheck, sportCheck, dailyScore) {
        this.homework = homework;
        this.code = code;
        this.bookCheck = bookCheck;
        this.sportCheck = sportCheck;
        this.dailyScore = dailyScore;
    }


})()

const ui = new UIController();


document.querySelector(".submit").addEventListener("click", function() {
    ui.getScore();
    ui.clearInputs();

    get

});