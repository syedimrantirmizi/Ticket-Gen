import ticketModel from "../models/ticketModel.js";

export const createTicket = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    if ((!title, !description, !status)) {
      return res.status(400).json({
        message: "Required fields missing",
        status: false,
      });
    }
    const ticketObj = {
      ...req.body,
    };

    const ticket = await ticketModel.findOne({ title,description });
    console.log(ticket);
    if (ticket) {
      return res.status(400).json({
        message: "such a ticket has already been created",
        status: false,
      });
    }
    const ticketRes = await ticketModel.create(ticketObj);
    return res.status(200).json({
      message: "Ticket has been created",
      status: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};
export const readAllTicket = async (req, res) => {
  try {
    const tickets = await ticketModel.find({});
    return res.status(200).json({
      data: tickets,
      status: true,
    });
  } catch (error) {
    return res.status(500).json({
      data: tickets,
      status: true,
    });
  }
};
export const ticketDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const obj = await ticketModel.findById( id );
    
        res.status(200).json({
          data: obj,
          status: true,
        });
      } catch (error) {
        res.status(500).json({
          message: error.message,
          data: obj,
          status: false,
        });
      }
    };
