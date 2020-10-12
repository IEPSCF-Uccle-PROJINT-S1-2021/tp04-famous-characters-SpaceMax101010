
const button = document.getElementById('afficher');


function fetchAndDecode(url){
  return fetch(url).then(response =>{
    if(!response.ok){
      throw new Error(`HTTP error! Status : ${response.status}`);
    } else {
      return response.json();
    }
  })
  .catch(e => {
    console.log("erreur");
  })
}

function triNom (tableau){
  tableau.sort(function(a,b){
    if(a.lastName > b.lastName){
      return 1;
    }
    if(a.lastName < b.lastName){
      return -1
    }
    return 0;
  });
  return tableau;
}

function triPrenom (tableau){
  tableau.sort(function(a,b){
    if(a.firstName > b.firstName){
      return 1;
    }
    if(a.firstName < b.firstName){
      return -1
    }
    return 0;
  });
  return tableau;
}

function generateTableHead(table) {
  let thead = table.createTHead();
  let row = thead.insertRow();

    let thNom = document.createElement("th");
    let textNom = document.createTextNode("Nom");
    let thPrenom = document.createElement("th");
    let textPrenom = document.createTextNode("Prénom");
    thNom.appendChild(textNom);
    thPrenom.appendChild(textPrenom);
    row.appendChild(thPrenom);
    row.appendChild(thNom);

}

function generateTable(table, data) {
  table.innerHTML = "";
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}



  button.addEventListener('click', function(e) {
    const isAvengers = document.getElementById('avengers').checked;
    const isBatman = document.getElementById('batman').checked;
    const isHarryPotter = document.getElementById('harryPotter').checked;
    const isNom = document.getElementById('nom').checked;
    const isPrenom = document.getElementById('prenom').checked;
    let table = document.getElementById("tablePerso");

    fichierFetch = [];
    if(isAvengers){
      let av = fetchAndDecode("avengers.json");
      fichierFetch.push(av);
    }
    if(isBatman){

      let bt = fetchAndDecode("batman.json");
      fichierFetch.push(bt);
    }
    if(isHarryPotter){
      let hp = fetchAndDecode("harry_potter.json");
      fichierFetch.push(hp);
    }

    Promise.all(fichierFetch).then(values => {
      if(values.length == 0){
        document.getElementById('noResultat').hidden = false;
        table.innerHTML = "";

      } else {
        console.log(values);
        document.getElementById('noResultat').hidden = true;
        let outputPerso = [];
        for(i = 0; i < values.length; i++){
          outputPerso = outputPerso.concat(values[i]);
        }

        if(isNom){
          outputPerso = triNom(outputPerso);
        } else if(isPrenom){
          outputPerso = triPrenom(outputPerso);
        }

        generateTable(table, outputPerso);
        generateTableHead(table);
        console.log(outputPerso);


      };

    })

  });
