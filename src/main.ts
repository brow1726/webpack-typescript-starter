import { Greeter } from './modules/greeter';
import {Printer} from './modules/printer';

const g = new Greeter('Matt');
g.greet();

const printer = new Printer('Dog', 'Cat');
printer.printFunc();
