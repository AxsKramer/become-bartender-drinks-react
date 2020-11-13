import React, {Fragment} from 'react';
import Header from '../components/Header';
import Layout from './Layout';
import Form from '../components/Form';
import ListRecipes from '../components/ListRecipes';
import CategoriesProvider  from '../context/categoriesContext';
import RecipesProvider from '../context/RecipesContext';
import ModalProvider from '../context/ModalContext';

const App = () => {
  return ( 
    <CategoriesProvider>
      <RecipesProvider>
        <ModalProvider>
          <Header />
          <Layout>
            <Form />
            <ListRecipes />
          </Layout>
        </ModalProvider>
      </RecipesProvider>
    </CategoriesProvider>
   );
}
 
export default App;
