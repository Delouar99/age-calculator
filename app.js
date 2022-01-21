
const che_ck = document.getElementById('che_ck');
const month = document.getElementById('month');
const date = document.getElementById('day');
const year = document.getElementById('year');
const result = document.getElementById('result');


che_ck.addEventListener('click', function (e) {
    e.preventDefault();
    result.innerHTML = agecal(month.value , date.value , year.value)
});



function agecal(month, day, year) {
    let dates = new  Date();
    let days = dates.getDate();
    let months =  dates.getMonth();
    let years = dates.getFullYear();

    let age = years - year;



   

   return`Your are ${age} years old  ${months} month  ${days}days `;


}



