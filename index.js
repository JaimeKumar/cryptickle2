class cell
{
    constructor(setR, setC)
    {
        this.val = null;
        this.solution = "";
        this.lineID = [];
        this.clickable = false;
        this.r = setR;
        this.c = setC;
    }
}

class puzzle
{
    constructor(words)
    {
        this.words = {...words};
        this.cells = {};
        this.initCells();
    }
        
    initCells()
    {
        for (var i = 1; i < 6; i++)
        {
            for (var j = 1; j < 6; j++)
            {
                var cellID = `r${i}c${j}`;
                this.cells[cellID] = new cell(i , j);
            }
        }

        for (var lineid in this.words)
        {
            var dir = lineid.slice(1);
            if (dir == "a")
            {
                var startingCol = +this.words[lineid].startingCell.slice(3);
                var row = +lineid.slice(0, 1);
                for (var i = 0; i < this.words[lineid].word.length; i++)
                {
                    var cellNum = startingCol + i;
                    var cellID = `r${row}c${cellNum}`;
                    this.cells[cellID].solution = this.words[lineid].word.charAt(i);;
                    this.cells[cellID].clickable = true;
                    this.cells[cellID].lineID.push(lineid);
                }
            }
            else if (dir == "d")
            {
                var startingRow = +this.words[lineid].startingCell.slice(1, 2);
                var col = +lineid.slice(0, 1);
                for (var i = 0; i < this.words[lineid].word.length; i++)
                {
                    var cellNum = startingRow + i;
                    var cellID = `r${cellNum}c${col}`;
                    this.cells[cellID].solution = this.words[lineid].word.charAt(i);;
                    this.cells[cellID].clickable = true;
                    this.cells[cellID].lineID.push(lineid);
                }
            }
        }
    }
}

const puzzles = [
    new puzzle({
        "2a": {
          "word": "caked",
          "clue": "Shuffle the deck and add an Ace, now it's covered.",
          "startingCell": "r2c1"
        },
        "4a": {
          "word": "stray",
          "clue": "Flat fish on the street, move away!",
          "startingCell": "r4c1"
        },
        "2d": {
          "word": "cacti",
          "clue": "A tactic without a team is a mess, they're painful to touch.",
          "startingCell": "r1c2"
        },
        "4d": {
          "word": "regal",
          "clue": "Royal beer, bottoms up!",
          "startingCell": "r1c4"
        }
      }),

    // new puzzle({
    //     "1a": {word: "bowel", clue: "Digestive organ puts energy into crockery"}
    // })
]

const currentPuzzle = 0;
var dirSwitch = false;
var selectedLine = null;
var selectedCell = null;
var time = 0;

function getCellsInLine(line)
{
    var dir = line.slice(1);
    var index = line.slice(0, 1);
    var res = [];
    if (dir == "a")
    {
        for (var i = 1; i < 6; i++)
        {
            res.push(`r${index}c${i}`);
        }
    }
    else if (dir == "d")
    {
        for (var i = 1; i < 6; i++)
        {
            res.push(`r${i}c${index}`);
        }
    }
}

function selectCell(cell)
{
    selectedCell = cell;
    calcLine();
    updateHighlight();
    showClue();
}

function calcLine()
{
    if (puzzles[currentPuzzle].cells[selectedCell].lineID.length < 2)
    {
        selectedLine = puzzles[currentPuzzle].cells[selectedCell].lineID[0];
    }
    else
    {
        selectedLine = puzzles[currentPuzzle].cells[selectedCell].lineID[+dirSwitch];
    }
}

function updateHighlight()
{
    Object.keys(puzzles[currentPuzzle].cells).forEach(cID => {
        document.getElementById(cID).classList.remove("lineSelect");
        document.getElementById(cID).classList.remove("cellSelect");
    })

    Object.keys(puzzles[currentPuzzle].cells).filter(c => puzzles[currentPuzzle].cells[c].lineID.includes(selectedLine)).forEach(cID => {
        document.getElementById(cID).classList.add("lineSelect");
    })

    document.getElementById(selectedCell).classList.add("cellSelect");
}

function moveCell(dir)
{
    var row = "" + puzzles[currentPuzzle].cells[selectedCell].r;
    var col = "" + puzzles[currentPuzzle].cells[selectedCell].c;
    var newRow = +row;
    var newCol = +col;

    switch(dir)
    {
        case "ArrowLeft":
            newCol--
            break;
        case "ArrowUp":
            newRow--;
            break;
        case "ArrowRight":
            newCol++;
            break;
        case "ArrowDown":
            newRow++;
            break;
    }

    var newCell = `r${newRow}c${newCol}`;

    const cids = Object.keys(puzzles[currentPuzzle].cells);
    const cellsAhead = (dir == "ArrowLeft" || dir == "ArrowRight")
        ? cids.filter(cID => puzzles[currentPuzzle].cells[cID].r == row && puzzles[currentPuzzle].cells[cID].c > col) 
        : cids.filter(cID => puzzles[currentPuzzle].cells[cID].c == col && puzzles[currentPuzzle].cells[cID].r > row);
    const emptyCellsAhead = cellsAhead.filter(cID => !puzzles[currentPuzzle].cells[cID].val);

    if ((dir == "ArrowRight" || dir == "ArrowDown") && !Object.keys(puzzles[currentPuzzle].cells).includes(newCell))
    {
        if (emptyCellsAhead.length > 0) 
        {
            dirSwitch = !(dir == "ArrowRight" || dir == "ArrowLeft");
            selectCell(emptyCellsAhead[0]);
        }
        else
        {
            clueArrow(1);
        }
    }
    else if (Object.keys(puzzles[currentPuzzle].cells).includes(newCell) && puzzles[currentPuzzle].cells[newCell].clickable)
    {
        if (!puzzles[currentPuzzle].cells[newCell].val)
        {
            dirSwitch = !(dir == "ArrowRight" || dir == "ArrowLeft");
            selectCell(newCell);
        }
        else if ((dir == "ArrowRight" || dir == "ArrowDown") && emptyCellsAhead.length > 0)
        {
            dirSwitch = !(dir == "ArrowRight" || dir == "ArrowLeft");
            selectCell(emptyCellsAhead[0]);
        }
        else
        {
            selectCell(newCell)
        }
    }
}

function showClue()
{
    var thisClue = puzzles[currentPuzzle].words[selectedLine];
    document.getElementById("clue").innerHTML = thisClue.clue + ` (${thisClue.word.length})`;
}

function keyPress(letter)
{
    if (!puzzles[currentPuzzle].cells[selectedCell].clickable) return;
    document.getElementById(selectedCell).innerHTML = letter;
    puzzles[currentPuzzle].cells[selectedCell].val = letter;
    var dir = selectedLine.slice(1);
    if (dir == "a") moveCell("ArrowRight");
        else if (dir == "d") moveCell("ArrowDown");
    
    if (checkFin()) checkSolution();
}

function backspace()
{
    if (!puzzles[currentPuzzle].cells[selectedCell].clickable) return;
    if (document.getElementById(selectedCell).innerHTML == "")
    {
        var dir = selectedLine.slice(1);
    if (dir == "a") moveCell("ArrowLeft");
        else if (dir == "d") moveCell("ArrowUp")
    }
    else
    {
        puzzles[currentPuzzle].cells[selectedCell].val = null;
        document.getElementById(selectedCell).innerHTML = null;
    }
}

function clueArrow(dir, override = false)
{
    // not going to next clue
    var currentWord = Object.keys(puzzles[currentPuzzle].words).indexOf(selectedLine);
    var nWords = Object.keys(puzzles[currentPuzzle].words).length;
    var newIndex = (nWords + currentWord + dir) % nWords;
    var newSelectedLine = Object.keys(puzzles[currentPuzzle].words)[newIndex];

    if (checkFin() && !override) return;

    selectedLine = newSelectedLine;
    var startCell = puzzles[currentPuzzle].words[selectedLine].startingCell;
    var dir = "" + selectedLine.slice(1);

    var emptyCellsOfNewLine = dir == "a" ? 
    Object.keys(puzzles[currentPuzzle].cells).filter(cID => puzzles[currentPuzzle].cells[cID].r == puzzles[currentPuzzle].cells[startCell].r && puzzles[currentPuzzle].cells[cID].c >= puzzles[currentPuzzle].cells[startCell].c && !puzzles[currentPuzzle].cells[cID].val) :
    Object.keys(puzzles[currentPuzzle].cells).filter(cID => puzzles[currentPuzzle].cells[cID].c == puzzles[currentPuzzle].cells[startCell].c && puzzles[currentPuzzle].cells[cID].r >= puzzles[currentPuzzle].cells[startCell].r && !puzzles[currentPuzzle].cells[cID].val);
    selectedCell = emptyCellsOfNewLine[0];
    
    updateHighlight();
    showClue();
}

function checkFin()
{
    var clickables = Object.values(puzzles[currentPuzzle].cells).filter(c => c.clickable);
    var filled = clickables.filter(c => c.val).length;
    if (filled >= clickables.length) return true;
        else return false;
}

function checkSolution()
{
    var clickables = Object.values(puzzles[currentPuzzle].cells).filter(c => c.clickable);
    var correct = clickables.filter(c => c.val && c.val.toUpperCase() == c.solution.toUpperCase()).length;
    if (correct >= clickables.length) 
    {
        clearInterval(timer);
        var mins = Math.floor(time / 60);
        var secs = time % 60;
        document.getElementById("solveTime").innerHTML = `${mins}:${String(secs).padStart(2, '0')}`
        document.getElementById('overScreen').classList.add("showOverScreen");
        document.getElementById('winWindow').classList.add("winned");
    }
}

function help()
{
    document.getElementById('helpOverScreen').classList.add("showOverScreen");
    document.getElementById('helpWindow').classList.add("helpShow");
}

function closeHelp()
{
    document.getElementById('helpOverScreen').classList.remove("showOverScreen");
    document.getElementById('helpWindow').classList.remove("helpShow");
}

function closeWin()
{
    document.getElementById('overScreen').classList.remove("showOverScreen");
    document.getElementById('winWindow').classList.remove("winned");
}

document.querySelectorAll('.overScreen').forEach(cellElement => {
    cellElement.addEventListener('click', e => {
        if (e.target.id == "overScreen") closeWin();
        if (e.target.id == "helpOverScreen") closeHelp();
        document.getElementById('pseudo').focus();
    })
})

document.querySelectorAll('.cell').forEach(cellElement => {
    cellElement.addEventListener('click', e => {
        if (Object.keys(puzzles[currentPuzzle].cells).includes(e.target.id) && puzzles[currentPuzzle].cells[e.target.id].clickable)
        {
            if (selectedCell == e.target.id) dirSwitch = !dirSwitch;
            selectCell("" + e.target.id);
            document.getElementById('pseudo').focus();
        }
    })
})

document.querySelectorAll('.kbKey').forEach(kbkey => {
    kbkey.addEventListener('click', e => {
        if (e.target.id == "bkspc")
        {
            backspace();
            return;
        }
        keyPress(e.target.id);
    });
});

document.getElementById('gameCont').addEventListener('click', e => {
    document.getElementById('pseudo').focus();
})

document.getElementById('pseudo').addEventListener('keydown', e => {
    if ((e.key.match(/[A-Z]/i) && e.key.length < 2) || e.key == "Backspace" || e.key == "Tab" || e.key.match(/Arrow/))
    {
        e.preventDefault();
    }

    if (e.key.match(/[A-Z]/i) && e.key.length < 2 && selectedCell)
    {
        keyPress(e.key);
    }
    else if (e.key == "Backspace" && selectedCell)
    {
        backspace();
    }
    else if (e.key == "Tab")
    {
        e.preventDefault();
        var dir = e.shiftKey ? -1 : 1;
        clueArrow(dir);
    }
    else if (e.key.match(/Arrow/))
    {
        moveCell(e.key);
    }
})

window.visualViewport.addEventListener('resize', () => {
    handleResize();
});

function handleResize()
{
    const computedStyle = window.getComputedStyle(document.getElementById("gameCont"));
    const paddingTop = +computedStyle.paddingTop.slice(0, -2);
    const paddingBot = +computedStyle.paddingBottom.slice(0, -2);
    const logoH = document.getElementById("logo").getBoundingClientRect().height;
    const kbH = document.getElementById("mobileKB").getBoundingClientRect().height;
    const centralContH = document.getElementById("centralCont").getBoundingClientRect().height;

    const totalH = paddingTop + paddingBot + logoH + kbH + centralContH + 40;

    var tableW = document.getElementById("gameTable").getBoundingClientRect().width;
    
    if (totalH > window.visualViewport.height)
    {
        tableW = tableW - (totalH - window.visualViewport.height);
        document.getElementById("gameTable").style.width = tableW+'px';
    }
    document.getElementById("gameTable").style.height = tableW+'px';
}

handleResize();

for (var cellID in puzzles[currentPuzzle].cells)
{
    if (!puzzles[currentPuzzle].cells[cellID].clickable) document.getElementById(cellID).classList.add("cellBlocked")
}

var timer = setInterval(() => {
    time++;
    var mins = Math.floor(time / 60);
    var secs = time % 60;
    document.getElementById("time").innerHTML = `${mins}:${String(secs).padStart(2, '0')}`
}, 1000)

selectCell(Object.keys(puzzles[currentPuzzle].cells).filter(cID => puzzles[currentPuzzle].cells[cID].clickable)[0]);
document.getElementById('pseudo').focus();