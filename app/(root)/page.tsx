import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const page = () => {
  const loggedIn = {firstName : "Harsadhani" , lastName : "Chatterjee",  email : "chatterjee@gmail.com"}

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
        <HeaderBox 
        type="greeting"
        title="Welcome"
        user={loggedIn?.firstName || "Guest"}
    subtext="Access and Manage your account and transactions"
        />

        <TotalBalanceBox 
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={121342.50}/>
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance : 12500.00},{}]}/>
    </section>
  );
};

export default page;
