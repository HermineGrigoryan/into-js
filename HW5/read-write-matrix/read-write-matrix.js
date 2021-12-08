// 5.a. (15 pts) Create a pair of functions for saving and loading matrices to and from text
// files. The first function, saveMatrixToFile(matrix, path), writes the contents of
// the argument matrix into a file located at the given path.

function saveMatrixToFile(m, path, file_name='p5a'){
    const fs = require('fs');
    fs.writeFileSync(path + file_name + '.txt', JSON.stringify(m));
    console.log('The file has been written in the specified path...')
}

// 5.b. (15 pts) The second, loadMatrixFromFile(path) function, returns a matrix
// filled with the contents of a file that has been created using the function from p5.a.
// Ensure that they remain compatible with each other.

function loadMatrixFromFile(path, file_name='p5a'){
    const fs = require('fs');
    const fileContent = fs.readFileSync(path + file_name + '.txt');
    const m = JSON.parse(fileContent);
    return m;
}

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