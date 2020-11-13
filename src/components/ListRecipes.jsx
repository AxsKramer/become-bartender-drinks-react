import React, {useContext} from 'react';
import Recipe from '../components/Recipe';
import {RecipesContext} from '../context/RecipesContext';

const ListRecipes = () => {

  const {recipes} = useContext(RecipesContext);

  return ( 
    <div className="row mt-5">
      {
        recipes && recipes.map(recipe => <Recipe key={recipe.idDrink} recipe={recipe} />)
      }
    </div>  
  );
}
 
export default ListRecipes;