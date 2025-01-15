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
        this.hintsUsed = 0;
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

        for (var word in this.words)
        {
            this.words[word].hintsUsed = 0;
        }
    }
}

var today = new Date();
var year = today.getFullYear();
var month = today.getMonth() + 1;
var day = today.getDate();  

var dirSwitch = false;
var selectedLine = null;
var selectedCell = null;
var time = 0;
var archivesPos = 0;
var archiveYear = null;
var archiveMonth = null;
var timer;

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
    if (thisPuzzle.cells[selectedCell].lineID.length < 2)
    {
        selectedLine = thisPuzzle.cells[selectedCell].lineID[0];
    }
    else
    {
        selectedLine = thisPuzzle.cells[selectedCell].lineID[+dirSwitch];
    }

    if (!selectedLine) selectedLine = Object.keys(thisPuzzle.words)[0];
}

function updateHighlight()
{
    Object.keys(thisPuzzle.cells).forEach(cID => {
        document.getElementById(cID).classList.remove("lineSelect");
        document.getElementById(cID).classList.remove("cellSelect");
    })

    Object.keys(thisPuzzle.cells).filter(c => thisPuzzle.cells[c].lineID.includes(selectedLine)).forEach(cID => {
        document.getElementById(cID).classList.add("lineSelect");
    })

    document.getElementById(selectedCell).classList.add("cellSelect");
}

function moveCell(dir)
{
    var row = "" + thisPuzzle.cells[selectedCell].r;
    var col = "" + thisPuzzle.cells[selectedCell].c;
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

    const cids = Object.keys(thisPuzzle.cells);
    const cellsAhead = (dir == "ArrowLeft" || dir == "ArrowRight")
        ? cids.filter(cID => thisPuzzle.cells[cID].r == row && thisPuzzle.cells[cID].c > col) 
        : cids.filter(cID => thisPuzzle.cells[cID].c == col && thisPuzzle.cells[cID].r > row);
    const emptyCellsAhead = cellsAhead.filter(cID => !thisPuzzle.cells[cID].val);

    if ((dir == "ArrowRight" || dir == "ArrowDown") && !Object.keys(thisPuzzle.cells).includes(newCell))
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
    else if (Object.keys(thisPuzzle.cells).includes(newCell) && thisPuzzle.cells[newCell].clickable)
    {
        if (!thisPuzzle.cells[newCell].val)
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
            selectCell(newCell);
        }
    }
}

function showClue()
{
    var thisClue = thisPuzzle.words[selectedLine];
    document.getElementById("clue").innerHTML = thisClue.clue + ` (${thisClue.word.length})`;

    var used = thisPuzzle.words[selectedLine].hintsUsed % thisPuzzle.words[selectedLine].hints.length;

    if (used > 0)
    {
        document.getElementById('hintDisplay').innerHTML = thisPuzzle.words[selectedLine].hints[used];
        document.getElementById('hintNum').innerHTML = `${Math.min(thisPuzzle.words[selectedLine].hintsUsed, thisPuzzle.words[selectedLine].hints.length)} / ${thisPuzzle.words[selectedLine].hints.length} revealed`;
    }
    else
    {
        document.getElementById('hintDisplay').innerHTML = "";
        document.getElementById('hintNum').innerHTML = `0 / ${thisPuzzle.words[selectedLine].hints.length} revealed`;
    }
    document.getElementById('hintLine').innerHTML = `Hints for ${selectedLine}`;
    document.getElementById('hiddenReveal').classList.remove('hideHiddenReveal');
}

function keyPress(letter)
{
    if (!thisPuzzle.cells[selectedCell].clickable) return;
    document.getElementById(selectedCell).innerHTML = letter;
    thisPuzzle.cells[selectedCell].val = letter;
    var dir = selectedLine.slice(1);
    if (dir == "a") moveCell("ArrowRight");
        else if (dir == "d") moveCell("ArrowDown");
    
    if (checkFin()) checkSolution();
}

function backspace()
{
    if (!thisPuzzle.cells[selectedCell].clickable) return;
    if (document.getElementById(selectedCell).innerHTML == "")
    {
        var dir = selectedLine.slice(1);
    if (dir == "a") moveCell("ArrowLeft");
        else if (dir == "d") moveCell("ArrowUp")
    }
    else
    {
        thisPuzzle.cells[selectedCell].val = null;
        document.getElementById(selectedCell).innerHTML = null;
    }
}

function clueArrow(dir, override = false)
{
    var currentWord = Object.keys(thisPuzzle.words).indexOf(selectedLine);
    var nWords = Object.keys(thisPuzzle.words).length;
    var newIndex = (nWords + currentWord + dir) % nWords;
    var newSelectedLine = Object.keys(thisPuzzle.words)[newIndex];

    if (checkFin() && !override) return;

    selectedLine = newSelectedLine;
    var startCell = thisPuzzle.words[selectedLine].startingCell;
    var dir = "" + selectedLine.slice(1);

    var emptyCellsOfNewLine = dir == "a" ? 
    Object.keys(thisPuzzle.cells).filter(cID => thisPuzzle.cells[cID].r == thisPuzzle.cells[startCell].r && thisPuzzle.cells[cID].c >= thisPuzzle.cells[startCell].c && !thisPuzzle.cells[cID].val) :
    Object.keys(thisPuzzle.cells).filter(cID => thisPuzzle.cells[cID].c == thisPuzzle.cells[startCell].c && thisPuzzle.cells[cID].r >= thisPuzzle.cells[startCell].r && !thisPuzzle.cells[cID].val);

    if (emptyCellsOfNewLine.length < 1) 
    {
        selectedCell = thisPuzzle.words[selectedLine].startingCell;
    }
    else
    {
        selectedCell = emptyCellsOfNewLine[0];
    }
    
    updateHighlight();
    showClue();

}

function checkFin()
{
    var clickables = Object.values(thisPuzzle.cells).filter(c => c.clickable);
    var filled = clickables.filter(c => c.val).length;

    if (filled >= clickables.length) return true;
        else return false;
}

function checkSolution()
{
    var clickables = Object.values(thisPuzzle.cells).filter(c => c.clickable);
    var correct = clickables.filter(c => c.val && c.val.toUpperCase() == c.solution.toUpperCase()).length;

    if (correct >= clickables.length) 
    {
        localStorage.setItem(puzzleID, true);
        clearInterval(timer);
        var mins = Math.floor(time / 60);
        var secs = time % 60;
        document.getElementById("solveTime").innerHTML = `${mins}:${String(secs).padStart(2, '0')}`
        document.getElementById("hintsUsedWin").innerHTML = `Using ${thisPuzzle.hintsUsed} hints.`
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

const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dates = ["", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"]
function archives()
{
    document.getElementById('archivesOverscreen').classList.add('showOverScreen');
    document.getElementById('archives').classList.add('helpShow')
    updateArchiveScreen();
}

function archiveClick(nodeID)
{
    switch (archivesPos)
    {
        case 0:
            archiveYear = nodeID;
            break;
        case 1:
            archiveMonth = nodeID;
            break;
        case 2:
            thisPuzzle = new puzzle(returnPuzzle(archiveYear, archiveMonth, nodeID));
            puzzleID = nodeID + "/" + archiveMonth + "/" + archiveYear;
            initPuzzle();
            closeArchives();
            return;
    }
    archivesPos++;
    updateArchiveScreen();
}

function updateArchiveScreen()
{
    var title = "Archives";
    switch (archivesPos)
    {
        case 0:
            var nodes = returnYears(year);
            break;
        case 1:
            var nodes = returnMonths(archiveYear, month, year);
            var disp = months;
            title += " > " + archiveYear;
            break;
        case 2:
            var d = (archiveMonth == month) ? day : -1;
            var nodes = returnDays(archiveYear, archiveMonth, d);
            var disp = dates;
            title += " > " + archiveYear + " > " + months[archiveMonth];
            break;
    }

    document.getElementById("archiveTitle").innerHTML = title;

    var elements = [];
    nodes.forEach((nodeID, i) => {
        var id = nodeID + "/" + archiveMonth  + "/" + archiveYear;
        console.log(localStorage.getItem(id) == "true" ? "archiveNode solved" : "archiveNode");
        if (archivesPos == 0) elements.push(`<div class="archiveNode" onclick="archiveClick(${nodeID})">${nodeID}</div>`)
            else elements.push(`<div class="${localStorage.getItem(id) == "true"? "archiveNode solved" : "archiveNode"}" onclick="archiveClick(${nodeID})">${disp[nodeID]}</div>`)
    })

    document.getElementById('archivesDisplay').innerHTML = elements.join('');
}

function archiveBack()
{
    if (archivesPos < 1)
    {
        closeArchives();
        return;
    }

    archivesPos--;
    updateArchiveScreen();
}

function closeArchives()
{
    document.getElementById('archivesOverscreen').classList.remove('showOverScreen');
    document.getElementById('archives').classList.remove('helpShow');
}

function hintDesktop()
{
    document.getElementById('hiddenReveal').classList.add('hideHiddenReveal');
    var used = thisPuzzle.words[selectedLine].hintsUsed % thisPuzzle.words[selectedLine].hints.length;

    if (thisPuzzle.words[selectedLine].hintsUsed < thisPuzzle.words[selectedLine].hints.length) thisPuzzle.hintsUsed++;
    thisPuzzle.words[selectedLine].hintsUsed++;

    document.getElementById('hintDisplay').innerHTML = thisPuzzle.words[selectedLine].hints[used];
    document.getElementById('hintNum').innerHTML = `${Math.min(thisPuzzle.words[selectedLine].hintsUsed, thisPuzzle.words[selectedLine].hints.length)} / ${thisPuzzle.words[selectedLine].hints.length} revealed`;
}

function hint()
{
    var used = thisPuzzle.words[selectedLine].hintsUsed % thisPuzzle.words[selectedLine].hints.length;
    document.getElementById('hintClue').innerHTML = `for clue ${selectedLine} &nbsp;&nbsp; | &nbsp;&nbsp;   hint ${(used + 1)} / ${thisPuzzle.words[selectedLine].hints.length}`;
    if (thisPuzzle.words[selectedLine].hintsUsed < thisPuzzle.words[selectedLine].hints.length) thisPuzzle.hintsUsed++;
    thisPuzzle.words[selectedLine].hintsUsed++;
    document.getElementById('hintsCont').innerHTML = thisPuzzle.words[selectedLine].hints[used];
    document.getElementById('hintOverscreen').classList.add('showOverScreen');
    document.getElementById('hintWindow').classList.add('winned');
}

function closeHints()
{
    document.getElementById('hintOverscreen').classList.remove('showOverScreen')
    document.getElementById('hintWindow').classList.remove('winned')
}

document.querySelectorAll('.overScreen').forEach(cellElement => {
    cellElement.addEventListener('click', e => {
        if (e.target.id == "overScreen") closeWin();
        if (e.target.id == "helpOverScreen") closeHelp();
        if (e.target.id == "hintOverscreen") closeHints();
        document.getElementById('pseudo').focus();
    })
})

document.querySelectorAll('.cell').forEach(cellElement => {
    cellElement.addEventListener('click', e => {
        if (Object.keys(thisPuzzle.cells).includes(e.target.id) && thisPuzzle.cells[e.target.id].clickable)
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
        else if (e.target.id == "hint")
        {
            hint();
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
    if (window.visualViewport.width !== initialWidth) return;
    const computedStyle = window.getComputedStyle(document.getElementById("gameCont"));
    const paddingTop = +computedStyle.paddingTop.slice(0, -2);
    const paddingBot = +computedStyle.paddingBottom.slice(0, -2);
    const logoH = document.getElementById("logo").getBoundingClientRect().height;
    const kbH = document.getElementById("mobileKB").getBoundingClientRect().height;
    const centralContH = document.getElementById("centralCont").getBoundingClientRect().height;

    const totalH = paddingTop + paddingBot + logoH + kbH + centralContH + 40 + (0.04 * window.visualViewport.height); // padding 40, footer 4svh

    var tableW = document.getElementById("gameTable").getBoundingClientRect().width;
    
    if (totalH > window.visualViewport.height || true) // or true is to allow resize not only if content is too big, but also too small!
    {
        tableW = tableW - (totalH - window.visualViewport.height);
        document.getElementById("gameTable").style.width = tableW +'px';
    }
    document.getElementById("gameTable").style.height = tableW +'px';
}

function noPuzzle() {
    document.getElementById('noPuzzle').classList.add('showOverScreen');
    document.getElementById('noPuzz').classList.add('winned');
}

function closeNoPuzz()
{
    document.getElementById('noPuzzle').classList.remove('showOverScreen');
    document.getElementById('noPuzz').classList.remove('winned');
    archives();
}

const initialWidth = window.visualViewport.width;

handleResize();
var thisPuzzle = new puzzle(returnPuzzle(year, month, day));
var puzzleID = day + "/" + month + "/" + year;

function initPuzzle()
{
    dirSwitch = false;
    selectedLine = null;
    selectedCell = null;
    archivesPos = 0;
    archiveYear = null;
    archiveMonth = null;

    for (var cellID in thisPuzzle.cells)
    {
        if (!thisPuzzle.cells[cellID].clickable) 
        {
            document.getElementById(cellID).classList.add("cellBlocked");
        }
        else
        {
            document.getElementById(cellID).classList.remove("cellBlocked");
        }
        
        document.getElementById(cellID).innerHTML = "";
    }
    
    clearInterval(timer);
    time = 0;
    document.getElementById("time").innerHTML = "0:00";
    timer = setInterval(() => {
        time++;
        var mins = Math.floor(time / 60);
        var secs = time % 60;
        document.getElementById("time").innerHTML = `${mins}:${String(secs).padStart(2, '0')}`;
        // handleResize();
    }, 1000)
    
    selectCell(Object.keys(thisPuzzle.cells).filter(cID => thisPuzzle.cells[cID].clickable)[0]);
    document.getElementById('pseudo').focus();
}

document.getElementById("year").innerHTML = year;

// console.log(thisPuzzle);
initPuzzle();
// if (Object.keys(thisPuzzle.words).length < 1) {
//     noPuzzle();
// }
// else {
//     initPuzzle();
// }