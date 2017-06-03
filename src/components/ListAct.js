import React, { Component } from 'react';

class ListAct extends Component {
    render() {
        return (
            <ul className="list">
                {this.props.data.map((data) =>
                    <li key={data.content + Math.random}>{data.content}, tag: {data.tag}</li>
                )}
            </ul>
        );
    }
}

export default ListAct;
