import '../../assets/auth.css'

export default function Login() {
  
  return (
    <form>
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input  
            id="password" type="password" name="password"/>
        </div>
        <div className="control no-margin">
          <label htmlFor="confirmPassword">Password</label>
          <input  
            id="confirmPassword" type="password" name="confirmPassword" 
           
        />
        </div>
      </div>

      <p className="form-actions">
        <button className="button" type='submit'>Login</button>
      </p>
    </form>
  );
}