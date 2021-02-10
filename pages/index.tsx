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
      </>
    )
  };
}

