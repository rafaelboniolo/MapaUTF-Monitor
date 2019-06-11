import React, {useState} from 'react';
import SuggestionPage from '../Pages/SuggestionPage/SuggestionPage'
import LogPage from '../Pages/LogPages/LogPage'
import Header from '../Component/Header/Header'

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


import './App.css'

function App() {

  function changePage(page){
    setStatePage(page)
  }
  
  const [statePage, setStatePage] = useState('')

  return (
    < div >
      <Header changePage={changePage} />
      <div className="divPrincipal"> 
        
        {
          statePage === 'Logs' ?(<LogPage/>):(<SuggestionPage/>)
        }

      </div>
    </div>
  );
}

export default App;
