import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../action/action'


class Contents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidelogin:"show"
        }
    }
    componentDidMount() {
        /** */
        var _this = this;
        setTimeout(function(){
            _this.setState({
                isHidelogin:"hide"
            })
        },6000)
    }
    render(){
        let { status ,actions} = this.props;
        return ([
            <div className={this.state.isHidelogin + " wai-index-logo"}></div>,
            <img className="photo" title={status.imgs[status.now].tit} alt={status.imgs[status.now].tit} src={status.imgs[status.now].src} onClick={actions.toggleImg}/>    
            ]  
        )
    }
}

const mapStateToProps = state => ({
    status: state.toggleReducer
  });
  
  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Contents);
