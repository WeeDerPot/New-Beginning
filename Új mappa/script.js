'use strict'
const students = [
    {name : 'Balázs', class: '14SZF'},
    {name : 'Dávid', class: '14SZF'},
    {name : 'László', class: '14SZF'},
    {name : 'Chris', class: '14SZF'},
    {name : 'Levi', class: '14SZF'},
    {name : 'Krisztián', class: '14SZF'},
    {name : 'Ádám', class: '14SZF'},
    {name : 'Kinga', class: '14SZF'}
]

function oszatalyListazas() {
    let szoveg = '<table>';
    szoveg += '<tr><th>Osztály</th><th>Név</th></tr>';

    students.forEach((student) => {
        szoveg += `<tr><td>${student.class}</td><td>${student.name}</td></tr>`
    });
    szoveg += '</table>';

    document.getElementById('tablazat').innerHTML = szoveg;
}


oszatalyListazas()

function feltolt() {
    let nev = document.getElementById('nev').value;
    let osztaly = document.getElementById('osztaly').value;
    console.log(nev + ' ' + osztaly)
    students.push({'class' : `${osztaly}`, 'name' : `${nev}`});
    oszatalyListazas()
}
function frissit() {

}