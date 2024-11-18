
let quote = document.querySelector(".quoteContent");
let author = document.querySelector(".author");

function getQuote(){
    
    fetch('https://dummyjson.com/quotes/random')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log(data.content);
      quote.textContent = data.quote;
      author.textContent ="--";
      author.textContent += data.author;
    })
    .catch(error => console.log(error));
 
}
