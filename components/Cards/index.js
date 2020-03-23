// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const request = axios.get('https://lambda-times-backend.herokuapp.com/articles');
//`'http://api.giphy.com/v1/gifs/search?q=' + ${input} + '&api_key=dc6zaTOxFJmzC'`
request
    .then(data => {
        const request = data.data.articles;

        Object.keys(request).forEach((articleTopic) => {

            request[articleTopic].forEach(topic => {

                const newCards = cardContent(topic);
                const cards = document.querySelector('.cards-container');

                cards.appendChild(newCards);

            })
        })

    })

    .catch(err => {
        console.log('error', err);

    })


const cardContent = (obj) => {

    const cards = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgs = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span')

    cards.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgs.classList.add('img-container');
    
    headline.textContent = obj.headline;
    img.src = obj.authorPhoto;
    authorName.textContent = `By ${obj.authorName}`
    
    cards.appendChild(headline);
    cards.appendChild(author);
    author.appendChild(imgs);
    imgs.appendChild(img);
    author.append(authorName); 
    

    return cards;
}