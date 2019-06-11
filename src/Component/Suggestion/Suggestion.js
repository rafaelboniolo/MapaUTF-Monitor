import React,{useState} from 'react';
import {Panel} from 'primereact/panel';
import axios from 'axios'
import {Rating} from 'primereact/rating';

import './Suggestion.css'

function Suggestion(props) {

    const [rating, setRating] = useState(0)

    
return (
    <div style={{display:'flex', flex:1, flexDirection:'column',}}>
        <Panel header={props.date} style={{marginTop:'2em'}} toggleable={true}  >
            
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
              <span><p style={{fontStyle:'italic'}}>{props.sugestao}</p></span>
              <Rating value={rating||props.rating} onChange={(e) => {
                  setRating(e.value);
                  handleChangeStars(e.value)
                  }} stars={10} cancel={false} />
            </div>

        </Panel>

    </div>
    
  );

  function handleChangeStars(rating){
    axios.post('https://mapautf-suggestionapi.herokuapp.com/java/sugestP',{_id:props.id, rating:rating}).then(x=>console.log(x)).catch(x=>console.log(x))
  }
}

export default Suggestion;
