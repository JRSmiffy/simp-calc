function submit() {
   var num1 = document.calculator.firstNumber.ValueOf()
   var num2 = document.calculator.secondNumber.ValueOf()
   var equation = document.calculator.equation.value
      
   if (equation == "plus") {
      return alert(num1 + num2);
   }

   if (equation == "minus") {
      return alert(num1 - num2);
   }

   if (equation == "multiply") {
      return alert(num1 * num2);
   }

   if (equation == "divide") {
      return alert(num1 / num2);
   }
}
