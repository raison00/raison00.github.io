
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

class PageHeader extends React.Component {
  render() {
    return (
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">DevTools UI Kit: Living Style Guide</h1>
            <h3 className="d-none d-sm-block">
            Designed for cohesive DevExp UX/UI Rapid Development and Collaboration.</h3>
            <h5 className="d-none d-sm-block">A Living Style Guide is a set of rules which defines the basics. This is the most abstract part of UI. You can find colors here, typography, brand, icons, etc. .</h5>
            <h4 className="d-none d-sm-block">
            The <i>DevTools UI Kit</i> maintains the expected look and feel of the complete suite of tools. It is the single source of truth for teams (product, ux, engineering) to refer to for UI changes, for iterations, and when developing new features.
            </h4>
          </div>
        </Container>
      </div>
    );
  }
}

export default PageHeader;
