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
                "hints": ["'half-blind' - take out one of the two 'I's in a word", "'drunk' is an anagram indicator", "The solution means path", "Find a word that means cooperate, take out an I, anagram for a word meaning path"]
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
              "3a": {
                "word": "hovel",
                "clue": "Lifeless vole wandering in the empty hall to find shelter",
                "startingCell": "r3c1",
                "hints": [
                  "The solution is synonymous to 'shelter'",
                  "'Lifeless vole' refers to VOE",
                  "'wandering' is an anagram indicator",
                  "'in the empty hall' tells you to empty hall -> H...L and put something inside"
                ]
              },
              "5a": {
                "word": "spray",
                "clue": "The sound of praise swirls into the mist",
                "startingCell": "r5c1",
                "hints": [
                  "'The sound of praise' refers to a homophone of 'praise'",
                  "'swirls' is an anagram indicator",
                  "The solution means mist",
                  "Find an anagram of a homophone of 'praise' that can mean 'mist'"
                ]
              },
              "1d": {
                "word": "aches",
                "clue": "Sorrows are considerably harder endured solo, at first",
                "startingCell": "r1c1",
                "hints": [
                  "The solution means 'sorrows'",
                  "'at first' indicates you should look at the first letters of words",
                  "Are Considerable Harder Endured Solo..."
                ]
              },
              "3d": {
                "word": "lever",
                "clue": "Party up, it's a bar!",
                "startingCell": "r1c3",
                "hints": [
                  "The solution is synonymous with 'bar'",
                  "'up' on a down clue is a reversal indicator",
                  "Find a word that's synonymous with party and reverse it",
                  "The reversable word can also mean 'enjoy oneself'"
                ]
              },
              "5d": {
                "word": "alley",
                "clue": "I, lacking energy after all, find a way",
                "startingCell": "r1c5",
                "hints": [
                  "'I' refers to EYE",
                  "The solution means 'way'",
                  "'I, lacking energy' means remove an E from EYE",
                  "'after all' is quite literal"
                ]
              }
            },
            "7": {
              "1a": {
                "word": "asset",
                "startingCell": "r1c1",
                "clue": "Bending chairs is a talent",
                "hints": [
                  "Bending is an anagram indicator",
                  "The solution means 'talent'",
                  "Find a synonym of chairs that is an anagram for a synonym of talent"
                ]
              },
              "2a": {
                "word": "polo",
                "startingCell": "r2c2",
                "clue": "Greek deity obliterates Albanian for sport",
                "hints": [
                  "The solution is a sport",
                  "'obliterates' is a deletion indicator",
                  "Albanian = AL",
                  "A Greek deity without A and L makes a type of sport"
                ]
              },
              "4a": {
                "word": "ethos",
                "startingCell": "r4c1",
                "clue": "Climate is wildly hot between East and South",
                "hints": [
                  "'wildly' is an anagram indicator",
                  "East and South refer to E and S respectively",
                  "The solution is synonymous with 'Climate'",
                  "E + anagram of HOT + S = synonym of climate"
                ]
              },
              "2d": {
                "word": "spats",
                "startingCell": "r1c2",
                "clue": "Disagreements from affectionate touch in a boat",
                "hints": [
                  "The solution means 'disagreements'",
                  "'boat' refers to SS",
                  "Put a word for 'affectionate touch' in S___S for a synonym of disagreements"
                ]
              },
              "3d": {
                "word": "so",
                "startingCell": "r1c3",
                "clue": "Very loud knitting",
                "hints": [
                  "The solution means 'very'",
                  "'loud' is a homophone indicator",
                  "The solution sounds like a synonym of knitting, that means very"
                ]
              },
              "4d": {
                "word": "elbow",
                "startingCell": "r1c4",
                "clue": "Hinge is broken below",
                "hints": [
                  "The solution is a hinge",
                  "Broken is an anagram indicator"
                ]
              },
              "5d": {
                "word": "to",
                "startingCell": "r1c5",
                "clue": "Egg tea from the south is dear",
                "hints": [
                  "'Egg' refers to O",
                  "'tea' refers to T",
                  "'from the south' is a reversal indicator",
                  "The solution is a synonym of 'dear'"
                ]
              }
            },
            "8": {
              "1a": {
                "word": "tepid",
                "startingCell": "r1c1",
                "clue": "Warm cooked pastry stored in the drawer openings",
                "hints": [
                  "The solution means warm",
                  "'cooked' is an anagram indicator",
                  "'the drawer openings' refers to TD (T he   D raw)",
                  "An anagram of a type of pastry between T and D makes a word for 'warm'"
                ]
              },
              "4a": {
                "word": "nib",
                "startingCell": "r4c3",
                "clue": "Recycle bin, that's a tip",
                "hints": [
                  "Recycle is a reversal indicator",
                  "This one is honestly a bit rubbish, sorry it's 11pm and I haven't finished the puzzle. It's Nib. As in tip/nib, and bin backwards"
                ]
              },
              "1d": {
                "word": "twin",
                "startingCell": "r1c1",
                "clue": "It went swimmingly, minus the extra-terrestrial clone",
                "hints": [
                  "'swimmingly' is an anagram indicator",
                  "The solution is synonymous with 'clone'",
                  "'minus the extra-terrestrial' means take away the letters ET",
                  "ITWENT minus ET -> anagram -> clone"
                ]
              },
              "3d": {
                "word": "plant",
                "startingCell": "r1c3",
                "clue": "A scheme takes time to flower",
                "hints": [
                  "The solution is synonymous with 'flower'",
                  "'time' refers to T",
                  "Find a synonym of 'scheme' and add T for a synonym of flower "
                ]
              },
              "5d": {
                "word": "doubt",
                "startingCell": "r1c5",
                "clue": "Confusion from you cutting birthday before tea",
                "hints": []
              }
            },
            "9": {
              "1a": {
                "word": "grave",
                "startingCell": "r1c1",
                "clue": "Serious party after midnight",
                "hints": [
                  "The solution means 'serious'",
                  "'midnight' refers to G, as in middle of 'night'"
                ]
              },
              "5a": {
                "word": "antsy",
                "startingCell": "r5c1",
                "clue": "Insect, wise in retrospect, is nervous",
                "hints": []
              },
              "2d": {
                "word": "ramen",
                "startingCell": "r1c2",
                "clue": "Right then finish a prayer for noodle soup",
                "hints": [
                  "Right = R",
                  "The solution means 'noodle soup'",
                  "'finish a prayer' refers to AMEN"
                ]
              },
              "4d": {
                "word": "Veins",
                "startingCell": "r1c4",
                "clue": "Very choppy wave ",
                "hints": [
                  "Very = V",
                  "'choppy' is a anagram indicator",
                  "wave refers to SINE"
                ]
              }
            },
            "10": {
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