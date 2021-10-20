import { serverHttp } from "./app";

serverHttp.listen(4000, () => console.info("Running on: http://localhost:4000/"))
