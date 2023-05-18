let tabledata = [
    {id: 1, icon: 'icon1', description: 'Description 1', info: 'Info 1', image: 'image1.jpg'},
    {id: 2, icon: 'icon2', description: 'Description 2', info: 'Info 2', image: 'image2.jpg'},
    {id: 3, icon: 'icon3', description: 'Description 3', info: 'Info 3', image: 'image3.jpg'},
    {id: 4, icon: 'icon4', description: 'Description 4', info: 'Info 4', image: 'image4.jpg'},
    {id: 5, icon: 'icon5', description: 'Description 5', info: 'Info 5', image: 'image5.jpg'},

]

  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
  let table = document.querySelector("table");
generateTable(table, tabledata);