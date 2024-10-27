// Словник з молекулярними масами основних сполук
const molarMasses = {
    'H2O': 18.015,
    'CO2': 44.01,
    'NaCl': 58.44,
    'C6H12O6': 180.16,
    'O2': 32.00,
    // Додайте більше речовин за потребою
};

function appendToInput(value) {
    document.getElementById("input").value += value;
}

function clearInput() {
    document.getElementById("input").value = "";
}

function deleteLast() {
    let currentInput = document.getElementById("input").value;
    document.getElementById("input").value = currentInput.slice(0, -1);
}

function calculate() {
    try {
        let input = document.getElementById("input").value;

        // Замінюємо назви речовин на їхні молекулярні маси
        for (let compound in molarMasses) {
            const regex = new RegExp(compound, 'g');
            input = input.replace(regex, molarMasses[compound]);
        }

        // Обчислюємо вираз
        let result = eval(input);
        document.getElementById("input").value = result.toFixed(2); // округлюємо результат до 2 знаків після коми
    } catch (error) {
        alert("Неправильний вираз");
    }
}
