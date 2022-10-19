import Felszállás from "./Felszállás";

export default class FelszállásBérlet extends Felszállás {
    private _típus: string;
    private _érvényes: Date;

    public get érvényesFelszállás(): boolean {
        const érvényességLejár: number = this._érvényes.valueOf() + 24 * 60 * 60 * 1000;
        return this._idő.valueOf() < érvényességLejár;
    }

    constructor(sor: string) {
        super(sor);
        const m: string[] = sor.split(" ");
        this._típus = m[3];
        const év = parseInt(m[4].slice(0, 4));
        const hónap = parseInt(m[4].slice(4, 6)) - 1;
        const nap = parseInt(m[4].slice(6, 8));
        this._érvényes = new Date(év, hónap, nap);
    }
}
