import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contents extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        /** */
    }
    render(){
        let { status ,nextAction} = this.props;
        console.log(this.props)
        return (
            <div>66</div>
            //<img className="photo" title={status.imgs[status.now].tit} alt={status.imgs[status.now].tit} src={status.imgs[status.now].src} onClick={nextAction.toggleImg}/>      
        )
    }
}

export default Contents;