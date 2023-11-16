
import React, { createContext, useContext, useState, useEffect } from 'react';

const ArtiklarContext = createContext();

export const ArtiklarProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    try {
      const response = await fetch('https://win23-assignment.azurewebsites.net/api/articles');

      if (response.status === 200) {
        const data = await response.json();
        setArticles(data);
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  return (
    <ArtiklarContext.Provider value={{ articles, getArticles }}>
      {children}
    </ArtiklarContext.Provider>
  );
};

export const useArtiklar = (limit) => {
  const { articles, getArticles } = useContext(ArtiklarContext);

  useEffect(() => {
    getArticles(limit);
  }, [limit]);

  return { articles };
};
