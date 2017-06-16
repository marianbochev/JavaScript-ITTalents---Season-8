//triugulnik koito e ravnobedren i e prazen otvatre
var h = 10;
var space = ''
for (row = 1; row <= h; row++) {
    var interval = h - row;
    while (interval != 0) {
        process.stdout.write(' ');
        interval--;
    }
    for (col = 1; col <= row + (row - 1); col++) {
        if (!(col == 1 || col == row + (row - 1)) && row != h) {
            process.stdout.write(' ');
        } else {
            process.stdout.write('*');
        }
    }
    process.stdout.write('\n');
}
