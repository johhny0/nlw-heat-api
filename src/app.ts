import "dotenv/config";

import express from "express";
const app = express();

app.get("/", (req, res) => res.send({ status: "Connected" }));

app.get("/github", (req, res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

app.get("/signin/callback", (req, res) => {
    const { code } = req.query
    res.json({ code })
})
/// http://localhost:4000/signin/callback
// http://localhost:4000/signin/callback?code=682697fb6281cd26d48b
app.listen(4000, () => console.log("Running on: http://localhost:4000/"))