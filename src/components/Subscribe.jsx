import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full px-4 py-16 bg-black text-white text-center">
      <h1>Join Our DeFi Community</h1>
      <div className="py-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="py-3 rounded-3xl mr-3 pl-3 text-black outline-none"
        />
        <button>Sign Up</button>
      </div>
      <div className="flex items-center justify-center py-2">
        <input type="checkbox" className="mr-2 " />
        <p>Yes, I agree to receive email communications from DeFi</p>
      </div>
    </div>
  );
};

export default Subscribe;
