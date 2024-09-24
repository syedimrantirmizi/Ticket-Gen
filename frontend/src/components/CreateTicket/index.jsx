import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTicket = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/createTicket", {
      title,
      status: "pending",
      description,
    });
    setTitle("")
    setDescription("")
  };
  return (
    <>
      <div >
        <div className="flex w-full justify-between items-center py-5 px-24 border-b-gray-300 border-b-2 ">
          <p className="font-bold text-3xl flex text-gray-500 hover:cursor-pointer" onClick={()=>navigate("/")}>
            Zendesk Ticket Generate
            <p className="font-normal text-black pl-2 ">/ Create new Ticket</p>
          </p>
        </div>
        <div className="w-full flex justify-center my-5 ">
          <form
            onSubmit={handleSubmit}
            className="w-[80%] flex flex-col items-start gap-5 border-2 border-gray-300 p-5"
          >
            <div className="flex flex-col w-full gap-5">
              <label className="text-xl">Title:</label>
              <input
                className="w-full focus:outline-none px-5 border-2 h-16 border-gray-300 py-2"
                type="text "
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col w-full gap-5">
              <label className="text-xl">Description:</label>
              <textarea
                className="focus:outline-none w-full h-56 px-5 border-2 border-gray-300  py-2"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button
              className="py-3 px-8 text-white font-bold bg-emerald-700 transition-all duration-[400ms] hover:bg-emerald-500 rounded-md"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTicket;
