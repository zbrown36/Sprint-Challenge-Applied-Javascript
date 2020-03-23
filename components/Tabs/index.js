// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const article = axios.get('https://lambda-times-backend.herokuapp.com/topics')

.then(data => {
    
    const select = data.data.topics;

    console.log(select)
    
    select.forEach(topic => {

        const tabs = info(topic);
        const topics = document.querySelector('.topics');

        topics.appendChild(tabs);
    })
})

.catch( error => {
    console.log('error', error);
})

const info = (obj) => {

    const el = document.createElement('div')

    el.classList.add('tab')

    el.textContent = obj;

    return el;
}