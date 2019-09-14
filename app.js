console.log("Hello from JS") 

// Data types
/*
    undefined, null, boolean, string, symbol, number, and object

    var, let, const

    chce uzyc "" ?

    \ uzyc PRZED

    \n      new line
    \r      carriare return
    \t      tab
    \b      backspace
    \f      form feed
    
    
*/

//          FIND LENGTH OF STRING

var firstNameLength = 0;
var firstName = "Ada"


firstNameLength = firstName.length;

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;

console.log(lastNameLength);


 //         FIND CHARACTER IN A STRING

 var firstLetterofName = "";
 var lastName = "Lovelace";

 firstLetterofName = lastName[0];
 console.log(firstLetterofName);

 //         FIX

var variable = "Jello World";

variable = "Hello World"

console.log(variable);

//          THE LAST CHARACTER IN A STRING

var firstname = "Ada";
var LastLetterOfFirstName = firstname[firstname.length -1];
console.log(LastLetterOfFirstName);

//          FUNCTIONS WITH VARIABLES


function WordBlanks(myNoun, myAdjective, myVerb, myAdverb){

    var result = "";
    result = result + "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    return result; 

}

console.log(WordBlanks("dog", "big", "ran", "quickly"));
console.log(WordBlanks("bike", "slow", "flew", "Slowly"));

//          ARRAYS

var ourArray = ["John", 23];

// Only change code below this line.
var myArray = ["Quincy", 1]; 

// ARRAY IN A ARRAY

var ourArray = [["the universe", 42], ["everything", 100110]];


var ourArray = [50,60,70]
var ourData = ourArray[1];

console.log(ourData);

// CHANGED ARRAYS

var Array = [18,23,42,12];
Array[1] = 120;
console.log(Array);


//              MULTIPLE ARRAYS

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]]

var myData = myArray[0][0];


//              MANIPULATE ARRAYS WITH PUSH()

// Push() Dodaje elemnty do tablicy


var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
console.log(ourArray);


//              MANIPULATE ARRAYS WITH POP()


var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1, 2]
// Odejmuje ostatni element

//              MANIPULATE ARRAYS WITH SHIFT()

// SHIFT() działa tak samo jak POP() tylko usuwa 1-szy element z tablicy

//              MANIPULATE ARRAYS WITH UNSHIFT()

var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
// ourArray now equals ["Happy, "J", "cat"]
// UNSHIFT() dodaje element jako 1szy 


//                  SHOPPING LIST








