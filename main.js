function username()
{
    pn1 = document.getElementById("player1").value;
    pn2 = document.getElementById("player2").value;

    localStorage.setItem("pn1", pn1);
    localStorage.setItem("pn2", pn2);

    window.location = "Math.html";
}

player1_name = localStorage.getItem("player_no1");
player2_name = localStorage.getItem("player_no2");

player_score1 = 0;
player_score2 = 0;

function send()
{
    number1 = document.getElementById("word1").value;
    number2 = document.getElementById("word2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1+ "X"+ number2 + "<h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'> ";
    check_button = "<br><br><button class='bnt bnt-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}