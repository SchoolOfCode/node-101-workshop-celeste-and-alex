// let myCollection = [
//     {
//         name: "School of Code mug",
//         count: 1,
//         whatILike: "It has my cute pixel character on it!"
//       },
//       {
//         name: "School of Code hat",
//         count: 2,
//         whatILike: "An often overlooked fashion accessory"
//       },
//       {
//         name: "School of Code pillow",
//         count: 1,
//         whatILike: "Eat. Sleep. Code. Repeat :)"
//       }
//     ];

import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));


import myCollection from './collection.js';

    console.log(myCollection);

    // task 2
    function describeItem(item) {
if(item === 1) {
        console.log
(chalk.cyan(`I have a ${item.name}. Here's what I like about it: ${item.whatILike}.`))
    } else {
        (console.log(chalk.yellow(`I have ${item.count} ${item.name}'s. Here's what I like about them: ${item.whatILike}`)))
    }
};
    

describeItem(myCollection[0]);

// task 2d
function describeCollection(arr) {
    arr.forEach(describeItem);
        // console.log(`I have ${item.count} items.`)
    }

// describeCollection(myCollection);

