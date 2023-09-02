interface Car {
    manufacturer: string;
    model: string;
    [key: string]: string | number | boolean;
}

function createCar(manufacturer: string, model: string, ...args: Array<[string, string | number | boolean]>): Car {
    const car: Car = {
        manufacturer,
        model,
    };

    for (const [key, value] of args) {
        car[key] = value;
    }

    return car;
}

// Calling the function with required information and additional key-value pairs
const myCar = createCar("Toyota", "Camry", "color", "blue", "year", 2023);
console.log(myCar);
