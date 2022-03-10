const prompt = require("prompt-sync")();

const hisName = "Mitch Cuckovich";

const hisAge = 25;

const hisBirthday = "january 24";

const pineapplePizza = false;

const lifeEvents = [
  "I was born in Troy, Michigan.",
  "I went to Hope College",
  "I participated in the junior olympics when I was 10 years old. I placed 14th in the nation in the 800 meter event.",
  "Im a graduate of a Grand Circus bootcamp. ",
];

if (pineapplePizza === true) {
  console.log(
    `My name is ${hisName} and I like pineapples on pizza. I am currently ${hisAge} years old and my birthday is on ${hisBirthday}.`
  );
} else if (pineapplePizza === false) {
  console.log(
    `My name is ${hisName} and Im not into pineapples on pizza. I am currently ${hisAge} years old and my birthday is on ${hisBirthday}.`
  );
}
for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else {
    counter++;
    console.log(
      `${randomNumber} === 5. it took ${counter} iterations to randomly generate the numer 5`
    );
    break;
  }
}
