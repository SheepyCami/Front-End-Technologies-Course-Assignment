$(document).ready(function() {

  var tabledata = [
    { id: 1, icon: "bi bi-globe", description: "Education", info: "Noroff", image: "image1.jpg" },
    { id: 2, icon: "bi bi-star", description: "Skills", info: "Eating potatochips", image: "image2.jpg" },
    { id: 3, icon: "bi bi-heart", description: "Interests", info: "Hamsters", image: "image3.jpg" },
    { id: 4, icon: "bi bi-book", description: "Languages", info: "JavaScript, HTML, CSS... ", image: "image4.jpg" },
    { id: 5, icon: "bi bi-lightning", description: "Hobbies", info: "Coding of course!", image: "image5.jpg" }
  ];

  tabledata[0].image = './table images/bulba.jpg';
  tabledata[1].image = './table images/eevee.jpg';
  tabledata[2].image = './table images/pika.jpg';
  tabledata[3].image = './table images/pikapi.jpg';
  tabledata[4].image = './table images/vulpix.jpg';
  
  function generateTable(table, data) {
    for (let i = 0; i < data.length; i++) {
      let element = data[i];
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        if (key === 'icon') {
          let icon = document.createElement('i');
          icon.className = 'bi ' + element[key];
          cell.appendChild(icon);
        } else if (key === 'image') {
          let img = document.createElement('img');
          img.src = element[key];
          img.style.height = '100px'; 


          $(img).on('click', function(e) {
            window.open(element[key], '_blank');
          });

          img.style.cursor = 'pointer'; 
          cell.appendChild(img);
        } else {
          let text = document.createTextNode(element[key]);
          cell.appendChild(text);
        }
      }

      if (i % 2 === 0) {
        $(row).on('mouseenter', function() {
          $(this).css('color', 'red');
        });
        $(row).on('mouseleave', function() {
          $(this).css('color', 'black');
        });
      }
    }
  }
  
  let table = document.querySelector("table");
  generateTable(table, tabledata);
});
