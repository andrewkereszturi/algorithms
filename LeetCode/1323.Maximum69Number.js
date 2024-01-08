var maximum69Number  = function(num) {
    let str = num.toString().split('');
    for (let i = 0; i < str.length; i++) { 
        if (str[i] !== '9') {
            str[i] = '9'
            return Number(str.join(''))
        }
    }
    return num
};