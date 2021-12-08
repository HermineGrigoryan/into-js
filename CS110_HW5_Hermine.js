// CS110
// Homework #5
// Student - Hermine Grigoryan

// 1. (15 pts) Write a function that calculates and returns the Euclidean distance between
// two n-dimensional points, p1 and p2. These points are arrays of coordinates (e.g. p1 =
// [x1,y1,z1] and p2 = [x2,y2,z2]). Assume they always come in correct and
// matching lengths.
// calculateDistance (p1, p2)

console.log('Problem 1')

function calculateDistance(p1, p2){
    let squared_diff = 0 
    for(let i = 0; i <= p1.length-1; i++){
        squared_diff += (p1[i] - p2[i])**2
    }
    return squared_diff**(1/2)
}

function p1(){
    console.log(calculateDistance([1, 2, 3], [1, 2, 3]));
    console.log(calculateDistance([-7,-4,3], [17, 6, 2.5]));
}

p1();


// 2. (15 pts) Write a function that returns 2 if its parameter M is a square matrix, 1 if M is
// rectangular but not square, 0 if M is a ragged two-dimensional array. Return -1 if m is
// not a 2D array.
// determineMatrixType (m)

console.log('Problem 2')

function determineMatrixType(m){
    let s0 = m.length
    let s1 = m[0].length
    let s2 = m[1].length

    if((s1 === s2) & (s1 === s0)){
        return 2
    } else if(s1 === s2){
        return 1
    } else {
        return 0
    }
}

function p2(){
    console.log(determineMatrixType([[1, 2], [1, 2]]));
    console.log(determineMatrixType([[1, 2, 3], [1, 2, 3]]));
    console.log(determineMatrixType([[1, 2, 3], [1, 2, 3, 4]]));
}

p2();

// 3. (15 pts) Write a function that returns the transpose of a given matrix. This function
// should first verify that the argument is a rectangular matrix using the function from p2
// and return null otherwise. The result must be stored in a new matrix and the original
// argument matrix must be left intact.

console.log('Problem 3')

function matrixTranspose(m){
    if(determineMatrixType(m) === 0){
        return null   
    } else {
        let new_m = new Array(m[0].length).fill(0).map(() => new Array(m.length).fill(0));
        for(let i = 0; i < m[0].length; i++){
            for(let j = 0; j < m.length; j++){
                new_m[i][j] = m[j][i]
            }
        }
        return new_m
    }
}

function p3(){
    let m_original = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
    let m_transposed = matrixTranspose(m_original)
    console.log('Transposed matrix')
    console.log(m_transposed);
    console.log('Original matrix')
    console.log(m_original);
}

p3();

// 4. (15 pts) Create a function that has a parameter N, with N being an odd number and
// returns an N × N matrix filled with numbers, arranged in a spiral pattern.

// console.log('Problem 4')

// function spiralMatrix(N){
//     let new_m = new Array(N).fill(0).map(() => new Array(N).fill(0));
//     let m_center = Math.floor(N/2);
//     console.log(m_center);
//     new_m[m_center][m_center] = 1;
//     new_m[m_center - 1][m_center] = 2;
//     new_m[m_center - 1][m_center + 1] = 3;
//     new_m[m_center][m_center + 1] = 4;
//     // for(let i = 0; i < N; i++){

//     // }
//     return new_m
// }

// function p4(){
//     console.log(spiralMatrix(5));
//     // console.log(spiralMatrix(5));
// }

// p4();

// 5.a. (15 pts) Create a pair of functions for saving and loading matrices to and from text
// files. The first function, saveMatrixToFile(matrix, path), writes the contents of
// the argument matrix into a file located at the given path.

console.log('Problem 5a')

function saveMatrixToFile(m, path, file_name='p5a'){
    const fs = require('fs');
    fs.writeFileSync(path + file_name + '.txt', JSON.stringify(m));
    console.log('The file has been written in the specified path...')
}

my_path = '/home/hermine/Desktop/JS codes/into-js/'

function p5a(){
    saveMatrixToFile([[1, 2, 3], [7, 8, 9]], my_path)
}

p5a();


// 5.b. (15 pts) The second, loadMatrixFromFile(path) function, returns a matrix
// filled with the contents of a file that has been created using the function from p5.a.
// Ensure that they remain compatible with each other.

console.log('Problem 5b')

function loadMatrixFromFile(path, file_name='p5a'){
    const fs = require('fs');
    const fileContent = fs.readFileSync(path + file_name + '.txt');
    const m = JSON.parse(fileContent);
    return m;
}

function p5b(){
    loadMatrixFromFile(my_path)
}

p5b();

// 5.c. (10 pts) Write a demo program that illustrates the use of these functions, e.g.
// creates a matrix, saves it inside a file, loads that same matrix from that file and performs
// integer operations on its values after determining the shape. See bonus.

function matrixDemo(m, path, file_name){
    saveMatrixToFile(m, path, file_name)
    let loaded_m = loadMatrixFromFile(path, file_name)
    let n_rows = loaded_m.length;
    let n_cols = loaded_m[0].length;
    console.log('Size of the matrix:', n_rows, 'x', n_cols)
    console.log('Original matrix')
    console.log(loaded_m)
    // adding 1 whenever the number of rows in the matrix is 2
    if(n_rows == 2){
        for(let i = 0; i < n_rows; i++){
            for(let j = 0; j < n_cols; j++){
                loaded_m[i][j] += 1
            }
        }
        console.log('Modified matrix')
        console.log(loaded_m)
    }
}

function p5c(){
    matrixDemo([[1, 2, 3], [5, 6, 7]], my_path, 'p5c1')
    matrixDemo([[1, 2, 3], [5, 6, 7], [7, 8, 9]], my_path, 'p5c2')
}

p5c();