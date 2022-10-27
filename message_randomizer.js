/* First piece of information will be a randomly rolled numer 1-99 */
const luckyNum = () => {
    Math.floor(Math.random() * 100)
};

/* Second piece of information will be a vague, opening relative cause made up using arrays of words with a general nature theme */
const firstWords = ["For", "When", "While", "Until", "If"]
const nounArr = []
const verbArr = []

/* Third piece of information will be the main clause with an advice-like tone */