/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
// these quotes are mostly about quotes! 🙃
const quotes = [
  {
    source : "Takyou Allah Cheikh Malaynine",
    quote : "Quotes help us understand, inspire, motivate, clarify and show our approach to things around, this is why people and I love quotes."
  },
  {
    source : "Mehmet Murat Ildan",
    quote : "Minds of people need a good revolution and great quotations are good revolutionists!"
  },
  {
    source : "André-Marie Ampère",
    quote : "Quotation is the highest compliment you can pay to an author."
  },
  {
    source : "Brendan Behan",
    quote : "A quotation in a speech, article or book is like a rifle in the hands of an infantryman. It speaks with authority."
  },
  {
    source : "Veronica Roth",
    quote : "Fear doesn’t shut you down; it wakes you up.",
    citation : "Divergent",
    year : "2013",
    tags : ["inspirational", "motivational", "short"]
  }
];

//*** i added a random number funtion to use on the quote generator and color generator  ***
// random number generator. It takes the highest number as a parameter.
function getRandomNumber (highNum){
  let randomNumber = Math.floor(Math.random() * highNum);+ 1; 
  return randomNumber;
}


/***
 * `getRandomQuote` function
***/

// takes as a parameter an array (quotes)
// and uses that array.length to  pass the highNum argument to the getRandomNumber to access an object from quotes array by its index value.
function getRandomQuote(quotes){
  return quotes[getRandomNumber(quotes.length)];
}

// **exccedes** created a random rgb generator to change the backgroundColor every time a quote loads. 
function getRandomRGBColor(){
  const randomColor = `rgb(${getRandomNumber(255)},${getRandomNumber(255)},${getRandomNumber(255)})`;
  return randomColor;
}


/***
 * `printQuote` function
***/
function printQuote(){
 const randomQuote = getRandomQuote(quotes);
 let html = `
  <p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source}`;
  if(randomQuote.citation){
    html += `<span class="citation"> ${randomQuote.citation}</span>`;
  }
  if(randomQuote.year){
    html += `<span class="year"> ${randomQuote.year}</span>`;
  }

  //**Exceeds** At least one additional property prints to the page with it's quote
  //print 'tags' if available by passing the .join method to the tags array.
  if(randomQuote.tags){
    html += `<br><span class="tag"> ${randomQuote.tags.join(', ')} </span>`;
  }

  html+= `</p>`;
  document.getElementById('quote-box').innerHTML = html; 

  //** exccedes: Background color changes to a random color each time the quote refreshes
  document.body.style.backgroundColor = getRandomRGBColor();
  }

// call the printQuote as soon as the page opens to start with one of our random quotes instead of the hard coded quote.
printQuote();

//**exccedes** Quotes automatically refresh at regular intervals (reference https://www.w3schools.com/jsref/met_win_setinterval.asp
// it takes the interval amount as argument.
function myAutoQuote(interval){
  setInterval(printQuote, interval);
}

// invoke the myAutoQuote with the time in milliseconds as an argument.
myAutoQuote(10000);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);