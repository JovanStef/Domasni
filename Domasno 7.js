function Character(name, hitPoints, armor, damageMin, damageMax) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.armor = armor;
    this.damageMin = damageMin;
    this.damageMax = damageMax;
    this.randomDamage = function () {
        this.damage = Math.floor(Math.random() * (this.damageMax - this.damageMin + 1) + this.damageMin);
        return this.damage;
    }
}

var orc = new Character('Orc', 720, 5, 23, 35);
var human = new Character('Human', 550, 9, 18, 27);

console.log(orc);
console.log(orc.randomDamage());
console.log(human);
console.log(human.randomDamage());

var humanHitPoints = human.hitPoints;
var humanArmor = human.armor;
var humanDamage = human.damage;
var humanDamageMin = human.damageMin;
var humanDamageMax = human.damageMax;

var orcHitPoints = orc.hitPoints;
var orcArmor = orc.armor;
var orcDamage = orc.damage;
var orcDamageMin = orc.damageMin;
var orcDamageMax = orc.damageMax;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function battle() {
    for (var x = 0; orcHitPoints > 0 && humanHitPoints > 0; x++) {
        var orcDamage = getRandomNumber(orcDamageMin, orcDamageMax);
        var humanDamage = getRandomNumber(humanDamageMin, humanDamageMax);
        orcHitPoints -= (humanDamage - orcArmor);
        humanHitPoints -= (orcDamage - humanArmor);
    }
    if (orcHitPoints < 0) {
        console.log('Human wins');
    }
    else {
        console.log('Orc wins');
    }
}

battle();