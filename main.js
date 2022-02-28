// let tlacitko = document.getElementById('#tlacitkoid');
let zprava = document.getElementById('zprava');
let kostka = document.getElementById('kostka');


function hodKostkou(hozeneCislo){
    hozeneCislo = Math.ceil(Math.random() * 6);
    console.log(hozeneCislo);

    if (hozeneCislo !== 6) {
       zprava.innerHTML = "Hodila jsi " + hozeneCislo + ". Zkus to znovu.";
       kostka.src = 'obrazky/'+hozeneCislo+'.png';
    } else {
        zprava.innerHTML = "Hodila jsi " + hozeneCislo + ". Vyhrala jsi!";
        kostka.src = 'obrazky/6.png';
    }
}


/*
if (hozeneCislo === 1) {
        console.log("Hodil/a jsi jednicku. Zkus to znovu.");
    } else if (hozeneCislo === 2) {
        console.log("Hodil/a jsi dvojku. Zkus to znovu.");
    } else if (hozeneCislo === 3) {
        console.log("Hodil/a jsi trojku. Zkus to znovu.");
    } else if (hozeneCislo === 4) {
        console.log("Hodil/a jsi ctyrku. Zkus to znovu.");
    } else if (hozeneCislo === 5)
         console.log("Hodil/a jsi petku. Zkus to znovu.");
    else {
        console.log("Hodil/a jsi sestku.  Vyhral/a jsi!");
    } 
if (hozeneCislo !== 6) {
        console.log("Hodil/a jsi " + hozeneCislo + ". Zkus to znovu.");
    } else {
        console.log("Hodil/a jsi sestku.  Vyhral/a jsi!");
    }
    
*/
