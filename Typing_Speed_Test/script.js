// DOM Elements
const textDisplay = document.querySelector('#textDisplay');
const typingArea = document.querySelector('#typingArea');
const timerDisplay = document.querySelector('#timer');
const wpmDisplay = document.querySelector('#wpm');
const accuracyDisplay = document.querySelector('#accuracy');
const bestWPMDisplay = document.querySelector('#bestWPM');
const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');
// const fifteen = document.querySelector('#15sec')
// const thirty = document.querySelector('#30sec')
// const oneTwenty = document.querySelector('#120sec')

// Test texts
const testTexts = [
    "The quick brown fox jumps over the lazy dog. Practice makes perfect when learning to type faster.",
    "Technology has revolutionized the way we communicate and work in the modern digital era.",
    "Typing speed is an essential skill for anyone working with computers in today's workplace.",
    `It went through such rapid contortions that the little bear was forced to change.`,
    `Tell whether he held the sheep right side up, or upside down. But that point was decided for him a moment later by the animal itself.`,
    `With a sudden twist, jabbed its horns so hard into his lowest ribs that he gave a grunt of anger and disgust.`,
    `Was it enough? That was the question he kept asking himself.Was being satisfied enough?`,
    `He looked around him at everyone yearning to just be satisfied in their daily life and he had reached that goal.`,
    `He knew that he was satisfied and he also knew it wasn't going to be enough.`,
    `I don’t like cats and they don’t like me. I used to be allergic to them and I would get stuffed up and have hives.`,
    `That doesn’t seem to happen anymore. But I still don’t like them. I lived with 3 cats that were not good at peeing in the litter box.`,

    // Level two 12-22
    `They seemed to find something important to me and pee on it. Most of the time they peed on photographs or papers that would be ruined. Cats also bring fleas into the house. There is nothing worse than having to flea dip cats and also flea bomb a home. That is why I don’t like cats.`,
    `Twenty-five hours had passed since the incident. It seemed to be a lot longer than that. That twenty-five hours seemed more like a week in her mind. The fact that she still was having trouble comprehending exactly what took place wasn't helping the matter.She thought if she could just get a little rest the entire incident might make a little more sense.`,
    `It seemed like it should have been so simple. There was nothing inherently difficult with getting the project done. It was simple and straightforward enough that even a child should have been able to complete it on time, but that wasn't the case.The deadline had arrived and the project remained unfinished.`,
    `Her eyebrows were a shade darker than her hair. They were thick and almost horizontal, emphasizing the depth of her eyes. She was rather handsome than beautiful. Her face was captivating by reason of a certain frankness of expression and a contradictory subtle play of features. Her manner was engaging.`,
    `Was it a whisper or was it the wind? He wasn't quite sure. He thought he heard a voice but at this moment all he could hear was the wind rustling the leaves of the trees all around him. He stopped and listened more intently to see if he could hear the voice again Nothing but the wind rustling the leaves could be heard. He was about to continue his walk when he felt a hand on his shoulder.`,
    `There was only half a worm in the apple. At first, Judy didn't quite comprehend what this meant. "Why would only half a worm be living in an apple?" she wondered. And then it dawned on her. Judy quickly spit out the bite she had just taken expecting to see the other half of the worm.`,
    `There was nothing else to do. The deed had already been done and there was no going back. It now had been become a question of how they were going to be able to get out of this situation and escape.I inadvertently went to See's Candy last week (I was in the mall looking for phone repair).`,
    `As it turns out, See's Candy now charges a dollar -- a full dollar -- for even the simplest of their wee confection offerings. I bought two chocolate lollipops and two chocolate-caramel-almond things. The total cost was four-something. I mean, the candies were tasty and all, but let's be real: A Snickers bar is fifty cents.`,
    `It wasn't quite yet time to panic. There was still time to salvage the situation. At least that is what she was telling himself. The reality was that it was time to panic and there wasn't time to salvage the situation, but he continued to delude himself into believing there was.`,
    `Wandering down the path to the pond had become a daily routine. Even when the weather wasn't cooperating like today with the wind and rain, Jerry still took the morning stroll down the path until he reached the pond. Although there didn't seem to be a particular reason Jerry did this to anyone looking in from the outside,`,

    // Level Three 23-33

    `He hid under the covers hoping that nobody would notice him there. It really didn't make much sense since it would be obvious to anyone who walked into the room there was someone hiding there, but he still held out hope. He heard footsteps coming down the hall and stop in front in front of the bedroom door. He heard the squeak of the door hinges and someone opened the bedroom door. He held his breath waiting for whoever was about to discover him, but they never did.I recently discovered I could make fudge with just chocolate chips, sweetened condensed milk, vanilla extract, and a thick pot on slow heat. I tried it with dark chocolate chunks and I tried it with semi-sweet chocolate chips. It's better with both kinds. It comes out pretty bad with just the dark chocolate.`,
    `The best add-ins are crushed almonds and marshmallows -- what you get from that is Rocky Road. It takes about twenty minutes from start to fridge, and then it takes about six months to work off the twenty pounds you gain from eating it. All things in moderation, friends. All things in moderation.
    Finding the truth wouldn't be easy, that's for sure. Then there was the question of whether or not Jane really wanted to know the truth. That's the thing that bothered her most. It wasn't the difficulty of actually finding out what happened that was the obstacle, but having to live with that information once it was found.`,
    `Stranded. Yes, she was now the first person ever to land on Venus, but that was of little consequence. Her name would be read by millions in school as the first to land here, but that celebrity would never actually be seen by her. She looked at the control panel and knew there was nothing that would ever get it back into working order. She was the first and it was not clear this would also be her last.Twenty-five years Dana had been waiting. She tried to be patient during that time but she hadn't always managed to be as patient as she'd like. But today the opportunity had finally come. The thing she always imagined would make her the happiest person in the world was about to happen. She didn't know why at this specific time she all of a sudden felt sick inside.`,
    `He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it. Nobody seemed to fully understand the beauty of this accomplishment except for the new worker who watched in amazement. There was no time. He ran out of the door without half the stuff he needed for work, but it didn't matter. He was late and if he didn't make this meeting on time, someone's life may be in danger.
    Time is all relative based on age and experience. When you are a child an hour is a long time to wait but a very short time when that’s all the time you are allowed on your iPad.`,
    `Debbie had taken George for granted for more than fifteen years now. He wasn't sure what exactly had made him choose this time and place to address the issue, but he decided that now was the time. He looked straight into her eyes and just as she was about to speak, turned away and walked out the door.  There wasn't a whole lot more that could be done. It had become a wait-and-see situation with the final results no longer in her control. That didn't stop her from trying to control the situation. She demanded that things be done as she desperately tried to control what couldn't be.
    There was only half a worm in the apple. At first, Judy didn't quite comprehend what this meant. "Why would only half a worm be living in an apple?" she wondered. And then it dawned on her.`,
    `She was in a hurry. Not the standard hurry when you're in a rush to get someplace, but a frantic hurry. The type of hurry where a few seconds could mean life or death. She raced down the road ignoring speed limits and weaving between cars. She was only a few minutes away when traffic came to a dead standstill on the road ahead.
The day had begun on a bright note. The sun finally peeked through the rain for the first time in a week, and the birds were singing in its warmth. There was no way to anticipate what was about to happen. It was a worst-case scenario and there was no way out of it.`,
    `Life isn't always beautiful. That was a lesson that Dan was learning. He also realized that life wasn't easy. This had come as a shock since he had lived a charmed life. He hated that this was the truth and he struggled to be happy knowing that his assumptions weren't correct. He wouldn't realize until much later in life that the difficult obstacles he was facing that were taking away the beauty in his life at this moment would ultimately make his life much more beautiful. All he knew was that at this moment was that life isn't always beautiful.
Cake or pie? I can tell a lot about you by which one you pick. It may seem silly, but cake people and pie people are really different. I know which one I hope you are, but that's not for me to decide. So, what is it? Cake or pie?`,
    `This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It doesn't run out, so don't try to hold back giving it as if it may one day run out. Give it freely and as much as you want.
What if dogs were racist? Would they care about fur color….. “son, only play with other tan dogs”? Or maybe it would depend on breed, “honey, only play with other German Shepards, never poodles”. Better yet it could depend on occupation. “I’m a sled dog while you’re only a running companion, leave me alone”. Maybe the neighborhood they live in could be the way they choose which dogs to associate with and which to shun? Size could be the determining factor, “see how tall that dog is, they are probably dumb”.`,
    `The shoes had been there for as long as anyone could remember. In fact, it was difficult for anyone to come up with a date they had first appeared. It had seemed they'd always been there and yet they seemed so out of place. Why nobody had removed them was a question that had been asked time and again, but while they all thought it, nobody had ever found the energy to actually do it. So, the shoes remained on the steps, out of place in one sense, but perfectly normal in another.
It was the first day of the rest of her life. This wasn't the day she was actually born, but she knew that nothing would be the same from this day forward. Although this was a bit scary to her, it was also extremely freeing.`,
    `"It doesn't take much to touch someone's heart," Daisy said with a smile on her face. "It's often just the little things you do that can change a person's day for the better." Daisy truly believed this to be the way the world worked, but she didn't understand that she was merely a robot that had been programmed to believe this.
Lori lived her life through the lens of a camera. She never realized this until this very moment as she scrolled through thousands of images on your computer. She could remember the exact moment each photo was taken. She could remember where she had been, what she was thinking as she tried to get the shot, the smells of the surrounding area, and even the emotions that she felt taking the photo, yet she had trouble remembering what she had for breakfast.`
];

// const levelTwo = [
//     `They seemed to find something important to me and pee on it. Most of the time they peed on photographs or papers that would be ruined. Cats also bring fleas into the house. There is nothing worse than having to flea dip cats and also flea bomb a home. That is why I don’t like cats.`
//         `Twenty-five hours had passed since the incident. It seemed to be a lot longer than that. That twenty-five hours seemed more like a week in her mind. The fact that she still was having trouble comprehending exactly what took place wasn't helping the matter.She thought if she could just get a little rest the entire incident might make a little more sense.`
//         `It seemed like it should have been so simple. There was nothing inherently difficult with getting the project done. It was simple and straightforward enough that even a child should have been able to complete it on time, but that wasn't the case.The deadline had arrived and the project remained unfinished.`
//         `Her eyebrows were a shade darker than her hair. They were thick and almost horizontal, emphasizing the depth of her eyes. She was rather handsome than beautiful. Her face was captivating by reason of a certain frankness of expression and a contradictory subtle play of features. Her manner was engaging.`
//         `Was it a whisper or was it the wind? He wasn't quite sure. He thought he heard a voice but at this moment all he could hear was the wind rustling the leaves of the trees all around him. He stopped and listened more intently to see if he could hear the voice again.  Nothing but the wind rustling the leaves could be heard. He was about to continue his walk when he felt a hand on his shoulder.`
//         `There was only half a worm in the apple. At first, Judy didn't quite comprehend what this meant. "Why would only half a worm be living in an apple?" she wondered. And then it dawned on her. Judy quickly spit out the bite she had just taken expecting to see the other half of the worm.`
//         `There was nothing else to do. The deed had already been done and there was no going back. It now had been become a question of how they were going to be able to get out of this situation and escape.I inadvertently went to See's Candy last week (I was in the mall looking for phone repair).`
//         `As it turns out, See's Candy now charges a dollar -- a full dollar -- for even the simplest of their wee confection offerings. I bought two chocolate lollipops and two chocolate-caramel-almond things. The total cost was four-something. I mean, the candies were tasty and all, but let's be real: A Snickers bar is fifty cents.`
//         `It wasn't quite yet time to panic. There was still time to salvage the situation. At least that is what she was telling himself. The reality was that it was time to panic and there wasn't time to salvage the situation, but he continued to delude himself into believing there was.`
//         `Wandering down the path to the pond had become a daily routine. Even when the weather wasn't cooperating like today with the wind and rain, Jerry still took the morning stroll down the path until he reached the pond. Although there didn't seem to be a particular reason Jerry did this to anyone looking in from the outside,`
// ]

// const levelThree = [
//     `He hid under the covers hoping that nobody would notice him there. It really didn't make much sense since it would be obvious to anyone who walked into the room there was someone hiding there, but he still held out hope. He heard footsteps coming down the hall and stop in front in front of the bedroom door. He heard the squeak of the door hinges and someone opened the bedroom door. He held his breath waiting for whoever was about to discover him, but they never did.I recently discovered I could make fudge with just chocolate chips, sweetened condensed milk, vanilla extract, and a thick pot on slow heat. I tried it with dark chocolate chunks and I tried it with semi-sweet chocolate chips. It's better with both kinds. It comes out pretty bad with just the dark chocolate.`
//         `The best add-ins are crushed almonds and marshmallows -- what you get from that is Rocky Road. It takes about twenty minutes from start to fridge, and then it takes about six months to work off the twenty pounds you gain from eating it. All things in moderation, friends. All things in moderation.
//     Finding the truth wouldn't be easy, that's for sure. Then there was the question of whether or not Jane really wanted to know the truth. That's the thing that bothered her most. It wasn't the difficulty of actually finding out what happened that was the obstacle, but having to live with that information once it was found.`
//         `Stranded. Yes, she was now the first person ever to land on Venus, but that was of little consequence. Her name would be read by millions in school as the first to land here, but that celebrity would never actually be seen by her. She looked at the control panel and knew there was nothing that would ever get it back into working order. She was the first and it was not clear this would also be her last.Twenty-five years Dana had been waiting. She tried to be patient during that time but she hadn't always managed to be as patient as she'd like. But today the opportunity had finally come. The thing she always imagined would make her the happiest person in the world was about to happen. She didn't know why at this specific time she all of a sudden felt sick inside.`
//         `He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it. Nobody seemed to fully understand the beauty of this accomplishment except for the new worker who watched in amazement. There was no time. He ran out of the door without half the stuff he needed for work, but it didn't matter. He was late and if he didn't make this meeting on time, someone's life may be in danger.
//     Time is all relative based on age and experience. When you are a child an hour is a long time to wait but a very short time when that’s all the time you are allowed on your iPad.`
//         `Debbie had taken George for granted for more than fifteen years now. He wasn't sure what exactly had made him choose this time and place to address the issue, but he decided that now was the time. He looked straight into her eyes and just as she was about to speak, turned away and walked out the door.  There wasn't a whole lot more that could be done. It had become a wait-and-see situation with the final results no longer in her control. That didn't stop her from trying to control the situation. She demanded that things be done as she desperately tried to control what couldn't be.
//     There was only half a worm in the apple. At first, Judy didn't quite comprehend what this meant. "Why would only half a worm be living in an apple?" she wondered. And then it dawned on her.`
//         `She was in a hurry. Not the standard hurry when you're in a rush to get someplace, but a frantic hurry. The type of hurry where a few seconds could mean life or death. She raced down the road ignoring speed limits and weaving between cars. She was only a few minutes away when traffic came to a dead standstill on the road ahead.
// The day had begun on a bright note. The sun finally peeked through the rain for the first time in a week, and the birds were singing in its warmth. There was no way to anticipate what was about to happen. It was a worst-case scenario and there was no way out of it.`
//         `Life isn't always beautiful. That was a lesson that Dan was learning. He also realized that life wasn't easy. This had come as a shock since he had lived a charmed life. He hated that this was the truth and he struggled to be happy knowing that his assumptions weren't correct. He wouldn't realize until much later in life that the difficult obstacles he was facing that were taking away the beauty in his life at this moment would ultimately make his life much more beautiful. All he knew was that at this moment was that life isn't always beautiful.
// Cake or pie? I can tell a lot about you by which one you pick. It may seem silly, but cake people and pie people are really different. I know which one I hope you are, but that's not for me to decide. So, what is it? Cake or pie?`
//         `This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It doesn't run out, so don't try to hold back giving it as if it may one day run out. Give it freely and as much as you want.
// What if dogs were racist? Would they care about fur color….. “son, only play with other tan dogs”? Or maybe it would depend on breed, “honey, only play with other German Shepards, never poodles”. Better yet it could depend on occupation. “I’m a sled dog while you’re only a running companion, leave me alone”. Maybe the neighborhood they live in could be the way they choose which dogs to associate with and which to shun? Size could be the determining factor, “see how tall that dog is, they are probably dumb”.`
//      `The shoes had been there for as long as anyone could remember. In fact, it was difficult for anyone to come up with a date they had first appeared. It had seemed they'd always been there and yet they seemed so out of place. Why nobody had removed them was a question that had been asked time and again, but while they all thought it, nobody had ever found the energy to actually do it. So, the shoes remained on the steps, out of place in one sense, but perfectly normal in another.
// It was the first day of the rest of her life. This wasn't the day she was actually born, but she knew that nothing would be the same from this day forward. Although this was a bit scary to her, it was also extremely freeing.`
//      `"It doesn't take much to touch someone's heart," Daisy said with a smile on her face. "It's often just the little things you do that can change a person's day for the better." Daisy truly believed this to be the way the world worked, but she didn't understand that she was merely a robot that had been programmed to believe this.
// Lori lived her life through the lens of a camera. She never realized this until this very moment as she scrolled through thousands of images on your computer. She could remember the exact moment each photo was taken. She could remember where she had been, what she was thinking as she tried to get the shot, the smells of the surrounding area, and even the emotions that she felt taking the photo, yet she had trouble remembering what she had for breakfast.`
// ]

// Game state
let currentText = '';
let timeLeft = 60;
let timerInterval = null;
let startTime = null;
let isTestActive = false;
let bestWPM = 0;
let wpm = 0;
var paraCreate = document.createElement('p')

function onLoad() {
    var temp = sessionStorage.getItem('getHighwpm');
    if (temp != null) {
        bestWPM = parseInt(temp);
    } else {
        bestWPM = 0;
    }
}

//  `There wasn't a whole lot more that could be done. It had become a wait-and-see situation with the final results no longer in her control. That didn't stop her from trying to control the situation. She demanded that things be done as she desperately tried to control what couldn't be.
// There was only half a worm in the apple. At first, Judy didn't quite comprehend what this meant. "Why would only half a worm be living in an apple?" she wondered. And then it dawned on her. Judy quickly spit out the bite she had just taken expecting to see the other half of the worm. It ended up being much worse than that.
// The paper was blank. It shouldn't have been. There should have been writing on the paper, at least a paragraph if not more. The fact that the writing wasn't there was frustrating. Actually, it was even more than frustrating. It was downright distressing."
//     var textAppend = document.body.appendChild(paraCreate)`;


function displayContent() {
    timerDisplay.textContent = timeLeft;
    bestWPMDisplay.textContent = bestWPM;
}

function webLoad() {
    onLoad();
    displayContent();
}

webLoad();

function endGame() {
    clearInterval(timerInterval);
    timeLeft = 60;
    startBtn.disabled = false;

    if (wpm > bestWPM) {
        bestWPM = wpm;
        sessionStorage.setItem('getHighwpm', bestWPM);
        alert(`Scored higher than the previous best!`);
    } else {
        alert(`Score: ${wpm} WPM`);
    }

    wpm = 0;
    wpmDisplay.textContent = wpm;
    typingArea.disabled = true;
    typingArea.value = "";
    typingArea.placeholder = "Click 'Start' to begin again.";
    startTime = null;
    displayContent();
}

function startGame() {
    timeLeft = 60;
    startBtn.disabled = true;

    currentText = testTexts[Math.floor(Math.random() * testTexts.length)];
    textDisplay.textContent = currentText;
    textDisplay.style.pointerEvents = "auto";
    typingArea.disabled = false;

    typingArea.value = "";
    typingArea.setAttribute('placeholder', 'Now the input box is enabled, use it to write something....');

    // textDisplay.style.pointerEvents="none";
    // textDisplay.oncopy = (e) => e.preventDefault();
    // textDisplay.oncut = (e) => e.preventDefault();
    // textDisplay.oncontextmenu = (e) => e.preventDefault();
    // typingArea.onpaste = (e) => e.preventDefault();
    // typingArea.oncopy = (e) => e.preventDefault();
    // typingArea.oncut = (e) => e.preventDefault();
    // typingArea.oncontextmenu = (e) => e.preventDefault();

    startTime = null; // reset start time

    timerInterval = setInterval(function () {
        timeLeft--;
        if (timeLeft <= 0) {
            endGame();
        }
        displayContent();
    }, 1000);
}

function loadNewText() {
    textDisplay.classList.add("fade-out");
    setTimeout(() => {
        currentText = testTexts[Math.floor(Math.random() * testTexts.length)];
        textDisplay.textContent = currentText;
        textDisplay.classList.remove("fade-out");
        typingArea.value = "";
        typingArea.focus();
    }, 400);
}


function HighLight() {
    var typed = typingArea.value;
    var highText = "";
    for (let i = 0; i < currentText.length; i++) {
        if (i < typed.length) //red/green
        {
            if (currentText[i] === typed[i]) {
                highText += `<span class="correct">${currentText[i]}</span>`;
            }
            else {
                highText += `<span class="incorrect">${currentText[i]}</span>`;
            }
        }
        else {
            highText += currentText[i];
        }
    }
    textDisplay.innerHTML = highText;
}

function updateStatus() {
    var typed = typingArea.value;

    const minutes = Math.floor(Date.now() - startTime) / 1000 / 60;

    const words = typed.trim().split(/\s+/).filter(w => w.length > 0); // Regular Expression 
    console.log(words);
    wpm = minutes > 0 ? Math.round(words.length / minutes) : 0;
    wpmDisplay.textContent = wpm;

    var currentScore = 0;
    for (var i = 0; i <= typed.length && i < currentText.length; i++) {
        if (currentText[i] === typed[i]) {
            currentScore++;
        }

    }

    const accuracy = (typed.length > 0) ? Math.floor((currentScore / typed.length) * 100) : 0;
    accuracyDisplay.textContent = accuracy + "%";
}

function typeControl() {
    if (startTime == null) {
        startTime = Date.now(); // Start timer when typing begins
    }

    updateStatus();
    HighLight();
    const typed = typingArea.value;
    // Trim both sides to ensure matching even with accidental spaces at end
    if (typed.trim() === currentText.trim()) {
        setTimeout(() => {
            loadNewText();
        }, 20);
    }
}


startBtn.addEventListener('click', startGame);
typingArea.addEventListener('input', typeControl);
