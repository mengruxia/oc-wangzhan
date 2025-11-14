const button = document.getElementById('button');

button.addEventListener('click', ()=>{
    const img = document.createElement('img');
    img.src = 'cat.webp';
    img.classList.add('cat-image');
    
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 200);

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    document.body.appendChild(img);
}

);