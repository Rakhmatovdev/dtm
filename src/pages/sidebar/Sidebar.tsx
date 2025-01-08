import { Link, Outlet, useNavigate } from "react-router";
import Navbar from "../home/Navbar";
import { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BarsOutlined,
  AppstoreOutlined,
  FileAddOutlined,
  UserSwitchOutlined,
  PlayCircleOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import logo from "../../../public/logo.png";

const { Header, Sider, Content } = Layout;
export default function ISidebar() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("accessToken");
  const role = sessionStorage.getItem("role");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // Menu elementlarini dinamik ravishda tuzish
  const menuItems = [
    {
      key: "/",
      icon: <AppstoreOutlined />,
      label: "Dashboard",
    },
    {
      key: "/start/exam",
      icon: <PlayCircleOutlined />,
      label: "Start exam",
    },
  
    {
      key: "/user/statistic",
      icon: <UserSwitchOutlined />,
      label: "Profile",
    },
  ];

  if (role === "admin") {
    menuItems.splice(1, 0, {
      key: "/app/upload",
      icon: <UploadOutlined/>,
      label: "Upload file",
    });
    menuItems.splice(1, 0, {
      key: "/app/exam",
      icon: <FileAddOutlined />,
      label: "Create exam",
    });
  }

  return (
    <div className="flex">
      <main className="w-full">
        <div className="flex justify-between items-center">
          <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
              <div />
              <Link to="/" className="flex items-center">
                <img src={logo} alt="" className="visible mx-auto mt-4 w-12 h-12" />
              </Link>
              <Menu
                className="h-[500px]"
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["1"]}
                onClick={({ key }) => navigate(key)}
                items={menuItems}
              />
            </Sider>
            <Layout>
              <Header style={{ padding: 0, background: colorBgContainer }}>
                <div className="flex justify-between">
                  <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                      fontSize: "16px",
                      width: 64,
                      height: 64,
                    }}
                  />
                  <Navbar />
                </div>
              </Header>
              <Content
                style={{
                  padding: 24,
                  minHeight: 280,
                  background: colorBgContainer,
                }}
              >
                <Outlet />
              </Content>
            </Layout>
          </Layout>
        </div>
      </main>
    </div>
  );
}
