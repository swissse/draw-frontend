import api from "../api";

export default function ParticipantList({ participants, onDelete }) {
  const handleDelete = async (id) => {
    if (!window.confirm("Удалить участника?")) return;
    await api.delete(`/participants/${id}`);
    onDelete(id);
  };

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>ФИО</th>
            <th>Вес</th>
            <th>Разряд</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {participants.length > 0 ? (
            participants.map((p) => (
              <tr key={p._id}>
                <td>{p.fullName}</td>
                <td>{p.weightCategory}</td>
                <td>{p.rank}</td>
                <td>
                  <button
                    className="delete"
                    onClick={() => handleDelete(p._id)}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center", color: "#777" }}>
                Участников пока нет
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
