import axios from "axios";
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/tickets");
        setTickets(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTickets();
  }, []);

  return (
    <div>
      <div className="flex w-full justify-between items-center py-5 px-24 border-b-gray-300 border-b-2 ">
        <p className="font-bold text-3xl">Zendesk Ticket Generate</p>
        <button
          onClick={() => navigate("/createticket")}
          className="py-3 px-8 text-white font-bold bg-emerald-700 transition-all duration-[400ms] hover:bg-emerald-500 rounded-md"
        >
          Create Ticket
        </button>
      </div>
      <div className="w-full flex justify-center items-center">

      <table className="w-[80%] my-10">
        <thead className="border-b border-gray-300 h-20">
          <tr>
            <th>No #</th>
            <th>Inquiry</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {tickets.map((ticket, index) => (
            <tr key={ticket._id} className="hover:bg-gray-200  transition-all duration-500 h-20 border-b border-gray-400 text-center" onClick={()=>navigate(`/ticket/${ticket._id}`)}>
             
                <td>{index + 1}</td>
                <td>{ticket.title}</td>
                <td><p>{ticket.status}</p></td>
                <td>{new Date(ticket.date).toLocaleDateString()}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
          </div>
    </div>
  );
};

export default Home;
