import React,{useState} from 'react';
import {Panel} from 'primereact/panel';
import axios from 'axios'
import {Rating} from 'primereact/rating';



function Suggestion(props) {

    const [rating, setRating] = useState(0)

    
return (
    <div>
        <Panel header={props.date} style={{marginTop:'2em'}} toggleable={true}  >
            {props.sugestao}
            <Rating value={rating||props.rating} onChange={(e) => {
                setRating(e.value);
                handleChangeStars(e.value)
                }} stars={10} cancel={false} />
        </Panel>

    </div>
    
  );

  function handleChangeStars(rating){
    axios.post('https://mapautf-suggestionapi.herokuapp.com/java/sugestP',{_id:props.id, rating:rating}).then(x=>console.log(x)).catch(x=>console.log(x))
  }
}

export default Suggestion;
