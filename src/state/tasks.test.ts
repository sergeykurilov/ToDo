import {sum, getTriangleType, isEvenSumGreater, getSum, getBanknoteList} from "./tasks";

test("get sum of numbers", () => {
    const a = 2, b = 5, c = 4, d = 6
    expect(sum(a, b)).toBe(7)
    expect(sum(a, b, c)).toBe(11)
    expect(sum(a, b, c, d)).toBe(17)


})

test("get sum of numbers", () => {
    expect(getTriangleType(2, 2, 1)).toBe("11")
    expect(getTriangleType(2, 3, 1)).toBe("00")
    expect(getTriangleType(2, 2, 10)).toBe("00")
    expect(getTriangleType(2, 2, 3)).toBe("11")
})

test("is Event greater", () => {
    expect(isEvenSumGreater([2, 2, 1])).toBe(true)
    expect(isEvenSumGreater([2, 3, 1])).toBe(false)
    expect(isEvenSumGreater([2, 2, 10])).toBe(true)
    expect(isEvenSumGreater([2, 2, 3])).toBe(true)
})

test("sum of numbers", () => {
    expect(getSum(1000)).toBe(1)
})

test("get banknote list", ()=> {
    const result1500 = getBanknoteList(1500)
    const result23 = getBanknoteList(23)
    expect(result1500[0]).toBe(1000)
    expect(result1500[1]).toBe(500)
    expect(result23[0]).toBe(20)
    expect(result23[1]).toBe(2)
    expect(result23[2]).toBe(1)

})
