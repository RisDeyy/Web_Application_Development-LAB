function performOperations() {
    var input = document.getElementById('numberListInput').value;
    var numbers = input.split(',').map(Number);
    
    var squaredNumbers = numbers.map(function(number) {
      return number * number;
    });
    
    var doubledNumbers = numbers.map(function(number) {
      return number * 2;
    });
    
    var halvedNumbers = numbers.map(function(number) {
      return number / 2;
    });
    
    var result = "Squared: " + squaredNumbers.join(', ') + "<br>" +
                 "Doubled: " + doubledNumbers.join(', ') + "<br>" +
                 "Halved: " + halvedNumbers.join(', ');
    
    document.getElementById('result').innerHTML = result;
  }
  