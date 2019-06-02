import React from 'react';
import {Panel} from 'primereact/panel';




function Log(props) {


return (
    <div>
        <Panel header={props.clazz} style={{marginTop:'2em'}} toggleable={true}  >
            {props.err}
        </Panel>

    </div>
  );
}

export default Log;
