function calcularPromedio() {
    let numerosString = document.getElementById('numeros').value;
    let numerosArray = numerosString.split(',').map(num => parseInt(num.trim()));
    
    for (let i = 0; i < numerosArray.length; i++) { 
        if (isNaN(numerosArray[i])) { 
            alert('Por favor, ingresa solo números válidos separados por comas'); 
            return; 
        } 
    }
    let suma = 0;
    for (let i = 0; i < numerosArray.length; i++) {
        suma += numerosArray[i];
    }
    let promedio = suma / numerosArray.length;
    document.getElementById("promedio").textContent = promedio.toFixed(2);
}