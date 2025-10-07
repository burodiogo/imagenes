document.addEventListener('DOMContentLoaded', () => {
    const miniaturas = document.querySelectorAll('.miniaturas img');
    const imagenAmpliada = document.getElementById('imagenAmpliada');

    miniaturas.forEach(miniatura => {
        miniatura.addEventListener('click', () => {
            const rutaCompleta = miniatura.dataset.full;
            imagenAmpliada.src = rutaCompleta;
            imagenAmpliada.alt = miniatura.alt;
        });
    });
});
