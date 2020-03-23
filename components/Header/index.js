// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const headerData = [
    {
        date: "MARCH 28, 2019",
        title: "Lambda Times",
        temp: "98°"
    }
]

const headerCreater = (date, title, temp) => {

    const header = document.createElement('div')
    const hDate = document.createElement('span')
    const hTitle = document.createElement('h1')
    const hTemp = document.createElement('span')

    hDate.textContent = date
    hTitle.textContent = title
    hTemp.textContent = temp
    
    header.appendChild(hDate)
    header.appendChild(hTitle)
    header.appendChild(hTemp)

    header.classList.add('header')
    hDate.classList.add('date')
    hTemp.classList.add('temp')

    return header;
}

const headerCard = document.querySelector(".header-container")

headerData.forEach(data => {
    headerCard.appendChild(headerCreater(data.date, data.title, data.temp))
})

// console.log(headerCreater);