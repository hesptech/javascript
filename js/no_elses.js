const p = {
    age: 20,
}

let answer;

function verifyAge(p) {
    let result;
    if (p.age == null) return
    if (p.age >= 21) return 'drink';
    if (p.age < 18) return 'not drink';
    if (p.age < 21) return 'not drink in usa'
}

function launchVerifyAge(p) {
    console.log(verifyAge(p));
    return answer = verifyAge(p);
};

launchVerifyAge(p);

console.log('yyy');