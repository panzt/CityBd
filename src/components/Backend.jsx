import React, { Component } from 'react';
import { Breadcrumb,Button, Menu, Icon,Modal } from 'antd';
import { Select } from 'antd';
import { Link} from 'react-router';
const Option = Select.Option;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const confirm = Modal.confirm;

class Backend extends Component{
  constructor(){
     super();
     this.state ={
       current: 'mail',
       theme: 'light',
       visible:false
     }
     this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      current: e.key
    });
    if (e.key=='logout') {
      confirm({
        title: '您是否确认要登出系统？',
        content: '您是否确认要登出系统？',
        onOk() {
          window.localStorage.removeItem("logstatus");
          setTimeout(function(){document.location.href = '/';},888);
        },
        onCancel() {}
      });

    }
  }

  render() {
    return (
      <div style={{zIdex:999}}>
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]}
        mode="horizontal" theme={this.state.theme}>

          <img src="http://rn.panbx.com/react/antd/wyylogohh.png"
            width="190" height="22" style={{marginTop:'10px',marginLeft:'10px'}}/>
          
        <Menu.Item key="logout" selectedKeys style={{float:'right'}}>
          <Icon type="reload" />登出系统
        </Menu.Item>

        <Menu.Item key="system" style={{float:'right'}}>
          <Icon type="setting" />系统管理
        </Menu.Item>

      </Menu>
     </div>
    );
  }
}

export default Backend;
