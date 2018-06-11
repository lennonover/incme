import React from 'react'

class Contact extends React.Component {
  
    componentDidMount() {
        /** 做点什么*/
    }
    render(){
        return (
            <div className="wai-contact"> 
                <p className="base" key="00">lennonover</p>
                <p className="base" key="01">is a china based photographe or programmer</p>

                <p className="lato sina" key="02">sina @lennonover</p>
                <p className="lato email" key="04">lennonover@gmail.com</p>
            </div>
        )
    }
}
export default Contact;