export const createCards = () => {
  const cardsFolder = process.env.PUBLIC_URL + "/images/cards/";
  const images = [];
  //manually creating an array of strings with the names of the images
  images.push(cardsFolder + "anti guy.png");
  images.push(cardsFolder + "bombette.png");
  images.push(cardsFolder + "bow.png");
  images.push(cardsFolder + "bumty.png");
  images.push(cardsFolder + "chomp.png");
  images.push(cardsFolder + "goombario.png");
  images.push(cardsFolder + "kooper.png");
  images.push(cardsFolder + "lakilester.png");
  images.push(cardsFolder + "luigi.png");
  images.push(cardsFolder + "magikoopa.png");
  images.push(cardsFolder + "mario.png");
  images.push(cardsFolder + "monty mole.png");
  images.push(cardsFolder + "ninjakoopa.png");
  images.push(cardsFolder + "parakarry.png");
  images.push(cardsFolder + "peach.png");
  images.push(cardsFolder + "penguin patrol.png");
  images.push(cardsFolder + "putrid piranha.png");
  images.push(cardsFolder + "shy.png");
  images.push(cardsFolder + "sushie.png");
  images.push(cardsFolder + "toad.png");
  images.push(cardsFolder + "twink.png");
  images.push(cardsFolder + "watt.png");
  const cards = [];
  images.forEach((elem, i) => {
    cards.push({
      image: elem,
      index: i,
      selected: false,
    });
  });
  return cards;
};

export const shuffleArray = (array) => {
  //Fisher–Yates shuffle algorithm
  let current = array.length;
  while (0 !== current) {
    const randIndex = Math.floor(Math.random() * current);
    current--;
    //swap
    const auxSwap = array[current];
    array[current] = array[randIndex];
    array[randIndex] = auxSwap;
  }
  return array;
};

export const gameFinished = (arr) => arr.every((elem) => elem.selected);
export const resetGame = (arr) =>
  arr.forEach((elem) => {
    elem.selected = false;
  });
