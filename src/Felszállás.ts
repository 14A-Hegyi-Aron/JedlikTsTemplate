export default abstract class Felszállás {
    protected _megállSorszáma: number;
    protected _idő: Date;
    protected _kártyaID: string;

    constructor(sor: string) {
        const m: string[] = sor.split(" ");
        this._megállSorszáma = parseInt(m[0]);
        const év = parseInt(m[1].slice(0, 4));
        const hó = parseInt(m[1].slice(4, 6)) - 1;
        const nap = parseInt(m[1].slice(8, 10));
        const óra = parseInt(m[1].slice(11, 13));
        const perc = parseInt(m[1].slice(14, 16));
        this._idő = new Date(év, hó, nap, óra, perc);
        this._kártyaID = m[2];
    }
}
