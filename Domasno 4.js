var prr = prompt('Kolku Pari');

function kolkiPari(prr) {
    if (prr >= 1000) {
        console.log('Super');
    }
    else if (prr < 1000 && prr > 500) {
        console.log('Ok');
    }
    else if (isNaN) {
        console.log('vnesi broj');
    }
    else {
        console.log('nemas pari');
    }
}
console.log(kolkiPari(prr));

var br1 = parseInt(prompt('Prv Broj'));
var br2 = parseInt(prompt('Vtor Broj'));
var br3 = parseInt(prompt('Tret Broj'));

function pogolemo(br1, br2, br3) {
    if (!isNaN(br1) && !isNaN(br2) && !isNaN(br3)) {
        if (br1 > br2 && br1 > br3) {
            console.log(br1 + ' e najgolem');
        }
        else if (br2 > br1 && br2 > br3) {
            console.log(br2 + ' e najgolem');
        }
        else if (br3 > br1 && br3 > br2) {
            console.log(br3 + ' e najgolem');
        }
    }
    else {
        console.log('ne e broj');
    }
}


pogolemo(br1, br2, br3);


var bhp = parseInt(prompt('Vnesi bhp'));


var reg = 'Registracijata cini ';

function regKosta(bhp) {
    if (!isNaN(bhp)) {
        if (bhp <= 85) {
            return '3000 den'
        }
        else if (bhp > 85 && bhp <= 150) {
            return '5000 den'
        }
        else {
            return '15000 den'
        }
    }
    else {
        return 'Vnesi bhp'
    }
}
var total = regKosta(bhp);
console.log(reg + total);


// dve string i boolean
var zbor = prompt('vnesi prv zbor');
var zborDva = prompt('vnesi vtor zbor');
var broj = parseInt(prompt('vnesi groj'));

function zborovi(zbor, zborDva, broj) {
    if (broj % 2 == 0) {
        return zbor + ' ' + zborDva;
    }
    else {
        return zborDva + ' ' + zbor;
    }
}

var result = zborovi(zbor, zborDva, broj);
console.log(result);


var plata = parseInt(prompt('Vnesi plata'));
var profesija = prompt('Vnesi profesija');
var per = 'Personalecot e ';

function personalec(plata, profesija) {
    if (!isNaN(plata)) {
        if (profesija !== 'craft') {
            var gdanok = 0.18;
            var mdanok = 0.11;
            if (plata <= 1000) {
                var danok = plata * mdanok;
                return per + danok;
            }
            else {
                var danok = (1000 * mdanok) + ((plata - 1000) * gdanok);
                return per + danok;
            }
        }
        else if (profesija === 'craft') {
            var gdanok = 0.10;
            var mdanok = 0.05;

            if (plata <= 1000) {
                var danok = plata * 0.5;
                return per + danok;
            }
            else {
                var danok = (1000 * mdanok) + ((plata - 1000) * gdanok);
                return per + danok;
            }

        }
    }
    else {
        return 'Vnesi plata'
    }

}

var total = personalec(plata, profesija);
console.log(total);





