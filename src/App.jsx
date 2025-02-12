
//import styled, { createGlobalStyle }from 'styled-components';
import HeaderComponent from './HeaderComponent';
import VirtualDomPage from './VirtualDomPage';
import ComponentsPage from './ComponentsPage';
import PropsPage from './PropsPage';
import StatePage from './StatePage';
import LifecyclePage from './LifecyclePage';
import EventsPage from './EventsPage';
import RefsPage from './RefsPage';
import FragmentPage from './FragmentPage';
import KeyPage from './KeyPage';
import MemoPage from './MemoPage';
import ContextPage from './ContextPage';
import RouterPage from './RouterPage';
import FormPage from './FormPage';
import StoragePage from './StoragePage';
import HocPage from './HocPage';
import HomePage from './HomePage';
import SidebarMenu from './SidebarMenu';
import { Layout } from 'antd';
import { Routes, Route} from 'react-router-dom';
import './App.css'

import CounterPage from './CounterPage';
import DidUpdatePage from './DidUpdatePage';
import FocusPage from './FocusPage';
import UsememoPage from './UsememoPage';


const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  backgroundColor: '#F8F8FF',

};
const siderStyle = {
  textAlign: 'center',
  backgroundColor: '#F8F8FF',  
};
const contentStyle = {
  backgroundColor: '#F8F8FF',
  paddingRight: '70px',
  fontSize: '16px',
  
};
const footerStyle = {
  textAlign: 'center',
  backgroundColor: '#F8F8FF',
}

function App() {
  const dataArray = [
    1, 2,75, 8, 23, 65, 6, 87, 123, 890, 36, 67, 89, 34, 123, 64, 35, 75, 90, 29, 51
  ]
    
  return (
    <>
      <div>
        
        <Layout>
          
          <Header  style={headerStyle}>
            <HeaderComponent/>
          </Header>
          <Layout>
            <Sider style={siderStyle} width="20%" >
              <SidebarMenu/>
            </Sider>
            <Content style={contentStyle} >
              
              <Routes>
                <Route path = "/" element = {<HomePage/>}/>
                <Route path = "/virtualDom" element = {<VirtualDomPage/>}/>
                <Route path = "/components" element = {<ComponentsPage/>}/>
                <Route path = "/props" element = {<PropsPage/>}/>
                <Route path = "/state" element = {<StatePage/>}/>
                <Route path = "/lifecycle" element = {<LifecyclePage/>}/>
                <Route path = "/events" element = {<EventsPage/>}/>
                <Route path = "/refs" element = {<RefsPage/>}/>
                <Route path = "/fragment" element = {<FragmentPage/>}/>
                <Route path = "/key" element = {<KeyPage/>}/>
                <Route path = "/memo" element = {<MemoPage/>}/>
                <Route path = "/context" element = {<ContextPage/>}/>
                <Route path = "/router" element = {<RouterPage/>}/>
                <Route path = "/form" element = {<FormPage/>}/>
                <Route path = "/storage" element = {<StoragePage/>}/>
                <Route path = "/hoc" element = {<HocPage/>}/>

                <Route path = "/counter" element = {<CounterPage/>}/>
                <Route path = "/didupdate" element = {<DidUpdatePage/>}/>
                <Route path = "/focus" element = {<FocusPage/>}/>
                <Route path = "/usememo" element = {<UsememoPage data = {dataArray}/>}/>
              </Routes>
              
            </Content>
          </Layout>
          <Footer style={footerStyle} >Create app 2025</Footer>
        </Layout>
       
      </div>
            
    </>
  )
}

export default App


