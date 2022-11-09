import Felszállás from "./Felszállás";
import Segéd from "./segéd";

export default class FelszállásBérlet extends Felszállás {
    private _típus: string;
    private _érvényes: Date;

    public get érvényes(): Date {
        return this._érvényes;
    }

    public get érvényesFelszállás(): boolean {
        const érvényességLejár: number = this._érvényes.valueOf() + 24 * 60 * 60 * 1000;
        return this._idő.valueOf() < érvényességLejár;
    }

    public get kedvezményesUtazás(): boolean {
        return this.érvényesFelszállás && ["TAB", "NYB"].includes(this._típus);
    }

    public get ingyenesUtazás(): boolean {
        return this.érvényesFelszállás && ["NYP", "RVS", "GYK"].includes(this._típus);
    }

    public get lejár3Nap(): boolean {
        return this.érvényesFelszállás && Segéd.napokszama(this._idő.getFullYear(), this.idő.getMonth(), this._idő.getDay(), this._érvényes.getFullYear(), this._érvényes.getMonth(), this._érvényes.getDate()) <= 3;
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
