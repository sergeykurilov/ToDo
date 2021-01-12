//Ф-я принимает параметром целые положительные числа
//и возвращает их сумму
export function sum(...numbers: Array<number>) {
    // let sum = 0;
    // for(let i = 0; i< numbers.length; i++){
    //     sum += numbers[i];
    // }
    return numbers.reduce((acc, item) => acc + item)
}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "00", если такого треугольника не существует,
//  - "01", если треугольник равнобедренный,
//  - "10", если треугольник равносторонний,
//  - "11", если треугольник обычный

export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b <= c || a + c <= b || b + c <= c) {
        return "00"
    } else if (a === b && b == c) {
        return "01"
    } else if (a === b && a === c && b === a && b && c && c === a && c && b) {
        return "10"
    } else {
        return "11"
    }
}

// 3. Функция принимает isEvenSumGreater параметром массив чисел.
// Если сумма элементов массива с чётным индексом больше суммы элементов массива с нечётными индексами,то функция возвращает true. В противном случае - false.


export const isEvenSumGreater = (arr: number[]): boolean => {
    let sumOdd = 0, sumEven = 0
    arr.forEach((item, index) => {
            if (index % 2 === 0)
                return sumEven += item
            else
                return sumOdd += item
        }
    )
    return sumOdd < sumEven
}
// export function isEvenSumGreater(arr: number[]): boolean {
//     let evenSum = arr
//         .reduce((sum, current, index)=> (index % 2 === 0) ? sum : sum+current);
//     let oddSum = arr
//         .reduce((sum, current, index)=> (index % 2 !== 0) ? sum : sum+current);
//
//     return evenSum > oddSum
// }


// 4. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа


export function getSum(numbers: number): number {
    let sum = 0
    for (numbers; numbers !== 0; numbers = Math.trunc(numbers / 10)) {
        sum += numbers % 10;
    }
    return sum;
}

// export const sumOfNumeral = (num: number):number => {
//     let sum = 0
//     while(num!=0){
//         sum += num % 10
//         num = Math.floor(num / 10)
//     }
//     return sum
// }


// 5. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
export function getBanknoteList(sum: number) {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    const banknotesList: Array<number> = []

    for (let i = 0; i < banknotes.length; i++) {
        while (sum >= banknotes[i]) {
            banknotesList.push(banknotes[i])
            sum -= banknotes[i]
        }
    }
    return banknotesList

}