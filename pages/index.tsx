import React from "react";

import { Header } from "../components";
import {
  MainSection,
  PortfolioSection
} from "../components/Pages";

export default class extends React.Component {
  render() {
    return (
      <>
        <Header />
        <MainSection />
        <PortfolioSection />
        <div style={{
          height: "900px",
          backgroundColor: "blue"
        }}>123</div>
      </>
    )
  };
}

