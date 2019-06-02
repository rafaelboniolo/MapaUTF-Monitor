import React,{useState, useEffect} from 'react';
import axios from 'axios'
import Suggestion from '../../Component/Suggestion/Suggestion'


import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


function SuggestionPage() {
  const [suggestions, setSuggestions] = useState([]);
    
  useEffect(()=>{
    axios
      .get('http://localhost:3002/java/sugests')
      .then(  x => {
          setSuggestions(x.data);
          })
      .catch( x => console.log(x))
  },[]);

  return (
      <div style={{display:'flex', flexDirection:'column', flex:1, marginLeft:'5%',marginRight:'5%'}}>
        <h1 style={{display:'flex', justifyContent:'center'}}> Sugestões </h1>
        {
          suggestions.filter(x=>x.sugestao).map(x=>{
          return (<Suggestion rating={x.rating} id={x._id} key={x._id} date={"Data: ".concat(x.date.replace("T"," Hora: ").split(".")[0])} sugestao={x.sugestao}  style={{backgroundColor:"red"}}></Suggestion>)})
        }

      </div>
  );
}

export default SuggestionPage;
