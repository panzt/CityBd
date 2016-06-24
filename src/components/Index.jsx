import React, { Component } from 'react';
import { Card,Row, Col ,Table,Icon,Collapse } from 'antd';
const Panel = Collapse.Panel;
import { Link } from 'react-router';
import * as loginaction  from '../actions/loginaction'

import './Index.less';

export default class Index extends React.Component {
  constructor(){
     super();
  }

  renderAction(o, row, index) {
    // console.log(row);
    return (
      <a target="_blank" href={"http://wyysoft.panbx.com/showpage.html?id=" + row.key} >{o}</a>
    )
  }

  componentDidMount(){
      // const { dispatch } = this.props
      // dispatch(loginaction.getdataSource());
  }

  render() {

    const dataS = this.props.data;

    const columns = [{
       title: '标题',
       dataIndex: 'title',
       key: 'title',
       width:320,
       render: this.renderAction
     }, {
       title: '发布时间',
       dataIndex: 'timestamp',
       key: 'timestamp',
       width:100
     }];
     const data = [];
      for (let i = 1; i < 100; i++) {
        data.push({
          key: i,
          title: `如何设置分享接口让首页有图标和介绍${i}`,
          timestamp: `[05/02 01:03]${i}`,
        });
      }

      const notice = (
        <Collapse defaultActiveKey={['1']} onChange={this.callback}>
          <Panel header="通知公告" key="1">
            <Table columns={columns} dataSource={dataS}
              pagination={{ pageSize: 50 }} scroll={{ y: 200 }} pagination={false}/>
          </Panel>
        </Collapse>
      )

     const help = (
       <Collapse defaultActiveKey={['1']} onChange={this.callback}>
         <Panel header="系统帮助" key="1">
           <Table dataSource={dataS} columns={columns}
             pagination={{ pageSize: 50 }} scroll={{ y: 200 }} pagination={false}/>
         </Panel>
       </Collapse>
     )
    return (
      <div>
      <div className="gutter-example">
       <Row gutter={16}>
         <Col className="gutter-row" span={"4"}>
           <div className="gutter-box-orange">
             <Link to="basicproxy.html" className="navhome">
             <Icon size="large" type="appstore" />  代理设置</Link></div>
         </Col>
         <Col className="gutter-row" span={"4"}>
           <div className="gutter-box-dark">
             <Link to="index.html" className="navhome">
           <Icon size="large" type="appstore-o" />  商户管理</Link></div>
         </Col>
         <Col className="gutter-row" span={"4"}>
           <div className="gutter-box-green">
             <Link to="index.html" className="navhome">
             <Icon size="large" type="pay-circle" />  招聘优惠</Link></div>
         </Col>
         <Col className="gutter-row" span={"4"}>
           <div className="gutter-box-red">
             <Link to="index.html" className="navhome">
           <Icon size="large" type="team" />  人脉管理</Link></div>
         </Col>
         <Col className="gutter-row" span={"4"}>
           <div className="gutter-box-blue">
             <Link to="index.html" className="navhome">
           <Icon size="large" type="message" />  文章管理</Link></div>
         </Col>
         <Col className="gutter-row" span={"4"}>
           <div className="gutter-box-cyan">
             <Link to="index.html" className="navhome">
           <Icon size="large" type="user" />  会员管理</Link></div>
         </Col>
       </Row>
     </div>
     <div>
       <Row className="index-row" type="flex" justify="space-between">
         <Col span="12" className="index-row-left">
           {notice}
         </Col>
         <Col span="12" className="index-row-left">
           {help}
         </Col>
       </Row>
     </div>
      <div className="gutter-example" style={{marginTop:20}}>
        <Row gutter={16}>
          <Col className="gutter-row" span={"6"}>
            <Card style={{ height:150 }} bodyStyle={{ padding: 0 }}>
              <div className="custom-card">
                <h3>今日访客</h3>
                <p style={{marginTop:30}}><span style={{fontSize:45}}>45</span><span> 人</span></p>
              </div>
              <div className="visitor">
                <p >昨日：2231人 本周：4343人</p>
              </div>
            </Card>
          </Col>
          <Col className="gutter-row" span={"6"}>
            <Card style={{ height:150 }} bodyStyle={{ padding: 0 }}>
              <div className="custom-card">
                <h3>入驻商户</h3>
                <p style={{marginTop:30}}><span style={{fontSize:45}}>232</span><span> 户</span></p>
              </div>
              <div className="visitor_orange">
                <p style={{marginLeft:20}} >待审商户：23 </p>
              </div>
            </Card>
          </Col>
          <Col className="gutter-row" span={"6"}>
            <Card style={{ height:150 }} bodyStyle={{ padding: 0 }}>
              <div className="custom-card">
                <h3>用户数量</h3>
                <p style={{marginTop:30}}><span style={{fontSize:45}}>4533</span><span> 人</span></p>
              </div>
              <div className="visitor_green">
                <p style={{marginLeft:20}} >查看详情</p>
              </div>
            </Card>
          </Col>
          <Col className="gutter-row" span={"6"}>
            <Card style={{ height:150 }} bodyStyle={{ padding: 0 }}>
              <div className="custom-card">
                <h3>加盟总收入</h3>
                <p style={{marginTop:30}}><span style={{fontSize:45}}>6575</span><span> 元</span></p>
              </div>
              <div className="visitor_red">
                <p style={{marginLeft:20}} >查看详情</p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
     </div>
    );
  }
}
