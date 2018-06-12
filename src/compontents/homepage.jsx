import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../action/action'


class HomePage extends React.Component {
    
    componentDidMount() {
        /** */
        
    }
    render(){
        let { status ,actions} = this.props;
        let show_index = status.now;
        let array_imgs = status.imgs;
        return ([
            <div className="index-photo" key="00" onClick={actions.toggleImg}>,
            <img title={array_imgs[show_index].tit} alt={array_imgs[show_index].tit} src={array_imgs[show_index].src} />    
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
