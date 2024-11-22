// MenuContext.tsx
import React, { createContext, useContext, useState } from 'react';

type MenuItem = {
  id: string;
  dishName: string;
  description: string;
  course: string;
  price: number;
};

type MenuContextType = {
  menu: MenuItem[];
  addMenuItem: (item: MenuItem) => void;
  removeMenuItem: (id: string) => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  const addMenuItem = (item: MenuItem) => setMenu((prev) => [...prev, item]);
  const removeMenuItem = (id: string) => setMenu((prev) => prev.filter((item) => item.id !== id));

  return (
    <MenuContext.Provider value={{ menu, addMenuItem, removeMenuItem }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) throw new Error('useMenu must be used within a MenuProvider');
  return context;
};
