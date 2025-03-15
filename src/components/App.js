import { useState } from "react";
import ".././index.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

function App() {
  const [items, setItem] = useState([]);

  function handleAddItems(newItem) {
    setItem((items) => [...items, newItem]);
  }

  function handleDeleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  function togglePackedItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItem() {
    const confirmed = window.confirm('Are you sure you want to delete all items?');

    if (confirmed) setItem([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form addNewItem={handleAddItems} />
      <PackingList
        items={items}
        deleteItem={handleDeleteItem}
        toggleItem={togglePackedItem}
        clearItem={handleClearItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
