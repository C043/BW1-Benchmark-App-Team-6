const easyQuestions = [
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
    correct_answer: "1000",
    incorrect_answers: ["512", "1024", "500"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "The NVidia GTX 1080 gets its name because it can only render at a 1920x1080 screen resolution.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "When Gmail first launched, how much storage did it provide for your email?",
    correct_answer: "1GB",
    incorrect_answers: ["512MB", "5GB", "Unlimited"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "This mobile OS held the largest market share in 2012.",
    correct_answer: "iOS",
    incorrect_answers: ["Android", "BlackBerry", "Symbian"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "In any programming language, what is the most common way to iterate through an array?",
    correct_answer: "&#039;For&#039; loops",
    incorrect_answers: [
      "&#039;If&#039; Statements",
      "&#039;Do-while&#039; loops",
      "&#039;While&#039; loops",
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "How many kilobytes in one gigabyte (in decimal)?",
    correct_answer: "1000000",
    incorrect_answers: ["1024", "1000", "1048576"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "Which computer hardware device provides an interface for all other connected devices to communicate?",
    correct_answer: "Motherboard",
    incorrect_answers: [
      "Central Processing Unit",
      "Hard Disk Drive",
      "Random Access Memory",
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What language does Node.js use?",
    correct_answer: "JavaScript",
    incorrect_answers: ["Java", "Java Source", "Joomla Source Code"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "In computing, what does LAN stand for?",
    correct_answer: "Local Area Network",
    incorrect_answers: [
      "Long Antenna Node",
      "Light Access Node",
      "Land Address Navigation",
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "The Windows 7 operating system has six main editions.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What does the &quot;MP&quot; stand for in MP3?",
    correct_answer: "Moving Picture",
    incorrect_answers: ["Music Player", "Multi Pass", "Micro Point"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "In &quot;Hexadecimal&quot;, what color would be displayed from the color code? &quot;#00FF00&quot;?",
    correct_answer: "Green",
    incorrect_answers: ["Red", "Blue", "Yellow"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What does the computer software acronym JVM stand for?",
    correct_answer: "Java Virtual Machine",
    incorrect_answers: [
      "Java Vendor Machine",
      "Java Visual Machine",
      "Just Virtual Machine",
    ],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "Ada Lovelace is often considered the first computer programmer.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "RAM stands for Random Access Memory.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What amount of bits commonly equals one byte?",
    correct_answer: "8",
    incorrect_answers: ["1", "2", "64"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "Time on Computers is measured via the EPOX System.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "&quot;HTML&quot; stands for Hypertext Markup Language.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What does LTS stand for in the software market?",
    correct_answer: "Long Term Support",
    incorrect_answers: [
      "Long Taco Service",
      "Ludicrous Transfer Speed",
      "Ludicrous Turbo Speed",
    ],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "The Python programming language gets its name from the British comedy group &quot;Monty Python.&quot;",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What does GHz stand for?",
    correct_answer: "Gigahertz",
    incorrect_answers: ["Gigahotz", "Gigahetz", "Gigahatz"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "Linus Torvalds created Linux and Git.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "Which computer language would you associate Django framework with?",
    correct_answer: "Python",
    incorrect_answers: ["C#", "C++", "Java"],
  },
];

const mediumQuestions = [
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Which of these people was NOT a founder of Apple Inc?",
    correct_answer: "Jonathan Ive",
    incorrect_answers: ["Steve Jobs", "Ronald Wayne", "Steve Wozniak"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "AMD created the first consumer 64-bit processor.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "Which programming language was developed by Sun Microsystems in 1995?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "Solaris OS", "C++"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "The open source program Redis is a relational database server.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "What does AD stand for in relation to Windows Operating Systems? ",
    correct_answer: "Active Directory",
    incorrect_answers: [
      "Alternative Drive",
      "Automated Database",
      "Active Department",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "When did the online streaming service &quot;Mixer&quot; launch?",
    correct_answer: "2016",
    incorrect_answers: ["2013", "2009", "2011"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What was the first commerically available computer processor?",
    correct_answer: "Intel 4004",
    incorrect_answers: ["Intel 486SX", "TMS 1000", "AMD AM386"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What does RAID stand for?",
    correct_answer: "Redundant Array of Independent Disks",
    incorrect_answers: [
      "Rapid Access for Indexed Devices",
      "Range of Applications with Identical Designs",
      "Randomized Abstract Identification Description",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What does the acronym CDN stand for in terms of networking?",
    correct_answer: "Content Delivery Network",
    incorrect_answers: [
      "Content Distribution Network",
      "Computational Data Network",
      "Compressed Data Network",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What does the term MIME stand for, in regards to computing?",
    correct_answer: "Multipurpose Internet Mail Extensions",
    incorrect_answers: [
      "Mail Internet Mail Exchange",
      "Multipurpose Interleave Mail Exchange",
      "Mail Interleave Method Exchange",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Which of these programming languages is a low-level language?",
    correct_answer: "Assembly",
    incorrect_answers: ["Python", "C#", "Pascal"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "On which computer hardware device is the BIOS chip located?",
    correct_answer: "Motherboard",
    incorrect_answers: [
      "Hard Disk Drive",
      "Central Processing Unit",
      "Graphics Processing Unit",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "The name of technology company HP stands for what?",
    correct_answer: "Hewlett-Packard",
    incorrect_answers: ["Howard Packmann", "Husker-Pollosk", "Hellman-Pohl"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "Which of the following languages is used as a scripting language in the Unity 3D game engine?",
    correct_answer: "C#",
    incorrect_answers: ["Java", "C++", "Objective-C"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "In CSS, which of these values CANNOT be used with the &quot;position&quot; property?",
    correct_answer: "center",
    incorrect_answers: ["static", "absolute", "relative"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: ".rs is the top-level domain for what country?",
    correct_answer: "Serbia",
    incorrect_answers: ["Romania", "Russia", "Rwanda"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "FLAC stands for &quot;Free Lossless Audio Condenser&quot;&#039;",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "The first dual-core CPU was the Intel Pentium D.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "What did the name of the Tor Anonymity Network orignially stand for?",
    correct_answer: "The Onion Router",
    incorrect_answers: [
      "The Only Router",
      "The Orange Router",
      "The Ominous Router",
    ],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Android versions are named in alphabetical order.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What is the main CPU is the Sega Mega Drive / Sega Genesis?",
    correct_answer: "Motorola 68000",
    incorrect_answers: ["Zilog Z80", "Yamaha YM2612", "Intel 8088"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "Laserjet and inkjet printers are both examples of what type of printer?",
    correct_answer: "Non-impact printer",
    incorrect_answers: [
      "Impact printer",
      "Daisywheel printer",
      "Dot matrix printer",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "How many cores does the Intel i7-6950X have?",
    correct_answer: "10",
    incorrect_answers: ["12", "8", "4"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "Which of these is the name for the failed key escrow device introduced by the National Security Agency in 1993?",
    correct_answer: "Clipper Chip",
    incorrect_answers: ["Enigma Machine", "Skipjack", "Nautilus"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "&quot;Windows NT&quot; is a monolithic kernel.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "When was the programming language &quot;C#&quot; released?",
    correct_answer: "2000",
    incorrect_answers: ["1998", "1999", "2001"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "While Apple was formed in California, in which western state was Microsoft founded?",
    correct_answer: "New Mexico",
    incorrect_answers: ["Washington", "Colorado", "Arizona"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What does the term GPU stand for?",
    correct_answer: "Graphics Processing Unit",
    incorrect_answers: [
      "Gaming Processor Unit",
      "Graphite Producing Unit",
      "Graphical Proprietary Unit",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "What was the first Android version specifically optimized for tablets?",
    correct_answer: "Honeycomb",
    incorrect_answers: ["Eclair", "Froyo", "Marshmellow"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "The computer OEM manufacturer Clevo, known for its Sager notebook line, is based in which country?",
    correct_answer: "Taiwan",
    incorrect_answers: [
      "United States",
      "Germany",
      "China (People&#039;s Republic of)",
    ],
  },
];

const hardQuestions = [
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of the following is the oldest of these computers by release date?",
    correct_answer: "TRS-80",
    incorrect_answers: ["Commodore 64", "ZX Spectrum", "Apple 3"],
  },
  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "The IBM PC used an Intel 8008 microprocessor clocked at 4.77 MHz and 8 kilobytes of memory.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of these is not a layer in the OSI model for data communications?",
    correct_answer: "Connection Layer",
    incorrect_answers: [
      "Application Layer",
      "Transport Layer",
      "Physical Layer",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "How many Hz does the video standard PAL support?",
    correct_answer: "50",
    incorrect_answers: ["59", "60", "25"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of these was the name of a bug found in April 2014 in the publicly available OpenSSL cryptography library?",
    correct_answer: "Heartbleed",
    incorrect_answers: ["Shellshock", "Corrupted Blood", "Shellscript"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?",
    correct_answer: "Coffee Lake",
    incorrect_answers: ["Sandy Bridge", "Skylake", "Broadwell"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "According to DeMorgan&#039;s Theorem, the Boolean expression (AB)&#039; is equivalent to:",
    correct_answer: "A&#039; + B&#039;",
    incorrect_answers: [
      "A&#039;B + B&#039;A",
      "A&#039;B&#039;",
      "AB&#039; + AB",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What does the International System of Quantities refer 1024 bytes as?",
    correct_answer: "Kibibyte",
    incorrect_answers: ["Kylobyte", "Kilobyte", "Kelobyte"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "The acronym &quot;RIP&quot; stands for which of these?",
    correct_answer: "Routing Information Protocol",
    incorrect_answers: [
      "Runtime Instance Processes",
      "Regular Interval Processes",
      "Routine Inspection Protocol",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What vulnerability ranked #1 on the OWASP Top 10 in 2013?",
    correct_answer: "Injection ",
    incorrect_answers: [
      "Broken Authentication",
      "Cross-Site Scripting",
      "Insecure Direct Object References",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "America Online (AOL) started out as which of these online service providers?",
    correct_answer: "Quantum Link",
    incorrect_answers: ["CompuServe", "Prodigy", "GEnie"],
  },
  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question: "DHCP stands for Dynamic Host Configuration Port.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Released in 2001, the first edition of Apple&#039;s Mac OS X operating system (version 10.0) was given what animal code name?",
    correct_answer: "Cheetah",
    incorrect_answers: ["Puma", "Tiger", "Leopard"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "The Harvard architecture for micro-controllers added which additional bus?",
    correct_answer: "Instruction",
    incorrect_answers: ["Address", "Data", "Control"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What major programming language does Unreal Engine 4 use?",
    correct_answer: "C++",
    incorrect_answers: ["Assembly", "C#", "ECMAScript"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What is the name of the process that sends one qubit of information using two bits of classical information?",
    correct_answer: "Quantum Teleportation",
    incorrect_answers: [
      "Super Dense Coding",
      "Quantum Entanglement",
      "Quantum Programming",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of these Cherry MX mechanical keyboard switches is both tactile and clicky?",
    correct_answer: "Cherry MX Blue",
    incorrect_answers: ["Cherry MX Black", "Cherry MX Red", "Cherry MX Brown"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?",
    correct_answer: "Micronesia",
    incorrect_answers: ["Fiji", "Tuvalu", "Marshall Islands"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What was the first company to use the term &quot;Golden Master&quot;?",
    correct_answer: "Apple",
    incorrect_answers: ["IBM", "Microsoft", "Google"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Who invented the &quot;Spanning Tree Protocol&quot;?",
    correct_answer: "Radia Perlman",
    incorrect_answers: ["Paul Vixie", "Vint Cerf", "Michael Roberts"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Dutch computer scientist Mark Overmars is known for creating which game development engine?",
    correct_answer: "Game Maker",
    incorrect_answers: ["Stencyl", "Construct", "Torque 2D"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of the following computer components can be built using only NAND gates?",
    correct_answer: "ALU",
    incorrect_answers: ["CPU", "RAM", "Register"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What port does HTTP run on?",
    correct_answer: "80",
    incorrect_answers: ["53", "443", "23"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of these is not a key value of Agile software development?",
    correct_answer: "Comprehensive documentation",
    incorrect_answers: [
      "Individuals and interactions",
      "Customer collaboration",
      "Responding to change",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What was the name of the security vulnerability found in Bash in 2014?",
    correct_answer: "Shellshock",
    incorrect_answers: ["Heartbleed", "Bashbug", "Stagefright"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Who is the original author of the realtime physics engine called PhysX?",
    correct_answer: "NovodeX",
    incorrect_answers: ["Ageia", "Nvidia", "AMD"],
  },
  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "The T-Mobile Sidekick smartphone is a re-branded version of the Danger Hiptop.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of these names was an actual codename for a cancelled Microsoft project?",
    correct_answer: "Neptune",
    incorrect_answers: ["Enceladus", "Pollux", "Saturn"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What was the name of the first Bulgarian personal computer?",
    correct_answer: "IMKO-1",
    incorrect_answers: ["Pravetz 82", "Pravetz 8D", "IZOT 1030"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What type of sound chip does the Super Nintendo Entertainment System (SNES) have?",
    correct_answer: "ADPCM Sampler",
    incorrect_answers: [
      "FM Synthesizer",
      "Programmable Sound Generator (PSG)",
      "PCM Sampler",
    ],
  },
];

const questions = [];

let userScore = 0;

let questionNumber = 0;

const answerRandomizer = (array) => {
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    const randomNum = Math.floor(
      Math.random() * array[i].incorrect_answers.length
    );
    const incorrectAnswers = array[i].incorrect_answers;
    const currentQuestion = array[i];
    const result = incorrectAnswers.toSpliced(
      randomNum,
      0,
      currentQuestion.correct_answer
    );
    currentQuestion.incorrect_answers = result;
  }
};

const checkAnswer = (question, answer) => {
  /* if (answer === question.correct_answer) {
    console.log("Complimenti");
    userScore++;
    console.log(userScore);
  } else {
    console.log("sbagliato");
  } */

  if (answer === question.correct_answer) {
    console.log("Complimenti");
    userScore++;
    const answerSpace = document.getElementById("risposte");
    answerSpace.innerHTML = "";
    answerSpace.innerHTML = "<p>Corretta! :)</p>";
    answer.innerText = "Corretta :)";
    console.log(userScore);
  
    // Salva userScore nel localStorage
    localStorage.setItem('userScore', userScore);
  } else {
    const answerSpace = document.getElementById("risposte");
    answerSpace.innerHTML = "";
    answerSpace.innerHTML = "<p>Sbagliata :(</p>";
    console.log("sbagliato");
  }
  
};

const timer = () => {
  const timerCircle = document.getElementById("timer-circle");
  timerCircle.style.animationName = "none";
  setTimeout(() => {
    timerCircle.style.animationName = "";
  }, 1000);
};

let second = 60;
let interval = setInterval(() => {
  if (second > 0) {
    second--;
    console.log(second);
  } else {
    timeOut();
  }
}, 1000);

const counter = () => {
  clearInterval(interval);
  second = 60;
  interval = setInterval(() => {
    if (second > 0) {
      console.log(second);
      innerTimer();
      second--;
    } else {
      timeOut();
    }
  }, 1000);
};

const innerTimer = () => {
  const innerTimerSpace = document.getElementById("inner-timer");
  innerTimerSpace.innerHTML = `<p>
  SECONDI <br />
  ${second} <br>
  RIMANENTI
</p>`;
};

const stopEventHandler = () => {
  questionGen();
  timer();
  innerTimer();
};

const eventHandler = (event) => {
  const currentQuestion = questions[questionNumber - 1];
  const answer = event.target;
  checkAnswer(currentQuestion, answer);
  counter();
  setTimeout(stopEventHandler, 1000);
};

const timeOut = () => {
  questionGen();
  timer();
  counter();
  innerTimer();
};

const questionGen = () => {
  if (questionNumber < questions.length) {
    const questionSpace = document.getElementById("domande");
    const answerSpace = document.getElementById("risposte");
    questionSpace.innerHTML = "";
    answerSpace.innerHTML = "";
    const questionH1 = document.createElement("h1");
    questionH1.innerText = questions[questionNumber].question;
    questionSpace.appendChild(questionH1);
    for (
      let i = 0;
      i < questions[questionNumber].incorrect_answers.length;
      i++
    ) {
      const currentAnswer = questions[questionNumber].incorrect_answers[i];
      const answerBtn = document.createElement("button");
      answerBtn.classList.add("button");
      const buttonDiv = document.createElement("div");
      buttonDiv.classList.add("button-container");
      answerBtn.innerText = currentAnswer;
      answerBtn.addEventListener("click", eventHandler);
      answerBtn.id = "answer" + i;
      buttonDiv.appendChild(answerBtn);
      answerSpace.appendChild(buttonDiv);
    }
    const currentQuestionSpace = document.getElementById("current-question");
    currentQuestionSpace.innerHTML = "";
    const p = document.createElement("p");
    const pSpan = document.createElement("span");
    pSpan.innerText = " / " + questions.length;
    p.innerText = "QUESTION " + (questionNumber + 1);
    p.appendChild(pSpan);
    currentQuestionSpace.appendChild(p);
    questionNumber++;
  } else {
    location.replace("results.html");
  }
};

const difficultyChoice = (event) => {
  event.preventDefault();
  const timerSpace = document.getElementById("timer");
  const formSpace = document.getElementById("form");
  const difficultySelected = document.getElementById("difficulty-choice").value;
  const quantitySelected = document.getElementById("quantity-choice").value;
  localStorage.setItem("quantitySelected", quantitySelected);
  console.log(difficultySelected, quantitySelected);
  if (difficultySelected === "easy") {
    for (let i = 0; i < parseInt(quantitySelected); i++) {
      const currentQuestion = easyQuestions[i];
      questions.push(currentQuestion);
    }
    formSpace.remove();
    timerSpace.innerHTML = `<svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
    <circle
      class="donut-ring"
      cx="21"
      cy="21"
      r="15.91549430918954"
      fill="transparent"
      stroke="#d2d3d4"
      stroke-width="3"
    ></circle>

    <circle
      id="timer-circle"
      class="donut-segment"
      cx="21"
      cy="21"
      r="15.91549430918954"
      fill="transparent"
      stroke="#ce4b99"
      stroke-width="3"
      stroke-dasharray="100 0"
      stroke-dashoffset="125"
      stroke-linecap="round"
      transform="scale(-1 1) translate(-42 0)"
    ></circle>
  </svg>
  <div id="inner-timer"></div>`;
    answerRandomizer(questions);
    questionGen();
    timer();
    counter();
    innerTimer();
  } else if (difficultySelected === "medium") {
    for (let i = 0; i < parseInt(quantitySelected); i++) {
      const currentQuestion = mediumQuestions[i];
      questions.push(currentQuestion);
    }
    formSpace.remove();
    timerSpace.innerHTML = `<svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
    <circle
      class="donut-ring"
      cx="21"
      cy="21"
      r="15.91549430918954"
      fill="transparent"
      stroke="#d2d3d4"
      stroke-width="3"
    ></circle>

    <circle
      id="timer-circle"
      class="donut-segment"
      cx="21"
      cy="21"
      r="15.91549430918954"
      fill="transparent"
      stroke="#ce4b99"
      stroke-width="3"
      stroke-dasharray="100 0"
      stroke-dashoffset="125"
      stroke-linecap="round"
      transform="scale(-1 1) translate(-42 0)"
    ></circle>
  </svg>
  <div id="inner-timer"></div>`;
    answerRandomizer(questions);
    questionGen();
    timer();
    counter();
    innerTimer();
  } else if (difficultySelected === "hard") {
    for (let i = 0; i < parseInt(quantitySelected); i++) {
      const currentQuestion = hardQuestions[i];
      questions.push(currentQuestion);
    }
    formSpace.remove();
    timerSpace.innerHTML = `<svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
    <circle
      class="donut-ring"
      cx="21"
      cy="21"
      r="15.91549430918954"
      fill="transparent"
      stroke="#d2d3d4"
      stroke-width="3"
    ></circle>

    <circle
      id="timer-circle"
      class="donut-segment"
      cx="21"
      cy="21"
      r="15.91549430918954"
      fill="transparent"
      stroke="#ce4b99"
      stroke-width="3"
      stroke-dasharray="100 0"
      stroke-dashoffset="125"
      stroke-linecap="round"
      transform="scale(-1 1) translate(-42 0)"
    ></circle>
  </svg>
  <div id="inner-timer"></div>`;
    answerRandomizer(questions);
    questionGen();
    timer();
    counter();
    innerTimer();
  }
};

const formBtn = document.getElementById("difficulty-button");
formBtn.addEventListener("click", difficultyChoice);

/* (window.onload = answerRandomizer(questions)),
  questionGen(),
  timer(),
  counter(),
  innerTimer();
 */
