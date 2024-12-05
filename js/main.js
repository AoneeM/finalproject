
let period_count = 1;
let interval = setInterval(function() {
  if ((period_count) == 5)
    clearInterval(interval)
  let message = 'SAY YOU WANNA BE FRIENDS PLEASE!'.repeat(period_count++)
  document.getElementById('question5').textContent = message;
}, 20000);


function chooseYes() {
    alert("✴⋆  🎀 𝙔𝘼𝙔! 𝙄'𝙢 𝙝𝙖𝙥𝙥𝙮 𝙩𝙤 𝙗𝙚 𝙛𝙧𝙞𝙚𝙣𝙙𝙨 𝙬𝙞𝙩𝙝 𝙮𝙤𝙪🎀  ⋆✴");
}

function chooseNo() {
    const surpriseDiv = document.getElementById('surprise');
    surpriseDiv.classList.remove('hidden');
    document.getElementById('question').textContent = "I am not going ask you again";

}

function chooseYes2() {
    alert("✴⋆  🎀𝙈𝙚 𝙩𝙤𝙤! 𝙄 𝙩𝙝𝙞𝙣𝙠 𝙥𝙞𝙣𝙠 𝙞𝙨 𝙖 𝙘𝙪𝙩𝙚 𝙘𝙤𝙡𝙤𝙧🎀  ⋆✴");
}

function chooseNo2() {
    const surpriseDiv = document.getElementById('surprise');
    surpriseDiv.classList.remove('hidden');
    document.getElementById('question2').textContent = "Why are you testing my FUCKIN- ya know what try again";

}

function chooseYes3() {
    alert("I̴ ̴c̴a̴n̴'̴t̴ ̴w̴a̴i̴t̴ ̴t̴o̴ ̴h̴a̴v̴e̴ ̴y̴o̴u̴ ̴f̴o̴r̴e̴v̴e̴r̴,̴ ̴y̴o̴u̴'̴r̴e̴ ̴m̴i̴n̴e̴");
}

function chooseNo3() {
    const surpriseDiv = document.getElementById('surprise');
    surpriseDiv.classList.remove('hidden');
    document.getElementById('question3').textContent = "🇳​​🇴​❗​🇳​​🇴​❗​🇳​​🇴​❗​🇳​​🇴​ ​🇼​​🇭​​🇾​ ​🇩​​🇴​​🇳​❜​🇹​ ​🇾​​🇴​​🇺​ ​🇼​​🇦​​🇳​​🇳​​🇦​ ​🇧​​🇪​ ​🇼​​🇮​​🇹​​🇭​ ​🇲​​🇪​?";
}

function chooseYes4() {
    const button = document.getElementById('soundButton');
    const sound = document.getElementById('buttonSound');
    document.getElementById('question4').textContent = "Do you reeeaalllyy think I'm creepy?";

    button.addEventListener('click', () => {
        sound.currentTime = 0; // Reset sound to the beginning
        sound.play();
    });
}

function chooseNo4() {
    const surpriseDiv = document.getElementById('surprise');
    surpriseDiv.classList.remove('hidden');
    document.getElementById('question4').textContent = "I'LL BE OUTSIDE YOUR DOOR TONIGHT❤️!!";
}

function chooseYes5() {
    alert("I'm SCARYING YOU?! I JUST WANNA E̶͙̮̗͂Ą̴̬͎͖̟̅̾͒̈́T̵͍͓͐ ̸͎̬̤̣͖̆̍̽͠Y̵͍̓̇͐̓̔Ọ̶̢̉Ȗ̷̝͓͓̟̲ ̷͍̼͠A̵̧̼͍̳͊L̵̡̟̞̩̆̉̅̚̚Ȋ̸͇̻̹̭̐́͜V̴̖̫̖̈́́͗E̷̲̓͌͝͝  BE FRIENDS WITH YOU!!!");
}

function chooseNo5() {
    const surpriseDiv = document.getElementById('surprise');
    surpriseDiv.classList.remove('hidden');
    document.getElementById('question5').textContent = "DON'T FUCKING LEAVE ME OR I'LL GIVE YOU NIGHTMARES";
}

function chooseYes6() {
    alert("So...its like that huh.. okay :) I'll make you regret that❤️");
}

function chooseNo6() {
    const surpriseDiv = document.getElementById('surprise');
    surpriseDiv.classList.remove('hidden');
    document.getElementById('question6').textContent = "REALLY! YOU LOVE ME! I love you so much too❤️ ";
    
}

function showJumpscare() {
    const jumpscareDiv = document.getElementById('jumpscare');
    const sound = document.getElementById('scream');
    sound.play();
 sound.volume = 0.4;
    // Show the jumpscare
    jumpscareDiv.classList.remove('hidden4');

    // Play the jumpscare sound


    // Hide the jumpscare after 3 seconds
    setTimeout(() => {
        jumpscareDiv.classList.add('hidden4');
    }, 8000);
}

function scheduleJumpscare() {
    // Random delay between 10 and 30 seconds
    const delay = Math.random() * (60000 - 80000);

    setTimeout(() => {
        showJumpscare();
        scheduleJumpscare(); // Schedule the next jumpscare
    }, delay);
}


// Start the jumpscare loop when the page loads
window.onload = scheduleJumpscare;
