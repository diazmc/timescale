const superHeroes = require('./super-heroes.json');

/**
 * Will find all of the marvel characters in the data and return them as an array
 * @returns [
 *  {
 *    ...hero,
 *    publisher: 'Marvel'
 *  }
 * ]
 */
const getDCHeroes = (heroes) => {

  let marvelHeroes = [];

  for (let heroe of heroes) {
    if (heroe.publisher == 'Marvel Comics') {
      marvelHeroes.push(heroe.characters);
    }
  }
  return marvelHeroes;
}

/**
 * Converts the character property into an array
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const convertCharactersToArray = (heroes) => {


  for (let hero of heroes) {
    hero.characters = hero.characters.split(", ");
  }
  return heroes;
}

/**
 * Coverts super hero data so it is grouped the publisher property
 * @returns {
 *   "publisher 1": [
 *     { ...hero }
 *     ...
 *   ],
 *   "publisher 2" :[
 *     {... hero}
 *     ...
 *   ]
 * }
 */
const groupByPublisher = (heroes) => {
  let publishers = {"DC Comics" : [], "Marvel Comics": []};

  // console.log(pusblishers);

  for (let hero of heroes) {
    if (hero.publisher == 'DC Comics') {
      publishers["DC Comics"].push(hero);
    }
    else {
      publishers["Marvel Comics"].push(hero);
    }
  }

  return publishers;
}

/**
 * Returns and array of DC Comic heroes that have more than 1 character
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const getDCHeroesWithMoreThanOneCharacter = (heroes) => {

  let moreThanOneCharacterHeroes = [];

  for (let hero of heroes) {
    if (hero.publisher == 'DC Comics' && hero.characters.length > 1) {
      moreThanOneCharacterHeroes.push(hero)
    }
  }
  return moreThanOneCharacterHeroes;
}

module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
}
