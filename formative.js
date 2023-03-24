function calculate() {
   var num1 = parseInt(document.getElementById('firstNumber').value);
   var num2 = parseInt(document.getElementById('secondNumber').value);
   var equation = document.calculator.equation.value
      
   if (equation == "plus") {
      var result = num1 + num2;
      alert("The result is " + result);
   }

   if (equation == "minus") {
      var result = num1 - num2;
      alert("The result is " + result);
   }

   if (equation == "multiply") {
      var result =  num1 * num2;
      alert("The result is " + result);
   }

   if (equation == "divide") {
      var result =  num1 / num2;
      alert("The result is " + result);
   }
}
