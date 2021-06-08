import "reflect-metadata";
import { startServer } from "./app";
import { connect } from "./config/typeorm";

async function main() {
  const app = await startServer();
  app.listen(4000);
  connect();
  console.log("server on port", 4000);
}

main();
