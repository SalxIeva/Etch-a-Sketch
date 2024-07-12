console.log("Hello");

// PSEUDO CODE

// Create a button container
// Create a button , that will later be appended to its container
// Create a reset grid function
// Prompt the user for new grid size
// Call createGrid function to create a grid 
// Add event listener to the reset button using ("click", resetGame)

const resetBtnDiv = document.createElement("div");
resetBtnDiv.style.margin = "20px";
resetBtnDiv.style.display = "flex";
resetBtnDiv.style.width = "auto";
resetBtnDiv.style.alignItems = "center";
resetBtnDiv.style.justifyContent = "center";

const resetBtn = document.createElement("button");
resetBtn.style.width = "150px";
resetBtn.style.height = "50px";
resetBtn.textContent = "Reset Grid";
resetBtn.style.borderRadius = "10px";
resetBtn.style.backgroundColor = '#8C1C31';
resetBtn.style.color = 'white';
resetBtn.style.fontSize = '20px';

const resetGame = () => {
    const userInput = prompt("Please enter a number for your grid size between 1 and 16");
    const size = parseInt(userInput);
    
    // Make sure user enters correct input
    if (!isNaN(size) && size > 0 && size <= 16) {
        createGrid(size);
    } else {
        alert("Please enter a valid input between 1 and 16!");
    };
    return size;
};

resetBtn.addEventListener("click", resetGame);

resetBtnDiv.appendChild(resetBtn);
document.body.appendChild(resetBtnDiv);

// Create a function to create grid
// Inside the function loop size * size to create a grid
// Add a hover event listener to the grid div.
// Append each grid div to the container
// Add hover effect to each grid div to change color when hoovered over it

// Create a wrapper container to center gridContainer
const wrapperContainer = document.createElement("div");
wrapperContainer.style.display = "flex";
wrapperContainer.style.alignItems = "center";
wrapperContainer.style.justifyContent = "center";
wrapperContainer.style.height = "600px";


// Create a div container to store grid div's 
const gridContainer = document.createElement("div");
gridContainer.id = "grid-container";
gridContainer.style.border = "2px solid black";

const createGrid = (size) => {
    // Clear previous grid
    gridContainer.innerHTML = '';

    // Add flexbox to make divs appear as grid
    gridContainer.style.display = "flex";
    gridContainer.style.flexWrap = "wrap";
    gridContainer.style.width = "600px";
    gridContainer.style.height = "600px";
    
    // Calculate the size of each grid
    const gridItemSize = (600 / size);

    for(var i = 0; i < size * size; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("grid-item");
        gridDiv.style.width = `${gridItemSize}px`;
        gridDiv.style.height = `${gridItemSize}px`;
        gridDiv.style.opacity = 1;
        
        // Add hover event listener
        gridDiv.addEventListener("mouseover", () => {
            const randomColor = getRandomColor();
            gridDiv.style.backgroundColor = randomColor;

            let currentOpacity = parseFloat(gridDiv.style.opacity);
            if (currentOpacity > 0) {
                gridDiv.style.opacity = currentOpacity - 0.1;
            }
        });

        gridContainer.appendChild(gridDiv);
    };
    wrapperContainer.appendChild(gridContainer);
    document.body.appendChild(wrapperContainer);

    // document.body.appendChild(gridContainer);
};

createGrid(16);

// ADDITIONAL FEATURES
// For random color change: Modify the hover effect function to set a random background color. (use Math.random())

const randomNumb = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
};

const getRandomColor = () => {
    const h = randomNumb(360);
    const s = randomNumb(100);
    const l = randomNumb(100);

    return `hsl(${h}deg, ${s}%, ${l}%)`;
};

// For progressive darkening: Modify the hover effect function to increase the opacity of the grid cell on each hover.
// const increaseOpacity = () => {
//     for (var i = 1; )
// }
