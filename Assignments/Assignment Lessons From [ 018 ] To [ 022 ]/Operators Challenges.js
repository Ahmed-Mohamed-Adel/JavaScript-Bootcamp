// Challenge 1
let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++); // 100
console.log(++a + -b + +c++ - -a++ + +a); // 100
console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 100

/*
code 1:-

[++a] [+] [+b++] [+] [+c++] [-] [+a++]

[++a]
    - value: 11
    - Explain: pre-increment 

[+] 
    - Explain: Add (plus) Opreater 

[+b++]
    - value: 20
    - Explain: post-increment

[+] 
    - Explain: Add (plus) Opreater 

[+c++]
    - value: 80
    - Explain: post-increment

[-] 
    - Explain: subtract (minus) operator

[+a++]
    - value: 11
    - Explain: post-increment
*/
/*
code 2:-

[++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a]

[++a]
    - value: 13
    - Explain: pre-increment 

[+] 
    - Explain: Add (plus) Opreater 

[-b]
    - value: -21
    - Explain: Unary Negation 

[+] 
    - Explain: Add (plus) Opreater 

[+c++]
    - value: 81
    - Explain: Unary plus / post-increment

[-] 
    - Explain: subtract (minus) operator

[-a++]
    - value: -13
    - Explain: Unary Negation  / post-increment

[+] 
    - Explain: Add (plus) Opreater 

[+a]
    - value: 14
    - Explain: Unary plus
*/

/*
code 3:-

[--c] [+] [+b] [+] [--a] [*] [+b++] [-] [+b] [*] [a] [+] [--a] [-] [+true]

[--c]
    - value: 81
    - Explain: pre-decrement 

[+] 
    - Explain: Add (plus) Opreater 

[-b]
    - value: 21
    - Explain: Unary plus 

[+] 
    - Explain: Add (plus) Opreater 

[--a]
    - value: 13
    - Explain: Unary plus / post-increment

[*] 
    - Explain: Multiplication operator

[+b++]
    - value: 21
    - Explain: Unary plus / post-increment

[-] 
    - Explain: subtract (minus) operator 

[+b]
    - value: 22
    - Explain: Unary plus

[*] 
    - Explain: Multiplication operator

[a]
    - value: 13

[+] 
    - Explain: Add (plus) Opreater 

[--a]
    - value: 12
    - Explain: pre-decrement 

[+true]
    - value: 1
    - Explain: Unary plus
*/

//Challenge 2

let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d * +e); // 2000
console.log(++e * ++g + -d + ++f); // 173
