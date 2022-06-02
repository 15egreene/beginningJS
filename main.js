// Question 1

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];
/* write function takes in string
and list of dog names
checks if current name is in the string

output should be 'Matched dog name' or 'no matches'

*/

// function findWords(str,names){
//     for (let i = 0; i <names.length; i++){
//        if (str.includes(names[i])){
//             return 'Matched dog name'
//        }
//     }
//     return 'No matches'
// }

// console.log(findWords(dog_string, dog_names))


// let findWordsTwo = (str, names) => {
//     let match = false;
//     for (let i = 0; i < names.length; i++){
//         if (str.includes(names[i])){
//             console.log(`Matched dog_name ${names[i]}`);
//             match=true;
//         }
//     }
//     if (!match){
//         console.log(`no_matches`);
//     }
// }

// findWordsTwo(dog_string, dog_names)


// Question 2
let people = ['enrique', 'endiga', 'jack', 'bresha'];
let replaceEvens = (arr) => {
    for (let i =0; i < arr.length; i+=2){
        arr.splice(i, 1,'even index');
    }
}

replaceEvens(people);
console.log(people);