import { useEffect, useState } from "react";
import api from "./api";
import AddParticipantForm from "./components/AddParticipantForm";
import ParticipantList from "./components/ParticipantList";
import DrawResult from "./components/DrawResult";
import "./App.css";

export default function App() {
  const [participants, setParticipants] = useState([]);
  const [draw, setDraw] = useState(null);

  useEffect(() => {
    api.get("/participants").then((res) => setParticipants(res.data));
  }, []);

  const handleAdd = (newP) => setParticipants([...participants, newP]);
  const handleDelete = (id) =>
    setParticipants(participants.filter((p) => p._id !== id));

  const handleDraw = async () => {
    const res = await api.get("/draw");
    setDraw(res.data);
  };

  return (
    <div className="container">
      <h1>Жеребьёвка участников</h1>
      <AddParticipantForm onAdded={handleAdd} />
      <ParticipantList participants={participants} onDelete={handleDelete} />

      <button className="primary button mb" onClick={handleDraw}>
        Сформировать жеребьёвку
      </button>

      <DrawResult draw={draw} />
    </div>
  );
}
