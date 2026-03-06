// 5 categories — fill in your own questions for Nav Staff Lore, Who Said It, Spelling Bee, and Random.

// Wrap LaTeX in $...$ for inline math. The app will render it with KaTeX.

const categories = [

  {

    name: "Nav Staff Lore",

    clues: [

      { value: 100, question: "How many deer has Brian hit?", answer: "2" },

      { value: 200, question: "Where did Brian Van Zante go to college?", answer: "University of Illinois Urbana-Champaign" },

      { value: 300, question: "How long has Brian been in Japan? (hint: it’s a prime number)", answer: "13" },

      { value: 400, question: "What is Vandenberg’s major in UW-Madison?", answer: "Construction Mangement" },

      { value: 700, question: "What is Jeff Weigel’s middle name?", answer: "Edward" },

    ],

  },

  {

    name: "Verse Recall",

    clues: [

      { value: 100, question: "Recite John 3:16", answer: "“For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.”" },

      { value: 200, question: "Recite Romans 5:8 & 1 Peter 3:18", answer: "“But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.” — Romans 5:8 // “For Christ also suffered once for sins, the righteous for the unrighteous, to bring you to God. He was put to death in the body but made alive in the Spirit.” — 1 Peter 3:18" },

      { value: 300, question: "Recite 1 Peter 5:5-6", answer: "“In the same way, you who are younger, submit yourselves to your elders. All of you, clothe yourselves with humility toward one another, because, ‘God opposes the proud but shows favor to the humble.’ Humble yourselves, therefore, under God’s mighty hand, that he may lift you up in due time.”" },

      { value: 400, question: "State the reference: “I am the way and the truth and the life. No one comes to the Father except through me.”", answer: "John 14:6" },

      { value: 700, question: "Recite Psalm 119:9-10", answer: "“How can a young person stay on the path of purity? By living according to your word. I seek you with all my heart; do not let me stray from your commands.”" },

    ],

  },

  {

    name: "Math",

    clues: [

      {

        value: 100,

        question: "What is the derivative of $x^3$?",

        answer: "$3x^2$",

        steps: [

          "Power rule: bring down the exponent, subtract 1",

          String.raw`$\frac{d}{dx} x^3 = 3x^{3-1} = 3x^2$`,

        ],

      },

      {

        value: 200,

        question: String.raw`Evaluate: $\int 2x \, dx$`,

        answer: "$x^2 + C$",

        steps: [

          "Power rule for integration: increase exponent by 1, divide by new exponent",

          String.raw`$\int 2x \, dx = 2 \cdot \frac{x^2}{2} + C = x^2 + C$`,

        ],

      },

      {

        value: 300,

        question: String.raw`What is $\displaystyle\lim_{x \to 0} \frac{\sin x}{x}$ ?`,

        answer: "$1$",

        steps: [

          String.raw`Direct substitution gives $\frac{0}{0}$, so apply L'Hôpital's Rule:`,

          String.raw`$\displaystyle\lim_{x \to 0} \frac{\sin x}{x} = \lim_{x \to 0} \frac{\cos x}{1} = \cos(0) = 1$`,

        ],

      },

      {

        value: 400,

        question: String.raw`What is the sum of the series $\displaystyle\sum_{n=0}^{\infty} \frac{1}{2^n}$ ?`,

        answer: "$2$",

        steps: [

          String.raw`Geometric series with $a = 1$ and $r = \frac{1}{2}$`,

          String.raw`$S = \frac{a}{1 - r} = \frac{1}{1 - \frac{1}{2}} = \frac{1}{\frac{1}{2}} = 2$`,

        ],

      },

      {

        value: 700,

        question: String.raw`Evaluate: $\displaystyle\int_0^{\infty} e^{-x^2} \, dx$`,

        answer: String.raw`$\dfrac{\sqrt{\pi}}{2}$`,

        steps: [

          String.raw`Let $I = \int_0^{\infty} e^{-x^2} dx$. Then:`,

          String.raw`$I^2 = \int_0^{\infty}\!\int_0^{\infty} e^{-(x^2+y^2)} \, dx \, dy$`,

          String.raw`Convert to polar coords: $x^2+y^2 = r^2$, $dx\,dy = r\,dr\,d\theta$`,

          String.raw`$I^2 = \int_0^{\pi/2}\!\int_0^{\infty} e^{-r^2} r \, dr \, d\theta = \frac{\pi}{2} \cdot \frac{1}{2} = \frac{\pi}{4}$`,

          String.raw`$I = \sqrt{\frac{\pi}{4}} = \frac{\sqrt{\pi}}{2}$`,

        ],

      },

    ],

  },

  {

    name: "Spelling Bee",
    clues: [
      { value: 100, question: "Spell: For all have ______ and fall short of the glory of God (present tense)", answer: "sin" },
      { value: 200, question: "Spell: The process of being set apart by God from sin and consecrated for His holy purpose, resulting in a life that becomes increasingly Christlike", answer: "Sanctification" },
      { value: 300, question: "Spell: 14th book of the New Testament", answer: "2 Thessalonians" },
      { value: 400, question: "Spell: 1st Book of the Deuterocanonical Books", answer: "Tobit" },
      { value: 700, question: "Spell: The name of the King in Daniel chapters 1 - 4", answer: "Nebuchadnezzar / Nebuchadrezzar" },
    ],

  },

  {

    name: "Random Trivia",

    clues: [

      { value: 100, question: "What is the largest ocean on Earth?", answer: "Pacific Ocean" },

      { value: 200, question: "How many bones are in the adult human body?", answer: "206" },

      { value: 300, question: "What year did the Berlin Wall fall?", answer: "1989" },

      { value: 400, question: "What is the smallest bone in the human body?", answer: "Stapes (stirrup bone, in the middle ear)" },

      { value: 700, question: "Within 5 million, what is the estimated number of species on Earth?", answer: "8.7 million" },

    ],

  },

];



export default categories;

export const wisconsinCategories = [

  {
    name: "Wisconsin Sports",
    clues: [
      { value: 100, question: "What NFL team is based in Green Bay?", answer: "Green Bay Packers" },
      { value: 200, question: "What year did the Milwaukee Bucks win their most recent NBA Championship?", answer: "2021" },
      { value: 300, question: "How many Super Bowls have the Green Bay Packers won?", answer: "4" },
      { value: 400, question: "Who was the first head coach of the Packers and the stadium’s namesake?", answer: "Curly Lambeau" },
      { value: 700, question: "In what year did the Milwaukee Brewers last appear in the World Series?", answer: "1982" },
    ],
  },

  {
    name: "Spell That WI City",
    clues: [
      { value: 100, question: "Spell: Wisconsin’s largest city", answer: "Milwaukee" },
      { value: 200, question: "Spell: Wisconsin city on Lake Michigan known for its bratwurst", answer: "Sheboygan" },
      { value: 300, question: "Spell: Wisconsin city home to Oshkosh B’Gosh and EAA AirVenture", answer: "Oshkosh" },
      { value: 400, question: "Spell: Wisconsin city whose name means ‘gathering place by the river’ in Potawatomi", answer: "Waukesha" },
      { value: 700, question: "Spell: Wisconsin city in Waukesha County that reads the same forwards and backwards", answer: "Oconomowoc" },
    ],
  },

  {
    name: "UW-Madison History",
    clues: [
      { value: 100, question: "What is the name of UW-Madison’s mascot?", answer: "Bucky Badger" },
      { value: 200, question: "What lake borders the UW-Madison campus to the north?", answer: "Lake Mendota" },
      { value: 300, question: "What is the name of the famous lakeside terrace on campus?", answer: "Memorial Union Terrace" },
      { value: 400, question: "In what year was UW-Madison founded?", answer: "1848" },
      { value: 700, question: "In what year did the Sterling Hall bombing occur on campus?", answer: "1970" },
    ],
  },

  {
    name: "Wisconsin Geography",
    clues: [
      { value: 100, question: "What Great Lake borders Wisconsin to the east?", answer: "Lake Michigan" },
      { value: 200, question: "How many counties does Wisconsin have?", answer: "72" },
      { value: 300, question: "What is the highest point in Wisconsin?", answer: "Timms Hill" },
      { value: 400, question: "What group of Wisconsin islands in Lake Superior is a national lakeshore?", answer: "Apostle Islands" },
      { value: 700, question: "What is the deepest lake entirely within Wisconsin?", answer: "Green Lake (at 237 feet)" },
    ],
  },

  {
    name: "Famous Wisconsinites",
    clues: [
      { value: 100, question: "What famous escape artist grew up in Appleton, Wisconsin?", answer: "Harry Houdini" },
      { value: 200, question: "What architect from Wisconsin designed Fallingwater and the Guggenheim Museum?", answer: "Frank Lloyd Wright" },
      { value: 300, question: "What Wisconsin senator led the anti-communist hearings in the 1950s?", answer: "Joseph McCarthy" },
      { value: 400, question: "What Milwaukee serial killer was convicted of 15 murders between 1978 and 1991?", answer: "Jeffrey Dahmer" },
      { value: 700, question: "What Kenosha-born filmmaker directed Citizen Kane at age 25?", answer: "Orson Welles" },
    ],
  },

];


