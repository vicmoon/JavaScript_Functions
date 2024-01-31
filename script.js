

// const flight = 'LH230';
// const victoria = {
//     name : 'Victoria Munteanu',
//     passport: '23434546'
// }

// const checkIn = function(flightNumber, passenger){
// flightNumber = 'BE345';
// // passenger.name = 'Ms' + passenger.name;

// // if(passenger.passport == 23434546 ){
// //     alert('Check in!')
// // }else{
// //     alert('Wrong passport!')
// // }
// // }

// // checkIn(flight, victoria);
// // console.log(flight);
// // console.log(victoria);

// // //passing by value 
// // //passing by reference - JS does not have this 

// // Higher order functions  

// const oneWord = function(str){
//     return str.replace(/ /g, ' ').toLowerCase();
// }

// const upperFirstWord = function(str){

// const [first, ...others] = str.split(' ');  // rest pattern
// return [first.toUpperCase(), ...others].join(' '); //spread operator 
// }


// //higher order function 

// const transformer = function(str, fn){
//     console.log(`Original string: ${str}`);
//     console.log(`Transformer string: ${fn(str)}`);
//     console.log(`Transformed by :${fn.name}`); // functions have properties , in this case the name  
// }

// transformer('JavaScript is the best', upperFirstWord); // only passing the value of the function, the transformed functiion will be calling it
// transformer('JavaScript is the best!', oneWord); 




// const drinkWater = function(string){
//   const [first, ...others] =  string.split(' ');
//   return[first.toUpperCase(), ...others].join(' '); 

// }

// const drinkTea  = function(string){
//     const [cup, ...others]= string.split(' ');
//     return[cup.toLowerCase(), ...others].join('  '); 
// }

// const mixer = function(str, fn){
// console.log(`Original string: ${str}`);
// console.log(`Transformed string: ${fn(str)}`);
// console.log(`Transfomred by: ${fn.name}`);

 
// }

// mixer(`Drinking is the best`, drinkWater); 
// mixer('Drinking is so tasty', drinkTea);


// //functions returning functions 

// // const greet = function(greeting){
// //     return function (name) {
// //         console.log(`${greeting} ${name}`);
// //     };
// // };

// // const greeter = greet('Hey');
// // greeter('Roms');
// // greeter('Vics');

// // greet ('Hello there')('Romixon')


// const greet = greeting => name =>  {
//         console.log(`${greeting} ${name}`);
//     };



// 

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),

    registerNewAnswer: function () {

        //get the answer 
        const answer =  Number(prompt(`${this.question}\n ${this.options.join('\n')}\n (Write option number)`));
        console.log(this.answers);
        
        // register the answer 

        if(typeof answer === 'number' && answer < this.answers.length) {
            this.answers[answer]++;
            console.log(this.answers);  
        }
        // if(typeof answer === 'number') {
        //     alert('One digit numbers accepted only! Try again');
        // }

        this.displayResults();
        this.displayResults('string');

        
    },

    displayResults: function(type = 'array'){
        if(type === 'array' ){
           console.log(this.answers);
        }
        else if( type === 'string'){
            alert(`Poll results are ${this.answers.join(',')}`);
        }    
    }
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));  // bind = to use the this keyword attached to the poll objects




// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

poll.displayResults.call({answers :[5, 2, 3]});
poll.displayResults.call({answers :[1, 5, 3, 9, 6, 1]});

// const loopOptions = funtion(){
//     while(i =0; i < poll.options.length; i++ ) {
//         console.log();
//     }

// };

 //Challenge 

//  1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)
  
//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// HINT: Use many of the tools you learned about in this and the last section 😉

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// GOOD LUCK 😀



// const runOnce = function(){
//     console.log('This will never run again');
// }
// runOnce(); 


// (function(){
//     console.log('This will never run again');
// })(); // immediately invoked expression 

// (() => console.log('This will ALSO never run again'))();

// //functions create scopes
//  //global scope does not have access to the private (function) scope 


 // Closures 

