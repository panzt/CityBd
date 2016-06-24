import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const SiderBar = React.createClass({
  getInitialState() {
    return {
      current: '1',
      theme:'light'
    };
  },
  handleClick(e) {
    // console.log('click ', e);
    this.setState({
      current: e.key
    });
  },
  render() {
    return (
      <Menu theme={this.state.theme} onClick={this.handleClick}
        defaultOpenKeys={['sub1','sub2','sub3','sub4']}
        selectedKeys={[this.state.current]}
        mode="inline">
        <SubMenu key="sub1" title={<span><Icon type="solution" /><span>管理首页</span></span>}>
          <Menu.Item key="1">
            <Link to="index.html"><Icon type="solution" />首页导航</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>代理设置</span></span>}>
          <Menu.Item key="2"><Link to="basicproxy.html"><Icon type="appstore" />基本设置</Link></Menu.Item>
          <Menu.Item key="3"><Link to="proxytype.html"><Icon type="appstore" />商户分类</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title={<span><Icon type="appstore-o" /><span>商户管理</span></span>}>
          <Menu.Item key="4">商户列表</Menu.Item>
          <Menu.Item key="5">待审商户</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="pay-circle" /><span>招聘优惠</span></span>}>
          <Menu.Item key="6">招聘列表</Menu.Item>
          <Menu.Item key="7">待审招聘</Menu.Item>
          <Menu.Item key="8">优惠劵</Menu.Item>
          <Menu.Item key="9">待审优惠劵</Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" title={<span><Icon type="team" /><span>人脉管理</span></span>}>
          <Menu.Item key="10">人脉列表</Menu.Item>
          <Menu.Item key="11">待审人脉</Menu.Item>
          <Menu.Item key="12">人脉列表</Menu.Item>
          <Menu.Item key="13">待审人脉</Menu.Item>
        </SubMenu>
        <SubMenu key="sub6" title={<span><Icon type="message" /><span>文章管理</span></span>}>
          <Menu.Item key="14">文章列表</Menu.Item>
          <Menu.Item key="15">增加文章</Menu.Item>
          <Menu.Item key="16">文章列表</Menu.Item>
        </SubMenu>
        <SubMenu key="sub7" title={<span><Icon type="user" /><span>会员管理</span></span>}>
          <Menu.Item key="17">商户会员</Menu.Item>
          <Menu.Item key="18">业务员</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
});
export default SiderBar;
