// App.js
import React, { useState } from 'react';
import ShoppingList from './ShoppingList';
import './App.css';  // Import your CSS file for styling

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <ShoppingList />
    </div>
  );
}

export default App;
