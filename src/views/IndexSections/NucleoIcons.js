
import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class NucleoIcons extends React.Component {
  render() {
    return (
      <div className="section section-nucleo-icons">
        <img alt="..." className="path" src={require("assets/img/path3.png")} />
        <Container>
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <h2 className="title">DevTools Branding and Logos</h2>
              <h4 className="description">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".
              </h4>
              <div className="btn-wrapper">
                <Button
                  className="btn-round"
                  color="primary"
                  href="https://"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View Branding
                </Button>
                <Button
                  className="btn-simple btn-round"
                  color="primary"
                  href="https://"
                  rel="noopener noreferrer"
                  size="lg"
                  target="_blank"
                >
                  View All Icons and Logos
                </Button>
              </div>
            </Col>
          </Row>
          <div className="blur-hover">
            <a href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/icons">
              <div className="icons-container blur-item on-screen mt-5">
                {/* Center */}
                <i className="icon tim-icons icon-coins" />
                {/* Right 1 */}
                <i className="icon icon-sm tim-icons icon-spaceship" />
                <i className="icon icon-sm tim-icons icon-money-coins" />
                <i className="icon icon-sm tim-icons icon-link-72" />
                {/* Right 2 */}
                <i className="icon tim-icons icon-send" />
                <i className="icon tim-icons icon-mobile" />
                <i className="icon tim-icons icon-wifi" />
                {/* Left 1 */}
                <i className="icon icon-sm tim-icons icon-key-25" />
                <i className="icon icon-sm tim-icons icon-atom" />
                <i className="icon icon-sm tim-icons icon-satisfied" />
                {/* Left 2 */}
                <i className="icon tim-icons icon-gift-2" />
                <i className="icon tim-icons icon-tap-02" />
                <i className="icon tim-icons icon-wallet-43" />
              </div>
              <span className="blur-hidden h5 text-primary">
                Eplore DevTools Branding and Logos
              </span>
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

export default NucleoIcons;
