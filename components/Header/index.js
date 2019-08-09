// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header(obj) {
    const theHeader = document.createElement('header');
    const dateSpan = document.createElement('span');
    const headerH1 = document.createElement('h1');
    const tempSpan = document.createElement('span');

    theHeader.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    headContainer = document.querySelector('.header-container');
    console.log(headContainer)
    
    headContainer.appendChild(theHeader);
    theHeader.appendChild(dateSpan);
    theHeader.appendChild(headerH1);
    theHeader.appendChild(tempSpan);
    
}


