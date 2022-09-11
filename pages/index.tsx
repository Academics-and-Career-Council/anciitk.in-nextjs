import type { NextPage } from 'next'
import NavBar from '../components/navbar';
import HomePage from '../components/homePage'
import 'antd/dist/antd.css';
const Home: NextPage = () => {
  return (<>
    <NavBar></NavBar>
    <HomePage></HomePage>
    </>)
}

export default Home
