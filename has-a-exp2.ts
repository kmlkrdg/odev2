abstract class BasePhone
{   public _Do : IDo
    public _brand : IBrand
    constructor(Do: IDo, brand: IBrand,){
        this._brand = brand;
        this._Do = Do;
    }
    Brand(): void{
        this._brand.Brand();
    }
    Do(): void{
        this._Do.DoAs();
    }
    Call(): void {
        console.log("The phone can Call.");
    }
    TakePhoto(): void{
        console.log("The Phone can take a phote.");
    }
    Bluetooth(): void{
        console.log("The Phone has Bluetooth.");
    }
   
}
class Selfie implements IDo{
    DoAs(): void {
        console.log("The Phone can do Selfie.")
    }
}
class Services implements IDo{
    DoAs(): void {
        console.log("The phone has 5G specifications.")
    }
}
class Nokia implements IBrand{
    Brand(): void {
        console.log("The Phone brand is Nokia.")
    }
}
class Apple implements IBrand{
    Brand(): void {
        console.log("The Phone brand is Apple.")
    }
}
interface IDo{
    DoAs():void
}
interface IBrand{
    Brand():void
}
class Phone1 extends BasePhone{}
let phone1= new Phone1(new Services(),new Apple());
phone1.Do();
phone1.Brand();

