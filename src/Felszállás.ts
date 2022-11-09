import Segéd from "./segéd";

export default abstract class Felszállás {
    protected _megállSorszáma: number;
    protected _idő: Date;
    protected _kártyaID: string;

    public get érvényesFelszállás(): boolean {
        return false;
    }

    public get kedvezményesUtazás(): boolean {
        return false;
    }

    public get ingyenesUtazás(): boolean {
        return false;
    }

    public get megállóSorszáma(): number {
        return this._megállSorszáma;
    }

    public get lejár3Nap(): boolean {
        return false;
    }

    public get idő(): Date {
        return this._idő;
    }

    public get kártyaID(): string {
        return this._kártyaID;
    }

    constructor(sor: string) {
        const m: string[] = sor.split(" ");
        this._megállSorszáma = parseInt(m[0]);
        const év = parseInt(m[1].slice(0, 4));
        const hó = parseInt(m[1].slice(4, 6)) - 1;
        const nap = parseInt(m[1].slice(6, 8));
        const óra = parseInt(m[1].slice(9, 11));
        const perc = parseInt(m[1].slice(11, 13));
        this._idő = new Date(év, hó, nap, óra, perc);
        this._kártyaID = m[2];
    }
}
