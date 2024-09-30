


const myString = process.argv.slice(2);




for (const word of myString) {

    // call function to check
    console.log(ConvertToPigLatin(word));

}



//  function t check
function ConvertToPigLatin(word) {


    // If word starts with two consonants, move them to the end and add "ay"
    if (!isVowel(word[0]) && !isVowel(word[1])) {
        return word.slice(2) + word.slice(0, 2) + 'ay';
    }

    // If word starts with one consonant and a vowel, move the first letter to the end and add "ay"
    if (!isVowel(word[0]) && isVowel(word[1])) {
        return word.slice(1) + word[0] + 'ay';
    }

    // If word starts with a vowel, add "way" at the end
    if (isVowel(word[0])) {
        return word + 'way';
    }

    // Return other words
    return word;
}



// Function to check if a character is a vowel
function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}
