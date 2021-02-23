import React from "react";

import { Header } from "../components";
import {
  AboutSection,
  FormSection,
  MainSection,
  PortfolioSection,
  ServicesSection
} from "../components/Pages";

export default class extends React.Component {
  componentDidMount() {
    window.scrollTo(0,document.body.scrollHeight);
  }

  render() {
    return (
      <>
        <Header />
        <MainSection />
        <PortfolioSection />
        <ServicesSection />
        <FormSection />
        <AboutSection />
      </>
    )
  };
}

