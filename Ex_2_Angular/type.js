var num = 50;
function primo(num) {
    var i;
    for (i = 2; i <= num; i++) {
        var tudo = 0;
        for (var z = 1; z <= i; z++) {
            if (i % z == 0) {
                tudo++;
            }
        }
        if (tudo == 2) {
            console.log(i);
        }
    }
}
primo(num);
