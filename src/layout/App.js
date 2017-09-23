import React, { Component } from 'react'
import { Button } from 'antd'
import './App.css'
import { fetchOpportunities } from "../actions/Actions"
import { connect } from 'react-redux'
import { Layout, Menu, Icon, notification } from 'antd'
const { Sider, Content } = Layout;

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
        
        <Layout>
        </Layout>
      </Layout>
      </div>
    );
  }
}

export default App;
