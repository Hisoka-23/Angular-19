export class Car {
    userId: number;
    id: number =0;
    title ?: string;//optional
    body: string;

    constructor(){
        this.userId = 0;
        //this.id = 0;
        // this.title = "";//optional
        this.body = "";
    }
}

export interface ICarList{
    userId: number,
    id: number,
    title: string,
    body: string,
}