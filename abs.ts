//Abstraction 
interface Character{
    Run();
    Punch();
    Dodge();
}

class Character1 implements Character{
    Run() {
        return "Character 1 Run";
    }
    Punch() {
        return "Character 1 Punch";
    }
    Dodge() {
        return "Character 1 Dodge";
    }
}
class Character2 implements Character{
    Run() {
        return "Chracter 2 Run";
    }
    Punch() {
        return "Character 2 Punch";
    }
    Dodge() {
        return "Character 2 Dodge";
    }
}

class GameMech{
    _char : Character
    constructor(char: Character){
        this._char = char;
    }
    Info(){
        console.log(`${this._char.Punch()}ed to his/her opponent.`);
    }
}

let Gamemech = new GameMech (new Character1());
Gamemech.Info();