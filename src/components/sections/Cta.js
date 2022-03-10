import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import "./Additional.css";


const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  return (
    <section
      {...props}
      className={outerClasses}
      style={{ marginBottom: 30 }}
      id="contact"
    >
      <div className="container">
        <div className={innerClasses}>
          <div className="cta-slogan" style={{ margin: "auto" }}>
            <h3
              className="m-0"
              style={{ color: "white", textAlign: "center!important" }}
            >
              Contactez-nous :
              <a href="mailto:contact@hemeris.fr" className="myLinkMail">
                {" "}
                contact@hemeris.fr
              </a>
            </h3>
          </div>
          {/*<div className="cta-action">
            <a href="mailto:contact@hemeris.fr">
              <h3 className="m-0" style={{ color: "white" }}>
                contact@hemeris.fr
              </h3>
            </a>
  </div>*/}
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;