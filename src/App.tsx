import { FC } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import 'antd/dist/antd.min.css';
import './index.css';

const { Header, Footer, Content } = Layout;

export const App: FC = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
        />
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor: '' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
};
