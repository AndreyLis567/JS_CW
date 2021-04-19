 function noSpace(x){
    const a = [];
    let i, j;

    for ( j = 0; j < x.length; j++) {
        for ( i = 0; i < a.length; i++) {
            if (a[i][0] == x[j]) {
                a[i][1]++;
                break;
            }
        }
        if ( i == a.length) {
            a[i] = [x[j], 1];
        }
    }
    return a[i][0];
}

console.log(noSpace('arftgy'))
