

const n = 10;
for (let i = n; i > 0; i--) {
    let str = '';
    if (i == n) {
        for (let j = 1; j <= i; j++) {
            str += '*';
        };
        console.log(str);
    } else {
        for (let j = 1; j <= i; j++) {
            if (j == 1 || j == i) {
                str += '*';
            } else {
                str += ' ';
            };
        };
        console.log(str);
    };
};