import React,{useState} from 'react';
import axios from 'axios'
import Suggestion from '../../Component/Suggestion/Suggestion'
import DatePicker from 'react-date-picker';
import DateUtil from '../../util/DateUtil';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


function SuggestionPage() {
  const [suggestions, setSuggestions] = useState([]);
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  return (
      <div style={{display:'flex', flexDirection:'column', flex:1, marginLeft:'5%',marginRight:'5%'}}>
        <h1 style={{display:'flex', justifyContent:'center'}}> Sugestões </h1>
        <div>
          StartDate:  
          <DatePicker onChange={(e)=>{setStartDate(e)}} value={startDate} />
          EndDate:
          <DatePicker onChange={(e)=>{setEndDate(e)}} value={endDate} />
          <button onClick={clickSearch}>
            Buscar
          </button>
        </div>
        
        {
          suggestions.filter(x=>x.sugestao).map(x=>{
          return (<Suggestion rating={x.rating} id={x._id} key={x._id} date={"Data: ".concat(x.date.replace("T"," Hora: ").split(".")[0])} sugestao={x.sugestao}  style={{backgroundColor:"red"}}></Suggestion>)})
        }

      </div>
  );

  function clickSearch() {

    console.log('https://mapautf-suggestionapi.herokuapp.com/java/sugests/'+DateUtil.format(startDate)+'/'+DateUtil.format(endDate));
    

    axios
      .get('https://mapautf-suggestionapi.herokuapp.com/java/sugests/'+DateUtil.format(startDate)+'/'+DateUtil.format(endDate))
      .then(  x => {
          setSuggestions(x.data);
          })
      .catch( x => console.log(x))
  }
}

export default SuggestionPage;
