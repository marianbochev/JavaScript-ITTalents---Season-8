var goshoHealth = 100;
var peshoHealth = 100;
var infected = false;
var bonusHealthForPesho = 20;
var bonusHealthForGosho = 20;
var rounds = 0;
var peshoWinRound = 0;
var goshoWinRound = 0;
var winners = new Array(5);
while ((goshoHealth > 0) && (peshoHealth > 0) && (rounds <= 5)) {
    //proverqvame dali pesho shte poluchi kruv (tova shte stane ako random chisloto i negovoto random chislo imat bit 1 na poziciq 3).
    if (checkPotionForPesho && checkABit) {
        peshoHealth = (peshoHealth <= 80) ? peshoHealth += bonusHealthForPesho : 100;
        console.log('Pesho poluchi ' + bonusHealthForPesho + 'HP');
    }

    //proverqvame dali gosho shte poluchi kruv (tova shte stane ako random chisloto i negovoto random chislo imat bit 1 na poziciq 4).
    if (checkPotionForGosho && checkABit) {
        goshoHealth = (goshoHealth <= 80) ? goshoHealth += 20 : 100;
        console.log('Gosho poluchi ' + bonusHealthForGosho + 'HP');
    }
    //random generator from 1 to 10 damage!
    var peshoDamage = Math.round((Math.random() * 9) + 1);
    // console.log('randomPESHO: ' + peshoDamage);
    var goshoDamage = Math.round((Math.random() * 9) + 1);
    // console.log('randomGOSHO: ' + goshoDamage);

    //33% chance for rakiq!
    var peshoFoundRakiq = Math.random() < 0.333;
    var goshoFoundRakiq = Math.random() < 0.333;

    //10% chance for div gligan!
    var wildBoarPesho = Math.random() < 0.01;
    var wildBoarGosho = Math.random() < 0.01;

    //random generator for number from 1 to 100!
    var numberToCheck = Math.round(Math.random() * 99) + 1;

    //random generator for numbers that applies 20HP for Pesho and Gosho!
    var peshoPotion = Math.round(Math.random() * 99) + 1;
    var goshoPotion = Math.round(Math.random() * 99) + 1;

    //proverqvame random chisloto na dvamata dali ima 1 za 3 ili 4 bit.
    var checkPotionForPesho = (peshoPotion & (1 << 2)) != 0;
    var checkPotionForGosho = (goshoPotion & (1 << 3)) != 0;

    //proverqvame dali random chisloto koeto generirame ima 1 na bit nomer 3
    var checkABit = (numberToCheck & (1 << 2)) != 0;

    //ako pesho pobedi slujebno zaradi gligana
    if (wildBoarPesho) {
        console.log('Gosho go blusna div gligan.Toi umrq');
        console.log('Pesho pecheli igrata slujebno!');
        winners[rounds] = "Winner of round: " + (rounds + 1) + " is Pesho!";
        peshoWinRound++;
        goshoHealth = 100;
        peshoHealth = 100;
        rounds++;
        continue;
    }

    //ako gosho pobedi slujebno zaradi gligana
    if (wildBoarGosho) {
        console.log('Pesho go blusna div gligan.Toi umrq.');
        console.log('Gosho pecheli igrata slujebno!');
        winners[rounds] = "Winner of round: " + (rounds + 1) + " is Gosho!";
        goshoWinRound++;
        goshoHealth = 100;
        peshoHealth = 100;
        rounds++;
        continue;
    }


    //20% chance for drebna sharka!
    if (infected == false) {
        var drebnaSharka = Math.random() < 0.2;
        if (drebnaSharka) {
            infected = true;
            console.log('*******************************************************************************');
            //ako se zarazqt sus drebna sharka kravta im spada!
            console.log('* Dvamata igrachi se zaraziha sus drebna sharka.Kruvta im spadna na polovina  *');
            console.log('* Na Gosho ot: ' + goshoHealth + ' na,                                                        *');
            goshoHealth = Math.round(goshoHealth / 2);
            console.log('* ' + goshoHealth + '                                                                          *');
            console.log('* Na Pesho ot: ' + peshoHealth + ' na,                                                        *');
            peshoHealth = Math.round(peshoHealth / 2);
            console.log('* ' + peshoHealth + '                                                                          *');
            console.log('*******************************************************************************');
        }
    }

    //pesho udrq gosho sus sila zavisima ot rakiqta i bez sharka
    if (peshoFoundRakiq && infected == false) {
        goshoHealth -= peshoDamage = peshoDamage * 2;
        console.log('Pesho nameri rakiqta i udari sus dvoina sila: ' + peshoDamage + ' Gosho');
    } else {
        if (peshoFoundRakiq == false && infected == false) {
            goshoHealth -= peshoDamage;
            console.log('Pesho udari Gosho sus sila: ' + peshoDamage);
        }
    }

    //pesho udrq gosho sus sila zavisima ot rakiqta i s sharkata
    if (infected) {
        goshoHealth -= Math.ceil(peshoDamage = peshoDamage / 2)
        console.log('Pesho udrq sus namalena sila ot sharkata: ' + Math.ceil(peshoDamage));
    }

    //ako na Gosho mu padne kravta pod 0
    if (goshoHealth <= 0) {
        console.log('Na Gosho mu ostana: 0 kruv.');
        console.log('Na Pesho mu ostana: ' + peshoHealth + ' kruv.');
        console.log(' ##### Pesho pobedi Gosho #####');
        winners[rounds] = "Winner of round: " + (rounds + 1) + " is Pesho!";
        peshoWinRound++;
        goshoHealth = 100;
        peshoHealth = 100;
        rounds++;
        continue;
    }
    console.log('Na Gosho mu ostana: ' + goshoHealth + " kruv.");
    console.log('-----');

    //gosho udrq pesho sus sila zavisima ot rakiqta i bez sharka
    if (goshoFoundRakiq && infected == false) {
        peshoHealth -= goshoDamage = goshoDamage * 2;
        console.log('Gosho nameri rakiqta i udari sus dvoina sila: ' + goshoDamage + ' Pesho');
    } else {
        if (goshoFoundRakiq == false && infected == false) {
            peshoHealth -= goshoDamage;
            console.log('Gosho udari Pesho sus sila: ' + goshoDamage);
        }
    }

    //gosho udrq pesho sus sila zavisima ot rakiqta i s sharka
    if (infected) {
        peshoHealth -= Math.ceil(goshoDamage = goshoDamage / 2);
        console.log('Gosho udrq sus namalena sila ot sharkata ' + Math.ceil(goshoDamage));
    }

    //ako na Pesho mu padne kravta pod 0
    if (peshoHealth <= 0) {
        console.log('Na Pesho mu ostana 0 krav.');
        console.log('Na Gosho mu ostana: ' + goshoHealth + ' kruv.');
        console.log(' ##### Gosho pobedi Pesho ##### ');
        winners[rounds] = "Winner of round: " + (rounds + 1) + " is Gosho!";
        goshoWinRound++;
        goshoHealth = 100;
        peshoHealth = 100;
        rounds++;
        continue;
    }
    console.log('Na Pesho mu ostana: ' + peshoHealth + " kruv.");
    console.log('-----');
}
console.log('-----');
console.log(winners);
console.log('-----');
var winnerOfTheGame = (peshoWinRound > goshoWinRound) ? console.log(' _o_o_o_o_o_[Pesho pecheli igrata]_o_o_o_o_o_') : console.log('_o_o_o_o_o_[Gosho pecheli igrata]_o_o_o_o_o_');
