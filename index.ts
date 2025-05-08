function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    return input.toUpperCase();
}



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {

    const filteredItems = items.filter(item => item.rating >= 4);
    return filteredItems;

}



function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((accumulator, currentValue) => [...accumulator, ...currentValue], []);
}



class Vehicle {
    constructor(private make: string, private year: number) { }
    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
        super(make, year);
    }
    getModel(): string {
        return `Model: ${this.model}`;
    }
}



function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length;
    }
    else {
        return value * 2;
    }
}



interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    }

    let mostExpensive: Product = products[0];

    for (let i = 1; i < products.length; i++) {
        if (products[i].price > mostExpensive.price) {
            mostExpensive = products[i];
        }
    }
    return mostExpensive;
}



enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    }
    return "Weekday";
}



async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
        return Promise.reject(new Error("Error: Negative number not allowed"))
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
    return n * n;
}