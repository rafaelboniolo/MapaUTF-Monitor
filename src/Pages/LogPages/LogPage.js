import React,{useState, useEffect} from 'react';
import axios from 'axios'
import Log from '../../Component/Log/Log'


import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


function LogPage() {
  const [logs, setLogs] = useState([]);
    
  useEffect(()=>{
    axios
      .get('http://localhost:3001/java/logger')
      .then(  x => {
          setLogs(x.data);
          console.log(x.data)
          })
      .catch( x => console.log(x))
  },[]);

  return (
      <div style={{display:'flex', flexDirection:'column', flex:1, marginLeft:'5%',marginRight:'5%'}}>
        <h1 style={{display:'flex', justifyContent:'center'}}> Logs da aplicação </h1>
        <div>
          {
            logs.map(x=>{
            return (<Log key={x._id} date={"Data: ".concat(x.createdAt.replace("T"," Hora: ").split(".")[0])}  err={x.error} clazz={x.clazz} />)})
          }
        </div>
      </div>
  );
}

export default LogPage;
