import React from "react";
import axios from 'axios';
import { configureAnchors } from 'react-scrollable-anchor';

import {Footer, Header} from "../components";
import {
  AboutSection,
  FormSection,
  MainSection,
  PortfolioSection,
  ServicesSection
} from "../components/Pages";

configureAnchors({offset: -70 })

axios.defaults.baseURL = 'https://api.lab.pics';
axios.defaults.responseType = 'json';

export default class extends React.Component {
  render() {
    return (
      <>
        <Header />
        <MainSection />
        <PortfolioSection />
        <ServicesSection />
        <FormSection />
        <AboutSection />
        <Footer />
      </>
    )
  };
}

