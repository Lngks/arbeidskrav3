const hytter = [{ id: 1, navn: "Fjellhytta", sted: "Hemsedal" }];

const routes = (app) => {
    app.get("/hytter", (req, res) => res.json(hytter));

    app.post("/hytter", (req, res) => {
        hytter.push(req.body);
        res.status(201).json(req.body);
    });

    app.put("/hytter/:id", (req, res) => {
        res.status(200).json({ melding: `Hytte ${req.params.id} oppdatert`, hytte: req.body });
    });

    app.delete("/hytter/:id", (req, res) => {
        res.status(200).json({ melding: `Hytte ${req.params.id} slettet`});
    });
};

export { routes };