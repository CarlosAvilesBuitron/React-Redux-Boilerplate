import React from 'react';


class SectionHeader extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className="en__component en__component--copyblock">
                <h2 className={this.props.className}>{this.props.copy}</h2>
            </div>
        );
    }
}

export default SectionHeader;
