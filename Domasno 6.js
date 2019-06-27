// 17 litri na 100km
// function car(km){
//     var l = 0;
//     for (var x=0; x<km; x++){
//         l +=0.7;
//         console.log('Na ' + x + ' ot kilometar potroseno e ' + l + ' litri');
//     }
// }
// car(43);


// Flirting

function flirt(numberOfHits, boyDeducts) {
    var girlHits = numberOfHits;
    for (var x = 0; x < numberOfHits; x++) {
        girlHits++;
        if (x % 10 === 0) {
            girlHits -= boyDeducts;
        }
        else if (x % 5 === 0) {
            girlHits += 10;
        }
        else if (x % 3 === 0) {
            girlHits += 5;
        }
    }
    return girlHits;
}

var result = flirt(5, 40);
console.log(result);

if (result > 0) {
    console.log('sucsess');
}
else {
    console.log('fail');
}


// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// var orcDamage = getRandomNumber(23, 35);
// var orcArmor = 5;
// // var orcHitPoints = 720;

// var humanDamage = getRandomNumber(18, 27);
// var humanArmor = 9;
// // var humanHitPoints = 550;

// function battle(orcHitPoints, humanHitPoints) {
//     var orcArmor = 5;
//     var humanArmor = 9;
//     var y = 0;
//     for (var x = 0; y <= orcHitPoints && y <= humanHitPoints; x += 10) {
//         var orcDamage = getRandomNumber(23, 35);
//         var humanDamage = getRandomNumber(18, 27);
//         humanHitPoints = humanHitPoints - (orcDamage - humanArmor);
//         orcHitPoints = orcHitPoints - (humanDamage - orcArmor);
//    }
//     if (humanHitPoints <= 0) {
//         console.log('Orc wins');
//     }
//     else {
//         console.log('Human wins');
//     }

// }


// battle(720, 550);
