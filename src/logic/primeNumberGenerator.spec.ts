import { PrimeNumberGenerator } from "./primeNumberGenerator";

describe("Prime Number Generator", () => {
    it ("should handle 1", () => {
        const gen: PrimeNumberGenerator = new PrimeNumberGenerator();
        expect(gen.isPrime(1)).toBeTruthy();
    });
});
