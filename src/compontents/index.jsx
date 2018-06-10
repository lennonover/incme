import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../action/action'


class Contents extends React.Component {
    
    componentDidMount() {
        /** */
        
    }
    render(){
        let { status ,actions} = this.props;
        return ([
            <div className="index-photo">,
            <img  title={status.imgs[status.now].tit} alt={status.imgs[status.now].tit} src={status.imgs[status.now].src} onClick={actions.toggleImg}/>    
            </div>
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
