import React from 'react';

class App extends React.Component{
    render(){
        return  <Msg text="Hello my name is... Stranger"/>

    }
}
const Msg = (props) => <h1>Message - {props.text}</h1>;

Msg.propTypes={
    text(props, propName, component){
        if(!(propName in props)){
            return new Error(`no any ${propName}`)
        }
        if(props[propName].length<30){
            return new Error (`${propName} is 2 short, write more`)
        }
    }
};

export default App;