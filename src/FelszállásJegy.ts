import Felszállás from "./Felszállás";

export default class FelszállásJegy extends Felszállás {
    private _jegyekszáma: number;

    public get érvényesFelszállás(): boolean {
        return this._jegyekszáma > 0;
    }

    constructor(sor: string) {
        super(sor);
        this._jegyekszáma = parseInt(sor.split(" ")[4]);
    }
}
