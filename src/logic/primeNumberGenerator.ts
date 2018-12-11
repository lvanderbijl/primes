export class PrimeNumberGenerator {

    public largestKnownPrime: number = 7;
    private caculatedPrimes: number[] = [1, 2, 3, 5, 7];

    public isPrime(x: number): boolean {
        /*if (this.checkCache(x)) {
            return true;
        }*/
        if (x % 2 === 0) {

            return false;
        }
        const oddNumbersToX: number[] = this.getOddArray(x);

        // test all inbetween numbers
        return oddNumbersToX.every((odd: number) => {
            return x % odd > 0;
        });
    }

    /*private checkCache(x: number): boolean {
        if (x > this.largestKnownPrime) {
            return false;
        }

    }*/

    /**
     * Returns an array of odd numbers between 2 and x/2
     * @param x
     */
    private getOddArray(x: number): number[] {
        if (x < 0) {
            return [];
        }
        if (x > Number.MAX_VALUE) {
            throw new Error("Number " + x + " is too large to compute");
        }
        /*
            we only have to compute numbers less that half of the desired number
            since we've already x === 1 or 2 is already dealt with
        */
        // tslint:disable-next-line:one-variable-per-declaration
        const
            max: number = Math.ceil(x / 2),
            min: number = 3;
        const oddArray: number[] = Array((max - min) / 2).map((v: number, index: number) => {
            return min + (index * 2);
        });
        return oddArray;
    }
}
