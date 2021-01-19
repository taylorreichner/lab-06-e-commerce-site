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
    
    
    
    
    
    return li;
}