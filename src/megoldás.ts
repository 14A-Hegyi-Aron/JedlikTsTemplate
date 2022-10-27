import Felszállás from "./Felszállás";
import fs from "fs";
import FelszállásJegy from "./FelszállásJegy";
import FelszállásBérlet from "./FelszállásBérlet";

export interface IKeres {
    maxFelszálló: number;
    maxElsőMegálló: number;
}

export default class Megoldás {
    private _utasadatok: Felszállás[] = [];

    public get felszállókSzáma(): number {
        return this._utasadatok.length;
    }

    public get érvénytelenFelszállásokSzáma(): number {
        return this._utasadatok.filter(utas => !utas.érvényesFelszállás).length;
    }

    public get MaxKeresArray(): IKeres {
        const keres: IKeres = {
            maxFelszálló: -1,
            maxElsőMegálló: -1,
        };
        const statArray: number[] = new Array(30).fill(0);
        this._utasadatok.forEach(utas => {
            statArray[utas.megállóSorszáma]++;
        });
        keres.maxFelszálló = Math.max(...statArray);
        keres.maxElsőMegálló = statArray.indexOf(keres.maxFelszálló);
        return keres;
    }

    public get MaxKeresMap(): IKeres {
        const keres: IKeres = {
            maxFelszálló: -1,
            maxElsőMegálló: -1,
        };
        const statMap: Map<number, number> = new Map();
        this._utasadatok.forEach(utas => {
            if (statMap.has(utas.megállóSorszáma)) {
                statMap.set(utas.megállóSorszáma, (statMap.get(utas.megállóSorszáma) as number) + 1);
            } else {
                statMap.set(utas.megállóSorszáma, 1);
            }
        });
        keres.maxFelszálló = Math.max(...statMap.values());
        keres.maxElsőMegálló = Array.from(statMap.keys()).find(key => statMap.get(key) === keres.maxFelszálló) as number;
        return keres;
    }

    public get ingyenesUtazásokSzáma(): number {
        return this._utasadatok.filter(utas => utas.ingyenesUtazás).length;
    }

    public get kedvezményesUtazásokSzáma(): number {
        return this._utasadatok.filter(utas => utas.kedvezményesUtazás).length;
    }

    public figyelmeztetéseketÁllománybaÍr(állomány: string): void {
        const ki: string[] = [];
        this._utasadatok
            .filter(utas => utas.lejár3Nap)
            .forEach(utas => {
                ki.push(`${utas.kártyaID} ${utas.idő}`);
            });
        fs.writeFileSync(állomány, ki.join("\r"));
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
