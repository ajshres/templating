import { Navbar, Container } from "react-bootstrap";
import HeaderNabar from "./header-navBar";
import logo from "../../assets/images/logo_druk.svg";
import { useEffect } from "react";
const Header = () => {
  // const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check localStorage for dismissal time
    const dismissedTime = localStorage.getItem("headerDismissedTime");
    if (dismissedTime) {
      const elapsedTime = Date.now() - parseInt(dismissedTime, 10);
      if (elapsedTime < 10 * 60 * 1000) {
        // Less than 10 minutes have passed
        // setIsVisible(false);
        return;
      }
    }
    // setIsVisible(true); // Show header if no recent dismissal
  }, []);

  // const handleClose = () => {
  //   // setIsVisible(false);
  //   localStorage.setItem("headerDismissedTime", Date.now().toString());
  // };

  return (
    <header className="header">
      {/* {isVisible && ( */}
        <div className="header-top bg-primary py-1 text-white">
          <div className="container-fluid text-center">
            <small className="mb-0">
              Talk to our Customer Representative! (+977) 9847694320
              {/* <button
        onClick={handleClose}
        className="btn btn-sm btn-secondary"
        style={{ fontSize: "0.8rem" }}
      >
        ×
      </button> */}
              
            </small>
          </div>
        </div>
      {/* )} */}

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="flex-wrap">
          <Navbar.Brand href="#home" className="">
            <img
              src={logo}
              alt="Druk Handicraft Logo"
              style={{ height: "50px", width: "auto", marginRight: "10px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div style={{ flexBasis: "100%" }}>
            <HeaderNabar />
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
