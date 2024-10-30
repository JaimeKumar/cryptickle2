class cell
{
    constructor()
    {
        this.val = "";
        this.solution = "";
        this.lineID = [];
        this.clickable = false;
    }
}

class word
{
    constructor(w, clue)
    {
        this.word = w;
        this.clue = clue;
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
                this.cells[cellID] = new cell();
            }
        }

        for (var lineid in this.words)
        {
            var dir = lineid.slice(1);
            if (dir == "a")
            {
                var row = +lineid.slice(0, 1);
                for (var i = 0; i < this.words[lineid].word.length; i++)
                {
                    var cellNum = i+1;
                    var cellID = `r${row}c${cellNum}`;
                    this.cells[cellID].solution = this.words[lineid].word.charAt(i);;
                    this.cells[cellID].clickable = true;
                    this.cells[cellID].lineID.push(lineid);
                }
            }
            else if (dir == "d")
            {
                var col = +lineid.slice(0, 1);
                for (var i = 0; i < this.words[lineid].word.length; i++)
                {
                    var cellNum = i+1;
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
        "2a": new word("caked", "Shuffle the deck and add an Ace, now it's covered."),
        "4a": new word("stray", "Flat fish on the street, move away!"),
        "2d": new word("cacti", "A tactic without a team is a mess, they're painful to touch."),
        "4d": new word("regal", "Royal beer, bottoms up!")
    }),

    new puzzle({
        "1a": new word("bowel", "Digestive organ puts energy into crockery")
    })
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
    var row = "" + selectedCell.slice(1, 2);
    var col = "" + selectedCell.slice(3);
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
        ? cids.filter(cID => cID.slice(1, 2) == row && cID.slice(3) > col) 
        : cids.filter(cID => cID.slice(3) == col && cID.slice(1, 2) > row);
    const emptyCellsAhead = cellsAhead.filter(cID => puzzles[currentPuzzle].cells[cID].val == "");

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
        if (puzzles[currentPuzzle].cells[newCell].val == "")
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

    // if (Object.keys(puzzles[currentPuzzle].cells).includes(newCell) && puzzles[currentPuzzle].cells[newCell].clickable)
    // {
    //     if ((dir == "ArrowDown" || dir == "ArrowRight")  && puzzles[currentPuzzle].cells[newCell].val != "")
    //     {
    //         const cids = Object.keys(puzzles[currentPuzzle].cells);
    //         const cellsAhead = across 
    //             ? cids.filter(cID => cID.slice(1, 2) == row && cID.slice(3) > col) 
    //             : cids.filter(cID => cID.slice(3) == col && cID.slice(1, 2) > row);
    //         const emptyCellsAhead = cellsAhead.filter(cID => puzzles[currentPuzzle].cells[cID].val == "");

    //         if (emptyCellsAhead.length > 0) 
    //         {
    //             dirSwitch = !(dir == "ArrowRight" || dir == "ArrowLeft");
    //             selectCell(emptyCellsAhead[0]);
    //             return;
    //         }
    //     }
    //     dirSwitch = !(dir == "ArrowRight" || dir == "ArrowLeft");
    //     selectCell(newCell);
    // }
    // else
    // {
    //     clueArrow(1);
    // }
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
        puzzles[currentPuzzle].cells[selectedCell].val = "";
        document.getElementById(selectedCell).innerHTML = "";
    }
}

function clueArrow(dir, override = false)
{
    var currentWord = Object.keys(puzzles[currentPuzzle].words).indexOf(selectedLine);
    var nWords = Object.keys(puzzles[currentPuzzle].words).length;
    var newIndex = (nWords + currentWord + dir) % nWords;
    var newSelectedLine = Object.keys(puzzles[currentPuzzle].words)[newIndex];

    if (checkFin() && !override) return;

    // var cellsInNewLine = getCellsInLine(newSelectedLine);
    // var full = false;
    // for (var i = 0; i < cellsInNewLine.lenght; i++)
    // {
    //     var cID = cellsInNewLine[0];
    //     if (puzzles[currentPuzzle].cells[cID].val != "")
    //     {
    //         full = true;
    //         break;
    //     }
    // }

    // if (full)
    // {
    //     clueArrow(dir)
    // }
    // else
    // {
    //     selectedLine = newSelectedLine;
    //     var dir = "" + selectedLine.slice(1);
    //     if (dir == "a") selectedCell = `r${selectedLine.slice(0, 1)}c1`;
    //     else if (dir == "d") selectedCell = `r1c${selectedLine.slice(0, 1)}`;
    //     updateHighlight();
    //     showClue();
    // }

    selectedLine = newSelectedLine;
    var dir = "" + selectedLine.slice(1);
    if (dir == "a") selectedCell = `r${selectedLine.slice(0, 1)}c1`;
    else if (dir == "d") selectedCell = `r1c${selectedLine.slice(0, 1)}`;
    updateHighlight();
    showClue();
}

function checkFin()
{
    var clickables = Object.values(puzzles[currentPuzzle].cells).filter(c => c.clickable);
    var filled = clickables.filter(c => c.val != "").length;
    if (filled >= clickables.length) return true;
        else return false;
}

function checkSolution()
{
    var clickables = Object.values(puzzles[currentPuzzle].cells).filter(c => c.clickable);
    var correct = clickables.filter(c => c.val.toUpperCase() == c.solution.toUpperCase()).length;
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

    console.log("padT: " + paddingTop)
    console.log("padB: " + paddingBot)
    console.log("logoH: " + logoH)
    console.log("kbH: " + kbH)
    console.log("contH: " + centralContH)
    console.log("totalH: " + totalH)
    console.log("visViewPortH: " + window.visualViewport.height)
    console.log("screenavailH: " + screen.availHeight)
    
    var tableW = document.getElementById("gameTable").getBoundingClientRect().width;
    
    if (totalH > screen.availHeight)
    {
        tableW = tableW - (totalH - screen.availHeight);
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