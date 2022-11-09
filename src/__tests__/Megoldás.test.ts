import Megoldás from "../megoldás";

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

    it("Ingyenes utazók száma", () => {
        expect(instance.ingyenesUtazásokSzáma).toBe(133);
    });

    it("Kedvezményesen utazók száma", () => {
        expect(instance.kedvezményesUtazásokSzáma).toBe(200);
    });
});
