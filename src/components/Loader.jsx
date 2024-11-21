import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";

const Loader = () => {
  return (
    <>
    <Navbar/>
      <div className="center-item">
        <div className="content">
          <div className="bars">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="bars">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Loader;
