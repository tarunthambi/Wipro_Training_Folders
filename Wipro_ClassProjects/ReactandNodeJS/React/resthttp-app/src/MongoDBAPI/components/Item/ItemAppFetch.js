import React, { useState, useEffect } from 'react';

const API_URL = 'http://localhost:5001/api/items';

function ItemAppFetch() {
  const [items, setItems] = useState([]);
  const [itemId, setItemId] = useState('');
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  const createItem = () => {
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ itemId, itemName,price })
    })
      .then(response => response.json())
      .then(newItem => setItems([...items, newItem]))
      .catch(error => console.error('Error creating item:', error));
  };

  const updateItem = () => {
    fetch(`${API_URL}/${selectedItem._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ itemId,itemName,price })
    })
      .then(response => response.json())
      .then(updatedItem => {
        setItems(items.map(item => (item._id === updatedItem._id ? updatedItem : item)));
        setSelectedItem(null);
      })
      .catch(error => console.error('Error updating item:', error));
  };

  const deleteItem = id => {
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      .then(() => setItems(items.filter(item => item._id !== id)))
      .catch(error => console.error('Error deleting item:', error));
  };

  return (
    <div>
      <h3>Items - Fetch</h3>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            {item.itemId}&nbsp;
            {item.itemName}&nbsp;
            {item.price}&nbsp;
            <button onClick={() => deleteItem(item._id)} className='btn btn-danger btn-sm'>Delete</button> &nbsp;
            <button onClick={() => { setItemId(item.itemId); setItemName(item.itemName);setPrice(item.price); setSelectedItem(item); }} className='btn btn-info btn-sm'>Edit</button>
          </li>
        ))}
      </ul>
      <h4>{selectedItem ? 'Edit Item' : 'Create Item'}</h4>
      <input value={itemId} onChange={e => setItemId(e.target.value)} placeholder="Item Id" />
      <input value={itemName} onChange={e => setItemName(e.target.value)} placeholder="Item Name" />
      <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" />
      <button onClick={selectedItem ? updateItem : createItem} className='btn btn-success btn-sm'>
        {selectedItem ? 'Update Item' : 'Create Item'}
      </button>
    </div>
  );
}

export default ItemAppFetch;
