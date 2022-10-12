import Felszállás from "./Felszállás";

export default class FelszállásBérlet extends Felszállás {
    private _típus: string;
    private _érvényes: Date;

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
