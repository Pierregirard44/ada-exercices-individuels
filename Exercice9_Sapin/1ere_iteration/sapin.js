function sapin(n) {
    for (let i = 0; i < n; i++) {

      // Affichage des espaces avant les branches
      let spaces = " ".repeat(n - i - 1);
      
      // Affichage des branches
      let branches = "/"+"*".repeat(i * 2 + 1)+"\\" 

      
      console.log(spaces + branches);
    }
    
    // Affichage du tronc
    let trunkSpaces = " ".repeat(n - 1);
    console.log(trunkSpaces + "|");
  }
console.log (sapin(6))  