import "reflect-metadata";
import { startServer } from "./app";
import { connect } from "./config/typeorm";

async function main() {
  const app = await startServer();
  app.listen(3000);
  connect();
  console.log("server on port", 4001);
}

main();
