function newQuote() {
  // Replace ./data.json with your JSON feed
  fetch('https://animechan.vercel.app/api/random')
    .then((response) => {
      return response.json();
    })
    .then((quote) => {
      document.getElementById('quote-text').innerHTML = quote.quote;
      document.getElementById('quote-character').innerHTML = `${quote.character}, ${quote.anime}`;
    })
    .catch((err) => {
      console.log(err);
    });

    setTimeout(function() {
      var x = document.getElementById('quotes');
      x.style.display = 'block';
    }, 1000) 
}
