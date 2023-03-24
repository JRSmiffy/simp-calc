function submit() {
   var num1 = document.calculator.firstNumber.ValueOf()
   var num2 = document.calculator.secondNumber.ValueOf()
   var equation = document.calculator.equation.value
      
   if (equation == "plus") {
      return num1 + num2
   }

   if (equation == "minus") {
      return num1 - num2
   }

   if (equation == "multiply") {
      return num1 * num2
   }

   if (equation == "divide") {
      return num1 / num2
   }
}