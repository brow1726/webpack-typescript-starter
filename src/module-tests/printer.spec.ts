import {Printer} from '../modules/printer';

describe('Printer', () => {
    it('should print', () => {
        const printer = new Printer('cat', 'dog');
        spyOn(console, 'log');
        printer.printFunc();
        expect(console.log).toHaveBeenCalled();
    });
});