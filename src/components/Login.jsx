import React, { Component } from 'react';
import { Spin,Switch,Form, Input, Button, Checkbox,message ,Row, Col} from 'antd';

const FormItem = Form.Item;

class Login extends Component{
  constructor(){
     super();
     this.state ={
       theme: 'light'
     }
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  contextTypes: {
    router: React.PropTypes.func.isRequired;
  }

  componentDidMount(){
      // setInterval(this.toggle,500);
      // setTimeout(this.toggle,500);

  }

  handleSubmit(e) {
    e.preventDefault();
    const text = {
        username : this.props.form.getFieldsValue().userName,
        userpass : this.props.form.getFieldsValue().password
    };
    this.props.onLoggin(text);
    // $.ajax({
    //     type: "GET",
    //     url: "http://api.panbx.com/user/onlogin.html?username="
    //     + this.props.form.getFieldsValue().userName
    //      + "&password=" + this.props.form.getFieldsValue().password ,
    //     dataType : "json",
    //     data: "",
    //     crossDomain: true,
    //     success: function(data){
    //           if(data.flag == 1){
    //             message.info(data.message);
    //           }else{
    //             message.info(data.message);
    //
    //
    //             // var path = `/`;
    //             // // this.context.router.push(path);
    //             // window.localStorage.removeItem("logstatus");
    //             // window.localStorage.setItem("logstatus",true);
    //             // setTimeout(function(){document.location.href = '/';},888);
    //           }
    //     }
    // });
    // console.log('收到表单值：', this.props.form.getFieldsValue().userName);
  }

  render(){
    const { getFieldProps } = this.props.form;
    return (
      <div>
      <div style={{height:100,marginTop:'150px'}}>
      <Spin spinning={this.props.loadding} size="large" >
      <Form inline onSubmit={e => this.handleSubmit(e)}
        theme={this.state.theme}>
        <Row>
         <Col span="7">&nbsp;</Col>
         <Col span="10">
           <FormItem
             label="账户：">
             <Input placeholder="请输入账户名"
               {...getFieldProps('userName')} />
           </FormItem>
           <FormItem
             label="密码：">
             <Input type="password" placeholder="请输入密码"
               {...getFieldProps('password')} />
           </FormItem>
           <FormItem>
             <label className="ant-checkbox-inline">
               <Checkbox
                 {...getFieldProps('agreement')} />记住我
             </label>
           </FormItem>
           <Button type="primary" htmlType="submit">登录</Button>
         </Col>
         <Col span="7">&nbsp;</Col>
       </Row>
      </Form>
    </Spin>
      </div>
      </div>
    );
  }

}


Login = Form.create()(Login);
export default Login;
