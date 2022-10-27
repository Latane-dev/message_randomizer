/* First piece of information will be a randomly rolled numer 1-99 */
const luckyNum = () => {
    Math.floor(Math.random() * 100)
};

/* Second piece of information will be a vague, opening relative cause made up using three arrays of words with a general nature theme */
const firstWords = ["where", "when", "while", "until", "if"]
const nounArr = ["the owl", "the horse", "the rabbit", "the pig", "the cat", "the dog", "the fish"]
const verbArr = ["runs wild", "sees the darkness", "smells a scent", "makes a noise", "jumps to the sky", "hears danger", "sleeps soundly"]

/* Third piece of information will be the main clause with an advice-like tone */

const adviceArr = ["it is wise to go the other way", "do not hesitate to stand still", "keep a close eye on your enemies", 
"your day will be filled with luck", "it is time for a big change in your life", "do not procrastinate to do work that can be accomplished in the present"]

/* function that will randomly choose a word or phrase from the array */
const pickMe = (arr) => {
    let ranPhrase = Math.floor(Math.random() * arr.length);
    return arr[ranPhrase];
};

/* defines the second piece of data (the relative opening clause) by combining a piece of data from its three arrray */
let relCause = `${pickMe(firstWords)} ${pickMe(nounArr)} ${pickMe(verbArr)}`

console.log(relCause);
