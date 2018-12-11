import { INumberCalculator } from "./iNumberCalculator";
import { PrimeNumberGenerator } from "./primeNumberGenerator";
export class PrimeNumberCalculator implements INumberCalculator {

    private primeNumbers: PrimeNumberGenerator = new PrimeNumberGenerator();

    // tslint:disable-next-line:no-empty
    constructor() {}

    public calculateNearestNumber(num: number): number {

        throw new Error("Method not implemented.");
    }
}
