import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            a: '',
            b: '',
            c: '',
            d: ''
        }
    }
    update(){
        this.setState({
            a: ReactDOM.findDOMNode(this.a).value,
            b: this.b.value,
            c: this.refs.c.value,
            d: this.d.refs.input.value
        })
    }
    render(){
        return(
            <div>
                <Input
                    ref={ component => this.a = component }
                    update={this.update.bind(this)}
                />{this.state.a}
                <hr/>
                <input
                    ref={node=> this.b = node}
                    type="text"
                    onChange={this.update.bind(this)}
                />{this.state.b}
                <hr/>
                <input
                    ref="c"
                    type="text"
                    onChange={this.update.bind(this)}
                />{this.state.c}
                <hr/>
                <Input
                    ref={ component => this.d = component }
                    update={this.update.bind(this)}
                />{this.state.d}
            </div>
        )
    }
}

class Input extends React.Component{
    render(){
        return(
            <div>
                <input ref="input" type="text" onChange={this.props.update}/>
            </div>
        )
    }
}

export default App;