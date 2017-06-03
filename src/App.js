import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import jQuery from 'jquery';
import TodoList from './components/TodoList';
import ListAct from './components/ListAct';

class App extends Component {
    constructor() {
        super();
        this.state = { data: [] };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        jQuery.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function (data) {
                this.setState({data: data})
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(status);
                console.log(err);
            }
        });
    }

    handleInputFromChild(content, tag) {
        let dataArr = [{'content': content, 'tag': tag}];
        this.setState({
            data: this.state.data.concat(dataArr)
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <div className="App-body">
                    <TodoList parentListener={this.handleInputFromChild.bind(this)} />
                    <ListAct data={this.state.data} />
                </div>
            </div>
        );
    }
}

export default App;
