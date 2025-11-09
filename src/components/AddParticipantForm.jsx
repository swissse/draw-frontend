import { useState } from "react";
import api from "../api";

export default function AddParticipantForm({ onAdded }) {
  const [fullName, setFullName] = useState("");
  const [weightCategory, setWeightCategory] = useState("");
  const [rank, setRank] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName || !weightCategory || !rank)
      return alert("Заполни все поля!");

    const res = await api.post("/participants", {
      fullName,
      weightCategory,
      rank,
    });
    onAdded(res.data);
    setFullName("");
    setWeightCategory("");
    setRank("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="ФИО"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        placeholder="Весовая категория"
        value={weightCategory}
        onChange={(e) => setWeightCategory(e.target.value)}
      />
      <input
        placeholder="Разряд"
        value={rank}
        onChange={(e) => setRank(e.target.value)}
      />
      <button type="submit" className="primary">
        Добавить
      </button>
    </form>
  );
}
