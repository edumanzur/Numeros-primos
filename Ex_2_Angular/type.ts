let num: number = 50

function primo(num: number): void {
    let i: number;
    for(i = 2; i <= num; i++) {
        let tudo: number = 0
        for (let z: number = 1; z <= i; z++) {
            if (i % z == 0) {
                tudo++
            }
        }
        if (tudo == 2) {
            console.log(i)
        }
    }
}

primo(num)