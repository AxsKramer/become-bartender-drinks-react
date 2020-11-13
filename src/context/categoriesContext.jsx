import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//Create Context
export const CategoriesContext = createContext();

//Provider is where funtions and state are located
const CategoriesProvider = (props) => {

  const [categories, setCategories] = useState()

  useEffect(()=> {
    const getCategoriesFromAPI = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
      const categories = await axios.get(url);
      setCategories(categories.data.drinks);
    }
    getCategoriesFromAPI();
  }, [])

  return(
    <CategoriesContext.Provider value={{categories}}>
      {props.children}
    </CategoriesContext.Provider>
  )
}

export default CategoriesProvider;
