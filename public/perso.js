
const button = document.getElementById('afficher');
  button.addEventListener('click', function(e) {

    fetch("avengers.json").then(function(response){
      return response.json();
    }) .then(function(obj){
      console.log(obj);
      let el = document.createElement('p');
      el.textContent = obj[0].firstName;
      document.body.appendChild(el);

    }) .catch(function(error){
      console.log(error);
    });
  });
