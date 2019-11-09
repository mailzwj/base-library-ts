import * as React from 'react';

import './index.less';

interface LibProps {
    env: string,
    data?: string
}

class Library extends React.Component<LibProps> {
    constructor(props: LibProps) {
        super(props);
    }

    componentDidMount() {
        //
    }

    render() {
        return (
            <div className="library">
                { JSON.stringify(this.props) }
            </div>
        );
    }
}

export default Library;
