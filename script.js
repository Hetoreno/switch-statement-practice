/* const text= `banana`;
var fruitNr= 2;

switch(text){
    case `banana`:
        console.log(`I like banana\`s! `);
        fruitNr=2;
        break;
    case `apples`:
        console.log(`I also like apples as well!`);
        fruitNr=1;
        break;
    case `avocado`:
        console.log(`They\'re meh! >.<`);
        fruitNr=3;
        break;
    default:
        console.log(`Don\'t know which fruit is that....`);     /////this is the same as(else) statement.
    } */


    const user = prompt(`What\'s the best fruit?`);
    const cases = user.toLowerCase();

    switch(cases){
        case `orange`:
            console.log(`Yes it indeed is orange!`);
            break;
        case `apples`:
            console.log(`I\'m meh about apples....`);
            break;
        default:
            console.log(`Yeah i don\'t know what \`` +user + `\` is...`);
            break;
    }