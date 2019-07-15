import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class ShowMatchUseHistory extends Component {
    goAway = () => this.props.history.push('/away');

    render() {
        return (
            <div>
                <div>So far from Router [match.path: {this.props.match.path}]</div>
                <button onClick={this.goAway}>Go Away</button>
            </div>
        );
    }
}
    
export default withRouter(ShowMatchUseHistory);