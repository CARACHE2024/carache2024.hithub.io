(function(){
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value = 1; // Inicializa el valor

    // Muestra el primer testimonio al cargar
    sliders[value - 1].classList.add('testimony__body--show');

    buttonNext.addEventListener('click', () => {
        changePosition(1);
    });

    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
    });

    const changePosition = (add) => {
        sliders[value - 1].classList.remove('testimony__body--show'); // Quita la clase del testimonio actual

        value += add; // Actualiza el valor

        // Maneja el ciclo
        if (value > sliders.length) {
            value = 1; // Vuelve al primero
        } else if (value < 1) {
            value = sliders.length; // Vuelve al último
        }

        sliders[value - 1].classList.add('testimony__body--show'); // Agrega la clase al nuevo testimonio
    };

})();

