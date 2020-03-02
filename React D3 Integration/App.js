import React from 'react';
import { Layout, Avatar, Menu, Icon, Breadcrumb } from 'antd';
import './App.css';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import D3Chart from './D3Chart';


const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ background: 'black', padding: 10 }}>
          <Title style={{ color: 'white' }} level={3}>My Sample Dashboard Layout</Title>
        </Header>
        <Layout>
          <Sider>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 560 }}>
                <svg width="500" height="300" style={{ border: 'solid 1px #eee', borderBottom: 'solid 1px #ccc' }}>
                  <D3Chart />
                </svg>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
