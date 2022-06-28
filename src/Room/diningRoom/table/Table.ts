import { Chair } from "./Chair"
export class Table {
    private chairs: Chair[]=[]
    constructor(private id: number){}

    getChair(){
        return this.chairs;
    }
    addChair(chair: Chair) {
        return this.chairs.push(chair);
    }
}