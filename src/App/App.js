import React from 'react';
import SuggestionPage from '../Pages/SuggestionPage/SuggestionPage'
import LogPage from '../Pages/LogPages/LogPage'
import Header from '../Component/Header/Header'



import './App.css'

function App() {
 

  return (
    <>
    <Header/>
    <div style={{display:'flex', flexDirection:'row'}}> 
      <LogPage/> 
      <SuggestionPage/>
    </div>

  

    </>
  );
}

export default App;
