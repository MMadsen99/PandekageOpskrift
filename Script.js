
var antalPersoner = document.getElementById("antalPersoner")


antalPersoner.addEventListener('change',function beregnIngredienser() {
    var aebler = (1 * antalPersoner.value);
    console.log("Antal æbler " + aebler);
    document.getElementById("AntalEgg").setAttribute("value" , aebler)

    var mel = (37.5 * antalPersoner.value);
    console.log("mængde mel " + mel);
    document.getElementById("GramMel").setAttribute("value" , mel)

    var smor = (6.25 * antalPersoner.value);
    console.log("mængde mel " + smor);
    document.getElementById("Gramsmor").setAttribute("value" , smor)

    var maelk = (0.75 * antalPersoner.value);
    console.log("mængde mel " + maelk);
    document.getElementById("DlMaelk").setAttribute("value" , maelk)

    var salt = (0.25 * antalPersoner.value);
    console.log("mængde mel " + salt);
    document.getElementById("Salt").setAttribute("value" , salt)

    var sukker = (0.25 * antalPersoner.value);
    console.log("mængde mel " + sukker);
    document.getElementById("Sukker").setAttribute("value" , sukker)

    var vSukker = (0.25 * antalPersoner.value);
    console.log("mængde mel " + vSukker);
    document.getElementById("Vsukker").setAttribute("value" , vSukker)

    });