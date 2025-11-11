const button = document.getElementById('button');

button.addEventListener('click', ()=>{
    const img = document.createElement('img');
    img.src = 'cat.webp';
    img.classList.add('cat-image');
    
    const x = Math.random() * (window.innerWidth - imgWidth);
    const y = Math.random() * (window.innerHeight - imgHeight);

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    document.body.appendChild(img);
}

);