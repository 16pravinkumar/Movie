import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Loader from "../components/Loader";

const AppLayout = () => {

  const navigation = useNavigation();
  
  if(navigation.state === 'loading'){
    return <Loader/>
  }
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}
export default AppLayout