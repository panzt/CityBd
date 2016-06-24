import React, { Component } from 'react';
import { Steps, Button } from 'antd';
const Step = Steps.Step;
const steps = [{
  title:'1.',
  description: '获取公众号信息'
}, {
  title:'2.',
  description: '设置公众号信息'
}, {
  title:'3.',
  description: '设置权限'
}, {
  title:'4.',
  description: '引导页面'
}];

class AddSteps extends Component{
  constructor(){
     super();
     this.state ={
       current: 'mail',
       theme: 'light'
     }
     this.next = this.next.bind(this);
  }

  next() {
    let s = this.state.currentStep + 1;
    if (s === steps.length) {
      s = 0;
    }
    this.setState({
      currentStep: s
    });
  }

  render() {
    const cs = this.props.current;
    return (
      <div style={{width: "90%", margin: '30px auto',marginLeft:"108px"}}>
        <Steps current={cs}>
          {steps.map((s, i) => <Step key={i} title={s.title}
          description={s.description} icon="cloud" />)}
        </Steps>
      </div>
    );
  }
}

export default AddSteps;
