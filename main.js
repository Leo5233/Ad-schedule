
function generateData(){
  let allData = []
  const oneData = {
    id: 1,
    name: "Christmas 2020",
    advertiser: "Food Market",
    group: "krab",
    description: "holiday night during Christmas 2020",
    price: "$2000",
    startTime: "2020/12/24 19:30",
    endTime: "2021/01/02 23:00"
  }   
  for (let i = 1; i <= 14; i++){ 
    allData.push(oneData)
  }
  return allData
} 

function generateTableRow(allData){
  const tableContainer = document.querySelector('.right-content-table')
  let rawHTML = `<table class="table">
            <tr class="tablerow-head">
              <th class="col-checkbox">
                <input type="checkbox" disabled>
              </th>
              <th class="col-id">ID</th>
              <th class="col-name">Name</th>
              <th class="col-ad">Advertiser<br><span class="col-ad-2">group</span></th>
              <th class="col-description">Description</th>
              <th class="col-price">Price<img class="sort-img"
                  src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/sort.svg"
                  alt="sort-image"></th>
              <th class="col-start">Start Time<img class="sort-img"
                  src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/sort.svg"
                  alt="sort-image"></th>
              <th class="col-end">End Time<img class="sort-img"
                  src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/sort.svg"
                  alt="sort-image"></th>
              <th class="col-action">action</th>
            </tr>`
  for (let i = 0; i < allData.length; i++) {
    rawHTML += ` <tr class="tablerow-content">
              <td><input type="checkbox"></td>
              <td>${allData[i].id}</td>
              <td>${allData[i].name}</td>
              <td>${allData[i].advertiser}<br><span class="col-ad-2">${allData[i].group}</span></td>
              <td>${allData[i].description}</td>
              <td>${allData[i].price}</td>
              <td>${allData[i].startTime}</td>
              <td>${allData[i].endTime}</td>
              <td><img class="menu-img" src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/menu.svg" alt="menu-image"></td>
            </tr>`  
  }
  rawHTML += "</table>"
  tableContainer.innerHTML = rawHTML
}

// const data = generateData()
generateTableRow(generateData())
