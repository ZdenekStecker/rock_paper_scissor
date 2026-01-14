document.addEventListener('DOMContentLoaded', () => {
  let counter = 0;

  let button = document.getElementById('start');
  let tbuvod = document.getElementById("uvod");
  let table = document.getElementById("center");
  let container = document.getElementById("content");
  container.append(table);
  button.onclick = () => {
    start();
  }

  function vyhodnoceni(volba) {
    do {
    
    vitez1.innerHTML = "Hráč 1";
    vitez2.innerHTML = "Hráč 2";

    hrac1 = volba;
    hrac2 = Math.floor(Math.random() * 5); 

    obr1.src = hrac1 + ".png";
    obr2.src = hrac2 + ".png";

    if (hrac1 === hrac2) {
      remiza = true;
      console.log("Remíza.\nSpouštím další hru.");
    } else if (hrac1 === 0 && (hrac2 === 1 || hrac2 === 3)) {
      vitez1.innerHTML = "Hráč 1<br/>vyhrál.";
      vitez1.style.color = "red";
      score();
      remiza = false;
      
    } else if (hrac1 === 1 && (hrac2 === 2 || hrac2 === 3)) {
      vitez1.innerHTML = "Hráč 1<br/>vyhrál.";
      vitez1.style.color = "red";
      score();
      remiza = false;
      
    } else if (hrac1 === 2 && (hrac2 === 0 || hrac2 === 4)) {
      vitez1.innerHTML = "Hráč 1<br/>vyhrál.";
      vitez1.style.color = "red";
      score();
      remiza = false;
      
    } else if (hrac1 === 3 && (hrac2 === 2 || hrac2 === 4)) {
      vitez1.innerHTML = "Hráč 1<br/>vyhrál.";
      vitez1.style.color = "red";
      score();
      remiza = false;
      
    } else if (hrac1 === 4 && (hrac2 === 1 || hrac2 === 0)) {
      vitez1.innerHTML = "Hráč 1<br/>vyhrál.";
      vitez1.style.color = "red";
      score();
      remiza = false;
      
    } 
      else if (hrac1 === 0 && (hrac2 === 2 || hrac2 === 4)) {
      vitez2.innerHTML = "Hráč 2<br/>vyhrál.";
      vitez2.style.color = "red";
      remiza = false;
    } else if (hrac1 === 1 && (hrac2 === 0 || hrac2 === 4)) {
      vitez2.innerHTML = "Hráč 2<br/>vyhrál.";
      vitez2.style.color = "red";
      remiza = false;
    } else if (hrac1 === 2 && (hrac2 === 1 || hrac2 === 3)) {
      vitez2.innerHTML = "Hráč 2<br/>vyhrál.";
      vitez2.style.color = "red";
      remiza = false;
    } else if (hrac1 === 3 && (hrac2 === 0 || hrac2 === 1)) {
      vitez2.innerHTML = "Hráč 2<br/>vyhrál.";
      vitez2.style.color = "red";
      remiza = false;
    } else if (hrac1 === 4 && (hrac2 === 2 || hrac2 === 3)) {
      vitez2.innerHTML = "Hráč 2<br/>vyhrál.";
      vitez2.style.color = "red";
      remiza = false;
    } 
    } while (remiza);
  }

  function start() {
    vitez1.innerHTML = "Hráč 1";
    vitez1.style.color = "white";
    vitez2.innerHTML = "Hráč 2";
    vitez2.style.color = "white";
    obr1.src = "https://wallpapers.com/images/hd/black-page-wx75651aarimwdec.jpg";
    obr2.src = "https://wallpapers.com/images/hd/black-page-wx75651aarimwdec.jpg";
    button.remove();
    tbuvod.innerText = "vyber volbu";
    tbuvod.style.color = "white";
    let volba = 0;
    let playerchoicetb =  document.getElementById("plchoice");
    if (playerchoicetb.style.display == "none" || playerchoicetb.style.display == "") {
      playerchoicetb.style.display = "table-cell";
    }
    let playerchoicediv = document.createElement("div");
    playerchoicetb.append(playerchoicediv);
    
 

    let choice0button = document.createElement("button");
    choice0button.innerText = "kámen";
    playerchoicediv.append(choice0button);
    choice0button.setAttribute("class", "choice");
    choice0button.onclick = () => {
      volba = 0;
      vyhodnoceni(volba);
      playerchoicetb.style.display = "none";
      loop();
    }

    let choice1button = document.createElement("button");
    choice1button.innerText = "nůžky"; 
    playerchoicediv.append(choice1button);
    choice1button.setAttribute("class", "choice");
    choice1button.onclick = () => {
      volba = 1;
      vyhodnoceni(volba);
      playerchoicetb.style.display = "none";
      loop();
    }

    let choice2button = document.createElement("button"); 
    choice2button.innerText = "papír"; 
    playerchoicediv.append(choice2button);
    choice2button.setAttribute("class", "choice");
    choice2button.onclick = () => {
      volba = 2;
      vyhodnoceni(volba);
      playerchoicetb.style.display = "none";
      loop();
    }

    let choice3button = document.createElement("button"); 
    playerchoicediv.append(choice3button);
    choice3button.setAttribute("class", "choice");
    choice3button.innerText = "spock";
    choice3button.onclick = () => {
      volba = 3;
      vyhodnoceni(volba);
      playerchoicetb.style.display = "none";
      loop();
    }
    

    let choice4button = document.createElement("button"); 
    playerchoicediv.append(choice4button);
    choice4button.setAttribute("class", "choice");
    choice4button.innerText = "tapír";
    choice4button.onclick = () => {
      volba = 4;
      vyhodnoceni(volba);
      playerchoicetb.style.display = "none";
      loop();
    }
  } 
    function reset() {
      let playerchoicetb =  document.getElementById("plchoice");
      vitez1.innerHTML = "Hráč 1";
      vitez2.innerHTML = "Hráč 2";
      vitez1.style.color = "white";
      vitez2.style.color = "white";
      obr1.src = "0.png";
      obr2.src = "1.png";
      tbuvod.innerText = "";
      playerchoicetb.style.display = "table-cell";
    }

    function loop() {
      tbuvod.innerText = "";
      let button = document.createElement("button");
      tbuvod.append(button);
      button.setAttribute("class", "choice");
      button.innerText = "HRAJ ZNOVU";
      button.onclick = () => {
        reset();
      }
    }
    
    function score() { 
      counter++;
      let scoretb = document.getElementById("score");
      scoretb.innerHTML = "<h1>Výhry: " + parseInt(counter) + "</h1>"; 
      
    }
  
});

