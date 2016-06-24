import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Affix,Button,Breadcrumb,Icon } from 'antd';
import * as loginaction  from '../actions/loginaction'
import * as indexedaction  from '../actions/indexed'

import './App.less';

import Login from './Login';
import Header from './Header';
import Backend from './Backend';
import SiderBar from './SiderBar';
import AddPublic from './AddPublic';
import Index from './Index';
import Basicproxy from './Basicproxy';
import Proxytype from './Proxytype';


class App extends Component{
  constructor(){
     super();
     this.state ={
       loggedIn: window.localStorage.getItem("logstatus"),
     }
  }
  componentDidMount(){
      const { dispatch } = this.props
      dispatch(indexedaction.getdataSource());
  }
  render() {
    const { dispatch,logged } = this.props;
    var dataS = this.props.indexed.data;
    // console.log(this.props);
    var childrenWithProps = React.Children.map(this.props.children, function(child) {
        var name = child.props.route.name;
        if( name =='index'){
          return React.cloneElement(child, { data: dataS });
        }else{
          return child;
        }
        // console.log(child.props.route.name);
    });
    return (
      <div>
          {this.state.loggedIn ? (
            <div className="ant-layout-aside">
              <Affix>
              <Backend />
              </Affix>
              <div className="ant-layout-breadcrumb">
                <Breadcrumb {...this.props} />
              </div>
              <aside className="ant-layout-sider">
              <SiderBar />
              </aside>
              <div className="ant-layout-main">
                <div className="ant-layout-container">
                  <div className="ant-layout-content">
                    <div style={{ height: 632 }}>
                      {childrenWithProps}
                    </div>
                  </div>
                </div>
              </div>
              <div className="ant-layout-footer">
                WyySoft 版权所有 © 2016 由WyySoft技术支持
              </div>
            </div>
          ) : (
            <div>
            <Header />
            <Login loadding={logged.loadding}
                onLoggin={text =>
                  dispatch(loginaction.validateAccessToken(text))
                } />
            </div>
          )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    logged: state.logged,
    indexed:state.indexed
  }
}

export default connect(mapStateToProps)(App)
