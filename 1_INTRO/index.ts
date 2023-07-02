const numberOne: number = 1;
const numberTwo: number = 2;

function greeting(one: any, two: any): void {
    console.log(`Numero ${one}, ${two}`);
    let isNumber: boolean = typeof one === 'number' ? true : false ? typeof two === 'number' ? true : false : false;

    if (isNumber) {
        console.log(some(one, two));
    } else console.log('Não são numeros');

}

function some(one: number, two: number): number {
    return one + two;
}

greeting(numberOne, numberTwo);

