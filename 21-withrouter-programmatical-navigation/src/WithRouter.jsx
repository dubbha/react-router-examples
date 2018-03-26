import React, { Component } from 'react';
import { withRouter } from 'react-router'

class ShowMatchUseHistory extends Component {
    render() {
        return (
            <div>
                <div>So far from Router [match.path: {this.props.match.path}]</div>
                <button onClick={this.goAway}>Go Away</button>
            </div>
        );
    }

    goAway = () => {
        this.props.history.push('/away');
    }
}
    
export default withRouter(ShowMatchUseHistory);