import React, { Component } from 'react';
import crypto from 'crypto';

class Output extends Component {
    constructor(props) {
        super(props);
        this.state = {
            random: crypto.randomBytes(this.props.no).toString('hex')
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            random: crypto.randomBytes(nextProps.no).toString('hex')
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-success">{this.state.random}</h2>
            </div>
        );
    }
}

export default Output;