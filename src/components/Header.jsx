import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Select } from 'antd';
const Option = Select.Option;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends Component{
  constructor(){
     super();
     this.state ={
       current: 'mail',
       theme: 'light'
     }
     this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  }

  render() {
    return (
      <div style={{zIdex:999}}>
      <Menu  theme={this.state.theme} onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal">
        <img src="http://rn.panbx.com/react/antd/wyylogohh.png"
          width="190" height="22" style={{marginTop:'10px',marginLeft:'10px'}}/>
        <Menu.Item key="system" style={{float:'right'}}>
          <Icon type="setting" />系统管理
        </Menu.Item>
      </Menu>
     </div>
    );
  }

}

export default Header;
