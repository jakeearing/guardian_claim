import React from 'react';
import Header from '../components/nav/Header.js';
import Footer from '../components/nav/Footer.js';
import content from '../content.json';
import '../styles/terms-privacy.css';

export default function PrivacyPolicy() {
  const privacyPolicyContent = content.privacyPolicy;

  return (
    <div>
      <Header />
      <div className="container">
        <div className="terms-privacy-container">
          <div className="terms-privacy-content">
            <h1>{privacyPolicyContent.title}</h1>
            <p>{privacyPolicyContent.content}</p>
            <ol>
              {privacyPolicyContent.sections.map((section, index) => (
                <li key={index}>
                  <h2>{section.title}</h2>
                  <p>{section.content}</p>
                  {section.sections && (
                    <ol>
                      {section.sections.map((subsection, subIndex) => (
                        <li key={subIndex}>
                          <h3>{subsection.title}</h3>
                          <p>{subsection.content}</p>
                        </li>
                      ))}
                    </ol>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
