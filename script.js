
    // Exercício 1: Alterar Cor de Fundo
    function changeBackgroundColor() {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    }

    // Exercício 2: Lista Interativa
    function addToList() {
        const input = document.getElementById('list-input');
        const list = document.getElementById('item-list');
        if (!input || !list) return
        if (input.value.trim() !== "") {
            const listItem = document.createElement('li');
            listItem.textContent = input.value;
            list.appendChild(listItem);
            input.value = "";
        }
    }

    // Exercício 3: Mostrar ou Ocultar Texto
    function toggleText() {
        const text = document.getElementById('toggle-text');
        const button = document.getElementById('toggle-btn');
        if (!text || !button) return
        if (text.classList.contains('hidden')) {
            text.classList.remove('hidden');
            button.textContent = "Ocultar";
        } else {
            text.classList.add('hidden');
            button.textContent = "Mostrar";
        }
    }

    // Exercício 5: Contador de Cliques
    let counter = 0;
    function incrementCounter() {
        counter++;
        const clickCounter = document.getElementById('click-counter');
        if (!clickCounter) return
        clickCounter.textContent = counter
    }

    // Exercício 6: Luzes que Acendem e Apagam
    let isLampOn = false;
    function toggleLamp() {
        const lamp = document.getElementById('lamp');
        if (!lamp) return;
        isLampOn = !isLampOn;
        lamp.style.backgroundColor = isLampOn ? "yellow" : "gray";
    }
