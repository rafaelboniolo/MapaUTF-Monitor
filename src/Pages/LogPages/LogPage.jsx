import React,{useState, useEffect} from 'react';
import axios from 'axios'
import Log from '../../Component/Log/Log'
import DatePicker from 'react-date-picker';
import image from '../../assets/loading.gif'


function LogPage() {
  const [logs, setLogs] = useState([]);
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [loading, setLoading] =useState(false)
  
  useEffect(()=>{
    setLoading(true)
    axios
      .get('https://mapautf-loggerapi.herokuapp.com/java/logger')
      .then(  x => {
          setLogs(x.data);
          })
      .catch( x => console.log(x))
      .finally(x=>setLoading(false))
  },[]);

  return (
    <div style={{flexDirection:'column', flex:1, marginLeft:'5%',marginRight:'5%'}}>
      <h1 style={{justifyContent:'center'}}> Logs </h1>
       <div style={{display:'flex', flex:1, justifyContent:'space-around'}}>
          <div style={{display:'flex', flex:4}}></div>
            <div style={{display:'flex', flex:1.7, justifyContent:'space-around'}}>
              <div>
                  <span style={{marginRight:5}}>
                    Inicial:
                  </span>  
                  <DatePicker  onChange={(e)=>{setStartDate(e)}} value={startDate}/>
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
          {
            loading? 
            (
              <div style={{display:'flex', flex:1, justifyContent:'center'}}>
                <img src={image}/>
              </div>
            ):
            logs.map(x=>{
            return (<Log key={x._id} date={"Data: ".concat(x.createdAt.replace("T"," Hora: ").split(".")[0])}  err={x.error} clazz={x.clazz} />)})
          }
        
      </div>
  );

  function clickSearch(params) {
    
  }
}

export default LogPage;
