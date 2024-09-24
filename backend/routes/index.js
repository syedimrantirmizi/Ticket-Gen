import express from "express";
import { createTicket, readAllTicket, ticketDetails } from "../controller/ticket.js";

const route = express.Router();

route.post("/api/createTicket", createTicket)
route.get("/api/tickets", readAllTicket)
route.get("/api/ticket/:id", ticketDetails)

export default route