let righe = 10;
let colonne = 10;
let arrayNumEstratti = [];

function DisegnaTabella() {
    let div1 = document.getElementById('div1');
    let tabella = document.createElement("table");

    var i = 1;
    for (var r = 0; r < righe; r++) {
        let row = document.createElement("tr");
        for (var c = 0; c < colonne; c++, i++) {
            let cell = document.createElement("td");
            let cellText = document.createTextNode(i);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tabella.appendChild(row);
    }

    div1.appendChild(tabella);
}

function estrazione() {
    let numUscito;
    let flag;

    do {
        numUscito = Math.floor(Math.random() * 100) + 1;
        flag = arrayNumEstratti.includes(numUscito);
    } while (flag);

    console.log(numUscito);
    arrayNumEstratti.push(numUscito);

    // Trova la cella nella tabella con il numero estratto e colorala
    let cella = document.getElementsByTagName('td')[numUscito - 1];
    cella.style.backgroundColor = 'lightgreen';
}

DisegnaTabella();
