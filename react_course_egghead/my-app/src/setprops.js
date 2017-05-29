import React from 'react';

class App extends React.Component{
    render(){
        let text = this.props.title;
        return(
            <h1 title={text}>
                {this.props.num}
            </h1>
        )
    }
}

App.propTypes={
    text: React.PropTypes.string,
    num: React.PropTypes.array.isRequired
};

App.defaultProps={
  title: "Hello metal fans"
};

export default App;