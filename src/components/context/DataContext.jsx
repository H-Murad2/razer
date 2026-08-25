import { createContext, useState } from 'react';

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <DataContext.Provider value={{ cart, setCart }}>
      {children}
    </DataContext.Provider>
  );
}