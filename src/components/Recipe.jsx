import React, {useContext, useState} from 'react';
import {ModalContext} from '../context/ModalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
  const top = 50 ;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 500,
    height: 800,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
}));

const Recipe = ({recipe}) => {

  const {setIdRecipe, recipeinfo, setRecipe} = useContext(ModalContext);

  const cardStyle= {
    height: '420px',
    width: '300px',
    boxShadow: '3px 3px 5px #333, -3px -3px 5px #333'
  }
  const imgStyle= {
    height: '250px'
  }

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const hanldeOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const showIngredients = info => {
    let ingredients = [];
    for(let i = 1; i <= 16; i++){
      if(info[`strIngredient${i}`]){
        ingredients.push(<li key={Date.now()}> {info[`strIngredient${i}`]} {info[`strMeasure${i}`]} </li>)
      }
    }
    return ingredients;
  }

  return ( 
    <div className="col-md-6 col-sm-12 col-lg-4 mb-3 w-sm-100">
      <div className="card" style={cardStyle}>
        <h5 className="card-header text-center">{recipe.strDrink}</h5>
        <img src={recipe.strDrinkThumb} alt={`Drink ${recipe.strDrink}`} className="card-img-top" style={imgStyle}/>
        <div className="card-body">
          <button 
            className="btn btn-primary btn-block"
            onClick={() => {
              setIdRecipe(recipe.idDrink);
              hanldeOpen();
            }}  
          >
            Open Drink
          </button>
          <Modal open={open} onClose={() => {
            handleClose();
            setIdRecipe(null);
            setRecipe({});
          }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2>{recipeinfo.strDrink}</h2>
              <h3 className='mt-4'>Intructions</h3>
              <p> {recipeinfo.strInstructions} </p>
              <img className='img-fluid my-4' src={recipeinfo.strDrinkThumb} alt={recipeinfo.strDrink} style={imgStyle}/>
              <h3>Ingredients and amount</h3>
              <ul>
                {showIngredients(recipeinfo)}
              </ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
 
export default Recipe;