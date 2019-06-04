export default class DateUtil{
    
    static format(date){
       
        const d = new Date(date);

        const year = d.getFullYear()
        const month= ((d.getMonth()+1)<10?'0'+(d.getMonth()+1):(d.getMonth()+1))
        const day = (d.getDate()<10?'0'+d.getDate():d.getDate());

        return (year+'-'+month+'-'+day+"T00:00:00.000Z");
        
        
    }

}