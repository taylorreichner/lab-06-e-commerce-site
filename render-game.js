export function renderGame(game) {
    const li = document.createElement('li');
    li.classList.add('game-item'); 

    const h3 = document.createElement('h3');
    h3.classList.add('game-name');
    h3.textContent = game.name;
    li.append(h3);
    
    const img = document.createElement('img');
    img.classList.add('game-image');
    li.append(img);
    img.src = `../assets/${game.image}`;
    
    const pDescription = document.createElement('p');
    pDescription.classList.add('game-description');
    pDescription.textContent = game.description;
    li.append(pDescription);

    const pCategory = document.createElement('p');
    pCategory.classList.add('game-category');
    pCategory.textContent = game.category;
    li.append(pCategory);
    
    const pPrice = document.createElement('p');
    pPrice.classList.add('game-price');
    pPrice.textContent = `$${game.price}`;
    li.append(pPrice);

    
    
    
    return li;
}