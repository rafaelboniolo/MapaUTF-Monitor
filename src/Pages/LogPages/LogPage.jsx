import React,{useState, useEffect} from 'react';
import axios from 'axios'
import Log from '../../Component/Log/Log'
import DatePicker from 'react-date-picker';
import image from '../../assets/loading.gif'
import DateUtil from '../../util/DateUtil';


function LogPage() {
  const [logs, setLogs] = useState([]);
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
    <div style={styles.container}>
      {
        loading? 
        (
          <div style={{display:'flex', flex:1, justifyContent:'center'}}>
            <img src={image}/>
          </div>
        ):
        logs.reverse().map(x=>{
        const clazz = x.clazz.split("utfmaps.")[1];
        return (<Log key={x._id} date={"Data: ".concat(x.createdAt.replace("T"," Hora: ").split(".")[0])}  err={x.error} clazz={clazz} />)})
      }
    </div>
  );
}

const styles = {
  container:{
    flexDirection:'column', 
    flex:1, marginLeft:'5%',
    marginRight:'5%'
  }
}

export default LogPage;
