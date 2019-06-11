import React,{useState, useEffect} from 'react';
import axios from 'axios'
import Log from '../../Component/Log/Log'
import DatePicker from 'react-date-picker';


function LogPage() {
  const [logs, setLogs] = useState([]);
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  
  useEffect(()=>{
    axios
      .get('https://mapautf-loggerapi.herokuapp.com/java/logger')
      .then(  x => {
          setLogs(x.data);
          })
      .catch( x => console.log(x))
  },[]);

  return (
      <div style={{flexDirection:'column', flex:1, marginLeft:'5%',marginRight:'5%'}}>
        <h1 style={{justifyContent:'center'}}> Logs da aplicação </h1>
        <div>
        <div>
          StartDate:  
          <DatePicker onChange={(e)=>{setStartDate(e)}} value={startDate} format={"dd/MM/yyyy"} locale={'pt-BR'}/>
          EndDate:
          <DatePicker onChange={(e)=>{setEndDate(e)}} value={endDate} format={"dd/MM/yyyy"} minDate={startDate}/>
          <button onClick={clickSearch} >Buscar</button>
        </div>
          {
            logs.map(x=>{
            return (<Log key={x._id} date={"Data: ".concat(x.createdAt.replace("T"," Hora: ").split(".")[0])}  err={x.error} clazz={x.clazz} />)})
          }
        </div>
      </div>
  );

  function clickSearch(params) {
    
  }
}

export default LogPage;
