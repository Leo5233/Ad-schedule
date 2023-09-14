

function generateData(){
  let allData = []
  const oneData = {
    id: 1,
    name: "Christmas 2020",
    advertiser: "Food Market",
    group: "krab",
    description: "holiday night during Christmas",
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
  const tableContainer = document.querySelector('.order-content')
  let rawHTML = ``
  for (let i = 0; i < allData.length; i++) {
    rawHTML += ` <tr class="table-row">
              <td class="col-checkbox"><input type="checkbox" class="table-row-select"></td>
              <td class="col-id">${allData[i].id}</td>
              <td class="col-name">${allData[i].name}</td>
              <td class="col-ad">${allData[i].advertiser}<br><span class="col-ad-2">${allData[i].group}</span></td>
              <td class="col-description">${allData[i].description}</td>
              <td class="col-price">${allData[i].price}</td>
              <td class="col-start">${allData[i].startTime}</td>
              <td class="col-end">${allData[i].endTime}</td>
              <td class="col-action"><img class="menu-img" src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/menu.svg" alt="menu-image"></td>
            </tr>`  
  }
 
  tableContainer.innerHTML = rawHTML
}

function getPosition(element) {
  let x = 0;
  let y = 0;
  // 搭配上面的示意圖可比較輕鬆理解為何要這麼計算
  while (element) {
    x += element.offsetLeft - element.scrollLeft + element.clientLeft;
    y += element.offsetTop - element.scrollLeft + element.clientTop;
    element = element.offsetParent;
  }

  return { x: x, y: y };
}

// const data = generateData()
generateTableRow(generateData())
const tableRows = document.querySelectorAll('.table-row-select')
const actionBtns = document.querySelectorAll('.menu-img')
const actionPanel = document.querySelector('.action-container')

tableRows.forEach( checkbox => {
  checkbox.addEventListener('change',(event) => {
    event.target.parentNode.parentNode.classList.toggle('selected')  //tr->td->checkbox 給tr層增加class所以倒回2層
  })
})

//控制隱藏action開關和位置
actionBtns.forEach( actionBtn => {
  actionBtn.addEventListener('click', (event) => {
    let position = getPosition(event.target)
    actionPanel.style.top = position.y + "px";
    actionPanel.style.left = (position.x - 120) + "px";
    actionPanel.classList.toggle('d-none')

  })
})
