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
                "clue": "Bending seats is a talent",
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
              "clue": "Crazy captive doesn't want the crusts of pizza, remove",
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
          },
          "11": {
            "1a": {
              "word": "sips",
              "startingCell": "r1c2",
              "clue": "Units take quiet gulps",
              "hints": [
                "The solution means 'gulps'",
                "quiet = P (as in piano)",
                "units = SIs"
              ]
            },
            "3a": {
              "word": "arise",
              "startingCell": "r3c1",
              "clue": "Stand up to wrong Zodiac sign",
              "hints": [
                "The solution means stand up",
                "'wrong' is an anagram indicator",
                "the zodiac sign in question is Aries"
              ]
            },
            "5a": {
              "word": "cysts",
              "startingCell": "r5c1",
              "clue": "See why time in ship caused growth",
              "hints": [
                "The solution means 'growth'  (n)",
                "see why = C Y",
                "'ship' = SS"
              ]
            },
            "2d": {
              "word": "sorry",
              "startingCell": "r1c2",
              "clue": "Mixed our sauce right and I'm regretful",
              "hints": [
                "The solution means 'regretful'",
                "'mixed' is an anagram indicator",
                "'right' = R",
                "'our' = R",
                "the sauce in question is SOY"
              ]
            },
            "4d": {
              "word": "posit",
              "startingCell": "r1c4",
              "clue": "Presume police officer is back with tea",
              "hints": [
                "The solution means 'presume'",
                "'police officer' = PO",
                "'back' is a reversal indicator",
                "tea = T"
              ]
            }
          },
          "12": {
            "1a": {
              "word": "gloat",
              "startingCell": "r1c1",
              "clue": "Animal eats large relish",
              "hints": [
                "The solution means 'relish'",
                "'large' = L",
                "Animal in question is somewhat like a sheep and is good at climbing"
              ]
            },
            "3a": {
              "word": "sets",
              "startingCell": "r3c2",
              "clue": "Find places from space in ship",
              "hints": [
                "The solution means 'places'",
                "'from space' = ET",
                "'ship' = SS"
              ]
            },
            "5a": {
              "word": "rare",
              "startingCell": "r5c2",
              "clue": "Hardly cook painter again",
              "hints": [
                "The solution means 'hardly cook'",
                "'painter' = RA (Royal Academy - it's a cryptic crossword norm)",
                "'again' = RE"
              ]
            },
            "2d": {
              "word": "loser",
              "startingCell": "r1c2",
              "clue": "Close report to conceal failure",
              "hints": [
                "The solution means 'failure'",
                "'conceal' is a hidden word indicator"
              ]
            },
            "4d": {
              "word": "alter",
              "startingCell": "r1c4",
              "clue": "Adjust later",
              "hints": [
                "The solution means 'adjust'...",
                "...but adjust is also an anagram indicator"
              ]
            }
          }, 
          "13": {
            "1a": {
              "word": "grass",
              "startingCell": "r1c1",
              "clue": "Sugarcane sugars don't keep you active",
              "hints": [
                "'sugarcane' is an example of the solution",
                "'active' an anagram indicator",
                "'don't keep you' is a letter-deletion indicator"
              ]
            },
            "3a": {
              "word": "arena",
              "startingCell": "r3c1",
              "clue": "Oddly close to a stadium",
              "hints": [
                "The solution means 'stadium'",
                "'oddly' is an anagram indicator",
                "'close to' = near"
              ]
            },
            "5a": {
              "word": "count",
              "startingCell": "r5c1",
              "clue": "Include nobleman",
              "hints": [
                "The solution means both 'include' and 'nobleman'"
              ]
            },
            "3d": {
              "word": "age",
              "startingCell": "r1c3",
              "clue": "For example, a revolutionary era",
              "hints": [
                "The solution means 'era'",
                "'revolutionary' is a reversal indicator",
                "'for example' = EG"
              ]
            },
            "5d": {
              "word": "smart",
              "startingCell": "r1c5",
              "clue": "Take trams back to be quick?",
              "hints": [
                "'back' is a reversal indicator",
                "The solution means 'quick', but the question mark implies it's not the conventional meaning of quick"
              ]
            }
          },
          "14": {
            "2a": {
              "word": "eater",
              "startingCell": "r2c1",
              "clue": "In awe at erratic consumer",
              "hints": [
                "The solution means 'consumer'",
                "'In' is a hidden-word indicator"
              ]
            },
            "4a": {
              "word": "lie",
              "startingCell": "r4c1",
              "clue": "Pretend rest",
              "hints": [
                "The solution means pretend and rest"
              ]
            },
            "1d": {
              "word": "cells",
              "startingCell": "r1c1",
              "clue": "The sound of trades for units",
              "hints": [
                "The solution means 'units'",
                "'trades' = SELLS"
              ]
            },
            "3d": {
              "word": "otter",
              "startingCell": "r1c3",
              "clue": "Old tease has extremely eager animal",
              "hints": [
                "The solution is an animal",
                "'tease' = TT",
                "'extremely' is a letter-selection indicator for the extremes of the word i.e. first and last letter",
                "old = O"
              ]
            },
            "5d": {
              "word": "drama",
              "startingCell": "r1c5",
              "clue": "A mother stalks doctor causing controversy",
              "hints": [
                "The solution means 'controversy'",
                "'mother' = MA",
                "'doctor' = DR"
              ]
            }
          },
          "15": {
            "1a": {
              "word": "agony",
              "startingCell": "r1c1",
              "clue": "Pain since New Years",
              "hints": [
                "The solution means 'pain'",
                "for 'since', think of finding a synonym in the following scenario, 'many years since'",
                "It could also be 'pain before new years', how might else you say 'many years before'"
              ]
            },
            "4a": {
              "word": "wheel",
              "startingCell": "r4c1",
              "clue": "We'll hear it rotates",
              "hints": [
                "The solution rotates",
                "'hear' is a homophone indicator",
                "The solution rotates and sounds like 'we'll'"
              ]
            },
            "1d": {
              "word": "avows",
              "startingCell": "r1c1",
              "clue": "Waves at sea don't come from the East, nothing inside maintains",
              "hints": [
                "The solution means 'maintains'",
                "'at sea' is an anagram indicator",
                "'don't come from the East' means remove an E",
                "'nothing inside' means add an O inside"
              ]
            },
            "4d": {
              "word": "notes",
              "startingCell": "r1c4",
              "clue": "Accepts cash",
              "hints": [
                "The solution means both 'accepts' and 'cash'",
                "One could also say 'considers cash', or 'observes cash'"
              ]
            }
          }, 
          "16": {
            "2a": {
              "word": "relax",
              "startingCell": "r2c1",
              "clue": "Convert left cross with a concerning temper",
              "hints": [
                "The solution means 'temper'",
                "'convert' is an anagram indicator",
                "'cross' = X",
                "'concerning' = RE (i.e. an email)",
                "'left' = L"
              ]
            },
            "4a": {
              "word": "panel",
              "startingCell": "r4c1",
              "clue": "Controls quiet meandering lane",
              "hints": [
                "The solution is synonymous with 'controls'",
                "quiet = P",
                "'meandering' is an anagram indicator"
              ]
            },
            "1d": {
              "word": "erupt",
              "startingCell": "r1c1",
              "clue": "Boil up pure tea",
              "hints": [
                "The solution is synonymous with 'boil'",
                "'up' is a reversal indicator for a down clue",
                "'tea' = T"
              ]
            },
            "3d": {
              "word": "blank",
              "startingCell": "r1c3",
              "clue": "Bank takes loss and becomes vacant",
              "hints": [
                "The solution means 'vacant'",
                "'loss' = L"
              ]
            },
            "5d": {
              "word": "exile",
              "startingCell": "r1c5",
              "clue": "Separation, times I left in ease",
              "hints": [
                "The solution means separation",
                "'times' = X",
                "'in ease' = E___E",
                "left = L"
              ]
            }
          },
          "17": {
            "2a": {
              "word": "south",
              "startingCell": "r2c1",
              "clue": "Down and out in silence",
              "hints": [
                "The solution is synonymous with 'down'",
                "'silence' = SH"
              ]
            },
            "4a": {
              "word": "moral",
              "startingCell": "r4c1",
              "clue": "Some miss spoken lesson",
              "hints": [
                "'some miss' = M",
                "The solution means 'lesson'"
              ]
            },
            "2d": {
              "word": "donor",
              "startingCell": "r1c2",
              "clue": "Contributor can, in part, do no right",
              "hints": [
                "The solution means 'contributor'",
                "'right' = R"
              ]
            },
            "4d": {
              "word": "straw",
              "startingCell": "r1c4",
              "clue": "Back warts, you don't want the shortest one",
              "hints": [
                "'back' is a reversal indicator",
                "You don't want the shortest one of the solution"
              ]
            }
          },
          "18": {
            "1a": {
              "word": "terms",
              "startingCell": "r1c1",
              "clue": "Set back involving regularly prim titles?",
              "hints": [
                "The solution means 'titles'",
                "'regularly prim' = RM",
                "'back' is a reversal indicator "
              ]
            },
            "3a": {
              "word": "elude",
              "startingCell": "r3c1",
              "clue": "Fight with energy, fight to escape",
              "hints": [
                "'fight' in one of its uses is an anagram indicator",
                "The solution means 'escape'",
                "'fight' in one of its uses = DUEL",
                "'energy' = E"
              ]
            },
            "5a": {
              "word": "stern",
              "startingCell": "r5c1",
              "clue": "Severe numb head after bad rest, am I seeing double?",
              "hints": [
                "The solution means 'severe'",
                "'numb head' = N",
                "'bad' is an anagram indicator",
                "'am I seeing double?', the solution is repeated elsewhere in the puzzle. I don't know if that's cool or lazy but voila"
              ]
            },
            "1d": {
              "word": "trees",
              "startingCell": "r1c1",
              "clue": "Head of team turns prophet, they grow branches",
              "hints": [
                "'head of team' = T",
                "'prophet' = SEER"
              ]
            },
            "3d": {
              "word": "route",
              "startingCell": "r1c3",
              "clue": "Confusing tour before eastward journey",
              "hints": [
                "The solution means 'journey'",
                "'eastward' = E",
                "'confusing' is an anagram indicator"
              ]
            },
            "5d": {
              "word": "stern",
              "startingCell": "r1c5",
              "clue": "Rent's changed, it's unforgiving",
              "hints": [
                "The solution means 'unforgiving'",
                "'changed' is an anagram indicator"
              ]
            }
          },
          "19": {
            "1a": {
              "word": "swipe",
              "startingCell": "r1c1",
              "clue": "Steal work in progress in vacuous scheme",
              "hints": [
                "The solution means 'steal'",
                "'vacuous' is a letter-deletion indicator, indicating to remove all inside letters",
                "'work in progress' = WIP"
              ]
            },
            "3a": {
              "word": "occur",
              "startingCell": "r3c1",
              "clue": "Happen to seize our mess",
              "hints": [
                "The solution means 'happen'",
                "'seize' = CC",
                "'mess' is an anagram indicator"
              ]
            },
            "1d": {
              "word": "shone",
              "startingCell": "r1c1",
              "clue": "Quiet one stood out",
              "hints": [
                "The solution means 'stood out'",
                "'quiet' = SH"
              ]
            },
            "3d": {
              "word": "inch",
              "startingCell": "r1c3",
              "clue": "A small distance from headless bird",
              "hints": [
                "The solution is 'a small distance'",
                "'headless' means remove the first letter",
                "The bird in question is FINCH"
              ]
            },
            "5d": {
              "word": "early",
              "startingCell": "r1c5",
              "clue": "Listener left before the first slice of Yule log, too soon",
              "hints": [
                "The solution means 'too soon'",
                "'first slice of Yule log' = Y",
                "'left' = L",
                "'listener' = EAR"
              ]
            }
          },
          "20": {
            "1a": {
              "word": "fuses",
              "startingCell": "r1c1",
              "clue": "Combines electrical components",
              "hints": [
                "The solution means both 'combines' and is a type of electrical component"
              ]
            },
            "4a": {
              "word": "lured",
              "startingCell": "r4c1",
              "clue": "Tempted Duke succeeds mad ruler who was beheaded",
              "hints": [
                "The solution means 'tempted'",
                "'Duke' = D",
                "'mad' is an anagram indicator",
                "D succeeds ULER(jumbled) i.e. the D comes after"
              ]
            },
            "1d": {
              "word": "feel",
              "startingCell": "r1c1",
              "clue": "There's sense in safe electrics?",
              "hints": [
                "The solution means 'sense'",
                "'There's sense in' indicates its a hidden-word clue"
              ]
            },
            "3d": {
              "word": "sharp",
              "startingCell": "r1c3",
              "clue": "Small instrument is shrill",
              "hints": [
                "The solution means 'shrill'",
                "'small' = S",
                "The instrument in question is stringed and heavenly"
              ]
            },
            "5d": {
              "word": "shed",
              "startingCell": "r1c5",
              "clue": "Get rid of outhouse ",
              "hints": [
                "The solution means both 'get rid of' and 'outhouse'",
                "'get rid of' in terms of hair perhaps"
              ]
            }
          },
          "21": {
            "1a": {
              "word": "stool",
              "startingCell": "r1c1",
              "clue": "Steals back chair",
              "hints": [
                "The solution means 'chair'",
                "'back' is a reversal indicator",
                "steals like in riots"
              ]
            },
            "4a": {
              "word": "run",
              "startingCell": "r4c1",
              "clue": "Peel the prune and escape!",
              "hints": [
                "The solution means 'escape'",
                "'peel' means take off the outer letters"
              ]
            },
            "1d": {
              "word": "store",
              "startingCell": "r1c1",
              "clue": "Keep metal found on street",
              "hints": [
                "The solution means 'keep'",
                "metal = ORE",
                "street = ST"
              ]
            },
            "3d": {
              "word": "open",
              "startingCell": "r1c3",
              "clue": "Old enclosure is unlatched",
              "hints": [
                "The solution means 'unlatched'",
                "old = O",
                "enclosure like for pigs"
              ]
            },
            "5d": {
              "word": "leaps",
              "startingCell": "r1c5",
              "clue": "In February, we notice it jumps",
              "hints": [
                "The solution means 'jumps'",
                " and the solution is what the year does every 4 years and we notice it in February.. because there are more days"
              ]
            }
          },
          "22": {
            "1a": {
              "word": "third",
              "startingCell": "r1c1",
              "clue": "A fraction behind runner-up",
              "hints": [
                "The solution means 'behind runner-up' and is also a fraction",
                "If runner-up is second (place), what's behind that? "
              ]
            },
            "4a": {
              "word": "angle",
              "startingCell": "r4c1",
              "clue": "Perspective of corrupt angel ",
              "hints": [
                "corrupt is an anagram indicator",
                "The solution means 'perspective'"
              ]
            },
            "2d": {
              "word": "haunt",
              "startingCell": "r1c2",
              "clue": "Visit relative after finishing lunch",
              "hints": [
                "The solution means 'visit'",
                "'finishing lunch' = H",
                "'relative' = AUNT"
              ]
            },
            "4d": {
              "word": "rifle",
              "startingCell": "r1c4",
              "clue": "Rummage through disorganised file, but first start reading",
              "hints": [
                "The solution means 'rummage'",
                "'disorganised' is an anagram indicator",
                "'start reading' = R"
              ]
            }
          },
          "23": {
            "1a": {
              "word": "water",
              "startingCell": "r1c1",
              "clue": "Blind waiter serves drink",
              "hints": [
                "The solution is a drink",
                "Blind = no eye = take out an 'I'"
              ]
            },
            "3a": {
              "word": "pesto",
              "startingCell": "r3c1",
              "clue": "Mix poets into sauce",
              "hints": [
                "The solution is a sauce",
                "'mix' is an anagram indicator"
              ]
            },
            "2d": {
              "word": "agent",
              "startingCell": "r1c2",
              "clue": "Spy is a courteous man",
              "hints": [
                "The solution means 'spy'",
                "'courteous man' = GENT"
              ]
            },
            "4d": {
              "word": "entry",
              "startingCell": "r1c4",
              "clue": "Doorway is hidden, why even try",
              "hints": [
                "The solution means 'doorway'",
                "'hidden' is a hidden word indicator"
              ]
            }
          },
          "24": {
            "1a": {
              "word": "house",
              "startingCell": "r1c1",
              "clue": "Make room for hospital on a river",
              "hints": [
                "The solution means 'make room for'",
                "'hospital' = H",
                "the river in question is the River Ouse"
              ]
            },
            "3a": {
              "word": "afoot",
              "startingCell": "r3c1",
              "clue": "A base on the horizon",
              "hints": [
                "The solution means 'on the horizon'",
                "'base' = FOOT"
              ]
            },
            "5a": {
              "word": "write",
              "startingCell": "r5c1",
              "clue": "Unfortunately become fatigued after winning record?",
              "hints": [
                "The solution means 'record'",
                "'winning' = W",
                "'Unfortunately' is an anagram indicator",
                "'become fatigued' = TIRE"
              ]
            },
            "2d": {
              "word": "offer",
              "startingCell": "r1c2",
              "clue": "Propose to rotten Queen",
              "hints": [
                "The solution means 'propose'",
                "queen = ER",
                "'rotten' = OFF"
              ]
            },
            "4d": {
              "word": "shout",
              "startingCell": "r1c4",
              "clue": "Cry, trapped in hellish outhouse",
              "hints": [
                "The solution means 'cry'",
                "'trapped in' is a hidden word indicator"
              ]
            }
          },
          "25": {
            "1a": {
              "word": "birth",
              "startingCell": "r1c1",
              "clue": "Bee hit Rudolph's nose somehow, it's why we celebrate",
              "hints": [
                "The solution is the reason we celebrate, what Christmas is really about",
                "'Bee' = B",
                "'Rudolph's nose' = R",
                "'somehow' is an anagram indicator"
              ]
            },
            "3a": {
              "word": "carol",
              "startingCell": "r3c1",
              "clue": "Stocking-filler for bad children are confused for song",
              "hints": [
                "The solution means 'song'",
                "'are' = R",
                "'confused' is an anagram indicator",
                "'stocking-filler for bad children' = COAL"
              ]
            },
            "5a": {
              "word": "candy",
              "startingCell": "r5c1",
              "clue": "A piece of chocolate and some yummy sweets",
              "hints": [
                "The solution means 'sweets'",
                "'a piece of chocolate' = C",
                "'some yummy' = Y"
              ]
            },
            "5d": {
              "word": "holly",
              "startingCell": "r1c5",
              "clue": "Jolly without a hint of jitters after holiday begins with festive foliage",
              "hints": [
                "The solution means 'festive foliage'",
                "'a hint of jitters' = J"
              ]
            }
          },
          "26": {
            "2a": {
              "word": "trace",
              "startingCell": "r2c1",
              "clue": "Remnant of wild rat at church",
              "hints": [
                "The solution means 'remnant'",
                "church = CE",
                "'wild' is an anagram indicator"
              ]
            },
            "4a": {
              "word": "award",
              "startingCell": "r4c1",
              "clue": "Assign an apprentice",
              "hints": [
                "The solution means 'assign'",
                "'an' = A",
                "'apprentice' = WARD"
              ]
            },
            "1d": {
              "word": "steam",
              "startingCell": "r1c1",
              "clue": "Friends dancing in the mist",
              "hints": [
                "The solution means 'mist'",
                "'dancing' is an anagram indicator",
                "friends = mates"
              ]
            },
            "3d": {
              "word": "japan",
              "startingCell": "r1c3",
              "clue": "Country is just opening a crater ",
              "hints": [
                "The solution is a country",
                "'just opening' = J",
                "crater = PAN",
                ""
              ]
            },
            "5d": {
              "word": "deed",
              "startingCell": "r1c5",
              "clue": "Depraved, heartless act",
              "hints": [
                "The solution means 'act'",
                "'heartless' means remove middle letters"
              ]
            }
          },
          "27": {
            "1a": {
              "word": "draft",
              "startingCell": "r1c1",
              "clue": "Conscription Airforce in evacuated dogfight",
              "hints": [
                "The solution means 'conscription'",
                "Airforce = RAF",
                "'evacuated dogfight' = DT"
              ]
            },
            "4a": {
              "word": "ennui",
              "startingCell": "r4c1",
              "clue": "Boredom amongst a dozen nuisances ",
              "hints": [
                "The solution means 'boredom'",
                "'amongst' is a hidden word indicator"
              ]
            },
            "1d": {
              "word": "date",
              "startingCell": "r1c1",
              "clue": "Daughter ate fruit",
              "hints": [
                "The solution is a fruit",
                "Daughter = D",
                "ate = ATE"
              ]
            },
            "3d": {
              "word": "amend",
              "startingCell": "r1c3",
              "clue": "Change a movie's original end",
              "hints": [
                "The solution means 'change'",
                "'movie's original' = M",
                "a = A",
                "end = END"
              ]
            },
            "5d": {
              "word": "taxi",
              "startingCell": "r1c5",
              "clue": "Charge one cab",
              "hints": [
                "The solution means 'cab'",
                "'one' = I",
                "'charge' = TAX"
              ]
            }
          },
          "28": {
            "2a": {
              "word": "deter",
              "startingCell": "r2c1",
              "clue": "Scare off animal with junction",
              "hints": [
                "The solution means 'scare off'",
                "the animal in question is DEER",
                "the junction in question is a T junction"
              ]
            },
            "1d": {
              "word": "admit",
              "startingCell": "r1c1",
              "clue": "Confess to beheading bad man before Italian",
              "hints": [
                "The solution means 'confess'",
                "'beheading bad' = AD",
                "man = M",
                "Italian = IT"
              ]
            },
            "3d": {
              "word": "tone",
              "startingCell": "r2c3",
              "clue": "Wrong note",
              "hints": [
                "The solution means 'note'",
                "The solution is also an anagram of 'note' (wrong is an anagram indicator)"
              ]
            },
            "5d": {
              "word": "crust",
              "startingCell": "r1c5",
              "clue": "See rust layer",
              "hints": [
                "The solution means 'layer'",
                "See = C"
              ]
            }
          },
          "29": {
            "2a": {
              "word": "oscar",
              "startingCell": "r2c1",
              "clue": "Award for old healed wound ",
              "hints": [
                "The solution is an award",
                "'old' = O",
                "'healed wound' = SCAR"
              ]
            },
            "4a": {
              "word": "audio",
              "startingCell": "r4c1",
              "clue": "Day ten comes after golden sound",
              "hints": [
                "The solution means 'sound'",
                "'ten' = IO",
                "'golden' = AU",
                "day = D"
              ]
            },
            "2d": {
              "word": "issue",
              "startingCell": "r1c2",
              "clue": "Is suede secretly a problem?",
              "hints": [
                "The solution means 'problem'",
                "'secretly' is a hidden-word indicator"
              ]
            },
            "4d": {
              "word": "habit",
              "startingCell": "r1c4",
              "clue": "Funny gag or routine ",
              "hints": [
                "The solution is synonymous with 'routine'",
                "'funny' = HA",
                "'gag' = BIT"
              ]
            }
          },
          "30": {
            "2a": {
              "word": "spoil",
              "startingCell": "r2c1",
              "clue": "Ruin the South Pole with petroleum",
              "hints": [
                "The solution means 'ruin'"
              ]
            },
            "4a": {
              "word": "movie",
              "startingCell": "r4c1",
              "clue": "Film wingless dove that is after a bite of mealworm",
              "hints": [
                "The solution means 'film'",
                "'that is' = i.e. = IE",
                "'wingless' is a letter-removal indicator, 'dove' becomes OV",
                "'a bite of mealworm' = M"
              ]
            },
            "3d": {
              "word": "solve",
              "startingCell": "r1c3",
              "clue": "Somehow loves what you're trying to do to this clue",
              "hints": [
                "'somehow' is an anagram indicator",
                "The solution is 'what you're trying to do to this clue'... as in to decipher it..."
              ]
            }
          },
          "31": {
            "3a": {
              "word": "owner",
              "startingCell": "r3c1",
              "clue": "Egg excites bird keeper",
              "hints": [
                "The solution means 'keeper'",
                "'egg' = O",
                "'excites' is an anagram indicator",
                "the bird in question is a WREN"
              ]
            },
            "1d": {
              "word": "float",
              "startingCell": "r1c1",
              "clue": "Opening in flat pier",
              "hints": [
                "The solution means 'pier'",
                "'opening' = O"
              ]
            },
            "3d": {
              "word": "handy",
              "startingCell": "r1c3",
              "clue": "Useful hour and year",
              "hints": [
                "The solution means 'useful'",
                "hour = H",
                "year = Y",
                "and = AND"
              ]
            },
            "5d": {
              "word": "carve",
              "startingCell": "r1c5",
              "clue": "Vehicle has very elegant front shape?",
              "hints": [
                "The solution means 'shape' but not as a noun",
                "very = V",
                "'elegant front' = E",
                "vehicle = CAR"
              ]
            }
          }
        }
    },
    "2025": {
      "1": {
        "1": {
          "3a": {
            "word": "duvet",
            "startingCell": "r3c1",
            "clue": "Couple takes first bit of vacation in blanket",
            "hints": [
              "The solution means 'blanket'",
              "'first bit of vacation' = V",
              "couple = DUET"
            ]
          },
          "2d": {
            "word": "court",
            "startingCell": "r1c2",
            "clue": "Apprehended and heard at the tribunal",
            "hints": [
              "'and heard' is a homophone indicator",
              "the solution means 'tribunal'",
              "find a homophone of 'apprehended'"
            ]
          },
          "4d": {
            "word": "siege",
            "startingCell": "r1c4",
            "clue": "Front of soldier line, for example, sits at border of emergency barricade",
            "hints": [
              "The solution means 'barricade'",
              "'front of soldier' = S",
              "line = L",
              "for example = EG",
              "'border of emergency' = E"
            ]
          }
        },
        "2": {
          "1a": {
            "word": "evoke",
            "startingCell": "r1c1",
            "clue": "Awaken the day before feeling fine inside?",
            "hints": [
              "The solution means 'awaken'",
              "the day before = EVE",
              "fine = OK"
            ]
          },
          "3a": {
            "word": "lord",
            "startingCell": "r3c2",
            "clue": "Aristocrat is terribly cordial but not with the CIA",
            "hints": [
              "The solution is synonymous with 'aristocrat'",
              "'terribly' is an anagram indicator",
              "'but not with' is a letter-removal indicator"
            ]
          },
          "5a": {
            "word": "idea",
            "startingCell": "r5c1",
            "clue": "Plan to arrange aide",
            "hints": [
              "The solution means 'plan'",
              "'arrange' is an anagram indicator"
            ]
          },
          "2d": {
            "word": "valid",
            "startingCell": "r1c2",
            "clue": "Some survival ideas are reasonable",
            "hints": [
              "The solution means 'reasonable'",
              "'some' is a hidden word indicator"
            ]
          },
          "4d": {
            "word": "karma",
            "startingCell": "r1c4",
            "clue": "Actions bring consequences to mother following the sound of car ",
            "hints": [
              "The solution means 'actions bring consequences'",
              "mother = MA",
              "'sound of car' = KAR"
            ]
          }
        },
        "3": {
          "2a": {
            "word": "widen",
            "startingCell": "r2c1",
            "clue": "Stretch part of jaw I dented",
            "hints": [
              "The solution means 'stretch'",
              "'part of' is a hidden word indicator"
            ]
          },
          "5a": {
            "word": "opal",
            "startingCell": "r5c2",
            "clue": "Gem given by old friend",
            "hints": [
              "The solution is a gem",
              "Old = O",
              "friend = PAL"
            ]
          },
          "2d": {
            "word": "bingo",
            "startingCell": "r1c2",
            "clue": "Leave after rubbish game",
            "hints": [
              "The solution is a game",
              "'rubbish' = BIN",
              "'leave' = GO"
            ]
          },
          "4d": {
            "word": "media",
            "startingCell": "r1c4",
            "clue": "Journalism is poorly aimed",
            "hints": [
              "The solution is synonymous with 'journalism'",
              "'poorly' is an anagram indicator"
            ]
          }
        },
        "4": {
          "1a": {
            "word": "wrist",
            "startingCell": "r1c1",
            "clue": "Joint first to finish world record?",
            "hints": [
              "The solution is a joint",
              "'world record' = WR",
              "'first' = IST"
            ]
          },
          "4a": {
            "word": "today",
            "startingCell": "r4c1",
            "clue": "The 4th of January represented as the modern age returning in play?",
            "hints": [
              "'the modern age' = AD",
              "'the modern age returning' = DA",
              "'play' = TOY",
              "The solution is the 4th of January, in the context of this puzzle"
            ]
          },
          "2d": {
            "word": "robot",
            "startingCell": "r1c2",
            "clue": "Machine begins to ridicule our bishop over old testament",
            "hints": []
          },
          "4d": {
            "word": "sugar",
            "startingCell": "r1c4",
            "clue": "Taunt us from below, how very sweet",
            "hints": [
              "The solution is very sweet",
              "'from below' is a reversal indicator for a down clue",
              "'taunt' = RAG"
            ]
          }
        },
        "5": {
          "2a": {
            "word": "grown",
            "startingCell": "r2c1",
            "clue": "Whimper sounds like it's gotten bigger",
            "hints": [
              "The solution is a type of establishment"
            ]
          },
          "4a": {
            "word": "table",
            "startingCell": "r4c1",
            "clue": "Put off by story involving a bit of brutality",
            "hints": [
              "The solution means 'put off'",
              "'a bit of brutality' = B",
              "'story' = TALE"
            ]
          },
          "2d": {
            "word": "trial",
            "startingCell": "r1c2",
            "clue": "Hearing examination",
            "hints": [
              "The solution means both 'hearing' and 'examination'",
              "'hearing' in the sense of a court hearing"
            ]
          },
          "4d": {
            "word": "swell",
            "startingCell": "r1c4",
            "clue": "Excellent week in trade",
            "hints": [
              "The solution means 'excellent'",
              "'week' = W",
              "'in trade' = S_ELL"
            ]
          }
        },
        "6": {
          "2a": {
            "word": "sweat",
            "startingCell": "r2c1",
            "clue": "Perspire in glorious weather",
            "hints": [
              "The solution means 'perspire'",
              "'in' is a hidden word indicator"
            ]
          },
          "4a": {
            "word": "niche",
            "startingCell": "r4c1",
            "clue": "Back in Church before start of Easter recess?",
            "hints": [
              "The solution means 'recess'",
              "church = CH",
              "'start of Easter' = E",
              "'back in' = NI"
            ]
          },
          "1d": {
            "word": "sin",
            "startingCell": "r2c1",
            "clue": "Casinos harbour evil",
            "hints": [
              "'harbour' is a hidden word indicator",
              "the solution means 'evil'"
            ]
          },
          "3d": {
            "word": "mercy",
            "startingCell": "r1c3",
            "clue": "Frenchman says thankyou for leniency",
            "hints": [
              "The solution means 'leniency'",
              "'says' is a homophone indicator",
              "merci"
            ]
          },
          "5d": {
            "word": "tie",
            "startingCell": "r2c5",
            "clue": "They're gutted about it, losing the match",
            "hints": [
              "the = T",
              "'IT losing the(T)' = I",
              "the solution means 'match'",
              "'they're gutted' = TE",
              ""
            ]
          }
        },
        "7": {
          "2a": {
            "word": "choke",
            "startingCell": "r2c1",
            "clue": "Suffocate when a bit of heat is added to coal",
            "hints": [
              "The solution means 'suffocate'",
              "'a bit of heat' = H",
              "coal = COKE"
            ]
          },
          "4a": {
            "word": "bride",
            "startingCell": "r4c1",
            "clue": "Newly-wed given exotic bird with decorative tail",
            "hints": [
              "'decorative tail' = E",
              "'exotic' is an anagram indicator",
              "The solution means 'newly-wed'"
            ]
          },
          "2d": {
            "word": "share",
            "startingCell": "r1c2",
            "clue": "Portion of small rabbit-like animal",
            "hints": [
              "The solution means 'portion'",
              "'small' = S",
              "'rabbit-like animal' - HARE"
            ]
          },
          "5d": {
            "word": "yemen",
            "startingCell": "r1c5",
            "clue": "Enemy fights for country",
            "hints": [
              "The solution is a country",
              "'fights' is an anagram indicator"
            ]
          }
        },
        "8": {
          "1a": {
            "word": "deal",
            "startingCell": "r1c1",
            "clue": "Trade in crude aluminium",
            "hints": [
              "The solution means 'trade'",
              "'in' is a hidden word indicator"
            ]
          },
          "4a": {
            "word": "amuse",
            "startingCell": "r4c1",
            "clue": "A stimulus to entertain",
            "hints": [
              "The solution means 'entertain'",
              "A = A",
              "'stimulus' = MUSE"
            ]
          },
          "1d": {
            "word": "decaf",
            "startingCell": "r1c1",
            "clue": "Face the day, rising without caffiene",
            "hints": [
              "'rising' is a reversal indicator for down clues",
              "'day' = D ('the' is filler, sorry)",
              "The solution means 'without caffeine'"
            ]
          },
          "3d": {
            "word": "album",
            "startingCell": "r1c3",
            "clue": "Mix balm with uranium for collection",
            "hints": [
              "The solution means 'collection'",
              "'mix' is an anagram indicator",
              "uranium = U"
            ]
          },
          "5d": {
            "word": "diet",
            "startingCell": "r2c5",
            "clue": "Tide changes fast?",
            "hints": [
              "'changes' is an anagram indicator",
              "The solution means 'fast'"
            ]
          }
        },
        "9": {
          "2a": {
            "word": "stage",
            "startingCell": "r2c1",
            "clue": "Present era after saint?",
            "hints": [
              "The solution means 'present'",
              "saint = ST",
              "era = AGE"
            ]
          },
          "4a": {
            "word": "price",
            "startingCell": "r4c1",
            "clue": "Value quiet river bank with frozen water ",
            "hints": [
              "'quiet' = P",
              "The solution means 'value'",
              "'river bank' = R",
              "'frozen water' = ICE"
            ]
          },
          "1d": {
            "word": "sap",
            "startingCell": "r2c1",
            "clue": "Secretion extracted from sarsaparilla",
            "hints": [
              "The solution means 'secretion'",
              "'extracted from' is a hidden word indicator",
              "sarsaparilla is the name of a tree, I googled it. not a hint sorry"
            ]
          },
          "3d": {
            "word": "basic",
            "startingCell": "r1c3",
            "clue": "Simple fabrics unravelled, losing finer edges",
            "hints": [
              "The solution means 'simple'",
              "'unravelled' is an anagram indicator",
              "'finer edges' = FR"
            ]
          }
        },
        "10": {
          "2a": {
            "word": "cava",
            "startingCell": "r2c1",
            "clue": "Excavate region for sparkling wine",
            "hints": [
              "'region' is a hidden word indicator",
              "The solution is a sparkling wine"
            ]
          },
          "4a": {
            "word": "crow",
            "startingCell": "r4c2",
            "clue": "Almost coronate a bird",
            "hints": [
              "The solution is a bird",
              "'almost' indicates to remove the last letter",
              "almost CROWN"
            ]
          },
          "3d": {
            "word": "overt",
            "startingCell": "r1c3",
            "clue": "Stealthy mask removed, now undisguised",
            "hints": [
              "The solution means 'undisguised'",
              "'mask removed' indicates to remove the first letter",
              "stealthy = COVERT"
            ]
          },
          "5d": {
            "word": "awe",
            "startingCell": "r3c5",
            "clue": "We follow first character in reverence",
            "hints": [
              "The solution means 'reverence'",
              "'first character' = A i.e. alphabet",
              "we = WE"
            ]
          }
        },
        "11": {
          "2a": {
            "word": "drama",
            "startingCell": "r2c1",
            "clue": "Theatre held by Dr Amar",
            "hints": [
              "The solution means 'theatre'",
              "'held by' is a hidden-word indicator"
            ]
          },
          "4a": {
            "word": "stain",
            "startingCell": "r4c1",
            "clue": "Blemish ruins satin",
            "hints": [
              "The solution means 'blemish'",
              "'ruins' is an anagram indicator"
            ]
          },
          "2d": {
            "word": "write",
            "startingCell": "r1c2",
            "clue": "Communicate at religious ceremony after first sign of winter",
            "hints": [
              "The solution means 'communicate'",
              "'first sign of winter' = W",
              "religious ceremony = RITE"
            ]
          },
          "4d": {
            "word": "main",
            "startingCell": "r2c4",
            "clue": "US state removes latest chief?",
            "hints": [
              "The solution means 'chief'",
              "'removes latest' indicates to remove the last letter",
              "US state = maine"
            ]
          }
        },
        "12": {
          "1a": {
            "word": "brave",
            "startingCell": "r1c1",
            "clue": "Endure second class party",
            "hints": [
              "The solution means 'endure'",
              "second class = B",
              "party = RAVE"
            ]
          },
          "4a": {
            "word": "jumpy",
            "startingCell": "r4c1",
            "clue": "Nervous judge has doubt before perjury case",
            "hints": [
              "judge = J",
              "The solution means 'nervous'",
              "'doubt' = UM",
              "perjury case = PY"
            ]
          },
          "2d": {
            "word": "rogue",
            "startingCell": "r1c2",
            "clue": "Urge duck that's wild and unpredictable",
            "hints": [
              "The solution means 'unpredictable'",
              "duck = O (cricket)",
              "'wild' is an anagram indicator",
              "urgeo (anagram) = unpredictable"
            ]
          },
          "4d": {
            "word": "vamps",
            "startingCell": "r1c4",
            "clue": "Refurbishes five units",
            "hints": [
              "The solution means 'refurbishes'",
              "five = V",
              "units = AMPS"
            ]
          }
        },
        "13": {
          "2a": {
            "word": "tulip",
            "startingCell": "r2c1",
            "clue": "After finishing harvest, you left one quiet flower",
            "hints": [
              "The solution is a flower",
              "'finishing harvest' = T",
              "you = U, left = L",
              "one = I",
              "quiet = P (piano in music notation)\n"
            ]
          },
          "4a": {
            "word": "burst",
            "startingCell": "r4c1",
            "clue": "Head of bolt with bad rust will rupture",
            "hints": [
              "The solution means 'rupture'",
              "'Head of bolt' = B",
              "'bad' is an anagram indicator"
            ]
          },
          "3d": {
            "word": "alarm",
            "startingCell": "r1c3",
            "clue": "Cold feet and a long arm",
            "hints": [
              "The solution means 'cold feet' ... if I'm honest it's a loose synonym",
              "a = A",
              "long = L",
              "arm = ARM"
            ]
          }
        },
        "14": {
          "2a": {
            "word": "solid",
            "startingCell": "r2c1",
            "clue": "Stable oil mixed in specialised case",
            "hints": [
              "'specialised case' = SD",
              "The solution means 'stable'",
              "'mixed' is an anagram indicator"
            ]
          },
          "4a": {
            "word": "reach",
            "startingCell": "r4c1",
            "clue": "Control huge flightless bird that has a bit of chocolate and goes wild",
            "hints": [
              "The solution means 'control', although not as a verb as the clue suggests",
              "'a bit of chocolate' = C",
              "'goes wild' is an anagram indicator",
              "'huge flightless bird' = RHEA"
            ]
          },
          "2d": {
            "word": "money",
            "startingCell": "r1c2",
            "clue": "Cash back Yen after a volume unfortunately loses value",
            "hints": [
              "'unfortunately' is an anagram indicator",
              "AVOLUME loses VALUE -> OM",
              "'back' is a reversal indicator",
              "The solution means 'cash'",
              "NEY (yen back) after OM/MO = cash"
            ]
          },
          "4d": {
            "word": "disco",
            "startingCell": "r1c4",
            "clue": "Two discs to make music",
            "hints": [
              "The solution is a genre of music",
              "two discs = disc disc",
              "disc = O"
            ]
          }
        },
        "15": {
          "3a": {
            "word": "storm",
            "startingCell": "r3c1",
            "clue": "Downpour in March?",
            "hints": [
              "The solution means both 'march' and 'downpour'"
            ]
          },
          "5a": {
            "word": "shred",
            "startingCell": "r5c1",
            "clue": "Break up boisterous herds",
            "hints": [
              "The solution means 'break up'",
              "'boisterous' is an anagram indicator"
            ]
          },
          "2d": {
            "word": "ditch",
            "startingCell": "r1c2",
            "clue": "Get rid of dry face irritation",
            "hints": [
              "'dry face' = D (face of Dry)",
              "The solution means 'get rid of'",
              "'irritation' = ITCH"
            ]
          },
          "4d": {
            "word": "curve",
            "startingCell": "r1c4",
            "clue": "Turn some vaccine into cure",
            "hints": [
              "The solution means 'turn'",
              "'some vaccine' = V"
            ]
          }
        },
        "16": {
          "1a": {
            "word": "track",
            "startingCell": "r1c1",
            "clue": "In extreme trick, car reverses on racecourse",
            "hints": [
              "The solution means 'racecourse'",
              "'extreme trick' = TK",
              "'car reverses' = RAC"
            ]
          },
          "3a": {
            "word": "sweep",
            "startingCell": "r3c1",
            "clue": "Clean and cry after initiation to sorority",
            "hints": [
              "The solution is a way to 'clean'",
              "'initiation to sorority' = S",
              "cry = WEEP"
            ]
          },
          "2d": {
            "word": "rowdy",
            "startingCell": "r1c2",
            "clue": "Row deflated dinghy, it's uncontrollable",
            "hints": [
              "The solution means 'uncontrollable'",
              "'deflated dinghy' = DY",
              "row = ROW"
            ]
          },
          "4d": {
            "word": "cheap",
            "startingCell": "r1c4",
            "clue": "To hear the sound of a bird is inexpensive",
            "hints": [
              "The solution means 'inexpensive'",
              "'to hear' indicates a homophone",
              "the sound of a bird = CHEEP"
            ]
          }
        },
        "17": {
          "2a": {
            "word": "sport",
            "startingCell": "r2c1",
            "clue": "Don elaborate top with simpler outer wear",
            "hints": [
              "The solution means 'don'",
              "'elaborate' is an anagram indicator",
              "'simpler outer wear' = SR",
              "SRTOP -> don (verb)"
            ]
          },
          "4a": {
            "word": "amber",
            "startingCell": "r4c1",
            "clue": "Gem found in bedchambers",
            "hints": []
          },
          "3d": {
            "word": "lobby",
            "startingCell": "r1c3",
            "clue": "Leaderless ploy involving a bit of beguilement and the lead singer from Blondie for influence",
            "hints": [
              "The solution means 'influence'",
              "'leaderless ploy' = LOY",
              "'bit of beguilement' = B",
              "'the lead singer from Blondie' = B"
            ]
          }
        },
        "18": {
          "2a": {
            "word": "serve",
            "startingCell": "r2c1",
            "clue": "Obey accuser vetting prisoners",
            "hints": [
              "The solution means 'obey'",
              "'prisoners' is an hidden word indicator"
            ]
          },
          "4a": {
            "word": "frost",
            "startingCell": "r4c1",
            "clue": "Icy layer for winding street",
            "hints": [
              "'street' = ST",
              "'winding' is an anagram indicator",
              "The solution is an 'icy layer'"
            ]
          },
          "2d": {
            "word": "beard",
            "startingCell": "r1c2",
            "clue": "Animal has defined nose and hairy chin",
            "hints": [
              "'defined nose' = D",
              "The solution means 'hairy chin'",
              "The animal in question can be brown, black or polar etc."
            ]
          },
          "5d": {
            "word": "depth",
            "startingCell": "r1c5",
            "clue": "A rat does not go into absurd death trap due to wisdom ",
            "hints": [
              "The solution means 'wisdom'",
              "'absurd' is an anagram indicator",
              "'does not go into' is a letter deletion indicator"
            ]
          }
        },
        "19": {
          "3a": {
            "word": "curse",
            "startingCell": "r3c1",
            "clue": "Rescue is cut short at sea by disaster",
            "hints": [
              "The solution ... sort of ... means 'disaster'",
              "'at sea' is an anagram indicator",
              "'cut short' indicates to remove the last letter"
            ]
          },
          "2d": {
            "word": "abuse",
            "startingCell": "r1c2",
            "clue": "Take advantage of public transport surrounded by evacuated architecture",
            "hints": [
              "The solution means 'take advantage of'",
              "'evacuated architecture' = AE",
              "public transport = BUS"
            ]
          },
          "4d": {
            "word": "mason",
            "startingCell": "r1c4",
            "clue": "Craftsman has mother and son",
            "hints": [
              "The solution means 'craftsman'",
              "mother = MA"
            ]
          }
        },
        "20": {
          "1a": {
            "word": "cower",
            "startingCell": "r1c1",
            "clue": "Back away from animal with  concerning reflex",
            "hints": [
              "'reflex' is a reversal indicator",
              "'concerning' = RE",
              "The solution means 'back away'",
              "animal = COW"
            ]
          },
          "3a": {
            "word": "mover",
            "startingCell": "r3c1",
            "clue": "Almost remove drunk driver?",
            "hints": [
              "The solution means 'driver', but in the sense of a driving force",
              "'almost' indicates to remove the last letter from 'remove'",
              "'drunk' is an anagram indicator"
            ]
          },
          "5a": {
            "word": "mural",
            "startingCell": "r5c1",
            "clue": "No sir, wild ruralism is represented in this artform",
            "hints": [
              "The solution is a type of artform",
              "'wild' is an anagram indicator",
              "'No sir' is a letter deletion indicator"
            ]
          },
          "3d": {
            "word": "waver",
            "startingCell": "r1c3",
            "clue": "Indicate right then falter",
            "hints": [
              "The solution means 'falter'",
              "right = R",
              "'indicate' = WAVE"
            ]
          }
        },
        "21": {
          "2a": {
            "word": "raise",
            "startingCell": "r2c1",
            "clue": "Without some expertise, it's somehow easier to get a pay increase",
            "hints": [
              "'some expertise' = E",
              "'somehow' is an anagram indicator",
              "'without' is a letter deletion indicator",
              "the solution means 'pay increase'"
            ]
          },
          "4a": {
            "word": "groom",
            "startingCell": "r4c1",
            "clue": "Prepare room for first gathering",
            "hints": [
              "'first gathering' = G",
              "The solution means 'prepare'"
            ]
          },
          "3d": {
            "word": "bison",
            "startingCell": "r1c3",
            "clue": "Animal says bye to offspring",
            "hints": [
              "The solution is an animal",
              "'says' is a homophone indicator",
              "'offspring' = SON"
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

function returnMonths(year, currentMonth, currentYear)
{
    var res = Object.keys(puzzles[year]).filter(mo => +mo <= currentMonth);
    if (currentYear > year)
    {
      res = Object.keys(puzzles[year]);
    }
    if (!res) return null;
    return res; 
}

function returnDays(year, month, currentDay)
{
    var res = (currentDay < 0) ? Object.keys(puzzles[year][month]) : Object.keys(puzzles[year][month]).filter(da => +da <= currentDay);
    if (!res) return null;
    return res;
}