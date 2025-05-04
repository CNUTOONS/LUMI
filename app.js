
document.getElementById('activityForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const tiktok = parseFloat(this.tiktok.value);
  const insta = parseFloat(this.insta.value);
  const yt = parseFloat(this.yt.value);
  const total = tiktok + insta + yt;

  const ctx = document.getElementById('statsChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['TikTok', 'Instagram', 'YouTube'],
      datasets: [{
        label: 'Ore petrecute',
        data: [tiktok, insta, yt],
        backgroundColor: ['#ff99cc', '#ffcc99', '#99ccff']
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  let feedback = '';
  if (total > 6) {
    feedback = "Ai petrecut peste 6 ore azi pe social media. Încearcă să iei o pauză, să ieși la aer sau să faci o activitate relaxantă!";
  } else if (total > 3) {
    feedback = "Un echilibru acceptabil, dar poate e momentul pentru o pauză și puțină mișcare.";
  } else {
    feedback = "Felicitări! Ai un echilibru sănătos între digital și viața reală.";
  }

  document.getElementById('feedbackBox').innerText = feedback;
});


function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function activateSleepMode() {
  alert("Sleep Mode activat! Pune telefonul jos, închide ochii, respiră adânc.");
}

function activateGhostMode() {
  alert("Ghost Mode: Ești acum anonim.");
}

// Chatbot simplu
function sendMessage() {
  let inputField = document.getElementById("chat-input");
  let message = inputField.value.trim();
  let chatWindow = document.getElementById("chat-window");

  if (message) {
    let userMsg = document.createElement("p");
    userMsg.textContent = message;
    userMsg.className = "user-message";
    chatWindow.appendChild(userMsg);

    let lumiResponse = document.createElement("p");
    lumiResponse.className = "lumi-message";

    const responses = {
      "ma simt trist": "Îți trimit o îmbrățișare virtuală. Poți vorbi cu mine mereu!",
      "sunt obosit": "Poate o pauză te-ar ajuta. Hai să respirăm împreună.",
      "nu mai pot": "Știu că e greu, dar ai trecut prin multe deja. Sunt aici!",
      "salut": "Hei! Ce bine că ești aici!",
    };

    lumiResponse.textContent = responses[message.toLowerCase()] || "Lumi te îmbrățișează cu blândețe!";
    chatWindow.appendChild(lumiResponse);

    chatWindow.scrollTop = chatWindow.scrollHeight;
    inputField.value = "";
  }
}

// Întrebări random
const questions = [
  "Câte ore ai dormit aseară?",
  "Ai mâncat azi ceva sănătos?",
  "Cât timp ai petrecut azi pe telefon?",
  "Cum te simți pe o scară de la 1 la 10?",
  "Ce gând pozitiv ai azi?"
];

function getRandomQuestion() {
  const q = questions[Math.floor(Math.random() * questions.length)];
  document.getElementById("question").textContent = q;
}
function submitAnswer() {
  const answer = document.getElementById("q-answer").value;
  let feedback = "";

  if (!answer) feedback = "Nu uita să completezi!";
  else if (parseInt(answer) < 5) feedback = "Ai nevoie de mai mult somn, prietenul meu!";
  else if (parseInt(answer) < 8) feedback = "Ai dormit decent, dar poți mai bine!";
  else feedback = "Super! Somnul bun e cheia echilibrului.";

  document.getElementById("q-feedback").textContent = feedback;
}
// Mesaje motivaționale
const messages = [
  "Nu uita, ești mai puternic decât crezi!",
  "Fiecare zi e o nouă șansă.",
  "Respiră adânc. Totul va fi bine.",
  "Nu te grăbi. E în regulă să faci pași mici.",
  "Ai supraviețuit 100% din zilele grele de până acum.",
  "Îți reamintești cât de departe ai ajuns?",
  "Lumi crede în tine!",
  "Greșelile sunt pași către reușită.",
  "Viața nu e despre perfecțiune, ci progres.",
  "Zâmbește. Chiar și azi ai reușit să fii aici."

];

function getMotivationalMessage() {
  const m = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("motivational-message").textContent = m;
}

// Joc simplu: click counter
let clicks = 0;
function incrementClick() {
  clicks++;
  document.getElementById("click-count").textContent = clicks;
}
