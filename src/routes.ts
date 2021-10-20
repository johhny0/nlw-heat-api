import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticaated";


const routes = Router();

routes.get("/", (req, res) => res.send({ status: "Connected" }));

routes.get("/github", (req, res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
});

routes.get("/signin/callback", (req, res) => {
    const { code } = req.query
    res.json({ code })
});

routes.post("/authenticate", new AuthenticateUserController().handle);
routes.post("/messages", ensureAuthenticated, new CreateMessageController().handle);
routes.get("/messages/last3", new GetLast3MessagesController().handle);
routes.get("/profile", ensureAuthenticated, new ProfileUserController().handle);

export { routes }