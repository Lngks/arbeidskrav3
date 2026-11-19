import { readFile, writeFile } from "node:fs/promises";

const FIL = new URL("../db.json", import.meta.url);
const les = async () => JSON.parse(await readFile(FIL, "utf8"));
const lagre = (db) => writeFile(FIL, JSON.stringify(db, null, 2));

const routes = (app) => {
    app.get("/hytter", async (req, res) => {
        const db = await les();
        res.status(200).json(db.hytter);
    });

    app.post("/hytter", async (req, res) => {
        const db = await les();
        const id = Math.max(0, ...db.hytter.map((h) => h.id ?? 0)) + 1;
        const hytte = { id, navn: req.body.navn, sted: req.body.sted };
        db.hytter.push(hytte);
        await lagre(db);
        res.status(201).json(hytte);
    });

    app.put("/hytter/:id", async (req, res) => {
        const db = await les();
        const id = Number(req.params.id);
        const i = db.hytter.findIndex((h) => h.id === id);
        if (i === -1) {
            return res.status(404).json({ feil: "Hytte ikke funnet" });
        }
        db.hytter[i] = { id, navn: req.body.navn, sted: req.body.sted };
        await lagre(db);
        res.status(200).json(req.body);
    });

    app.delete("/hytter/:id", async (req, res) => {
        const db = await les();
        db.hytter = db.hytter.filter((h) => h.id !== Number(req.params.id));
        await lagre(db);
        res.status(200).json({ melding: `Hytte med id ${req.params.id} er slettet` });
    });
};

export { routes };