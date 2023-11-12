import Head from "next/head";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import {useSelector} from "react-redux";
import {useGlobal} from "../store/reducers/cart";

export default function Home() {
  const { showMenu } = useSelector(useGlobal)


  return (
    <>
      <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.cdnfonts.com/css/montserrat" rel="stylesheet"/>

      </Head>
      {showMenu && <Cart/>}
        <Header/>
        <Body/>
        <Footer/>
    </>
  );
}
