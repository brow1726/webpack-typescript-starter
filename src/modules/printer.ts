export class Printer {
    private thing1: string;
    private thing2: string;

    constructor(thing1: string, thing2: string) {
        this.thing1 = thing1;
        this.thing2 = thing2;
    }

    printFunc(): void {
        console.log('******************** "I am a thing => ", this.thing1 ********************');
        console.log('I am a thing => ', this.thing1);
        console.log('************************************************');
        console.log('******************** "I am also a thing => ", this.thing2 ********************');
        console.log("I am also a thing => ", this.thing2);
        console.log('************************************************');
    }
}