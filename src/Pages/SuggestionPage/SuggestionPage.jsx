import React,{useState} from 'react';
import axios from 'axios'
import Suggestion from '../../Component/Suggestion/Suggestion'
import DatePicker from 'react-date-picker';
import DateUtil from '../../util/DateUtil';

import image from '../../assets/loading.gif'
import '../../resource/global.css'

function SuggestionPage() {
  const [suggestions, setSuggestions] = useState([]);
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [loading, setLoading] = useState(false)

  return (
      <div style={{flexDirection:'column', flex:1, marginLeft:'5%',marginRight:'5%'}}>
        <h1 style={{justifyContent:'center'}}> Sugestões </h1>
        
        {
          loading? 
          (
            <div style={{display:'flex', flex:1, justifyContent:'center'}}>
              <img src={image}/>
            </div>
          ):
          (
            <div style={{display:'flex', flex:1, justifyContent:'space-around'}}>
             <div style={{display:'flex', flex:4}}></div>

            <div style={{display:'flex', flex:1.7, justifyContent:'space-around'}}>
              <div>
                  <span style={{marginRight:5}}>
                    Inicial:
                  </span>  
                  <DatePicker  onChange={(e)=>{setStartDate(e)}} value={startDate} />
                </div>
                
                <div>
                  <span style={{marginRight:5}}>
                    Final:
                  </span>
                    <DatePicker onChange={(e)=>{setEndDate(e)}} value={endDate} />
                </div>
                
                <button onClick={clickSearch} style={{backgroundColor:'#2674f2', borderRadius:10, border:0}}>
                  <span style={{color:'white'}}>Buscar</span>
                </button>
             </div>
             
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

    // if(!startDate && !endDate){
    //   alert('Selecione as datas')
    //   return;
    // }
      


    // if(!startDate){
    //   alert('Selecione a data Inicial')
    //   return;
    // }
      
    // if(!endDate){
    //   alert('Selecione a data Final')
    //   return;
    // }

    console.log(DateUtil.format(startDate));

    setLoading(true)
    axios
      // .get('https://mapautf-suggestionapi.herokuapp.com/java/sugests/'+DateUtil.format(startDate)+'/'+DateUtil.format(endDate))
      .get('https://mapautf-suggestionapi.herokuapp.com/java/sugests/2019-05-03T00:00:00.000Z/2019-06-13T00:00:00.000Z')
      .then(x =>setSuggestions(x.data))
      .catch( x => console.log(x))
      .finally(_=>setLoading(false))
  }
}

export default SuggestionPage;
