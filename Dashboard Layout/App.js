import React from 'react';
import { Layout, Avatar, Menu, Icon, Breadcrumb } from 'antd';
import './App.css';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';


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
            <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
              <Menu.Item key='Dashboard'>Home</Menu.Item>
              <SubMenu
                title={
                  <span>
                    <Icon type="mail" />
                    <span>Menu</span>
                  </span>
                }>
                <Menu.ItemGroup key='AboutUs' title='Our Locations'>
                  <Menu.Item key='Location1'>Location 1</Menu.Item>
                  <Menu.Item key='Location2'>Location 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 560 }}>
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
