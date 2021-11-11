
// ------------------------------- Remove Islands -------------------------------


console.log(result);

function removeIslands(matrix) {
    // Write your code here.
    const onesConnectedToBorder = [];
    // Just creating the empty borders?
    for (let row = 0; row < matrix.length; row++) {
        onesConnectedToBorder.push([]);
        // GFor loop where you push all the rows as false (Initializiing)
        for (let col = 0; col < matrix[0].length; col++) {
            onesConnectedToBorder[row].push(false);
        }
    }

    // Loop each row and col to figure out if the row (0)  the row max lenght (the borders) and then if its not border make a matrix not equal to one. find the ones connected to border
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            const rowIsBorder = row === 0 || row === matrix.length - 1;
            const colIsBorder = col === 0 || col === matrix[row].length - 1;
            const isBorder = rowIsBorder || colIsBorder;
            if (!isBorder) continue;

            if (matrix[row][col] != 1) continue;

            findOnesConnectedToBorder(matrix, row, col, onesConnectedToBorder);

        }
    }

    // Loop each row col -1 (not borders starting from 1 and if the are ones connectedTo Border then skip, otherwise, connect to zero.)
    for (let row = 1; row < matrix.length - 1; row++) {
        for (let col = 1; col < matrix[row].length - 1; col++) {
            if (onesConnectedToBorder[row][col]) continue;

            matrix[row][col] = 0;
        }
    }


    return matrix;
}

function findOnesConnectedToBorder(matrix, startRow, startCol, onesConnectedToBorder) {
    // create an stack using the start row and start col

    // While the stack length larger than 0pop the stack (for the current position) and then get the current row and col from the current position. 
    // Decide if it already been visited by finding out if there is any value in the coordinates of the onesConnectedToBorder matrix.

    // then declare the neightbors as get neightbors of the matrix and for each neightbor, if the value is not 1 skip, otherwise push to the stack

    const stack = [
        [startRow, startCol]
    ];

    while (stack.length > 0) {
        const currentPosition = stack.pop();
        const [currentRow, currentCol] = currentPosition;
        console.log(` visiting ${currentCol} ${currentRow}`)
        const alreadyVisisted = onesConnectedToBorder[currentRow][currentCol];
        if (alreadyVisisted) {
            console.log(`already visited ${currentCol} ${currentRow}`)
            continue;
        };

        onesConnectedToBorder[currentRow][currentCol] = true;

        const neighbors = getNeighbors(matrix, currentRow, currentCol);
        for (const neighbor of neighbors) {
            const [row, col] = neighbor;
            if (matrix[row][col] != 1) continue;
            stack.push(neighbor);
        }
        console.log('Stack: ')
        console.log(stack)
    }
}

function getNeighbors(matrix, row, col) {
    // simply look at the right left top, bottom, by making additions and checking if the content is larger or smaller than the boundaries using the matrix length of rows and cols

    const neighbors = [];

    const numRows = matrix.length;
    const numCols = matrix[row].length;

    if (row - 1 >= 0) neighbors.push([row - 1, col]);
    if (row + 1 < numRows) neighbors.push([row + 1, col]);
    if (col - 1 >= 0) neighbors.push([row, col - 1]);
    if (col + 1 < numCols) neighbors.push([row, col + 1]);

    console.log(neighbors);

    return neighbors;
}