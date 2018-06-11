import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../action/action'


class ListImg extends React.Component {
    
    componentDidMount() {
        /** */
        
    }
    render(){
        let { status } = this.props;
        let imgs = status.imgs;
        return (
            <ul className="index-bd clearfix">
                {
                    imgs.map((item,i) => {
                        return (
                            <li className="index-img" key={i}>
                                <img src={item.src} alt={item.tit}/>
                            </li>
                        )})
                }
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    status: state.toggleReducer
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ListImg);
