import ws from "ws";
import { applyWSSHandler } from "@trpc/server/adapters/ws";
import { appRouter } from "./router";
import { createContext } from "./router/context";

const wss = new ws.Server({
  port: 3001,
});

wss.on("connection", () => {
  console.log(`++ ws connection ${wss.clients.size}`);
});
