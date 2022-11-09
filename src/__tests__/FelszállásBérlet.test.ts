import FelszállásBérlet from "../FelszállásBérlet";

describe("FelszállásBérlet class unit test", () => {
    const fb1: FelszállásBérlet = new FelszállásBérlet("0 20190326-0700 4170861 NYB 20190404");
    const fb2: FelszállásBérlet = new FelszállásBérlet("0 20190326-0700 6778950 RVS 20210101");
    const fb3: FelszállásBérlet = new FelszállásBérlet("0 20190326-0700 2020534 TAB 20190328");
    const fb4: FelszállásBérlet = new FelszállásBérlet("0 20190326-0700 2416208 FEB 20190329");
    const fb5: FelszállásBérlet = new FelszállásBérlet("28 20190326-0735 8429649 GYK 20210101");
    const fb6: FelszállásBérlet = new FelszállásBérlet("25 20190326-0731 2048789 NYP 20190309");

    it("Érvényes jellemző elleőrzése", () => {
        expect(fb1.érvényes.toISOString()).toBe("2019-04-03T22:00:00.000Z");
    });

    it("FelszállásBérlet constructor test", async () => {
        expect(fb1).toBeInstanceOf(FelszállásBérlet);
        expect(fb2).toBeInstanceOf(FelszállásBérlet);
        expect(fb3).toBeInstanceOf(FelszállásBérlet);
        expect(fb4).toBeInstanceOf(FelszállásBérlet);
        expect(fb5).toBeInstanceOf(FelszállásBérlet);
        expect(fb6).toBeInstanceOf(FelszállásBérlet);
    });

    it("Megálló sorszáma test", async () => {
        expect(fb1.megállóSorszáma).toBe(0);
        expect(fb2.megállóSorszáma).toBe(0);
        expect(fb3.megállóSorszáma).toBe(0);
        expect(fb4.megállóSorszáma).toBe(0);
        expect(fb5.megállóSorszáma).toBe(28);
        expect(fb6.megállóSorszáma).toBe(25);
    });

    it("Érvényes felszállás test", async () => {
        expect(fb1.érvényesFelszállás).toBe(true);
        expect(fb2.érvényesFelszállás).toBe(true);
        expect(fb3.érvényesFelszállás).toBe(true);
        expect(fb4.érvényesFelszállás).toBe(true);
        expect(fb5.érvényesFelszállás).toBe(true);
        expect(fb6.érvényesFelszállás).toBe(false);
    });

    it("Kedvezményes utazás test", async () => {
        expect(fb1.kedvezményesUtazás).toBe(true);
        expect(fb2.kedvezményesUtazás).toBe(false);
        expect(fb3.kedvezményesUtazás).toBe(true);
        expect(fb4.kedvezményesUtazás).toBe(false);
        expect(fb5.kedvezményesUtazás).toBe(false);
        expect(fb6.kedvezményesUtazás).toBe(false);
    });

    it("Ingyenes utazás test", async () => {
        expect(fb1.ingyenesUtazás).toBe(false);
        expect(fb2.ingyenesUtazás).toBe(true);
        expect(fb3.ingyenesUtazás).toBe(false);
        expect(fb4.ingyenesUtazás).toBe(false);
        expect(fb5.ingyenesUtazás).toBe(true);
        expect(fb6.ingyenesUtazás).toBe(false);
    });

    it("Lejár 3 nap test", async () => {
        expect(fb1.lejár3Nap).toBe(false);
        expect(fb2.lejár3Nap).toBe(false);
        expect(fb3.lejár3Nap).toBe(true);
        expect(fb4.lejár3Nap).toBe(true);
        expect(fb5.lejár3Nap).toBe(false);
        expect(fb6.lejár3Nap).toBe(false);
    });
});
