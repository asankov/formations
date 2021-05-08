import React from "react";

const Header = () => {
  const shouldShowSignup = false;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span
        style={{
          height: "70px",
          backgroundColor: "#370941",
          width: "80%",
          alignSelf: "flex-end",
          marginBottom: "10px",
        }}
      >
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <span
            style={{
              color: "#ABACA7",
              marginLeft: "15px",
              lineHeight: "70px",
              fontSize: "36px",
              fontWeight: "bold",
            }}
          >
            BUILD YOUR OWN PL TEAM
          </span>
          <span
            style={{ color: "white", marginRight: "15px", lineHeight: "70px" }}
          >
            {shouldShowSignup &&
              (
                <span style={{ fontWeight: "100", cursor: "pointer" }}>
                  Sign up{" "}
                </span>
              ) |
                (
                  <span style={{ cursor: "pointer", fontWeight: "bold" }}>
                    {" "}
                    Log In
                  </span>
                )}
          </span>
        </span>
      </span>
    </div>
  );
};

export default Header;
