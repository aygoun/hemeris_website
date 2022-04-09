import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import "./Additional.css";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const sectionHeader = {
    title: "Notre Équipe",
    paragraph:
      "Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.",
  };

  const sectionHeaderPartenaire = {
    title: "Nos partenaires",
    paragraph:
      "Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.",
  };

  return (
    <div>
      <section {...props} className={outerClasses} id="team">
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div>
              {/*className={tilesClasses}*/}
              <div data-reveal-delay="200" style={{display: "flex", justifyContent: "center"}}>
                <div style={{ width: 250 }}>
                  <div>
                    <img
                      src={require("../../../src/assets/images/florePicture.jpeg")}
                      alt="Flore Vandier"
                      width={200}
                      height={200}
                      style={{ borderRadius: "50%", margin: "auto" }}
                    />
                  </div>
                  <div
                    className="team-name mt-8"
                    style={{ textAlign: "center", fontWeight: 700 }}
                  >
                    Flore Vandier
                  </div>
                  <div
                    className="team-position"
                    style={{ textAlign: "center", fontWeight: 500 }}
                  >
                    Co-Fondatrice
                  </div>
                  <div>
                    <a
                      href="https://linkedin.com/in/flore-vandier-a116391a4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={require("../../../src/assets/images/linkedinLogo.png")}
                        height={25}
                        width={25}
                        style={{ borderRadius: 2, margin: "auto" }}
                        alt="linkedin"
                      />
                    </a>
                  </div>
                </div>

                <div style={{ width: 250 }}>
                  <div>
                    <img
                      src={require("../../../src/assets/images/stevenPicture.jpeg")}
                      alt="Steven"
                      width={200}
                      height={200}
                      style={{ borderRadius: "50%", margin: "auto" }}
                    />
                  </div>
                  <div
                    className="team-name mt-8"
                    style={{ textAlign: "center", fontWeight: 700 }}
                  >
                    Steven Deves-Girain
                  </div>
                  <div
                    className="team-position"
                    style={{ textAlign: "center", fontWeight: 500 }}
                  >
                    Co-Fondateur
                  </div>
                  <div>
                    <a
                      href="https://linkedin.com/in/steven-deves-girain"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={require("../../../src/assets/images/linkedinLogo.png")}
                        height={25}
                        width={25}
                        style={{ borderRadius: 2, margin: "auto" }}
                        alt="linkedin"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>

      <section
        {...props}
        className={outerClasses}
        style={{ marginTop: 80, marginBottom: 80 }}
      >
        <div className="container">
          <SectionHeader
            data={sectionHeaderPartenaire}
            className="center-content"
          />
          <div className="partenairesContainer">
            {/* Partenaires*/}
            <div className="partenairesItem">
              <img
                src={require("../../../src/assets/images/geeps-logo.png")}
                width={250}
                height={130}
                alt="partenaire"
              />
            </div>
            <div className="partenairesItem">
              <img
                src={require("../../../src/assets/images/geeps-logo.png")}
                width={250}
                height={130}
                alt="partenaire"
              />
            </div>
            <div className="partenairesItem">
              <img
                src={require("../../../src/assets/images/geeps-logo.png")}
                width={250}
                height={130}
                alt=""
              />
            </div>
          </div>
          <div className="partenairesContainer">
            {/* Partenaires*/}
            <div className="partenairesItem">
              <img
                src={require("../../../src/assets/images/geeps-logo.png")}
                width={250}
                height={130}
                alt="partenaire"
              />
            </div>
            <div className="partenairesItem">
              <img
                src={require("../../../src/assets/images/geeps-logo.png")}
                width={250}
                height={130}
                alt="partenaire"
              />
            </div>
            <div className="partenairesItem">
              <img
                src={require("../../../src/assets/images/geeps-logo.png")}
                width={250}
                height={130}
                alt="partenaire"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
