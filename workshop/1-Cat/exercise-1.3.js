// Exercise 1.3
// ------------
// Creating a Cat class - Part 3

// A) In the previous exercises, we created a Cat class and used it to create a
//    `boots` object.
//    Rewrite that Cat class, but let's also add some functions that will
//    modify the various porperties of a cat.
//    Write methods that will update tiredness, hunger, loneliness, and
//    happiness.
class Cat {
        constructor(name, breed){
        this.species = 'cat';
        this.name= name || 'unknown';
        this.breed = breed || 'unknown';
        this.tiredness = 50;
        this.hunger = 20;
        this.loneliness = 20;
        this.hapiness  = 20;
}
sleep = (hours) =>{
        this.tiredness -= hours*5;
        this.hapiness += 5
}
eat = (kibbles) => {
        this.hunger -= kibbles/5;
        this.hapiness += 10;
}
play = (minutes) => {
        this.loneliness -= minutes*3;
        this.hapiness += 7;
}
}

// HINT: You need to write arrow functions here. () => {}
// - Write a sleep method that accept hours and reduces tiredness by 5 times
//   that number. So if the cat has a tiredness of `50`, and sleeps for 10
//   hours, their tiredness will be reduced to 0 (10 * 5).
// - Write an eat method that accept number of kibbles and reduces hunger by 1/5
//   that number.
// - Write an play method that accept minutes and reduces loneliness by 3 times
//   that number.
// - the happiness property should be modified all of the above methods as well.
//
// You decide how much sleep, eat, and play affects your cat's happiness.

// B) call the different methods with appropriate values and then console.log boots to see what happened to the property values.
let boots = new Cat('Boots', 'Simease');
console.log(boots);
boots.sleep(5);
boots.eat(15);
console.log(boots);
