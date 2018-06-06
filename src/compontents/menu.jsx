import React from 'react';
import PropTypes from 'prop-types';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        /** 做点什么*/
    }
    render(){
        let {menusDates}=this.props;
        let num = 0;
        return (
            <ul>
                {menusDates.map(item => (
                <li key={num++}>{item}</li>
                ))}
            </ul>
        )
    }
}
export default Menu;