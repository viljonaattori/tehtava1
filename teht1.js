let input = require("readline-sync");

let answer = input.question("Tarkastettava sana: "); // käyttäjän syöte

let reverseString = (answer) => {
  let bool;
  console.log(
    "Syötit sanan: " + answer + " tarkastetaan onko sana palindromi.."
  );
  console.log("");

  for (i = 0; i < answer.length; i++) {} // Käydään sana läpi etuperin
  console.log("");

  // Käydään sana läpi takaperin
  reverseword = "";
  for (let i = answer.length - 1; i >= 0; i--) {
    reverseword += answer[i];
  }
  console.log("Käännetty sana: " + reverseword);

  // Palautetaan totuusarvo sen mukaan onko sana palindromi vai ei
  if (answer != reverseword) {
    bool = false;
  } else {
    bool = true;
  }
  return console.log("Lopputulos: " + bool);
};
reverseString(answer);
