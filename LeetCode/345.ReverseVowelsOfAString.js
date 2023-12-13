var reverseVowels = function(s) {

    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    let reversedVowels = s.split("").filter(letter => vowels.includes(letter));

    let reversed = '';

    for (let i = 0; i < s.length; i++) {
        if(vowels.includes(s[i])) {
            reversed = reversed.concat(reversedVowels.pop())
        } else {
            reversed = reversed.concat(s[i])
        }
    }

    return reversed;

};