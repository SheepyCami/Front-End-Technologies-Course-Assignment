let tabledata = [
    { id: 1, icon: 'bi-globe', description: 'Description 1', info: 'Info 1', image: 'https://cdn.pixabay.com/photo/2018/04/13/16/13/pixel-3316924_960_720.png' },
    { id: 2, icon: 'bi-chat-dots', description: 'Description 2', info: 'Info 2', image: 'image2.jpg' },
    { id: 3, icon: 'bi-heart', description: 'Description 3', info: 'Info 3', image: 'image3.jpg' },
    { id: 4, icon: 'bi-star', description: 'Description 4', info: 'Info 4', image: 'image4.jpg' },
    { id: 5, icon: 'bi-envelope', description: 'Description 5', info: 'Info 5', image: 'image5.jpg' },
];

function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        if (key === 'icon') {
          let icon = document.createElement('i');
          icon.className = 'bi ' + element[key];
          cell.appendChild(icon);
        } else {
          let text = document.createTextNode(element[key]);
          cell.appendChild(text);
        }
      }
    }
  }


  
  let table = document.querySelector("table");
  generateTable(table, tabledata);