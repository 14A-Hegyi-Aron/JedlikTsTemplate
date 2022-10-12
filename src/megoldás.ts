import Felszállás from "./Felszállás";
import fs from "fs";
import FelszállásJegy from "./FelszállásJegy";
import FelszállásBérlet from "./FelszállásBérlet";

export default class Megoldás {
    private _utasadatok: Felszállás[] = [];

    public get felszállókSzáma(): number {
        return this._utasadatok.length;
    }
    constructor(forrás: string) {
        fs.readFileSync(forrás)
            .toString()
            .split("\n")
            .forEach(sor => {
                const aktSor = sor.trim();
                const típus = aktSor.split(" ")[3];
                if (típus === "JGY") {
                    this._utasadatok.push(new FelszállásJegy(aktSor));
                }
                if (["FEB", "TAB", "NYB", "NYP", "RVS", "GYK"].includes(típus)) {
                    this._utasadatok.push(new FelszállásBérlet(aktSor));
                }
            });
    }
}
