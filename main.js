const temp = 9/5;

// De Celsius a Fahrenheit

const celsiusToFahrenheit = (celsius) => {
    let fahrenheit = (celsius * (temp)) + 32;
    fahrenheit = Math.round((fahrenheit + Number.EPSILON)*100)/100;
    return fahrenheit;
}

console.log(celsiusToFahrenheit(32));

// De Fahrenheit a Celsius

const fahrenheitToCelsius = (fahrenheit) => {
    let celsius = (fahrenheit - 32) / (temp);
    celsius = Math.round((celsius + Number.EPSILON)*100)/100;
    return celsius;
}

console.log(fahrenheitToCelsius(89.6));

// De Celsius a Kelvin

const celsiusToKelvin = (celsius) => {
    let kelvin = celsius + 273.15;
    kelvin = Math.round((kelvin + Number.EPSILON)*100)/100;
    return kelvin;
}

console.log(celsiusToKelvin(60));

// De Kelvin a Celsius

const kelvinToCelsius = (kelvin) => {
    let celsius = kelvin - 273.15;
    celsius = Math.round((celsius + Number.EPSILON)*100)/100;
    return celsius;
}

console.log(kelvinToCelsius(333.15));


// De Fahrenheit a Kelvin

const fahrenheitToKelvin = (fahrenheit) => {
    let kelvin = (fahrenheit - 32) / (temp) + 273.15;
    kelvin = Math.round((kelvin + Number.EPSILON)*100)/100;
    return kelvin;
}

console.log(fahrenheitToKelvin(77));

// De Kelvin a Fahrenheit 

const kelvinToFahrenheit = (kelvin) => {
    let fahrenheit = (kelvin - 273.15) * (temp) + 32;
    fahrenheit = Math.round((fahrenheit + Number.EPSILON)*100)/100;
    return fahrenheit;
}

console.log(kelvinToFahrenheit(298.15));

// Calcular el promedio

const calculateAverage = (grades) => {

    let accumulator = 0;

    grades.forEach(grade => {
        accumulator += grade;
    });

    average = accumulator/grades.length;
    
    return average;
}

console.log(calculateAverage([65, 75, 100]));