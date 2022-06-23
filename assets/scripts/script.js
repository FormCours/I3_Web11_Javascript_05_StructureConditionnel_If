// La Structure conditionnel « If »
// ********************************
// Elle permet d'executé du code en fonction d'une condition

const v1 = 10;
const v2 = 22;
const v3 = 42;

// if
if(v1 * 3 > v2) {
    // Le code se réalise uniquement si le test est 'Vrai'
}

// if else
if(v3 > 10) {
    // Le code se réalise uniquement si le test est 'Vrai'
}
else {
    // Le code se réalise si la condition etait 'Faux'
}

// if else if ... else
if(v1 > 30) {
    // Le code se réalise uniquement si (v1 > 30) est 'Vrai'
}
else if(v2 > 30) {
    // Le code se réalise uniquement si (v2 > 30) est 'Vrai'
    // et que les tests précedent sont 'Faux'
}
else if(v3 > 30) {
    // Le code se réalise uniquement si (v3 > 30) est 'Vrai'
    // et que les tests précedent sont 'Faux'
}
else {
    // Le code se réalise uniquement si les tests précedent sont 'Faux'
}


// Demo d'utilisation avec le DOM
// ******************************
const inputDemo = document.getElementById('input-demo');
const btnDemo = document.getElementById('btn-demo');
const displayResult = document.getElementById('display-result');

btnDemo.addEventListener('click', () => {
    const nb = parseFloat(inputDemo.value);

    if(isNaN(nb)) {
        displayResult.innerText = 'Le nombre n\'est pas valide !';
    }
    else if(nb > 42) {
        displayResult.innerText = `Le nombre ${nb} est bien superieur à 42.`; 
    }
    else {
        displayResult.innerText = `Le nombre ${nb} est inferieur à 42 O_O`; 
    }
})