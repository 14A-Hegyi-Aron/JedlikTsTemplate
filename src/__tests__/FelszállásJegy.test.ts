import FelszállásJegy from "../FelszállásJegy";

describe("FelszállásJegy class unit test", () => {
    const fj1: FelszállásJegy = new FelszállásJegy("0 20190326-0700 9031038 JGY 3");
    const fj2: FelszállásJegy = new FelszállásJegy("29 20190326-0736 9880386 JGY 3");
    const fj3: FelszállásJegy = new FelszállásJegy("29 20190326-0736 9303400 JGY 0");

    it("FelszállásJegy constructor test", async () => {
        expect(fj1).toBeInstanceOf(FelszállásJegy);
        expect(fj2).toBeInstanceOf(FelszállásJegy);
        expect(fj3).toBeInstanceOf(FelszállásJegy);
    });

    it("Megálló sorszáma test", async () => {
        expect(fj1.megállóSorszáma).toBe(0);
        expect(fj2.megállóSorszáma).toBe(29);
        expect(fj3.megállóSorszáma).toBe(29);
    });

    it("Érvényes felszállás test", async () => {
        expect(fj1.érvényesFelszállás).toBe(true);
        expect(fj2.érvényesFelszállás).toBe(true);
        expect(fj3.érvényesFelszállás).toBe(false);
    });

    it("Kedvezményes utazás test", async () => {
        expect(fj1.ingyenesUtazás).toBe(false);
        expect(fj2.ingyenesUtazás).toBe(false);
        expect(fj3.ingyenesUtazás).toBe(false);
    });

    it("Ingyenes utazás test", async () => {
        expect(fj1.ingyenesUtazás).toBe(false);
        expect(fj2.ingyenesUtazás).toBe(false);
        expect(fj3.ingyenesUtazás).toBe(false);
    });

    it("Lejár 3 nap test", async () => {
        expect(fj1.lejár3Nap).toBe(false);
        expect(fj2.lejár3Nap).toBe(false);
        expect(fj3.lejár3Nap).toBe(false);
    });
});
