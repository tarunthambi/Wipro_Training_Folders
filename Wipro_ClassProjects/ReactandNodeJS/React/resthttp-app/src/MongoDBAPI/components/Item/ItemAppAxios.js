
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5001/api/items';

function ItemApp() {
  const [items, setItems] = useState([]);
  const [itemId, setItemId] = useState('');
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => response.data)
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching items:', error));
      
  }, []);

  const createItem = () => {
    axios.post(API_URL, { itemId, itemName,price })   
    
      .then(response => response.data)
      .then(newItem => setItems([...items, newItem]))
      .catch(error => console.error('Error creating item:', error));
  };

  const updateItem = () => {
    axios.put(`${API_URL}/${selectedItem._id}`, {
        itemId, itemName,price }
    )
      .then(response => response.data)
      .then(response => {
        setItems(items.map(item => (item._id === response.data._id ? response.data : item)));
        setSelectedItem(null);
      })
      .catch(error => console.error('Error updating item:', error));
  };

  const deleteItem = id => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => setItems(items.filter(item => item._id !== id)))
      .catch(error => console.error('Error deleting item:', error));
  };

  return (
    <div>
      <h3>Items - Axios</h3>
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

export default ItemApp;
