import React, { Component } from 'react';
import { render } from 'react-dom';

import Library from '../src';

import './index.less';

class Demo extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Library env={'test'} data={{ props: 'My props' }} />
        );
    }
}

const page = document.createElement('div');
document.body.appendChild(page);

render(<Demo />, page);
