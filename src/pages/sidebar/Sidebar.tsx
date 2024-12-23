import {  Link, Outlet, useNavigate } from "react-router";
import Navbar from "../home/Navbar";
import { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BankOutlined,
  BarsOutlined,
  ContactsOutlined,
  FileImageOutlined,
  FlagOutlined,
  ProductOutlined,
  TagOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import logo from '../../../public/logo.svg'

const { Header, Sider, Content } = Layout;


export default function ISidebar() {
  const navigate = useNavigate()
  const token = localStorage.getItem('acessToken');
  useEffect(() => {
    if (!token) {
      navigate('/login'); 
    }
  }, [token]);


  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  return (
    <div className="flex ">
      <main className="w-full">
      <div className="flex justify-between items-center ">
          <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div/>
         <Link to='/' className=""><img src={logo} alt="" className="visible mt-4"/></Link>
        <Menu
        className="h-[500px]"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={({ key }) => navigate(key)}
          items={[
            {
              key: "/",
              icon:< AppstoreOutlined/>,
              label:"Dashboard"
          },
            {
              key: "/app/adds",
              icon:<TagOutlined/>,
              label:"Adds"
            },
            {
              key: "/app/banners",
              icon:<FlagOutlined/>,
              label:"Banners"
            },
            {
              key: "/app/categories",
              icon:<BarsOutlined/>,
              label:"Categories"
          
            },
            {
              key: "/app/company",
              icon:<BankOutlined/>,
              label:"Company"
            },
            {
              key: "/app/contacts",
              icon:<ContactsOutlined/>,
              label:'Contacts'
            },
            {
              key: "/app/product-images",
              icon:<FileImageOutlined/>,
              label:"Product images"
            },
            {
              key: "/app/products",
              icon:<ProductOutlined/>,
              label:"Products"
            },
          
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div className="flex justify-between ">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <Navbar/></div>
        </Header>
        <Content
          style={{
           
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >   <Outlet />
         
        </Content>
      </Layout>
    </Layout>
        
      </div>
     
      </main>
    </div>
  );
}


