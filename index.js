const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  
  const titleCasedTutorials = []; // Initialize an empty array to store the title-cased tutorial names

  // Iterate over each tutorial string in the tutorials array
  for (const tutorial of tutorials) {
   
    const words = tutorial.split(" ");  // Split the tutorial string into an array of words

    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    // Join the capitalized words back into a single string
    const titleCasedTutorial = capitalizedWords.join(" ");

    // Push the modified tutorial title into the titleCasedTutorials array
    titleCasedTutorials.push(titleCasedTutorial);
  }

  // Return the array containing the title-cased tutorial names
  return titleCasedTutorials;
}

console.log(titleCased());

