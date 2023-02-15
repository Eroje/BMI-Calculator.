function bmicalculator(weight, height) {

    var bmi = weight / Math.pow(height, 2);
  
    return Math.round(bmi);
    
  }
  
  var bmi = bmicalculator(80, 1.8);
  console.log(bmi);