import type { NextPage } from 'next'
import NavBar from '../components/navbar';
import HomePage from '../components/homePage'
import 'antd/dist/antd.css';
import Qna from "../components/qna" 
const Home: NextPage = () => {
  return (<>
  
    <NavBar></NavBar>
    <HomePage></HomePage>
    <Qna></Qna>
    
    </>)
}

export default Home
