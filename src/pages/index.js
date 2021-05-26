import * as React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { SiGmail } from "react-icons/si";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 50,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 20,
  color: "#333",
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Welcome,
        <br />
        <span style={headingAccentStyles}>
          — currently the site is under construction.
        </span>
      </h1>
      <article>
        <div className={paragraphStyles}>
          <p>
            Feel free to reach out in the meanwhile.
            <br />
          </p>
          <span> — Gabriel M.</span>
        </div>
        <br />
        <a
          style={linkStyle}
          href="https://www.linkedin.com/in/gabriel-mongalo-939119a0/"
        >
          <IoLogoLinkedin size="30px" />
        </a>{" "}
        <a style={linkStyle} href="mailto:gmongalo90@gmail.com">
          <SiGmail size="30px" />
        </a>
      </article>
    </main>
  );
};

export default IndexPage;
