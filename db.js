// If you're reading this and you're yet to try very hard to solve the puzzle, I am disappointed in you.

const puzzles = {
    "2024": {
        "11": {
            "1": {
                "2a": {
                  "word": "caked",
                  "clue": "Shuffle the deck and add an Ace, now it's covered.",
                  "startingCell": "r2c1"
                },
                "4a": {
                  "word": "stray",
                  "clue": "Wandering beams of light on the street.",
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
            },
            "2": {
                "2a": {
                  "word": "chill",
                  "clue": "High ground by the sea, very relaxing.",
                  "startingCell": "r2c1"
                },
                "5a": {
                  "word": "bowel",
                  "clue": "Digestive organ puts energy into crockery.",
                  "startingCell": "r5c1"
                },
                "2d": {
                  "word": "photo",
                  "clue": "Boiling on a cruise, what an image!",
                  "startingCell": "r1c2"
                },
                "4d": {
                  "word": "plane",
                  "clue": "It sounds very dull and flat.",
                  "startingCell": "r1c4"
                }
            },
            "3": {
                "1a": {
                  "word": "aside",
                  "clue": "My thoughts are confused and detached.",
                  "startingCell": "r1c1"
                },
                "3a": {
                  "word": "arc",
                  "clue": "A really clever beginning to a story.",
                  "startingCell": "r3c2"
                },
                "5a": {
                  "word": "reply",
                  "clue": "Come back from reputation finished by whispered deception. ",
                  "startingCell": "r5c1"
                },
                "2d": {
                  "word": "scale",
                  "clue": "I hear leaf cabbage adds a second degree.",
                  "startingCell": "r1c2"
                },
                "4d": {
                  "word": "decal",
                  "clue": "Tied up for design.",
                  "startingCell": "r1c4"
                }
            },
            "4": {
              "1a": {
                "word": "feast",
                "clue": "Banquet has iron, arsenic and a suspicion of treason.",
                "startingCell": "r1c1"
              },
              "3a": {
                "word": "dusty",
                "clue": "Dirty work includes opening sewers.",
                "startingCell": "r3c1"
              },
              "5a": {
                "word": "dress",
                "clue": "Decorate ship with a flurry of red.",
                "startingCell": "r5c1"
              },
              "1d": {
                "word": "faded",
                "clue": "Dwindled craze ends with finale of fire and blood.",
                "startingCell": "r1c1"
              },
              "3d": {
                "word": "aisle",
                "clue": "Cooperate half-blind and drunk to find a path.",
                "startingCell": "r1c3"
              }
            }
        }
    }
}

function returnPuzzle(year, month, day)
{
    var res = puzzles[year][month][day];
    if (!res) return null;
    return res;    
}

function returnYears(currentYear)
{
    var res = Object.keys(puzzles).filter(yr => +yr <= currentYear);
    if (!res) return null;
    return res; 
}

function returnMonths(year, currentMonth)
{
    var res = Object.keys(puzzles[year]).filter(mo => +mo <= currentMonth);
    if (!res) return null;
    return res; 
}

function returnDays(year, month, currentDay)
{
    var res = Object.keys(puzzles[year][month]).filter(da => +da <= currentDay);
    if (!res) return null;
    return res;
}