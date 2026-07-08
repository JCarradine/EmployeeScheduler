import "./Login.scss";

function Login() {
  return (
    <div className="login-card">
      {/*Login Header*/}
      <div className="login-card-header">Employee Scheduler</div>

      {/*Login Body or Login Form*/}
      <form className="login-card-body">
        <div className="form-input">
          <label className="input-label">Username</label>
          <input
            type="text"
            className="input-box"
            id="username"
            name="username"
            placeholder="Username"
          />
        </div>

        <div className="form-input">
          <label className="input-label">Password</label>
          <input
            type="text"
            className="input-box"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>

        {/*Login Footer*/}
        <div className="login-body-footer">
          <button className="submit-button">Submit</button>
          <div className="login-alert">
            Forgot login credentials? Ask manager or admin for help logging in.
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
