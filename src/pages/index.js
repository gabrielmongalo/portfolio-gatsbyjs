import * as React from "react";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
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
          — currently the site is under construction{" "}
        </span>
      </h1>
      <article>
        <div className={paragraphStyles}>
          <p>
            If you need to, please{" "}
            <a style={linkStyle} href="mailto:gmongalo90@gmail.com">
              reach out
            </a>
            !
          </p>
        </div>
      </article>
    </main>
  );
};

export default IndexPage;
