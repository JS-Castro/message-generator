function jokeGenerator() {
  return `Why did the ${getRandomWord()} bring a ${getRandomWord()} to the ${getRandomWord()}? Because they heard the ${getRandomWord()} was \"${getRandomWord()} the ${getRandomWord()} \"! As the ${getRandomWord()} waddled through the aisles, shoppers couldn't help but chuckle at the sight. One passerby joked, \"Looks like someone's taking '${getRandomWord()}' to a whole new level!\" The ${getRandomWord()} just grinned and nodded, happy to bring some laughter to the mundane task of ${getRandomWord()}. Meanwhile, the ${getRandomWord()} scratched their head in confusion. They hadn't seen a ${getRandomWord()} in the store before, let alone one equipped with ${getRandomWord()}. But hey, in this day and age, anything was possible. They just hoped the ${getRandomWord()} remembered to ${getRandomWord()} for its ${getRandomWord()} before diving back into the ${getRandomWord()}!`;
}

function getRandomWord() {
  const arrOfWords = ["Giraffe", "Beach towel", "Movie theater", "Octopus", "Juggling", "Traffic jam", "Kangaroo", "Picnic", "Tour guide", "Roller coaster"];

  return arrOfWords[Math.floor(Math.random() * 11)];
}

console.log(jokeGenerator());
