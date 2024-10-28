class word
{
    constructor(w, clue)
    {
        this.word = w;
        this.clue = clue;
    }
}

const puzzles = [
    {
        "1a": new word("caked", "Shuffle the deck and add an Ace, now it's covered."),
        "2a": new word("stray", "Feral flat fish on the street!"),
        "1d": new word("cacti", "A tactic without a team is a mess, they're painful to touch."),
        "2d": new word("regal", "Royal beer, bottoms up!")
    },
    {
        "1a": new word("bowel", "Digestive organ puts energy into crockery")
    }
]

const currentPuzzle = 0;
var dirSwitch = false;
var selectedCell = null;
var selectedLine = null;
var cellPos = null;
const bothDirCells = ["r2c2", "r2c4", "r4c2", "r4c4"];
const cells = {
    "r2c1": "",
    "r2c2": "",
    "r2c3": "",
    "r2c4": "",
    "r2c5": "",
    "r4c1": "",
    "r4c2": "",
    "r4c3": "",
    "r4c4": "",
    "r4c5": "",
    "r1c2": "",
    "r2c2": "",
    "r3c2": "",
    "r4c2": "",
    "r5c2": "",
    "r1c4": "",
    "r2c4": "",
    "r3c4": "",
    "r4c4": "",
    "r5c4": ""
}
const lines = {
    "1a": ["r2c1", "r2c2", "r2c3", "r2c4", "r2c5"],
    "2a": ["r4c1", "r4c2", "r4c3", "r4c4", "r4c5"],
    "1d": ["r1c2", "r2c2", "r3c2", "r4c2", "r5c2"],
    "2d": ["r1c4", "r2c4", "r3c4", "r4c4", "r5c4"]
}

function setSelected(cell)
{
    if (selectedCell == cell && bothDirCells.includes(cell)) dirSwitch = !dirSwitch;
    selectedCell = cell;

    Object.values(lines).forEach(line => line.forEach(c => 
        {
            document.getElementById(c).classList.remove("lineSelect");
            document.getElementById(c).classList.remove("cellSelect");
        }))

    var clickedLines = [];
    Object.keys(lines).forEach(lineID => {
        if (lines[lineID].includes(cell))
        {
            clickedLines.push(lineID);
        }
    })

    highlightLine(clickedLines[clickedLines.length > 1 ? +dirSwitch : 0]);
}

function highlightLine(line)
{
    selectedLine = line;
    lines[line].forEach(c => document.getElementById(c).classList.add("lineSelect"));    
    showClue(line);
    cellPos = lines[line].indexOf(selectedCell);
    highlightCell(selectedCell);
}

function highlightCell(cell)
{
    document.getElementById(cell).classList.add("cellSelect");
    selectedCell = cell;
}

function fillCell(cell, letter)
{
    document.getElementById(cell).innerHTML = `<p>${letter}</p>`;
    cells[cell] = letter;
    cellPos++;
    if (cellPos > 4) cellPos = 4;
    document.getElementById(cell).classList.remove("cellSelect");
    highlightCell(lines[selectedLine][cellPos]);
    checkFin();
}

function checkFin()
{
    var filledCells = 0;
    Object.values(cells).forEach(cellVal => {
        if (cellVal != "") filledCells++;
    })
    if (filledCells == 16) checkCorrect();
}

function checkCorrect()
{
    var hasError = false;
    Object.keys(lines).forEach(lineID => {
        lines[lineID].forEach((c, i) => {
            if (cells[c] != puzzles[currentPuzzle][lineID].word[i])
            {
                hasError = true;
            }
        })
    })

    if (!hasError) document.getElementById("clue").innerHTML = "CORRECT!";
}

function showClue(line)
{
    document.getElementById("clue").innerHTML = puzzles[currentPuzzle][line].clue;
}

window.addEventListener('mousedown', e => {
    if (!Object.keys(cells).includes(e.target.id)) return;
    setSelected(e.target.id);
})

window.addEventListener('keydown', e => {
    if (e.key.match(/[A-Z]/i) && e.key.length < 2 && selectedCell)
    {
        fillCell(selectedCell, e.key);
    }
    else if (e.key == "Backspace" && selectedCell)
    {
        fillCell(selectedCell, "");
    }
    else if (e.key.match(/Arrow/))
    {
        switch(e.key)
        {
            case "ArrowLeft":
            case "ArrowUp":
                cellPos--;
                if (cellPos < 0) cellPos = 0;
                break;
            case "ArrowRight":
            case "ArrowDown":
                cellPos++;
                if (cellPos > 4) cellPos = 4;
                break;
        }
        document.getElementById(selectedCell).classList.remove("cellSelect");
        highlightCell(lines[selectedLine][cellPos]);
    }
})