import React from 'react';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            txt: 'State text'
        }
    }
    update(e){
        this.setState(
            {txt: e.target.value}
        )
    }
    render(){
        return(
            <div>
                <h1>
                    {this.state.txt}
                </h1>
                <Tar update={this.update.bind(this)}/>
                <Tar update={this.update.bind(this)}/>
                <Tar update={this.update.bind(this)}/>
            </div>
        )
    }
}

const Tar = (props)=> <textarea type="text" onChange={props.update}/>;

export default App;