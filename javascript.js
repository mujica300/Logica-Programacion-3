function factorialize() {
    let num = parseInt(prompt("Ingresa tu numero"));
  
    if (!isNaN(num)) {
      let result = num;
  
      if (num === 0 || num === 1) 
        return 1;
  
      while (num > 1) { 
        num--;
        result *= num;
      }
  
      document.write(`El factorial de tu numero es: ${result}`);
    } else {
      document.write("Por favor ingresa un numero válido");
    }
  }
  
  factorialize();

