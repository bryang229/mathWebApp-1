function ask() {
    var a = Math.floor(Math.random() * 10) + 1;
    var b = Math.floor(Math.random() * 10) + 1;
    var op = ["*", "+", "-"][Math.floor(Math.random()*3)];
    return prompt("How much is " + a + " " + op + " " + b + "?") == eval( a + op + b);
}

var questions = [ask(), ask(), ask(), ask(), ask()],
    total = questions.length,
    correct = questions.filter(Boolean).length;

alert( "You got "+correct+"/"+total+" correctly");