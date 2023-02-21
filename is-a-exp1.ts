abstract class Computer {
    abstract UsingIOS(): void;
    abstract FrontCamera(): void;
    Ram(): void {
        console.log("The computer had a Ram");
    }
    Driver(): void {
        console.log("The computer had a Driver");
    }
    DisplayCard(): void {
        console.log("The computer had a DisplayCard");
    }
    Processor(): void {
        console.log("The computer had a Processor");
    }
}
class AppleMacBook extends Computer {
    UsingIOS(): void {
        console.log("The computer is using IOS operating system");
    }
    FrontCamera(): void {
        console.log("The computer has a Concealable Front camera ");
    }
}
let Mac= new AppleMacBook();
Mac.UsingIOS();
Mac.FrontCamera();