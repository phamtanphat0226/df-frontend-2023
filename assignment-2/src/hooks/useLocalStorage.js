import { useState, useEffect } from 'react'

function useLocalStorage(key) {
    const [items, setItems] = useState([]);
    useEffect(() => {
      const storedItems = JSON.parse(localStorage.getItem(key)) || [];
      setItems(storedItems);
    }, [key]);
  
    const addItem = (item) => {
      const updatedItems = [...items, item];
      localStorage.setItem(key, JSON.stringify(updatedItems));
      setItems(updatedItems);
    };
  
    const editItem = (index, newItem) => {
      const updatedItems = [...items];
      updatedItems[index] = newItem;
      localStorage.setItem(key, JSON.stringify(updatedItems));
      setItems(updatedItems);
    };
  
    const deleteItem = (index) => {
      const updatedItems = items.filter((_, i) => i !== index);
      localStorage.setItem(key, JSON.stringify(updatedItems));
      setItems(updatedItems);
    };
  
    return {
      items,
      addItem,
      editItem,
      deleteItem,
    };
  }
  

export default useLocalStorage;