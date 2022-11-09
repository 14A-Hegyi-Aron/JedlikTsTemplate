import Megoldás from "../megoldás";
import fs from "fs";

describe("Megoldás osztály unit tesztek", () => {
    const instance: Megoldás = new Megoldás("utasadat.txt");

    it("Megoldás osztálypéldány ellenörzése", () => {
        expect(instance).toBeInstanceOf(Megoldás);
    });

    it("Felszállók száma", () => {
        expect(instance.felszállókSzáma).toBe(699);
    });

    it("Érvénytelen felszállások száma", () => {
        expect(instance.érvénytelenFelszállásokSzáma).toBe(21);
    });

    it("Maximum keresés Array-el", () => {
        expect(instance.MaxKeresArray.maxFelszálló).toBe(39);
        expect(instance.MaxKeresArray.maxElsőMegálló).toBe(8);
    });

    it("Maximum keresés Map-el", () => {
        expect(instance.MaxKeresMap.maxFelszálló).toBe(39);
        expect(instance.MaxKeresMap.maxElsőMegálló).toBe(8);
    });

    it("Ingyenes utazók száma", async () => {
        expect(instance.ingyenesUtazásokSzáma).toBe(133);
    });

    it("Kedvezményesen utazók száma", async () => {
        expect(instance.kedvezményesUtazásokSzáma).toBe(200);
    });

    it("Állományok összehasonlítása", async () => {
        await instance.figyelmeztetéseketÁllománybaÍr("figyelmeztetes.txt");
        expect(fs.readFileSync("figyelmeztetes.txt").toString()).toBe(fs.readFileSync("figyelmeztetesOH.txt").toString());
    });
});
