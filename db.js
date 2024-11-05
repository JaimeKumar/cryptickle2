// If you're reading this and you're yet to try very hard to solve the puzzle, I am disappointed in you.

const puzzles = {
    "2024": {
        "11": {
            "1": {
                "2a": {
                  "word": "caked",
                  "clue": "Shuffle a deck, now it's covered.",
                  "startingCell": "r2c1",
                  "hints": ["'now it's covered' - the solution means 'covered'", "'Shuffle a deck' - anagram of 'a deck'"]
                },
                "4a": {
                  "word": "stray",
                  "clue": "Wandering beam of light on the street.",
                  "startingCell": "r4c1",
                  "hints": ["The solution means 'wandering'", "'beam of light' - means RAY", "'on the street' - means ST"]
                },
                "2d": {
                  "word": "cacti",
                  "clue": "A tactic without a team leader is a mess, they're painful to touch.",
                  "startingCell": "r1c2",
                  "hints": ["The solution are painful to touch", "'is a mess' - find an anagram", "'without a team leader' - removing a T", "'A tactic without a team leader is a mess' - find an anagram of TACIC"]
                },
                "4d": {
                  "word": "regal",
                  "clue": "Royal beer, bottoms up!",
                  "startingCell": "r1c4",
                  "hints": ["The solution means royal", "'bottoms up' - indicates reversal on a down clue", "Reverse a type of beer to find a synonym of royal"]
                }
            },
            "2": {
                "2a": {
                  "word": "chill",
                  "clue": "High ground by the sea, very relaxing.",
                  "startingCell": "r2c1",
                  "hints": ["The solution means 'very relaxing'", "'by the sea' - refers to the letter C", "Find a word meaining 'high ground', that when you add a C means relaxing"]
                },
                "5a": {
                  "word": "bowel",
                  "clue": "Digestive organ puts energy into crockery.",
                  "startingCell": "r5c1",
                  "hints": ["The solution is a digestive organ", "'puts energy' - means add an E"]
                },
                "2d": {
                  "word": "photo",
                  "clue": "Boiling in a cruise, what an image!",
                  "startingCell": "r1c2",
                  "hints": ["The solution means 'image'", "'on a cruise' - refers to P and O", "'Boiling on a cruise' - put a word meaning boiling in P and O to get a word meaning image"]
                },
                "4d": {
                  "word": "plane",
                  "clue": "It sounds very dull and flat.",
                  "startingCell": "r1c4",
                  "hints": ["The solution is flat (as in it's something that is flat)", "'It sounds' - indicates a homophone", "The solution sounds like a word that means dull. What might you call unembellished toast for example?"]
                }
            },
            "3": {
                "1a": {
                  "word": "aside",
                  "clue": "My thoughts are confused and detached.",
                  "startingCell": "r1c1",
                  "hints": ["The solution means detached", "'confused' - indicates an anagram", "Find a word for one's thoughts that is an anagram for a word meaning detached", "My thoughts = ideas"]
                },
                "3a": {
                  "word": "arc",
                  "clue": "A really clever beginning to a story.",
                  "startingCell": "r3c2",
                  "hints": ["The solution means 'a story'", "'beginning' - indicates you should look at the beginning of words", "A Really Clever..."]
                },
                "5a": {
                  "word": "reply",
                  "clue": "Come back from reputation finished by whispered deception. ",
                  "startingCell": "r5c1",
                  "hints": ["The solution means 'come back'", "'reputation' refers to REP", "'whispered' indicates a homophone", "REP finished by a homophone of a word meaning deception", "deception - lie"]
                },
                "2d": {
                  "word": "scale",
                  "clue": "I hear leaf cabbage adds a second degree.",
                  "startingCell": "r1c2",
                  "hints": ["Leaf cabbage is another word for kale", "I hear is a homophone indicator", "The solution mans degree", "'adds a second' - add an S", "S + KALE"]
                },
                "4d": {
                  "word": "decal",
                  "clue": "Tied up for design.",
                  "startingCell": "r1c4",
                  "hints": ["The solution is a type of design", "'up' on a down clue indicates a reverse word", "The solution is a synonym of 'tied' but reversed", "tied = laced"]
                }
            },
            "4": {
              "1a": {
                "word": "feast",
                "clue": "Banquet has iron, arsenic and a suspicion of treason.",
                "startingCell": "r1c1",
                "hints": ["Try a periodic table", "'a suspicion of' can refer to the start of a word", "The solution means banquet", "iron = fe, arsenic = as, you can do the rest"]
              },
              "3a": {
                "word": "dusty",
                "clue": "Dirty work includes opening sewers.",
                "startingCell": "r3c1",
                "hints": ["'opening sewers' refers to the first letter of sewers", "The solution means dirty", "'includes' means the S is somewhere inside another word", "Find a word meaning work, add an S to mean dirty"]
              },
              "5a": {
                "word": "dress",
                "clue": "Decorate ship with a flurry of red.",
                "startingCell": "r5c1",
                "hints": ["ship referes to SS", "'flurry of red' - find an anagram of red", "The solution means decorate"]
              },
              "1d": {
                "word": "faded",
                "clue": "Dwindled craze ends with finale of fire and blood.",
                "startingCell": "r1c1",
                "hints": ["The solution means 'Dwindled'", "'with finale of fire and blood' means the last letters of fire and blood, E and D", "a word meaning craze + ED to get a word meaning dwindled", "fad"]
              },
              "3d": {
                "word": "aisle",
                "clue": "Cooperate half-blind and drunk to find a path.",
                "startingCell": "r1c3",
                "hints": ["'half-blind' - take one of the two 'I's in a word", "'drunk' is an anagram indicator", "The solution means path", "Find a word that means cooperate, take out an I, anagram for a word meaning path"]
              }
            },
            "5": {
              "1a": {
                "word": "fire",
                "clue": "Oust Italian rebel leader who invades the coasts of France.",
                "startingCell": "r1c1",
                "hints": ["The solution means oust", "Italian = I", "'the coasts of France' refers to the first and last letters of France", "rebel leader - first letter of rebel", "IR invades FE to mean oust"]
              },
              "3a": {
                "word": "royal",
                "clue": "Nobility at the edge of removal eats the last of the Pak Choy.",
                "startingCell": "r3c1",
                "hints": ["The solution means nobility", "'at the edge of removal' means take some letters from the start and finish of 'removal'", "'the last of the Pak Choy' - take some letters from the end of Pak Choy", "'eats' - R AL eats OY to mean Nobility"]
              },
              "1d": {
                "word": "forks",
                "clue": "Empty forests are okay, all jostling for branches.",
                "startingCell": "r1c1",
                "hints": ["The solution means 'branches'", "'Empty forests' means take all the letters out of 'forests', leaving FS", "'are okay' means ROK", "'all jostling' is an anagram indicator", "Find an anagram of FSROK that means 'branches'"]
              },
              "5d": {
                "word": "plot",
                "clue": "A blind pilot, that's a story.",
                "startingCell": "r2c5",
                "hints": ["The solution means story", "'blind pilot' - take the I out of 'pilot'"]
              }
            },
            "6": {
              "1a": {
                "word": "layer",
                "clue": "One tier of the cake is found in beer losing weight and gaining reasoning.",
                "startingCell": "r1c1",
                "hints": ["'losing weight' - remove a unit of weight, maybe LB or G", "'gaining reasoning' means adding Y (why)", "The solution means, for example, one tier of the cake", "Find a word for beer that when you remove G and add Y, you get a word that can mean a tier of a cake"]
              },
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