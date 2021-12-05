// CS110
// Homework #4
// Student - Hermine Grigoryan

// 1. (10 pts) Write a function that takes two sides of a right triangle, calculates and
// returns the hypotenuse.

console.log('Problem 1')

function hypotenuse(a, b){
    let c = Math.sqrt(a**2 + b**2);
    return c
}

function p1(){
    console.log(hypotenuse(3,4));
    console.log(hypotenuse(1,1));
}

p1();

// 2. (10 pts) Write iterative and recursive versions of a function that takes an argument N,
// returns the factorial of that number. The factorial of a number is the product of all natural
// numbers preceding it and the number itself.
// 4! = 1 × 2 × 3 × 4 = 24

console.log('Problem 2 Iterative')

function factorialIter(N){
    if(N === 0){
        return 1
    } else if(N < 0){
        return 'No factorial for negative numbers!'
    } else{
        num = 1
        for(let i = 1; i <= N; i++){
            num = i*num
        }
        return num
    }
}

function p2Iter(){
    console.log(factorialIter(-5));
    console.log(factorialIter(0));
    console.log(factorialIter(1));
    console.log(factorialIter(2));
    console.log(factorialIter(5));
}

p2Iter();

console.log('Problem 2 Recursive')

function factorialRecursive(N){
    if (N < 0){
        return 'No factorial for negative numbers!'
    } else if(N <= 1){
        return 1
    } else{
        return N*factorialRecursive(N-1)
    }
}

function p2Recursive(){
    console.log(factorialRecursive(-5));
    console.log(factorialRecursive(0));
    console.log(factorialRecursive(1));
    console.log(factorialRecursive(2));
    console.log(factorialRecursive(5));
}

p2Recursive();

// 3. (15 pts) Come up with a way to measure the speed of the execution of the functions
// and compare the performance differences of the functions from p2 in a report. In your
// report also include what the largest number that can be calculated by these functions is
// and why.
// Both javascript and Python provide ways to get the current system time in milliseconds.
// Please note that this kind of benchmarking requires a number of trials and a single
// execution of the program will not yield enough data for a statistical analysis.


console.log('Problem 3');
n_iterations = 10;
number = 10000;

let total_time_diff_iter = 0;

for(let i = 1; i <= n_iterations; i++){
    let start_iter = Date.now()
    factorialIter(number)
    let end_iter = Date.now()
    time_diff_iter = end_iter - start_iter
    total_time_diff_iter += time_diff_iter
}

console.log('On average, it takes ', total_time_diff_iter/n_iterations, 'ms to calculate the factorial \
of ', number, ' using the iterative method.')


let total_time_diff_recursive = 0;

for(let i = 1; i <= n_iterations; i++){
    let start_recursive = Date.now()
    factorialRecursive(number)
    let end_recursive = Date.now()
    time_diff_recursive = end_recursive - start_recursive
    total_time_diff_recursive += time_diff_recursive
}

console.log('On average, it takes ', total_time_diff_recursive/n_iterations, 'ms to calculate the factorial \
of ', number, ' using the recursive method.');

/*
As we can see from the results, on average, the recursive method works better, i.e., the execution time is
less. However, there are limitations in using the recursive method because of the stack overflow problem.
When we run a recursive program, the process of execution of a running program is stored in its execution context.
The execution context is an internal data structure that contains details about the execution of a function.

"When a function makes a nested call, the following happens:
- The current function is paused.
- The execution context associated with it is remembered in a special data structure called execution context stack.
- The nested call executes.
- After it ends, the old execution context is retrieved from the stack, and the outer function is resumed from where it stopped."

Recursion depth equals the maximal number of context in the stack.
Contexts take memory. When the memory of the machine is full and the condition of the recursive function is not met yet, the function 
throws an error. In my computer, I could not calculate the factorial of numbers greater that 13000.
However, using the iterative method, I could calculate the factorials of bigger numbers as the the iterative method uses 
a single context changing `i` and result `num`.

Used resources:
https://javascript.info/recursion
*/


// 4. (20 pts) Write iterative and recursive versions of a function with a string parameter
// that returns the reverse of that parameter.
// Example:
// Input: The quick brown fox jumps over the lazy dog
// Output: god yzal eht revo spmuj xof nworb kciuq ehT

console.log('Problem 4 Iterative');

function reverseStringIter(str){
    let newString = '';
    for(let i = str.length - 1; i >=0; i--){
        newString += str[i];
    }
    return newString;
}

function p4Iter(){
    console.log(reverseStringIter('The quick brown fox jumps over the lazy dog'))
}

p4Iter();

console.log('Problem 4 Recursive');

function reverseStringRecursive(str){
    if(str === ""){
        return ''
    } else {
        return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
}

function p4Recursive(){
    console.log(reverseStringRecursive('The quick brown fox jumps over the lazy dog'))
}

p4Recursive();

// 5. (15 pts) Create a function with a string parameter that only reverses the words inside
// a sentence while maintaining the order of the words. Utilize the function from p4.
// Example:
// Input: The quick brown fox jumps over the lazy dog
// Output: ehT kciuq nworb xof spmuj revo eht yzal god

console.log('Problem 5 Iterative');

function reverseStringIterP5(str){
    let newString = ''
    strings = str.split(' ')
    for(j of strings){
        tmpString = reverseStringIter(j)
        newString += tmpString + ' '
    }
    return newString
}

function p5(){
    console.log(reverseStringIterP5('The quick brown fox jumps over the lazy dog'))
}

p5();

// 6. (15 pts) Create a function with a string parameter that reverses the order of the
// words inside a sentence. Utilize the function from p4.
// Example:
// Input: The quick brown fox jumps over the lazy dog
// Output: dog lazy the over jumps fox brown quick The

console.log('Problem 6 Iterative')

function reverseStringIterP6(str){
    strings = str.split(' ')
    newStrings = []
    for(j of strings){
        newStrings.push(j+' ')
    }
    return reverseStringIter(newStrings)
}

function p6(){
    console.log(reverseStringIterP6('The quick brown fox jumps over the lazy dog'))
};

p6();

// 7. (15 pts) Create a function that relies on the function from p4 and determines the
// number of palindrome words in a given sentence.
// Example:
// Input: level Output: true
// Input: carrots Output: false

console.log('Problem 7');

function nPalindromes(sentence){
    let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    sentence = sentence.toLowerCase().replace(regex, '') //making lowercase and deleting punctuation

    let sent = sentence.split(' ') //splitting

    counter = 0
    palindromes = []

    for(j of sent){
        let check = reverseStringIter(j)        
        if(check === j){
            counter += 1
            palindromes.push(j)
        }        
    }

    if (counter > 0){
        return 'Number of palindrome words in the sentence: ' + counter +
        '. The palindromes are: ' + palindromes
    } else {
        return 'No palindromes are found!'
    }

}

function p7(){
    console.log(nPalindromes('level'));
    console.log(nPalindromes('carrot'));
    console.log(nPalindromes('Anna has a good level of English.'));
}

p7();

