'use strict';


const flight = 'LH230';
const victoria = {
    name : 'Victoria Munteanu',
    passport: '23434546'
}

const checkIn = function(flightNumber, passenger){
flightNumber = 'BE345';
passenger.name = 'Ms' + passenger.name;

if(passenger.passport === 23434546 ){
    alert('Check in!')
}else{
    alert('Wrong passport!')
}
}

checkIn(flight, victoria);
console.log(flight);
console.log(victoria);