import React, {useState} from 'react'

import './Header.css'
import imageCoruja from '../../assets/coruja.png'
import imageAriba from '../../assets/ariba.jpg'
import {TabMenu} from 'primereact/tabmenu';

export default function Header(props){

    const [images] = useState([imageCoruja, imageAriba])
    const [indice, setIndice] = useState(0)
    const [itemsMenu] = useState([{label:'Sugestões',icon:"pi pi-star"},{label:'Logs',icon:"pi pi-exclamation-triangle"}])
    const [selectItem, setSelectItem] = useState(null)

    return(
            < div style={{display:'flex', backgroundColor:"grey", flex:1, flexDirection:"row", alignItems:'center'}}>
                
                <div style={{marginLeft:'10px'}}>
                    <TabMenu model={itemsMenu} activeItem={selectItem} onTabChange={(e) => {
                        setSelectItem(e.value)
                        props.changePage(e.value.label)
                        }}/>
                </div>
                
                <span  style={{display:'flex', flex:6, justifyContent:'center'}}>
                    <h1 style={{color:'black'}}>MapaUTF</h1>
                </span>
                
                <div style={{display:'flex', flex:1, justifyContent:'flex-end'}}>
                    <img src={images[indice]} width={'30%'} height={'35%'}  className="coruja" onClick={()=>{indice === 1 ? setIndice(0):setIndice(1)} }/>
                </div>
            </div>
    )
}

