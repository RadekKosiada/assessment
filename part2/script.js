/*
Write your code for this exercise in this file beneath this long comment.

Create a variable named actors and assign to it an array of five objects, each
of which represents a famous actor. Each actor object should have properties for
the actor's name, the actor's age, and the number of Oscars the actor has
received (you can call this property oscars or numOscars). These are the actors
to use:

    Leonardo DiCaprio (age 41, 1 Oscar)
    Jennifer Lawrence (age 25, 1 Oscar)
    Samuel L. Jackson (age 67, no Oscars)
    Meryl Streep (age 66, 3 Oscars)
    John Cho (age 43, no Oscars)

In addition to the three properties already mentioned, each actor object should
have the following two methods:

    hello - this method logs to the console the string "Hello, my name is "
        followed by the actor's name.

    hasMoreOscarsThan - this method accepts one actor object as a parameter and
        returns true if the actor has more Oscars than the one that is passed as
        a parameter and false otherwise.

Now write the following functions:

    getActorByName - this function expects a string as a parameter and returns
        the object in the actors array whose name property is equal to the
        string that is passed in (if there is one).

    getAverageAge - this function returns the average age of all the actors in
        the array.

You can test your code by opening index.html in Chrome and using the console
(see http://jsforcats.com/ for instructions on using the console). After you
correct any errors you see when you open the console, you can run commands such
as those below and verify the output.

    var leo = getActorByName('Leonardo DiCaprio');
    var jlaw = getActorByName('Jennifer Lawrence');
    var jcho = getActorByName('John Cho');
    var meryl = getActorByName('Meryl Streep');

    jlaw.hasMoreOscarsThan(jcho);
    jlaw.hasMoreOscarsThan(meryl);
    leo.hasMoreOscarsThan(jlaw);

    meryl.hello();
    leo.hello();

    getAverageAge();
*/

var actors = [
    {
        name: "Leonardo DiCaprio",
        age: 41,
        numOscars: 1,
        hello: function() {
            console.log("Hello, my name is " + this.name + ".");
            },
            hasMoreOscarsThan: function(actor) {
                if(this.numOscars > actor.numOscars) {
                    return true;
                } else {
                    return false;
                    }
                },
    },
    {
        name: "Jennifer Lawrence",
        age: 25,
        numOscars: 1,
        hello: function() {
            console.log("Hello, my name is " + this.name + ".");
            },
        hasMoreOscarsThan: function(actor) {
            if(this.numOscars > actor.numOscars) {
                return true;
            } else {
                return false;
                }
            },
    },
    {
        name: "Samuel L. Jackson", 
        age: 67,
        numOscars: 0,
        hello: function() {
            console.log("Hello, my name is " + this.name + ".");
            },
        hasMoreOscarsThan: function(actor) {
            if(this.numOscars > actor.numOscars) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        name: "Meryl Streep",
        age: 66,
        numOscars: 3, 
        hello: function() {
            console.log("Hello, my name is " + this.name + ".");
            },
        hasMoreOscarsThan: function(actor) {           
            if(this.numOscars > actor.numOscars) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        name: "John Cho",
        age: 43,
        numOscars: 0, 
        hello: function() {
            console.log("Hello, my name is " + this.name + ".");
            },
        hasMoreOscarsThan: function(actor) {  
            if(this.numOscars > actor.numOscars) {
                return true;
            } else {
                return false;
            }
        }
    } 
];


function getActorByName(string) {    
    for(let i=0; i < actors.length; i++) {
        if(actors[i].name==string) {
        return actors[i];
        }
    }
}
// console.log(getActorByName("John Cho"));

function getAverageAge () {
    var arrAge =[];
    var sumAge;
    var actorsAverage;
    for(var i=0; i<actors.length; i++) {
    arrAge.push(actors[i].age);    
    }
    sumAge = arrAge.reduce(function(a, b) {
        return a + b;
    }, 0);
    actorsAverage = sumAge/actors.length;
    return actorsAverage;
}

// console.log(getAverageAge());

//TESTS

var leo = getActorByName('Leonardo DiCaprio');
var jlaw = getActorByName('Jennifer Lawrence');
var jcho = getActorByName('John Cho');
var meryl = getActorByName('Meryl Streep');

// jlaw.hasMoreOscarsThan(jcho); DONE
// jlaw.hasMoreOscarsThan(meryl); DONE
// leo.hasMoreOscarsThan(jlaw); DONE
// meryl.hasMoreOscarsThan(jlaw); DONE

// meryl.hello(); DONE
// leo.hello(); DONE
// jcho.hello();DONE

// getAverageAge(); DONE