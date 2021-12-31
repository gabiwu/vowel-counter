const text = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", countVowel); // Event listener to trigger 'palindrome'

function countVowel() {
    let vowelCount = 0;
    let textVal = text.value.toLowerCase();

    for (let i = 0; i < textVal.length; i++) {
        let letter = textVal[i]; // using RegEx to check if input value matches vowel (letter)
        if (letter.match(/([a,e,i,o,u])/)) {
            vowelCount++;
        }
    }
    result.innerHTML = `${text.value.toUpperCase()} has ${vowelCount} vowels`;
}