let num = 29;

if (num == 1 || num == 2) {
  console.log(`El numero ${num} es primo`);
}

if (num == 1 || num == 2) {
    resp: 'El numero ' + num + ' es primo'
} else {
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      console.log(`El numero ${num} no es primo`);
    }else {
    console.log(`El numero ${num} es primo`);
    break;
  }
  }
}
