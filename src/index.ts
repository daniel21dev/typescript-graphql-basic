import "reflect-metadata";
import { startServer } from "./app";

async function main() {
  const app = await startServer();
  app.listen(4000);
  console.log("server on port", 4000);
}

main();
