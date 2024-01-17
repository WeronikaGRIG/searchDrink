
const search = document.querySelector('.search');
const li = document.querySelectorAll('li');

const searchEngine = e => {

    const text = e.target.value.toLowerCase();

    li.forEach(el => {
        const task = el.textContent;

        if (task.toLowerCase().indexOf(text) !== -1) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    })
}

search.addEventListener('keyup', searchEngine)


// 1. Listener nasługuje na zmiany w inpucie
// 2. e.target wskazuje na input.e.target.value wskazuje  na wartość inputa, czyli tekst, który wpisujemy
// 3. Zmienns li przechowuje wszystkie napoje
// 4. el odnosi się do każdego <li> na liście