import React, { Component } from "react";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            tag: ''
        };
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        this.props.parentListener(this.state.content, this.state.tag);
        this.setState({content: ''});
        this.setState({tag: ''});
        event.preventDefault();
    }

    render() {
        return (
            <div className="todoForm">
                <form action="#" onSubmit={this.handleSubmit.bind(this)}>
                    <label htmlFor="todoInput" className="Label-form">
                        Tambahkan Data:
                    </label>
                    <input type="text" id="todoInput" onChange={this.handleChange.bind(this)} className="Input-form" name="content" value={this.state.content} placeholder="Masukkan Task" />
                    <input type="text" id="tagInput" onChange={this.handleChange.bind(this)} className="Input-form" name="tag" value={this.state.tag} placeholder="Masukkan Tag" />
                    <button type="submit" value="Tambah Task" className="btn-tambah">Tambah Task</button>
                </form>
            </div>
        );
    }
}

export default TodoList;
