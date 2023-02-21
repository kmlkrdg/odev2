
abstract class BaseAthlete
{   public _Sport : ISport
    public _native : INative
    constructor(Sport: ISport, native: INative, ){
        this._native = native;
        this._Sport = Sport;
    }
    Language(): void{
        this._native.Language();
    }
    Sport(): void{
        this._Sport.SportAs();
    }
    Run(): void {
        console.log("I can run.");
    }
    Walk(): void{
        console.log("I can Walk.");
    }
    Swim(): void{
        console.log("I can swim.");
    }
    Healty(): void{
        console.log("I am Healthy.");
    }
}
class Rower implements ISport{
    SportAs(): void {
        console.log("I Sport as a Rower")
    }
}
class Swimmer implements ISport{
    SportAs(): void {
        console.log("I Sport as a Swimmer")
    }
}
class EnglishNative implements INative{
    Language(): void {
        console.log("I can talk in English.")
    }
}
class TurkishNative implements INative{
    Language(): void {
        console.log("I can talk in Turkish.")
    }
}
class RunningAthlete implements ISport{
    SportAs(): void {
        console.log("I sport as a Runner.")
    }
}
interface ISport{
    SportAs():void
}
interface INative{
    Language():void
}
class Athlete1 extends BaseAthlete{}
let MoFarah = new Athlete1(new RunningAthlete(),new EnglishNative());
MoFarah.Run();
MoFarah.Language();

