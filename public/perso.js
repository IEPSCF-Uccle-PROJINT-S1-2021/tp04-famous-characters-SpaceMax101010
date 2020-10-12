
    const button = document.getElementById('afficher');
    button.addEventListener('click', function(e) {
    let el = document.createElement('p');
    el.textContent = 'test';
    document.body.appendChild(el);
    });
