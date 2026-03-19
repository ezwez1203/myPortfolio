import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <svg
          className="raw_logo"
          width="400"
          height="200"
          viewBox="0 0 400 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hexagon outline */}
          <path
            className="myHexagon"
            d="M200 20 L260 55 L260 125 L200 160 L140 125 L140 55 Z"
            stroke={theme.body}
            strokeWidth="3"
            fill="none"
          />
          <path
            className="myHexagon"
            d="M200 30 L250 60 L250 120 L200 150 L150 120 L150 60 Z"
            stroke={theme.body}
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          />

          {/* "L" letter inside hexagon */}
          <text
            className="letter"
            x="200"
            y="105"
            textAnchor="middle"
            dominantBaseline="middle"
            fill={theme.body}
            fontSize="52"
            fontFamily="'Georgia', serif"
            fontWeight="bold"
          >
            L
          </text>
        </svg>

        {/* Name text animation */}
        <div
          style={{
            overflow: "hidden",
            marginTop: "20px",
          }}
        >
          <h1
            className="splash-name"
            style={{
              color: theme.body,
              fontSize: "42px",
              fontWeight: "300",
              letterSpacing: "12px",
              textTransform: "uppercase",
              margin: 0,
              fontFamily: "'Georgia', serif",
            }}
          >
            Lucius
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className="splash-subtitle"
          style={{
            color: theme.body,
            fontSize: "14px",
            fontWeight: "300",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginTop: "12px",
            opacity: 0,
            fontFamily: "sans-serif",
          }}
        >
          CTO &amp; TDA Researcher
        </p>

        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html: `
        .myHexagon {
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          animation: dash 2s ease-in-out forwards 0.3s;
        }

        .letter {
          opacity: 0;
          animation: fadein 1.5s ease forwards 1.5s;
        }

        .splash-name {
          opacity: 0;
          transform: translateY(20px);
          animation: slideUp 1s ease forwards 2s;
        }

        .splash-subtitle {
          animation: fadein 1.5s ease forwards 2.8s !important;
        }

        @keyframes dash {
          from { stroke-dashoffset: 800; }
          to { stroke-dashoffset: 0; }
        }

        @keyframes fadein {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `,
            }}
          />
        </defs>
      </div>
    );
  }
}

export default LogoLoader;
