// Függvény napokszama(e1:egész, h1:egész, n1: egész, e2:egész,
//     h2: egész, n2: egész): egész
//   h1 = (h1 + 9) MOD 12
//   e1 = e1 - h1 DIV 10
//   d1 = 365*e1 + e1 DIV 4 - e1 DIV 100 + e1 DIV 400 +
//     (h1*306 + 5) DIV 10 + n1 - 1
//   h2 = (h2 + 9) MOD 12
//   e2 = e2 - h2 DIV 10
//   d2 = 365*e2 + e2 DIV 4 - e2 DIV 100 + e2 DIV 400 +
//     (h2*306 + 5) DIV 10 + n2 - 1
//   napokszama:= d2-d1
//  Függvény vége

export default class Segéd {
    public static napokszama(e1: number, h1: number, n1: number, e2: number, h2: number, n2: number): number {
        h1 = (h1 + 9) % 12;
        e1 = e1 - ~~(h1 / 10); // ~~ is the same as Math.floor()
        const d1 = 365 * e1 + ~~(e1 / 4) - ~~(e1 / 100) + ~~(e1 / 400) + ~~((h1 * 306 + 5) / 10) + n1 - 1;
        h2 = (h2 + 9) % 12;
        e2 = e2 - ~~(h2 / 10);
        const d2 = 365 * e2 + ~~(e2 / 4) - ~~(e2 / 100) + ~~(e2 / 400) + ~~((h2 * 306 + 5) / 10) + n2 - 1;
        return d2 - d1;
    }
}

// What this code does:
// 1. It creates a new class called Segéd.
// 2. It creates a static method called napokszama.
// 3. It returns the number of days between two dates.
// 4. It uses the Hungarian algorithm for calculating the number of days between two dates by:
//    a. Converting the month number to the Gregorian calendar.
//    b. Converting the year number to the Gregorian calendar.
//    c. Calculating the number of days between the two dates.
// 5. It uses the ~~ operator to convert a number to an integer.
