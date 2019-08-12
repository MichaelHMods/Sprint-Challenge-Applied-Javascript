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



// // theCard.classList.add('.card')
// function cardsContainer(divName){
//     let story = document.createElement('div');
//     story.classList.add('card');
//     story.textContent = divName;

//     return story;
// }

const containerCard = document.querySelector('.cards-container');



axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response.data.articles);
    response.data.articles.forEach(cards => {
        containerCard.appendChild(cardMaker(cards));
    })

})
.catch(error => {console.log(error)});

function cardMaker(obj){
    const theCard = document.createElement('div');
    const theHeadline = document.createElement('div');
    const theAuthor = document.createElement('div');
    const theImgContainer = document.createElement('div');
    const authorName = document.createElement('span');

    theCard.classList.add('card');
    theHeadline.classList.add('headline');
    theHeadline.textContent = '';
    theAuthor.classList.add('author');
    theImgContainer.classList.add('img-container');
    authorName.textContent = ``

}
