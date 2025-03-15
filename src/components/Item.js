
export default function Item({ item, deleteItem, toggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => toggleItem(item.id)} />
      <label style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </label>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
}
