import React, { Component } from 'react'
import { Button } from 'antd'
import './App.css'
import { connect } from 'react-redux'
import { Layout, Menu, Icon, notification } from 'antd'
const { Sider, Content } = Layout;

@connect((store) => {
  console.log(store);
  return {  };
})

class App extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }

  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  componentWillReceiveProps(nextProps){
    
  }

  render() {
    return (
        <div >
      	<Layout style={{minHeight : '100vh'}}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
        </Sider>
        <Layout>
        </Layout>
      </Layout>
      </div>
    );
  }
}

export default App;
