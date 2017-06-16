//triugulnik koito e ravnobedren
var h = 4;
var space = ''
for (row = 1; row <= h; row++) {
    var interval = h - row;
    while (interval != 0) {
        process.stdout.write(' ');
        interval--;
    }
    for (col = 1; col <= row + (row - 1); col++) {
        process.stdout.write('*');
    }
    process.stdout.write('\n');
}
