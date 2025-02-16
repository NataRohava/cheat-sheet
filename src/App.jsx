import HeaderComponent from "./HeaderComponent";
import { VirtualDom } from "./pages/VirtualDom";
import { Components } from "./pages/Components";
import { Props } from "./pages/Props";
import { State } from "./pages/State";
import { LifeCycle } from "./pages/Lifecycle";
import { Events } from "./pages/Events";
import { Refs } from "./pages/Refs";
import { Fragment } from "./pages/Fragment";
import { Key } from "./pages/Key";
import { Memo } from "./pages/Memo";
import { Context } from "./pages/Context";
import { Router } from "./pages/Router";
import { Form } from "./pages/Form";
import { Storage } from "./pages/Storage";
import { Hoc } from "./pages/Hoc";
import { HomePage } from "./HomePage";
import { SidebarMenu } from "./SidebarMenu";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Counter } from "./examples/Counter";
import { DidUpdate } from "./examples/DidUpdate";
import { Focus } from "./examples/Focus";
import { UseMemo } from "./examples/UseMemo";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  backgroundColor: "#F8F8FF",
};
const siderStyle = {
  textAlign: "center",
  backgroundColor: "#F8F8FF",
};
const contentStyle = {
  backgroundColor: "#F8F8FF",
  paddingRight: "70px",
  fontSize: "16px",
};
const footerStyle = {
  textAlign: "center",
  backgroundColor: "#F8F8FF",
};

function App() {
  const dataArray = [
    1, 2, 75, 8, 23, 65, 6, 87, 123, 890, 36, 67, 89, 34, 123, 64, 35, 75, 90,
    29, 51,
  ];

  return (
    <>
      <div>
        <Layout>
          <Header style={headerStyle}>
            <HeaderComponent />
          </Header>
          <Layout>
            <Sider style={siderStyle} width="20%">
              <SidebarMenu />
            </Sider>
            <Content style={contentStyle}>
              <Routes>
                <Route path="/cheat-sheet/" element={<HomePage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/virtualDom" element={<VirtualDom />} />
                <Route path="/components" element={<Components />} />
                <Route path="/props" element={<Props />} />
                <Route path="/state" element={<State />} />
                <Route path="/lifecycle" element={<LifeCycle />} />
                <Route path="/events" element={<Events />} />
                <Route path="/refs" element={<Refs />} />
                <Route path="/fragment" element={<Fragment />} />
                <Route path="/key" element={<Key />} />
                <Route path="/memo" element={<Memo />} />
                <Route path="/context" element={<Context />} />
                <Route path="/router" element={<Router />} />
                <Route path="/form" element={<Form />} />
                <Route path="/storage" element={<Storage />} />
                <Route path="/hoc" element={<Hoc />} />

                <Route path="/counter" element={<Counter />} />
                <Route path="/didupdate" element={<DidUpdate />} />
                <Route path="/focus" element={<Focus />} />
                <Route path="/usememo" element={<UseMemo data={dataArray} />} />
              </Routes>
            </Content>
          </Layout>
          <Footer style={footerStyle}>Create app 2025</Footer>
        </Layout>
      </div>
    </>
  );
}

export default App;
