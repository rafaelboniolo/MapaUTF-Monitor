import React from 'react';
import {Panel} from 'primereact/panel';




function Log(props) {


return (
    <div>
        <Panel header={props.clazz+''+props.date} style={{marginTop:'2em'}} toggleable={true}  >
            {props.err}
        </Panel>

    </div>
  );
}

export default Log;
