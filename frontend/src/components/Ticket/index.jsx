import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Ticket = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/ticket/${id}`
        );
        setTicket(response.data.data);
      } catch (error) {
        console.error("Error fetching ticket:", error);
        setError("Error fetching ticket details");
      } finally {
        setLoading(false);
      }
    };
    fetchTicket();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!ticket) {
    return <div>No ticket found.</div>;
  }

  return (
    <div>
      <div className="flex w-full justify-between items-center py-5 px-24 border-b-gray-300 border-b-2 ">
        <p
          className="font-bold text-3xl flex text-gray-500 hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          Zendesk Ticket Generate
          <p className="font-normal text-black pl-2 ">/ Ticket Detail</p>
        </p>
      </div>
      <div className="w-full flex justify-center my-10 ">
        <div className="w-[80%] border-2 border-gray-300 p-5">
          <p className="text-4xl font-semibold  border-b-2 border-gray-300 w-full ">Title:</p>
          <p className="text-xl py-3">{ticket.title}</p>
          <p className="text-4xl font-semibold  border-b-2 border-gray-300 w-full ">Status:</p>
          <p className="text-xl py-3">{ticket.status}</p>
          <p className="text-4xl font-semibold  border-b-2 border-gray-300 w-full ">Description:</p>
          <p className="text-xl py-3"> {ticket.description}</p>
          <p className="text-4xl font-semibold  border-b-2 border-gray-300 w-full ">Date:</p>
          <p className="text-xl py-3">
            {new Date(ticket.date).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
