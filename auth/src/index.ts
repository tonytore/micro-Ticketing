import express from "express";
import "express-async-errors";
import bodyParser from "body-parser";
import { currentUser } from "./routes/current-user";
import { signUp } from "./routes/signup";
import { signIn } from "./routes/singin";
import { signOut } from "./routes/signout";
import { errorHandler } from "./middleware/errorHandler";
import { NotFoundError } from "./error/not-found";

const app = express();
app.use(bodyParser.json());

app.use("/api/users", currentUser);
app.use("/api/users", signUp);
app.use("/api/users", signIn);
app.use("/api/users", signOut);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log("tonytor");

  console.log("server is listening on port http://localhost:3000");
});
