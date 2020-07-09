import React, { Component } from 'react';

export default class PostForm extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)

        this.state = {};
    }

    submitHandler = event => {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" />
                </div>
                <button className="btn btn-success" type="submit">Create</button>
            </form>
        )
    }
}
