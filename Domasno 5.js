
function testProst(prost) {

  if (prost === 1) {
    return false;
  }
  else if (prost === 2) {
    return true;
  } else {
    for (var x = 2; x < prost; x++) {
      if (prost % x === 0) {
        return false;
      }
    }
    return true;
  }

}
var arrayOdProstiBroevi = [];
var tot = 0;
function sobiranjeNeProsti(x, y) {
  for (x; x < y; x++) {
    var suma = x;

    if (!testProst(suma)) {
      tot += 0;

    }
    else {
      tot += x;
      console.log('ova e prost broj ' + suma);
      arrayOdProstiBroevi.push(suma);
    }
  }
  console.log('ova e zbir od prostite broevi ' + tot);
  console.log('ova e array od prosti broevi ' + arrayOdProstiBroevi);
}
sobiranjeNeProsti(1, 20);


