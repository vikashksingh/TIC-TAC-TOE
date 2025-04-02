import { useState } from "react";
export default function Player({ name, symbol, isActive, nameChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  function handleEdit() {
    setIsEditing(isEditing => !isEditing);
    if (isEditing) {
      nameChange(symbol, playerName);
    }
  }
  function handleNameChange(event) {
    setPlayerName(() => event.target.value);
  }
  return (
    <li className={isActive ? "active" : null}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleNameChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
