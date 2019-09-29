import React, { Component } from 'react';

import './index.less';

class Library extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //
    }

    test() {}

    render() {
        return (
            <div className="library">
                { JSON.stringify(this.props) }
            </div>
        );
    }
}

export default Library;
