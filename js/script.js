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


/***
 * `getRandomQuote` function
***/

function getRandomQuote(quotes){
  let randomQuoteNumber = Math.floor(Math.random() * quotes.length); + 1; 
  return quotes[randomQuoteNumber];
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
      html += `<span class="citation"> ${randomQuote.citation} </span>`;
    }
    if(randomQuote.year){
      html += `<span class="year"> ${randomQuote.year} </span>`;
    }
    html+= `</p>`;
    return html;
}

console.log(printQuote());
console.log(printQuote());
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);