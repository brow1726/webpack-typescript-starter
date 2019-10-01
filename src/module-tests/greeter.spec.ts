import { Greeter } from '../modules/greeter';

describe('Greeter', () => {
    it('should greet', () => {
        const greeter = new Greeter('Matt');
        spyOn(console, 'log');

        greeter.greet();

        expect(console.log).toHaveBeenCalled();
    });
});
