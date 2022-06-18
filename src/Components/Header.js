import React from "react";

function Header({ totalIncome }) {
  return (
    <Header>
      <h1>Income Tracker</h1>
      <div className="total-income">Rs{totalIncome}</div>
    </Header>
  );
}

export default Header;
