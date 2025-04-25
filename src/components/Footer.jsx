import React from "react";

function Footer() {
  return (
    <div>
      <footer
        className="footer"
        style={{
          backgroundColor: "#111",
          color: "white",
          padding: "40px 20px",
          fontSize: "14px",
        }}
      >
        <div
          className="footer-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          <div className="footer-section brand">
            <div
              className="logo"
              style={{
                display: " flex",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: "16px",
                marginBottom: "10px",
              }}
            >
              <i class="fa-brands fa-youtube"></i>
              <span>Media-Player</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur,
              <br /> adipisicing elit. Impedit velit placeat quasi
              <br /> animi maxime natus vero aspernat
              <br /> blanditiis magni, molestias
            </p>
          </div>

          <div className="footer-section">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#" style={{ textDecoration: " none" }}>
                  Landing Page
                </a>
              </li>
              <li>
                <a href="#" style={{ textDecoration: " none" }}>
                  Home Page
                </a>
              </li>
              <li>
                <a href="#" style={{ textDecoration: " none" }}>
                  Watch History
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Guides</h3>
            <ul>
              <li>
                <a href="#" style={{ textDecoration: " none" }}>
                  React
                </a>
              </li>
              <li>
                <a href="#" style={{ textDecoration: " none" }}>
                  React Bootstrap
                </a>
              </li>
              <li>
                <a href="#" style={{ textDecoration: " none" }}>
                  Bootswatch
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <div
              className="subscribe"
              style={{ display: " flex", marginBottom: "10px" }}
            >
              <input
                type="email"
                placeholder="Enter your Email ID"
                style={{
                  padding: "6px",
                  flex: "1",
                  borderRadius: "4px 0 0 4px",
                  border: " none",
                  outline: " none",
                }}
              />
              <button
                style={{
                  padding: " 6px 12px",
                  backgroundColor: "orange",
                  color: "white",
                  border: " none",
                  borderRadius: "0 4px 4px 0",
                  cursor: "pointer",
                }}
              >
                {" "}
                Subscribe
              </button>
            </div>
            <div
              className="social-icons"
              style={{
                display: "flex",
                gap: "12px",
                fontSize: "18px",
                marginTop: "10px",
              }}
            >
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-facebook"></i>
            </div>
          </div>
        </div>
        <div
          className="copyright"
          style={{
            textAlign: "center",
            marginTop: "30px",
            fontSize: " 13px",
            color: " #bbb",
            borderTop: " 1px solid #333",
            paddingTop: "10px",
          }}
        >
          Copyright © 2023 Media Player. Built with React.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
