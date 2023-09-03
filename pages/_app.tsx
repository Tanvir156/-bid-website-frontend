import "./../styles/globals.css";
import Header from "./../components/Header/Header.tsx";
import Footer from "./../components/Footer/Footer.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../styles/ProductDetailsCard.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
