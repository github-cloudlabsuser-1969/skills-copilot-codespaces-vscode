const Calculator = require('./test.js'); // Adjust the path if necessary

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('add', () => {
        it('should return the sum of two numbers', () => {
            expect(calculator.add(2, 3)).toBe(5);
        });

        it('should handle negative numbers', () => {
            expect(calculator.add(-2, -3)).toBe(-5);
        });
    });

    describe('subtract', () => {
        it('should return the difference of two numbers', () => {
            expect(calculator.subtract(5, 3)).toBe(2);
        });

        it('should handle negative numbers', () => {
            expect(calculator.subtract(-5, -3)).toBe(-2);
        });
    });

    describe('multiply', () => {
        it('should return the product of two numbers', () => {
            expect(calculator.multiply(2, 3)).toBe(6);
        });

        it('should handle zero', () => {
            expect(calculator.multiply(0, 5)).toBe(0);
        });
    });

    describe('divide', () => {
        it('should return the quotient of two numbers', () => {
            expect(calculator.divide(6, 3)).toBe(2);
        });

        it('should throw an error when dividing by zero', () => {
            expect(() => calculator.divide(6, 0)).toThrow('Division by zero is not allowed.');
        });
    });
});