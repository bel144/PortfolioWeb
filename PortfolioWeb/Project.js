function toggleDescription(element) {
    const projectPoin = element.closest('.projects-poin');
    const projectDown = projectPoin.querySelector('.projects-down');
    const arrowImg = element.querySelector('img');

    if (projectDown.style.display === 'none') {
        projectDown.style.display = 'block';
        arrowImg.src = './Assets/arrowdown.png'; // Ganti dengan path gambar arrow up
    } else {
        projectDown.style.display = 'none';
        arrowImg.src = './Assets/arrowdown.png'; // Kembali ke gambar arrow down
    }

    projectPoin.classList.toggle('active');
}
