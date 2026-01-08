document.addEventListener('DOMContentLoaded', () => {

  let button = document.getElementById('start');
  let tbuvod = document.getElementById("uvod");
  button.onclick = () => {
    button.style.display = "none";
    tbuvod.innerText = "vyber volbu";
    let volba = 0;
    let playerchoicetb =  document.getElementById("plchoice");
    let playerchoicediv = document.createElement("div");
    playerchoicetb.append(playerchoicediv);

    let choice0button = document.createElement("button");
    choice0button.innerText = "kámen";
    playerchoicediv.append(choice0button);
    choice0button.onclick = () => {
      volba = 0;
      vyhodnoceni(volba);
      playerchoicetb.style.display = "none"
      console.log("be")
    }

    let choice1button = document.createElement("button");
    choice1button.innerText = "nůžky"; 
    playerchoicediv.append(choice1button);
    choice1button.onclick = () => {
      volba = 1;
      vyhodnoceni(volba);
      playerchoicetb.style.display = "none"
    }

    let choice2button = document.createElement("button"); 
    choice2button.innerText = "papír"; 
    playerchoicediv.append(choice2button);
    choice2button.onclick = () => {
      volba = 2;
      vyhodnoceni(volba);
      playerchoicetb.style.display = "none"
    }

    let choice3button = document.createElement("button"); 
    playerchoicediv.append(choice3button);
    choice3button.innerText = "spock";
    choice3button.onclick = () => {
      volba = 3;
      vyhodnoceni(volba);
      playerchoicetb.style.display = "none"
    }
    

    let choice4button = document.createElement("button"); 
    playerchoicediv.append(choice4button);
    choice4button.innerText = "tapír";
    choice4button.onclick = () => {
      volba = 4;
      vyhodnoceni(volba);
      playerchoicetb.style.display = "none"
    } 

  }
  function vyhodnoceni(volba) {
    do {
    
    vitez1.innerHTML = "Hráč 1";
    vitez2.innerHTML = "Hráč 2";

    hrac1 = volba;
    hrac2 = Math.floor(Math.random() * 4);

    obr1.src = hrac1 + ".png";
    obr2.src = hrac2 + ".png";

    if (hrac1 === hrac2) {
      remiza = true;
      console.log("Remíza.\nSpouštím další hru.");
    } else if (hrac1 < hrac2 || (hrac1 === 2 && hrac2 === 0)) {
      vitez1.innerHTML = "Hráč 1<br/>vyhrál.";
      vitez1.style.color = "red";
      remiza = false;
    } else {
      vitez2.innerHTML = "Hráč 2<br/>vyhrál.";
      remiza = false;
    }
    } while (remiza);
  }
});

