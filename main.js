function checkLeapYear() {
    const year = parseInt(document.getElementById('yearInput').value);
    const resultElement = document.getElementById('result');

    if (isNaN(year) || year < 1) {
        resultElement.textContent = 'Please enter a valid year.';
        // return;
    }

    else if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        resultElement.innerHTML = `${year} is a leap year.`;
        console.log("leap year")
    } else {
        resultElement.innerHTML = `${year} is not a leap year.`;
    }
}



function cinemaTicket(params) {
    const age = parseInt(document.getElementById('ageinput').value);
    const resultelement = document.getElementById('result1');
    if(age<= 0) {
        resultelement.textContent = 'Are you from the future or just having a time-traveling moment?';
    
    }
  else if (age <=12){
    resultelement.textContent = '$10 is the price of your ticket . So welcome   !!!';
}
else if   ( age<=17){
    resultelement.textContent = '$15 is the price of your ticket . So welcome  !!!';
}
else if (age >= 18){
    resultelement.textContent = '$20 is the price of your ticket . So welcome  !!!';
}

}







function adviseClothing() {
    const temperature = parseInt(document.getElementById('temperature').value);
    const isRaining = document.getElementById('raining').checked;
    const resultElement1 = document.getElementById('result2');


    let advice = '';

    if (isRaining) {
        advice += 'It is raining. ';
    } else {
        advice += 'It is not raining. ';
    }

    if (temperature <= 0) {
        advice += 'Wear a heavy coat, gloves, and a hat. It\'s freezing!';
    } else if ( temperature < 10) {
        advice += 'Wear a warm jacket and a scarf. It\'s quite cold!';
    } else if (temperature < 20) {
        advice += 'Wear a light jacket. It\'s cool!';
    } else if ( temperature < 30) {
        advice += 'Wear comfortable clothes. It\'s pleasant!';
    } else if (temperature >= 30) {
        advice += 'Wear light and breathable clothing. It\'s hot!';  
    }else  {
        resultElement1.textContent = 'Please enter a valid temperature.';
        
    }
    

    resultElement1.textContent = advice;
}




const resultElement2 = document.getElementById("result3");
const btn = document.getElementById("btn");

function Fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1 
else
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

btn.addEventListener("click", () => {
let numTerms = parseInt(document.getElementById("fibonacciInput").value);
  resultElement2.textContent = Fibonacci(numTerms);
});


const resultElement3 = document.getElementById("result5");
const btn0 = document.getElementById("btn0");

// Helper function to clean and normalize the string
function cleanString(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

// Recursive function to check for palindrome
function checkPalindrome(str, left, right) {
    if (left >= right) 
        return true; 
    
    if (str[left] !== str[right]) 
        return false; 
    
    return checkPalindrome(str, left + 1, right - 1);
}

btn0.addEventListener("click", () => {
    // Get the input value and clean it
    const input = document.getElementById("palindromeInput").value;
    const cleanedInput = cleanString(input);
    
    // Check if the cleaned string is a palindrome
    const isPalindrome = checkPalindrome(cleanedInput, 0, cleanedInput.length - 1);
    
    // Update the result element with the result
    resultElement3.textContent = isPalindrome ? "True" : "False";
});