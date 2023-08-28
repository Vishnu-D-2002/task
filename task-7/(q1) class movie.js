// Class - Movie
// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”



class Movie{
    constructor(title, studio, rating='PG') {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG() {
        if (this.rating == 'PG')
            return this.title;
        else
            return this.rating;
    }
}

let movie1 = new Movie('Casino Royale', 'Eon Productions', 'PG13');
console.log(movie1);

let movie2 = new Movie('KGF', 'Hombale Films', '9.9');
console.log(movie2);

let movie3 = new Movie('KGF-2', 'Hombale Films' , '10');
console.log(movie3);

let movie4 = new Movie('Money Heist', 'Net Flix' ,'PG');
console.log(movie4);

// console.log(movie1.getPG());
// console.log(movie2.getPG());
// console.log(movie3.getPG());
console.log(movie4.getPG());








// output :

// [Running] node "c:\tasks\task-7\(q1) class movie.js"
// Movie {
//   title: 'Casino Royale',
//   studio: 'Eon Productions',
//   rating: 'PG13'
// }
// Movie { title: 'KGF', studio: 'Hombale Films', rating: '10' }
// Movie { title: 'KGF-2', studio: 'Hombale Films', rating: '10' }
// Movie { title: 'Money Heist', studio: 'Net Flix', rating: 'PG' }
// Money Heist

// [Done] exited with code=0 in 0.225 seconds