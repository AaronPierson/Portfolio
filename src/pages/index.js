import React from "react";
import Gallery from "../components/gallery"
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";



export default function IndexPage() {



  return (
    <>
      <Seo title="Aaron Pierson Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/*<ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />*/}
        <AboutSection sectionId="about" heading="About Me" />
        {/*<InterestsSection sectionId="details" heading="Details" />*/}
        <ProjectsSection sectionId="features" heading="Projects/Jobs" />
        <ContactSection sectionId="github" heading="Lets Work Together!" />
        {/* <Gallery /> */}

      </Page>
    </>
  );
}
