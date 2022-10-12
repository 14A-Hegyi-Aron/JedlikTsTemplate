import Felszállás from "./Felszállás";

export default class FelszállásJegy extends Felszállás {
    private _jegyekszáma: number;

    constructor(sor: string) {
        super(sor);
        this._jegyekszáma = parseInt(sor.split(" ")[4]);
    }
}
