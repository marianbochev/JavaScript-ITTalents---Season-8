//pravougulen triugulnik s prazno vutre
var h = 10;
for (row = 1; row <= h; row++) {
    for (col = 1; col <= row; col++) {
        if (!(col == 1 || col == row) && row != h) {
            process.stdout.write(' ');
        } else {
            process.stdout.write('*');
        }
    }
    console.log('');
}