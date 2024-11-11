// Import CSS
import "./authent.css";

// Import data
//import { User } from "../data library/users";

function authent() {
  const handleEmailInput = () => {
    <h1>Hello Admin</h1>;
  };

  const handlePass = () => {
    <h1>Hello Admin</h1>;
  };
  return (
    <div className="authentication">
      <div className="authentication-container">
        <h1>Welcome To Tezza Business Solutions</h1>
        <div className="authentication-form">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleEmailInput}
          />

          <label htmlFor="">Password</label>
          <input
            type="password"
            name="email"
            placeholder="Password"
            onChange={handlePass}
          />
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default authent;
