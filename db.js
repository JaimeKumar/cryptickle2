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
                "clue": "Very choppy wave carries blood",
                "hints": [
                  "Very = V",
                  "'choppy' is a anagram indicator",
                  "wave refers to SINE"
                ]
              }
            },
            "10": {
              "1a": {
                "word": "minor",
                "startingCell": "r1c1",
                "clue": "Child housed by team in orphanage",
                "hints": [
                  "The solution means 'child'",
                  "'housed by' is a hidden-word indicator",
                  "The solution is hidden withing 'team in orphanage'"
                ]
              },
              "3a": {
                "word": "apt",
                "startingCell": "r3c1",
                "clue": "Fitting wobbly tap",
                "hints": [
                  "Solution means 'fitting'",
                  "'wobbly' is an anagram indicator"
                ]
              },
              "5a": {
                "word": "tied",
                "startingCell": "r5c2",
                "clue": "Edit edit fixed",
                "hints": [
                  "The solution means fixed",
                  "'edit edit' is telling you to edit the word edit. The solution is an anagram of 'edit'"
                ]
              },
              "2d": {
                "word": "input",
                "startingCell": "r1c2",
                "clue": "Russian politician is all over the place, that's an opinion",
                "hints": [
                  "The solution means 'opinion'",
                  "'is all over the place' is an anagram indicator",
                  "'Russian politician' refers to PUTIN ... it's just a puzzle"
                ]
              },
              "5d": {
                "word": "rapid",
                "startingCell": "r1c5",
                "clue": "Fleet are paid liberally",
                "hints": [
                  "The solution means 'fleet'",
                  "are = R",
                  "liberally is an anagram indicator",
                  "R + (PAID) anagram -> fleet (as in fast)"
                ]
              }
            },
            "11": {
              "1a": {
                "word": "hope",
                "startingCell": "r1c2",
                "clue": "Desire to jump with energy",
                "hints": [
                  "The solution means 'Desire'",
                  "'energy' refers to E",
                  "Jump refers HOP"
                ]
              },
              "2a": {
                "word": "hero",
                "startingCell": "r2c1",
                "clue": "Champion lives in niche room ",
                "hints": [
                  "The solution means 'Champion'",
                  "'lives in' is a hidden-word indicator",
                  "",
                  "",
                  ""
                ]
              },
              "5a": {
                "word": "duty",
                "startingCell": "r5c1",
                "clue": "At the first sign of danger, you try without a hint of reluctance to fulfil assignment",
                "hints": [
                  "The solution means 'assignment'",
                  "'the first sign of danger' refers to D",
                  "'without a hint of reluctance' means remove R",
                  "you = U",
                  "D + U + (TRY - R) -> assignment"
                ]
              },
              "2d": {
                "word": "he",
                "startingCell": "r1c2",
                "clue": "Half heat walls of house",
                "hints": [
                  "The clue is 2 cryptic clues in one",
                  "'walls of' refers to to the first and last letters of a word",
                  ""
                ]
              },
              "3d": {
                "word": "or",
                "startingCell": "r1c3",
                "clue": "Otherwise row for the audience backwards",
                "hints": [
                  "The solution means 'otherwise'",
                  "'for the audience' is a homophone indicator",
                  ""
                ]
              },
              "4d": {
                "word": "poppy",
                "startingCell": "r1c4",
                "clue": "Flower is starting to oppilate within the bounds of possibility",
                "hints": [
                  "The solution means 'Flower'",
                  "'starting to oppilate' refers to OPP",
                  "'the bounds of possibility' refers to PY"
                ]
              }
            },
            "12": {
              "2a": {
                "word": "alive",
                "startingCell": "r2c1",
                "clue": "An extravagant veil is flourishing",
                "hints": [
                  "An = A",
                  "'extravagant' is an anagram indicator ",
                  "The solution means flourishing"
                ]
              },
              "4a": {
                "word": "story",
                "startingCell": "r4c1",
                "clue": "Break down in wise retrospective anecdote",
                "hints": [
                  "The solution means 'anecdote'",
                  "'Break down' refers to ROT",
                  "'wise' means YS",
                  "'retrospective' is a reversal indicator"
                ]
              },
              "1d": {
                "word": "false",
                "startingCell": "r1c1",
                "clue": "Faulty leaf changes with first sign of summer",
                "hints": [
                  "The solution means 'Fault'",
                  "'changes' is an anagram indicator ",
                  "'first signs of summer' refers to S",
                  "LEAF + S ~> synonym for fault"
                ]
              },
              "4d": {
                "word": "every",
                "startingCell": "r1c4",
                "clue": "Each evening before the last moments of January",
                "hints": [
                  "The solution means 'Each'",
                  "'evening' refers to EVE",
                  "'the last moments of January' refers to RY",
                  ""
                ]
              }
            },
            "13": {
              "1a": {
                "word": "acute",
                "startingCell": "r1c1",
                "clue": "Severe injury in A&E",
                "hints": [
                  "The solution means 'severe'",
                  "'in A&E' means put something in A___E"
                ]
              },
              "5a": {
                "word": "force",
                "startingCell": "r5c1",
                "clue": "Enemy holding a remote control leads to violence",
                "hints": [
                  "The solution means 'violence'",
                  "'remote control' refers to RC",
                  "'Enemy' refers to FOE"
                ]
              },
              "1d": {
                "word": "aloof",
                "startingCell": "r1c1",
                "clue": "A drunken fool is unresponsive",
                "hints": [
                  "'drunken' is an anagram indicator",
                  "The solution means 'unresponsive'",
                  "A + (FOOL) = unresponsive"
                ]
              },
              "3d": {
                "word": "utter",
                "startingCell": "r1c3",
                "clue": "Pure butter without a slice of bread",
                "hints": [
                  "The solution means 'pure'",
                  "'a slice of bread' refers to B"
                ]
              },
              "5d": {
                "word": "emote",
                "startingCell": "r1c5",
                "clue": "Express check-up with ease",
                "hints": [
                  "'ease' refers to EE ('E's)",
                  "The solution means 'express'",
                  "'check-up' refers to MOT"
                ]
              }
            },
            "14": {
              "1a": {
                "word": "layer",
                "startingCell": "r1c1",
                "clue": "One tier of the cake is found in beer losing weight and gaining reasoning",
                "hints": [
                  "The solution means 'one tier of the cake'",
                  "'weight' refers to G",
                  "'reasoning' refers to Y",
                  "'beer' refers to LAGER"
                ]
              },
              "4a": {
                "word": "gated",
                "startingCell": "r4c1",
                "clue": "Detained from swearing at educators",
                "hints": [
                  "The solution is synonymous with 'Detained'",
                  "The solution is hidden in the clue"
                ]
              },
              "1d": {
                "word": "large",
                "startingCell": "r1c1",
                "clue": "Mammoth left confusingly angry",
                "hints": [
                  "The solution means 'mammoth'",
                  "'left' = L",
                  "'confusingly' is an anagram indicator",
                  "'angry' refers to RAGE"
                ]
              },
              "3d": {
                "word": "youth",
                "startingCell": "r1c3",
                "clue": "Kids are out in the middle of cubbyholes",
                "hints": [
                  "The solution means 'kids'",
                  "'the middle of cubbyholes' refers to YH",
                  "'out in' means put OUT in Y___H"
                ]
              },
              "5d": {
                "word": "ready",
                "startingCell": "r1c5",
                "clue": "Game day in a wild year",
                "hints": [
                  "The solution means 'game'",
                  "'day' = D",
                  "'wild' is an anagram indicator"
                ]
              }
            },
            "15": {
              "1a": {
                "word": "boost",
                "startingCell": "r1c1",
                "clue": "Jump from scary noise behind stone",
                "hints": [
                  "The solution means 'jump'",
                  "'stone' = ST",
                  "'scary noise' = BOO"
                ]
              },
              "4a": {
                "word": "erect",
                "startingCell": "r4c1",
                "clue": "Build by mixing concrete without weakness",
                "hints": [
                  "The solution means 'build'",
                  "'mixing' is an anagram indicator",
                  "'weakness' refers to CON"
                ]
              },
              "2d": {
                "word": "opera",
                "startingCell": "r1c2",
                "clue": "Arrange a rope to make a work of art",
                "hints": [
                  "'Arrange' is an anagram indicator",
                  "The solution is 'a work of art'"
                ]
              },
              "4d": {
                "word": "space",
                "startingCell": "r1c4",
                "clue": "Separate last of eggs with speed ",
                "hints": [
                  "The solution means 'separate'",
                  "'last of' is a letter selection indicator",
                  "'speed' refers to PACE"
                ]
              }
            },
            "16": {
              "1a": {
                "word": "obese",
                "startingCell": "r1c1",
                "clue": "Massive award and case of Sake",
                "hints": [
                  "The solution means 'massive'",
                  "'case of' indicates to take the first and last letter of a word",
                  "'award' refers to OBE"
                ]
              },
              "3a": {
                "word": "class",
                "startingCell": "r3c1",
                "clue": "Wrinkled trousers lose the last of sleek elegance",
                "hints": [
                  "The solution means 'elegance'",
                  "'lose the last of sleek' means take out a K",
                  "'Wrinkled' is an anagram indicator",
                  "Synonym of 'trousers', take away a K and shuffle for 'elegance'"
                ]
              },
              "5a": {
                "word": "boy",
                "startingCell": "r5c3",
                "clue": "Bold start to the year holds nothing for young man",
                "hints": [
                  "The solution means 'young man'",
                  "Bold = B",
                  "'start to the year' = Y",
                  "Nothing = O"
                ]
              },
              "2d": {
                "word": "bell",
                "startingCell": "r1c2",
                "clue": "Curve within superb ellipse",
                "hints": [
                  "The solution is a type of curve",
                  "'within' is a hidden word indicator"
                ]
              },
              "5d": {
                "word": "essay",
                "startingCell": "r1c5",
                "clue": "Try easy mix with a pinch of salt",
                "hints": [
                  "The solution means 'try'",
                  "'mix' is an anagram indicator",
                  "'touch of salt' refers to S"
                ]
              }
            },
            "17": {
              "1a": {
                "word": "suite",
                "startingCell": "r1c1",
                "clue": "Apartment is nice reportedly",
                "hints": [
                  "The solution means 'apartment'",
                  "'reportedly' is a homophone indicator"
                ]
              },
              "4a": {
                "word": "reset",
                "startingCell": "r4c1",
                "clue": "Crooked trees are rectified",
                "hints": [
                  "The solution means 'rectified'",
                  "'Crooked' is an anagram indicator"
                ]
              },
              "2d": {
                "word": "upset",
                "startingCell": "r1c2",
                "clue": "Overturn wrong setup",
                "hints": [
                  "The solution means 'overturn'",
                  "'wrong' is an anagram indicator"
                ]
              },
              "4d": {
                "word": "tube",
                "startingCell": "r1c4",
                "clue": "Barrel and low grade pipe",
                "hints": [
                  "The solution means 'pipe'",
                  "'low grade' = E",
                  "Barrel = tub"
                ]
              }
            },
            "18": {
              "1a": {
                "word": "tasty",
                "startingCell": "r1c1",
                "clue": "Delicious tea before chaotic holiday",
                "hints": [
                  "The solution means 'delicious'",
                  "'tea' = T",
                  "'chaotic' is a anagram indicator"
                ]
              },
              "3a": {
                "word": "agree",
                "startingCell": "r3c1",
                "clue": "Settle in a green meadow",
                "hints": [
                  "The solution means 'settle'",
                  "'in' is a hidden word indicator"
                ]
              },
              "5a": {
                "word": "crowd",
                "startingCell": "r5c1",
                "clue": "Fight in seedy mob",
                "hints": [
                  "The solution means 'mob'",
                  "'seedy' = CD",
                  "'Fight' = ROW"
                ]
              },
              "2d": {
                "word": "anger",
                "startingCell": "r1c2",
                "clue": "Bizarre choice creates outrage",
                "hints": [
                  "The solution means 'outrage'",
                  "'Bizarre' is an anagram indicator",
                  "'choice' refers to RANGE"
                ]
              },
              "5d": {
                "word": "yield",
                "startingCell": "r1c5",
                "clue": "Delaying, agitated but without complaint, for harvest",
                "hints": [
                  "The solution is synonymous with 'harvest'",
                  "'agitated' is an anagram indicator",
                  "'complaint' = nag"
                ]
              }
            },
            "19": {
              "2a": {
                "word": "forum",
                "startingCell": "r2c1",
                "clue": "Turn in form for assembly",
                "hints": [
                  "The solution means 'assembly'",
                  "'Turn' = U (u-turn)"
                ]
              },
              "5a": {
                "word": "waste",
                "startingCell": "r5c1",
                "clue": "We sat awkwardly, creating sewage",
                "hints": [
                  "The solution means 'sewage'",
                  "'awkwardly' is an anagram indicator"
                ]
              },
              "1d": {
                "word": "flow",
                "startingCell": "r2c1",
                "clue": "Gobble up ooze",
                "hints": [
                  "The solution means 'ooze'",
                  "'up' is a reversal indicator on a down clue",
                  "Gobble -> wolf"
                ]
              },
              "3d": {
                "word": "press",
                "startingCell": "r1c3",
                "clue": "Reporters put half essays on both sides of paper",
                "hints": [
                  "The solution means 'reporters'",
                  "'half essays' = ESS",
                  "'both sides of paper' = PR (PapeR - both sides!)"
                ]
              },
              "5d": {
                "word": "image",
                "startingCell": "r1c5",
                "clue": "I'm a genius concealing a concept",
                "hints": []
              }
            },
            "20": {
              "1a": {
                "word": "dew",
                "startingCell": "r1c3",
                "clue": "Carelessly wed, speech expected",
                "hints": [
                  "'Carelessly' is an anagram indicator",
                  "'speech' is a homophone indicator",
                  "This is a double clue, there's no solution synonym"
                ]
              },
              "2a": {
                "word": "ale",
                "startingCell": "r2c1",
                "clue": "Alert without arty beer",
                "hints": [
                  "'arty' = RT",
                  "The solution means 'beer'"
                ]
              },
              "4a": {
                "word": "pound",
                "startingCell": "r4c1",
                "clue": "Strike German boat in pond",
                "hints": [
                  "The solution means 'Strike'",
                  "'German boat' = U"
                ]
              },
              "1d": {
                "word": "ramps",
                "startingCell": "r1c1",
                "clue": "Banks alter map in case of recessions ",
                "hints": [
                  "The solution means 'Banks'",
                  "'case of recessions' refers to RS",
                  "'alter' is an anagram indicator"
                ]
              },
              "3d": {
                "word": "debut",
                "startingCell": "r1c3",
                "clue": "Piped up for launch",
                "hints": [
                  "The solution means 'launch'",
                  "'up' is a reversal indicator on a down clue",
                  "piped = tubed"
                ]
              },
              "5d": {
                "word": "words",
                "startingCell": "r1c5",
                "clue": "Warped blade comes to terms",
                "hints": [
                  "The solution means 'terms'",
                  "'warped' is an anagram indicator",
                  "'blade' = sword"
                ]
              }
            },
            "21": {
              "1a": {
                "word": "merit",
                "startingCell": "r1c1",
                "clue": "High quality stopwatch is broken",
                "hints": [
                  "The solution means 'high quality'",
                  "'broken' is an anagram indicator",
                  "'stopwatch' -> timer"
                ]
              },
              "4a": {
                "word": "paper",
                "startingCell": "r4c1",
                "clue": "Rapper gets drunk and loses right to work",
                "hints": [
                  "The solution means 'work'",
                  "'gets drunk' is an anagram indicator",
                  "'loses right' means remove an R"
                ]
              },
              "2d": {
                "word": "equal",
                "startingCell": "r1c2",
                "clue": "50% of equity and 40% of sales are one in the same",
                "hints": [
                  "The solution means 'one in the same'",
                  "'50% of equity' = EQU",
                  "'40% of sales' = AL"
                ]
              },
              "4d": {
                "word": "idles",
                "startingCell": "r1c4",
                "clue": "Does nothing in vapid lesson",
                "hints": [
                  "The solution means 'does nothing'",
                  "'in' is a hidden word indicator",
                  ""
                ]
              }
            },
            "22": {
              "1a": {
                "word": "slump",
                "startingCell": "r1c1",
                "clue": "Rotten plums fall",
                "hints": [
                  "The solution means 'fall'",
                  "'Rotten' is an anagram indicator"
                ]
              },
              "5a": {
                "word": "lanes",
                "startingCell": "r5c1",
                "clue": "Evens out landscape's wonky roads",
                "hints": [
                  "The solution means 'roads'",
                  "'Evens out' indicates to remove the even letters of a word",
                  "'wonky' is an anagram indicator",
                  ""
                ]
              },
              "1d": {
                "word": "skill",
                "startingCell": "r1c1",
                "clue": "Mastery in brisk illustrations",
                "hints": [
                  "The solution means 'Mastery'",
                  "'in' is a hidden word indicator"
                ]
              },
              "3d": {
                "word": "urban",
                "startingCell": "r1c3",
                "clue": "City newspaper cover-stories have unreliable and biased sources, unfortunately",
                "hints": [
                  "The solution means 'city'",
                  "'cover-stories' indicates to take the first and last letters, N and R",
                  "'sources' is a first letter selection indicator",
                  "'unfortunately' is an anagram indicator"
                ]
              },
              "5d": {
                "word": "pours",
                "startingCell": "r1c5",
                "clue": "Spills unusually sour sip of Port",
                "hints": [
                  "The solution means 'pours'",
                  "'unusually' is an anagram indicator",
                  "'sip of Port' = P"
                ]
              }
            },
            "23": {
              "2a": {
                "word": "theme",
                "startingCell": "r2c1",
                "clue": "They're gutted about border topic",
                "hints": [
                  "The solution means 'topic'",
                  "'They're gutted' = TE",
                  "'about' implies T and E are around other letters here",
                  "'border' = hem"
                ]
              },
              "5a": {
                "word": "slain",
                "startingCell": "r5c1",
                "clue": "Extravagant French delicacy cut to pieces ",
                "hints": [
                  "'Extravagant' is an anagram indicator",
                  "The solution means 'cut to pieces'",
                  "The 'French delicacy' in question has a shell and is like a slug"
                ]
              },
              "2d": {
                "word": "shell",
                "startingCell": "r1c2",
                "clue": "She will dodge half wild bullet",
                "hints": [
                  "The solution means 'bullet'",
                  "'dodge half wild' means take out half of 'wild' from something"
                ]
              },
              "5d": {
                "word": "begin",
                "startingCell": "r1c5",
                "clue": "Indulge carelessly to start",
                "hints": [
                  "The solution means 'start'",
                  "'carelessly' is an anagram indicator"
                ]
              }
            },
            "24": {
              "2a": {
                "word": "file",
                "startingCell": "r2c2",
                "clue": "Put away leaders of faction illegally looting equipment",
                "hints": [
                  "The solution means 'put away'",
                  "'leaders of' is a letter selection indicator"
                ]
              },
              "4a": {
                "word": "snack",
                "startingCell": "r4c1",
                "clue": "Knock back a thousand tins for an appetiser",
                "hints": [
                  "The solution means 'appetiser'",
                  "'Knock back' is a reversal indicator",
                  "'a thousand' = K",
                  "'tins' = CANS"
                ]
              },
              "2d": {
                "word": "fine",
                "startingCell": "r2c2",
                "clue": "Faulty blade without an edge is well-made",
                "hints": [
                  "The solution means 'well-made'",
                  "'blade' = KNIFE",
                  "'Faulty' is an anagram indicator",
                  "'without an edge' means remove one of the edge letters"
                ]
              },
              "5d": {
                "word": "seek",
                "startingCell": "r1c5",
                "clue": "Request is part of franchisee knowledge",
                "hints": [
                  "The solution means 'Request'",
                  "'is part of' is a hidden word indicator"
                ]
              }
            },
            "25": {
              "1a": {
                "word": "brand",
                "startingCell": "r1c1",
                "clue": "Kind group drinks the last drop of beer",
                "hints": [
                  "The solution means 'kind'",
                  "'drinks the last drop of beer' means but an R in another word",
                  "Group = BAND"
                ]
              },
              "3a": {
                "word": "event",
                "startingCell": "r3c1",
                "clue": "Contest held in uneven terrain",
                "hints": [
                  "'held in' is a hidden word indicator",
                  "The solution is a term that could be used to describe a 'contest'"
                ]
              },
              "5a": {
                "word": "pluck",
                "startingCell": "r5c1",
                "clue": "Take quiet fortune",
                "hints": [
                  "The solution means 'take'",
                  "'quiet' = P (as in piano (sheet music))",
                  "'fortune' = LUCK"
                ]
              },
              "2d": {
                "word": "rival",
                "startingCell": "r1c2",
                "clue": "Enemy is spreading vigorously",
                "hints": [
                  "The solution means 'enemy'",
                  "'vigorously' is an anagram indicator",
                  "'spreading' = VIRAL"
                ]
              }
            },
            "26": {
              "1a": {
                "word": "craft",
                "startingCell": "r1c1",
                "clue": "Build makeshift boat on the sea",
                "hints": [
                  "The solution means 'build'",
                  "'on the sea' = following C",
                  "RAFT"
                ]
              },
              "3a": {
                "word": "equip",
                "startingCell": "r3c1",
                "clue": "Provide butt of joke and witty remark",
                "hints": [
                  "The solution means 'provide'",
                  "'butt of joke' = E",
                  "'witty remark' = QUIP"
                ]
              },
              "5a": {
                "word": "mercy",
                "startingCell": "r5c1",
                "clue": "Grace in summer cycle",
                "hints": [
                  "The solution means 'grace'",
                  "'in' is a hidden word indicator"
                ]
              },
              "1d": {
                "word": "cream",
                "startingCell": "r1c1",
                "clue": "Best mile after untidy acre",
                "hints": [
                  "The solution means 'best'",
                  "'mile' = M",
                  "'untidy' is an anagram indicator"
                ]
              },
              "5d": {
                "word": "tipsy",
                "startingCell": "r1c5",
                "clue": "Hints and reasoning make an anagram indicator",
                "hints": [
                  "The solution is an anagram indicator, yep we've gone meta",
                  "'reasoning' = Y",
                  "'hints' = TIPS",
                  "TIPSY is an anagram indicator!"
                ]
              }
            },
            "27": {
              "1a": {
                "word": "shelf",
                "startingCell": "r1c1",
                "clue": "Put aside quiet toymaker",
                "hints": [
                  "The solution means 'put aside'",
                  "'quiet' = SH",
                  "as for 'toymaker', think of Christmas, the labourers at the North pole"
                ]
              },
              "3a": {
                "word": "ore",
                "startingCell": "r3c1",
                "clue": "Alternative energy generates metal deposits",
                "hints": [
                  "The solution means 'metal deposits'",
                  "'Alternative' = OR",
                  "'energy' = E"
                ]
              },
              "5a": {
                "word": "kempt",
                "startingCell": "r5c1",
                "clue": "Keep entrance nearly empty so it's tidy",
                "hints": [
                  "The solution means 'tidy'",
                  "'keep entrance' = K",
                  "'nearly empty' = EMPT"
                ]
              },
              "1d": {
                "word": "stock",
                "startingCell": "r1c1",
                "clue": "Store overturned bed in empty sack",
                "hints": [
                  "The solution means 'store'",
                  "'overturned' is a reversal indicator",
                  "'empty sack' = SK",
                  "'bed' = COT"
                ]
              },
              "3d": {
                "word": "eye",
                "startingCell": "r1c3",
                "clue": "Within grey eruptions is the centre of the storm",
                "hints": [
                  "The solution means 'the centre of the storm'",
                  "'Within' is a hidden word indicator"
                ]
              },
              "5d": {
                "word": "float",
                "startingCell": "r1c5",
                "clue": "Hover in the air all over the place",
                "hints": [
                  "The solution means 'hover'",
                  "'all over the place' is an anagram indicator",
                  "'in the air' refers to ALOFT"
                ]
              }
            },
            "28": {
              "1a": {
                "word": "wrist",
                "startingCell": "r1c1",
                "clue": "Joint world record is a fraction of time",
                "hints": [
                  "'world record' = WR",
                  "'a fraction of time' = T",
                  "The solution is a 'joint'",
                  "WR + IS + T"
                ]
              },
              "3a": {
                "word": "err",
                "startingCell": "r3c1",
                "clue": "In character recently to make mistake",
                "hints": [
                  "The solution means 'make mistake'",
                  "'In' is a hidden word indicator"
                ]
              },
              "5a": {
                "word": "thick",
                "startingCell": "r5c1",
                "clue": "Parasite has an hour to get fat",
                "hints": [
                  "The solution means 'fat'",
                  "'has an hour' means put an H in a word",
                  "Parasite = TICK"
                ]
              },
              "1d": {
                "word": "wheat",
                "startingCell": "r1c1",
                "clue": "Win competition for grain",
                "hints": [
                  "The solution means 'grain'",
                  "'win' = W",
                  "'competition'... think a round of races in the Olympics for example"
                ]
              },
              "5d": {
                "word": "trunk",
                "startingCell": "r1c5",
                "clue": "Sigher and enigmatic leader leaves active hunger strike for coffer",
                "hints": [
                  "The solution means 'coffer'",
                  "'active' is an anagram indicator",
                  "'leaves' is a deletion indicator",
                  "'enigmatic leader' = E",
                  "HUNGERSTRIKE without SIGHER = UNTRK"
                ]
              }
            },
            "29": {
              "1a": {
                "word": "shave",
                "startingCell": "r1c1",
                "clue": "Brush quiet road",
                "hints": [
                  "'quiet' = SH",
                  "'road' .. avenue",
                  "The solution means 'brush' as in to miss something narrowly"
                ]
              },
              "3a": {
                "word": "abhor",
                "startingCell": "r3c1",
                "clue": "Despise corrupt biographer without gripe",
                "hints": [
                  "The solution means 'despise'",
                  "'corrupt' is an anagram indicator",
                  "'without' is a letter-deletion indicator ",
                  ""
                ]
              },
              "5a": {
                "word": "tires",
                "startingCell": "r5c1",
                "clue": "Fatigues from lively attempts",
                "hints": [
                  "The solution means 'fatigues'",
                  "'lively' is an anagram indicator",
                  "'attempts' = TRIES"
                ]
              },
              "1d": {
                "word": "start",
                "startingCell": "r1c1",
                "clue": "Create street art",
                "hints": [
                  "The solution means 'create'",
                  "'street' = ST"
                ]
              },
              "3d": {
                "word": "ash",
                "startingCell": "r1c3",
                "clue": "Has hot embers",
                "hints": [
                  "The solution is synonymous with 'ash'",
                  "'hot' is an anagram indicator"
                ]
              },
              "5d": {
                "word": "earns",
                "startingCell": "r1c5",
                "clue": "Collects vases according to hearsay",
                "hints": [
                  "The solution means 'collects'",
                  "'according to hearsay' is a homophone indicator",
                  "'vases' refers to URNS"
                ]
              }
            },
            "30": {
              "1a": {
                "word": "rig",
                "startingCell": "r1c3",
                "clue": "Machine in cellar ignites",
                "hints": [
                  "The solution means 'machine'",
                  "'in' is a hidden word indicator"
                ]
              },
              "3a": {
                "word": "act",
                "startingCell": "r3c1",
                "clue": "Enacted needless manoeuvre",
                "hints": [
                  "The solution means 'manoeuvre'",
                  "'needless' means remove NEED"
                ]
              },
              "5a": {
                "word": "slots",
                "startingCell": "r5c1",
                "clue": "Fits a lot within seconds",
                "hints": [
                  "The solution means 'fits'",
                  "'within seconds' means put something between S___S"
                ]
              },
              "1d": {
                "word": "chaos",
                "startingCell": "r1c1",
                "clue": "Confusion is nothing in endless chase",
                "hints": [
                  "The solution means 'confusion'",
                  "'nothing in' means put O in a word",
                  "'endless' means remove the last letter"
                ]
              },
              "3d": {
                "word": "ratio",
                "startingCell": "r1c3",
                "clue": "Balance a riot desperately",
                "hints": [
                  "'desperately' is an anagram indicator",
                  "The solution means 'balance'"
                ]
              },
              "5d": {
                "word": "guess",
                "startingCell": "r1c5",
                "clue": "Guests have no time to speculate",
                "hints": [
                  "The solution means 'speculate'",
                  "'have no time' means remove a T"
                ]
              }
            }
        },
        "12": {
          "1": {
            "1a": {
              "word": "moron",
              "startingCell": "r1c1",
              "clue": "Idiot has messy room before noon",
              "hints": []
            },
            "3a": {
              "word": "yodle",
              "startingCell": "r3c1",
              "clue": "Yes, circle left in heartless dance, sing!",
              "hints": [
                "The solution means 'sing'",
                "'yes' = Y",
                "'circle' = O",
                "'left' = L",
                "'heartless dance' = DE"
              ]
            },
            "1d": {
              "word": "mayor",
              "startingCell": "r1c1",
              "clue": "In dismay orchestrating city official",
              "hints": [
                "The solution means 'city official'",
                "'in' is a hidden word indicator"
              ]
            },
            "3d": {
              "word": "rider",
              "startingCell": "r1c3",
              "clue": "Passenger dies gruesomely and without element of safety in Rolls Royce",
              "hints": [
                "The solution means 'passenger'",
                "'element of safety' = S",
                "'Rolls Royce' = RR",
                "'gruesomely' is an anagram indicator"
              ]
            },
            "5d": {
              "word": "need",
              "startingCell": "r1c5",
              "clue": "Demand is not elevated, even down, at first",
              "hints": [
                "The solution means 'need'",
                "'at first' is a letter selection indicator"
              ]
            }
          },
          "2": {
            "1a": {
              "word": "nerve",
              "startingCell": "r1c1",
              "clue": "Confidence is never bad",
              "hints": [
                "'bad' is an anagram indicator",
                "The solution means 'confidence'"
              ]
            },
            "3a": {
              "word": "mango",
              "startingCell": "r3c1",
              "clue": "Bizarre complaint about grand fruit",
              "hints": [
                "grand = G",
                "'bizarre' is an anagram indicator",
                "'complaint' refers to moan",
                "The solution is a fruit"
              ]
            },
            "5a": {
              "word": "deter",
              "startingCell": "r5c1",
              "clue": "Prevent red alien warping",
              "hints": [
                "'warping' is an anagram indicator",
                "'alien' = ET",
                "The solution means prevent"
              ]
            },
            "1d": {
              "word": "named",
              "startingCell": "r1c1",
              "clue": "Entitled mother enters lair and flips",
              "hints": [
                "The solution means 'entitled'",
                "'flips' is a reversal indicator",
                "'mother' = MA",
                "lair = DEN"
              ]
            },
            "4d": {
              "word": "vague",
              "startingCell": "r1c4",
              "clue": "Unclear victor, half the guests leave after midday",
              "hints": [
                "The solution means unclear",
                "'victor' = V",
                "half the guests = GUE",
                "'middy' = A (mid of DAY)"
              ]
            }
          },
          "3": {
            "1a": {
              "word": "cow",
              "startingCell": "r1c1",
              "clue": "Heroic owner finds an animal",
              "hints": []
            },
            "2a": {
              "word": "hid",
              "startingCell": "r2c3",
              "clue": "Cowered and shied, losing some of esteem",
              "hints": [
                "The solution means 'cowered'",
                "'losing some of esteem' means take away SE from somthing"
              ]
            },
            "4a": {
              "word": "steep",
              "startingCell": "r4c1",
              "clue": "Expensive brine",
              "hints": [
                "The solution means both expensive (adj) and brine (v)"
              ]
            },
            "1d": {
              "word": "clash",
              "startingCell": "r1c1",
              "clue": "Debate rambling scholars without second alternative",
              "hints": [
                "The solution means 'debate'",
                "'rambling' is an anagram indicator",
                "'second alternative' = S OR"
              ]
            },
            "3d": {
              "word": "wheel",
              "startingCell": "r1c3",
              "clue": "Roll small length and rush back ",
              "hints": [
                "'rush back' = H",
                "'small' = WEE",
                "'length' = L",
                "The solution means roll"
              ]

            },
            "5d": {
              "word": "adopt",
              "startingCell": "r1c5",
              "clue": "Take on curious toad with perfect head",
              "hints": [
                "The solution means 'take on'",
                "'curious' is an anagram indicator",
                "'perfect head'  = P"
              ]
            }
          },
          "4": {
            "1a": {
              "word": "enter",
              "startingCell": "r1c1",
              "clue": "Sign up for mixing course ",
              "hints": [
                "'mixing' is an anagram indicator",
                "The solution means 'sign up'",
                "'course' = ENTRE"
              ]
            },
            "3a": {
              "word": "boxer",
              "startingCell": "r3c1",
              "clue": "Dog fighter",
              "hints": [
                "It's both a dog and a fighter"
              ]
            },
            "5a": {
              "word": "arson",
              "startingCell": "r5c1",
              "clue": "It sounds like our offspring is burning houses",
              "hints": [
                "The solution means 'burning houses'",
                "'It sounds like' is of course a homophone indicator"
              ]
            },
            "3d": {
              "word": "texts",
              "startingCell": "r1c3",
              "clue": "Kiss in confusing experiment sends a message",
              "hints": [
                "The solution means 'sends a message'",
                "Kiss = X",
                "experiment = TEST",
                "'confusing' is an anagram indicate"
              ]
            },
            "5d": {
              "word": "rerun",
              "startingCell": "r1c5",
              "clue": "Concerning bolt, I've seen this before!",
              "hints": [
                "'Concerning' = RE (like an email)",
                "'bolt' = RUN"
              ]
            }
          }, 
          "5": {
            "2a": {
              "word": "range",
              "startingCell": "r2c1",
              "clue": "Assortment of peeled oranges",
              "hints": [
                "The solution means 'assortment'",
                "'peeled' is a letter-deletion indicator (peel both end letters)"
              ]
            },
            "4a": {
              "word": "imply",
              "startingCell": "r4c1",
              "clue": "Hint is simply don't start",
              "hints": [
                "The solution means 'hint'",
                "'don't start' is a letter deletion indicator"
              ]
            },
            "1d": {
              "word": "drain",
              "startingCell": "r1c1",
              "clue": "Unload, daring to lose weight",
              "hints": [
                "The solution means 'unload'",
                "'lose weight' is a letter-deletion indicator, weight could refer to G, W, KG etc."
              ]
            },
            "3d": {
              "word": "snap",
              "startingCell": "r1c3",
              "clue": "Broken pans crack",
              "hints": [
                "The solution means 'crack'",
                "'Broken' is an anagram indicator"
              ]
            },
            "5d": {
              "word": "kenya",
              "startingCell": "r1c5",
              "clue": "Headless snake slithers a yard in African country",
              "hints": [
                "The solution is an African country",
                "'Headless' is a letter-deletion indicator",
                "'slithers' is an anagram indicator",
                "'yard' = Y"
              ]
            }
          },
          "6" : {
            "1a": {
              "word": "enema",
              "startingCell": "r1c1",
              "clue": "Careless menace, without a hint of contrition, enters through the back",
              "hints": [
                "'without a hint of contrition' means remove a C",
                "'Careless' is an anagram indicator",
                "The solution 'enters through the back'",
                "It's a medical procedure"
              ]
            },
            "3a": {
              "word": "scrap",
              "startingCell": "r3c1",
              "clue": "Throw away small clutter",
              "hints": [
                "The solution means 'throw away'",
                "'small' = S"
              ]
            },
            "5a": {
              "word": "drive",
              "startingCell": "r5c1",
              "clue": "Steer to victory in turbulent ride",
              "hints": [
                "The solution means 'steer'",
                "'victory' = V",
                "'turbulent' is an anagram indicator"
              ]
            },
            "2d": {
              "word": "nicer",
              "startingCell": "r1c2",
              "clue": "Tail of salmon on steamed rice is more enjoyable",
              "hints": [
                "The solution means 'more enjoyable'",
                "'Tail of salmon' = N",
                "'steamed' is an anagram indicator"
              ]
            },
            "5d": {
              "word": "ample",
              "startingCell": "r1c5",
              "clue": "Plenty trickling syrup",
              "hints": [
                "The solution means 'plenty'",
                "'trickling' is an anagram indicator",
                "The syrup in quest tends to be Canadian"
              ]
            }
          },
          "7": {
            "2a": {
              "word": "clone",
              "startingCell": "r2c1",
              "clue": "Perfume isn't half good, make a copy",
              "hints": [
                "The solution means 'make a copy'",
                "'isn't half good' means take out GO or OD",
                "perfume = cologne"
              ]
            },
            "4a": {
              "word": "clues",
              "startingCell": "r4c1",
              "clue": "This is one of them, cooked deshelled muscles",
              "hints": [
                "'cooked' is an anagram indicator",
                "'deshelled' means remove the first and last letters"
              ]
            },
            "3d": {
              "word": "bonus",
              "startingCell": "r1c3",
              "clue": "Extra empty bistro before sunrise",
              "hints": [
                "The solution means 'extra'",
                "'empty bistro' = BO",
                "'sunrise' on a down clue = NUS (SUN rises)"
              ]
            },
            "5d": {
              "word": "tense",
              "startingCell": "r1c5",
              "clue": "Anxious energy sent spiralling",
              "hints": [
                "The solution means 'anxious'",
                "'energy' = E",
                "'spiralling' is an anagram indicator"
              ]
            }
          },
          "8": {
            "2a": {
              "word": "hobby",
              "startingCell": "r2c1",
              "clue": "Bees surrounded by honey without any thing to do other than work",
              "hints": [
                "The solution means 'thing to do other than work'",
                "'bees' = BB",
                "'honey without any'  = HONEY - NE = HOY"
              ]
            },
            "4a": {
              "word": "panda",
              "startingCell": "r4c1",
              "clue": "Father and father bear",
              "hints": [
                "The solution is a bear",
                "and = N (as in rock n roll)",
                "Father = PA ... and DA"
              ]
            },
            "1d": {
              "word": "shape",
              "startingCell": "r1c1",
              "clue": "Phase out model",
              "hints": [
                "The solution means model",
                "'out' is an anagram indicator"
              ]
            },
            "3d": {
              "word": "band",
              "startingCell": "r2c3",
              "clue": "Music group makes forbidden sound",
              "hints": [
                "The solution means 'music group'",
                "The solution sounds like a word that means 'forbidden'"
              ]
            },
            "5d": {
              "word": "year",
              "startingCell": "r2c5",
              "clue": "Pine endlessly for time",
              "hints": [
                "'endlessly' is a letter-deletion indicator",
                "The solution is an amount of time",
                "pine = yearn"
              ]
            }
          },
          "9" : {
            "1a": {
              "word": "jewel",
              "startingCell": "r1c1",
              "clue": "Rock sheep in vacant jail",
              "hints": [
                "The solution means 'rock'",
                "the sheep in question is female",
                "'vacant jail' = JL"
              ]
            },
            "3a": {
              "word": "strap",
              "startingCell": "r3c1",
              "clue": "Fasten components wrong way round",
              "hints": [
                "The solution means 'fasten'",
                "'wrong way round' is a reversal indicator"
              ]
            },
            "5a": {
              "word": "ladle",
              "startingCell": "r5c1",
              "clue": "Young man with empty linguine spoon ",
              "hints": [
                "The solution means 'spoon'",
                "'empty linguine' = LE",
                "young man = LAD"
              ]
            },
            "3d": {
              "word": "wired",
              "startingCell": "r1c3",
              "clue": "Erratically strange, I've had too much caffeine",
              "hints": [
                "The solution is what you may feel after too much caffeine"
              ]
            }
          },
          "10": {
            "3a": {
              "word": "evict",
              "startingCell": "r3c1",
              "clue": "Captive doesn't want the crusts of pizza, remove",
              "hints": [
                "The solution means 'remove'",
                "'crusts of pizza' = PA"
              ]
            },
            "5a": {
              "word": "greet",
              "startingCell": "r5c1",
              "clue": "Shake hands to secretly agree terms ",
              "hints": [
                "'secretly' is a hidden word indicator",
                "The solution means 'shake hands'"
              ]
            },
            "2d": {
              "word": "cover",
              "startingCell": "r1c2",
              "clue": "See over shelter",
              "hints": [
                "The solution means 'solution'",
                "see = C"
              ]
            },
            "4d": {
              "word": "acre",
              "startingCell": "r2c4",
              "clue": "Trim edges of sacred land",
              "hints": [
                "The solution kind of means 'land', its a bit tenuous",
                "'trim edges' is a letter-deletion indicator"
              ]
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
    var res = (currentDay < 0) ? Object.keys(puzzles[year][month]) : Object.keys(puzzles[year][month]).filter(da => +da <= currentDay);
    if (!res) return null;
    return res;
}