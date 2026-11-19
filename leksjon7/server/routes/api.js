const hytter = [{ id: 1, navn: "Fjellhytta", sted: "Hemsedal" }];

const routes = (app) => {
    app.get("/hytter", (req, res) => res.json(hytter));

    app.post("/hytter/", (req, res) => {
        const id = Math.max(0, ...hytter.map((h) => h.id ?? 0)) + 1;
        hytter.push( { id, navn: req.body.navn, sted: req.body.sted } );
        res.status(201).json({ id, navn: req.body.navn, sted: req.body.sted });
    });

    app.put("/hytter/:id", (req, res) => {
        res.status(200).json({ melding: `Hytte ${req.params.id} oppdatert`, hytte: req.body });
    });

    app.delete("/hytter/:id", (req, res) => {
        res.status(200).json({ melding: `Hytte ${req.params.id} slettet`});
    });
};

export { routes };