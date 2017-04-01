import React, { Component } from 'react';
import Output from './Output';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            n: 10
        }
    }
    render() {
        const inputStyle = {
            width: 30 + "%"
        }
        return (
            <div>
                <form className="well well-primary">
                    <div className="form-group">
                        <label>No of Bytes</label>
                        <input type="text" className="form-control" value={this.state.n} style={inputStyle}
                            onChange={this.handleInputChange.bind(this)}
                        />
                        <Output no={this.state.n} />
                    </div>
                </form>
            </div>
        );
    }
    handleInputChange(e) {
        const reg = new RegExp('^\\d+$');
        if (reg.test(e.target.value) || e.target.value.length < 1) {
            this.setState({
                n: e.target.value
            })
        }
        else {
            return alert("Please enter no");
        }
    }
}

export default Form;