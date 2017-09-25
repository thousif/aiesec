import React, { Component } from 'react'
import { Button } from 'antd'
import './App.css'
import { fetchOpportunities } from "../actions/Actions"
import { connect } from 'react-redux'
import { Layout, Menu, Icon, notification } from 'antd'
const { Sider, Content, Header } = Layout;

@connect((store) => {
  console.log(store);
  return { 
    data : store.reducer
  };
})

class App extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }

  componentWillMount(){
    console.log("component mounted");
    this.props.dispatch(fetchOpportunities());
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }


  render() {
    return (
        <div >
      	<Layout style={{minHeight : '100vh'}}>
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
        <Layout>
        </Layout>
      </Layout>
      </div>
    );
  }
}

export default App;
