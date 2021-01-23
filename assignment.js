// convert kilometer to meter function start here
function kilometerToMeter(kilometer) {
    var meter = 1000;
    meter = kilometer * meter;
    return meter;
}

var result = kilometerToMeter(5);
console.log(result);
// convert kilometer to meter function end here



// Budget Calculator function start here
function budgetCalculator(watch, mobileCharger, headphone) {
    var watchPrice = 250;
    var mobileChargerPrice = 100;
    var headphonePrice = 250;
    var total = watchPrice*watch + mobileChargerPrice*mobileCharger + headphonePrice*headphone;
    return total;
}

var result = budgetCalculator(10, 20, 10);
console.log(result);
// Budget Calculator function end here



// Hotel Cost function start here
function hotelCost(day) {
    var netTotal = 0;
    if (day <= 10 ) {
        var total = day * 100;
        netTotal = total;
    } 
    else if (day > 10 && day <= 20) {  
        afterDays = day - 10;
        if(afterDays) {
            var total2 = 10 * 100;
            netTotal = total2;
        }
        var total = afterDays * 80;
        netTotal = total + total2;
    }
    else {
        afterDays = day - 20;
        if(afterDays)
        {
            var total2 = 10 * 100;
            var total3 = 10 * 80;
        }
        var total = afterDays * 50;
        netTotal = total + total2 + total3;
    }
    return netTotal;
}

var result = hotelCost(20);
console.log(result);
// Hotel Cost function end here



// Mega Friend function start here
function megaFriend(friendName) {
    var maxLenName = 0;

    for (i=0; i<friendName.length; i++) {

        if (friendName[i].length>maxLenName) {
            maxLenName = friendName[i].length;
        }

    }
    return maxLenName;
}

var result = megaFriend(["Rahman", "Arafat", "Minhaz", "Alamin", "Mohammad"]);
console.log(result);
// Mega Friend function end here
