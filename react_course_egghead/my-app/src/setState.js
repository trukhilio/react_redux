import React from 'react';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            txt: 'This is new text',
            arr: [1,2,3,4,5]
        }
    }
    update(e){
        this.setState({txt: e.target.value})
    }
    render(){
        return(
            <div>
                <input type="text"
                onChange={this.update.bind(this)}/>
                <h1>
                    {this.state.txt}
                    <br/>
                    {this.state.arr}
                </h1>
            </div>

        )
    }
}

export default App;