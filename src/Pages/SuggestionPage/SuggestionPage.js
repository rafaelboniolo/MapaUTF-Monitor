import React,{useState} from 'react';
import axios from 'axios'
import Suggestion from '../../Component/Suggestion/Suggestion'
import DatePicker from 'react-date-picker';
import DateUtil from '../../util/DateUtil';

import image from '../../assets/loading.gif'



import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


function SuggestionPage() {
  const [suggestions, setSuggestions] = useState([]);
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [loading, setLoading] = useState(false)

  return (
      <div style={{display:'flex', flexDirection:'column', flex:1, marginLeft:'5%',marginRight:'5%'}}>
        <h1 style={{display:'flex', justifyContent:'center'}}> Sugestões </h1>
        
        {
          loading? 
          (
            <div>
              <img src={image}/>
            </div>
          ):
          (
            <div style={{display:'flex', justifyContent:'space-around'}}>
              <div>
                <span style={{marginRight:5}}>
                  Inicial:
                </span>  
                <DatePicker onChange={(e)=>{setStartDate(e)}} value={startDate} />
              </div>
              
              <div>
                <span style={{marginRight:5}}>
                  Final
                </span>
                  <DatePicker onChange={(e)=>{setEndDate(e)}} value={endDate} />
              </div>
              
              <button onClick={clickSearch} style={{backgroundColor:'#d3eddf', borderRadius:4}}>
                Buscar
              </button>
            </div>
          )
          }
        
          
        {
          suggestions.filter(x=>x.sugestao).map(x=>{
          return (<Suggestion rating={x.rating} id={x._id} key={x._id} date={"Data: ".concat(x.date.replace("T"," Hora: ").split(".")[0])} sugestao={x.sugestao}  style={{backgroundColor:"red"}}></Suggestion>)})
        }

      </div>
  );

  function clickSearch() {

    if(!startDate && !endDate){
      alert('Selecione as datas')
      return;
    }
      


    if(!startDate){
      alert('Selecione a data Inicial')
      return;
    }
      
    if(!endDate){
      alert('Selecione a data Final')
      return;
    }

    setLoading(true)
    axios
      .get('https://mapautf-suggestionapi.herokuapp.com/java/sugests/'+DateUtil.format(startDate)+'/'+DateUtil.format(endDate))
      .then(x =>setSuggestions(x.data))
      .catch( x => console.log(x))
      .finally(_=>setLoading(false))
  }
}

export default SuggestionPage;
