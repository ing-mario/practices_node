let a = [];
let res = [];
a[0] = 0;
a[1] = 1;

for (let x = 2; x < 30; x++) {
    let res = a[x-2] + a[x-1];
    a[x] = res;
}
    console.log(a);
