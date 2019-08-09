// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


function theTabs(obj){
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((response) => {
    console.log(response);
})
//elements to iterate "javascript", "bootstrap", "technology", "jquery", "node.js"
const java = document.createElement('div');
java.classList.add('tab');
java.textContent = `javascript`;

const boot = document.createElement('div');
boot.classList.add('tab');
boot.textContent = `bootstrap`;

const tech = document.createElement('div');
tech.classList.add('tab');
tech.textContent = `technology`;

const jquer = document.createElement('div');
jquer.classList.add('tab');
jquer.textContent = `jquery`;

const jsNode = document.createElement('div');
jsNode.classList.add('tab');
jsNode.textContent = `node.js`;

const tabSection = document.querySelector('.topics')


console.log('testing');
// nest section
tabSection.appendChild(java);
tabSection.appendChild(BOOT);
tabSection.appendChild(tech);
tabSection.appendChild(jquer);
tabSection.appendChild(jsNode);

console.log(tabSection);
return tabSection;
}





