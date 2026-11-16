import { readFile, writeFile } from "node:fs/promises";

const FIL = new URL("../db.json", import.meta.url);
const les = async () => JSON.parse(await readFile(FIL, "utf8"));
const lagre = (db) => writeFile(FIL, JSON.stringify(db, null, 2));

const hytteFra = (id, b) => ({
    id,
    name: b.name,
    kind: b.kind,
    beds: Number(b.beds),
    region: b.region,
    description: b.description,
});

const apiRoutes = (app) => {
    app.get("/api/cabins", async (req, res) => {
        res.status(200).json((await les()).cabins);
    });

    app.post("/api/cabins", async (req, res) => {
        const db = await les();
        const id = String(Math.max(0, ...db.cabins.map((c) => Number(c.id))) + 1);
        const cabin = hytteFra(id, req.body);
        db.cabins.push(cabin);
        await lagre(db);
        res.status(201).json(cabin);
    });

    app.put("/api/cabins/:id", async (req, res) => {
        const db = await les();
        const i = db.cabins.findIndex((c) => c.id === req.params.id);
        if (i === -1) return res.status(404).json({ feil: "Hytte ikke funnet" });
        db.cabins[i] = hytteFra(req.params.id, req.body);
        await lagre(db);
        res.status(200).json(db.cabins[i]);
    });

    app.delete("/api/cabins/:id", async (req, res) => {
        const db = await les();
        const rest = db.cabins.filter((c) => c.id !== req.params.id);
        if (rest.length === db.cabins.length) {
            return res.status(404).json({ feil: "Hytte ikke funnet" });
        }
        db.cabins = rest;
        await lagre(db);
        res.status(200).json({ melding: `Hytte ${req.params.id} slettet` });
    });

    app.get("/api/destinations", async (req, res) => {
        res.status(200).json((await les()).destinations);
    });

    app.get("/api/hikes", async (req, res) => {
        const { q = "", difficulty, region } = req.query;
        const sok = String(q).trim().toLocaleLowerCase("nb-NO");
        const turer = (await les()).hikes.filter((h) => {
            const tekst = `${h.name} ${h.region} ${h.description}`.toLocaleLowerCase("nb-NO");
            return (
                tekst.includes(sok) &&
                (!difficulty || h.difficulty === difficulty) &&
                (!region || h.region === region)
            );
        });
        res.status(200).json(turer);
    });

    app.get("/api/hikes/:id", async (req, res) => {
        const tur = (await les()).hikes.find((h) => h.id === req.params.id);
        if (!tur) return res.status(404).json({ feil: "Tur ikke funnet" });
        res.status(200).json(tur);
    });
};

export { apiRoutes };
