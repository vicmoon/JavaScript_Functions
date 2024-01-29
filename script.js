


// const flight = 'LH230';
// const victoria = {
//     name : 'Victoria Munteanu',
//     passport: '23434546'
// }

// const checkIn = function(flightNumber, passenger){
// flightNumber = 'BE345';
// passenger.name = 'Ms' + passenger.name;

// if(passenger.passport == 23434546 ){
//     alert('Check in!')
// }else{
//     alert('Wrong passport!')
// }
// }

// checkIn(flight, victoria);
// console.log(flight);
// console.log(victoria);

// //passing by value 
// //passing by reference - JS does not have this 

// Higher order functions  

const oneWord = function(str){
    return str.replace(/ /g, ' ').toLowerCase();
}

const upperFirstWord = function(str){

const [first, ...others] = str.split(' ');  // rest pattern
return [first.toUpperCase(), ...others].join(' '); //spread operator 
}


//higher order function 

const transformer = function(str, fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformer string: ${fn(str)}`);
    console.log(`Transformed by :${fn.name}`); // functions have properties , in this case the name  
}

transformer('JavaScript is the best', upperFirstWord); // only passing the value of the function, the transformed functiion will be calling it
transformer('JavaScript is the best!', oneWord); 




const drinkWater = function(string){
  const [first, ...others] =  string.split(' ');
  return[first.toUpperCase(), ...others].join(' '); 

}

const drinkTea  = function(string){
    const [cup, ...others]= string.split(' ');
    return[cup.toLowerCase(), ...others].join('  '); 
}

const mixer = function(str, fn){
console.log(`Original string: ${str}`);
console.log(`Transformed string: ${fn(str)}`);
console.log(`Transfomred by: ${fn.name}`);

 
}

mixer(`Drinking is the best`, drinkWater); 
mixer('Drinking is so tasty', drinkTea);


//functions returning functions 

// const greet = function(greeting){
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     };
// };

// const greeter = greet('Hey');
// greeter('Roms');
// greeter('Vics');

// greet ('Hello there')('Romixon')


const greet = greeting => name =>  {
        console.log(`${greeting} ${name}`);
    };

