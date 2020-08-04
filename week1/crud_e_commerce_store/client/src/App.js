import React, { useState, useEffect } from "react";
import axios from "axios";



export default function App() {
  const [inventory, setInventory] = useState([]);

  function getInventory() {
    axios
      .get("/inventory")
      .then(res => setInventory(res.data))
      .catch(err => console.log(err.response.data.errMsg));
  }

  function addInventory(newInventory) {
    axios
      .post("/inventory", newInventory)
      .then(res => {
        setInventory(prevInventory => [...prevInventory, res.data]);
      })
      .catch(err => console.log(err));
  }

  // function deleteInventory(inventoryId) {
  //   axios
  //     .delete(`/inventory/${inventoryId}`)
  //     .then(res => {
  //       setInventory(prevInventory =>
  //         prevInventory.filter(inventory => inventory._id !== inventoryId)
  //       );
  //     })
  //     .catch(err => console.log(err));
  // }

  // function editInventory(updates, inventoryId) {
  //   axios
  //     .put(`/inventorys/${inventoryId}`, updates)
  //     .then(res => {
  //       setInventory(prevInventory =>
  //         prevInventory.map(inventory => (inventory._id !== inventoryId ? inventory : res.data))
  //       );
  //     })
  //     .catch(err => console.log(err));
  // }

  // function handleFilter(e) {
  //   console.log(e.target.value);
  // }

  useEffect(() => {
    getInventory();
  }, []);

  return (
    <div>
      <div className="inventory-container">
        <inventoryForm submit={addInventory} btnText="Add Inventory" />

        {inventory.map(inventory => (
          // <Inventory
          //   {...inventory}
          //   key={inventory.title}
          //   // deleteInventory={deleteInventory}
          //   // editInventory={editInventory}
          // />
          <div></div>
        ))}
      </div>
    </div>
  );
}