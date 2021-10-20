import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";


const routes = Router();

routes.get("/", (req, res) => res.send({ status: "Connected" }));

routes.get("/github", (req, res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

routes.get("/signin/callback", (req, res) => {
    const { code } = req.query
    res.json({ code })
})

routes.post("/authenticate", new AuthenticateUserController().handle)

export { routes }