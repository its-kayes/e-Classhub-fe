import "../../page/setting/Style.scss";

export default function PasswordInfo() {
  return (
    <div className="password-info-section">
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "20px",
          marginTop: "50px",
        }}
      >
        Password information
      </p>

      <div className="input-container">
        <div>
          <p className="title"> Current password </p>
          <input type="password" placeholder="Enter your current password" />
        </div>

        <div>
          <p className="title"> New password </p>
          <input type="text" placeholder="Enter your new password" />
        </div>

        <div>
          <p className="title"> Confirm new password </p>
          <input type="text" placeholder="Confirm your new password" />
        </div>
      </div>

      <div className="password-requirements-box">
        <p className="title">Password requirements:</p>
        <p>Ensure that these requirements are met:</p>
        <div>
          <ul>
            <li>At least 10 characters (and up to 100 characters)</li>
            <li>At least one lowercase character</li>
            <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
            <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
          </ul>
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <button className="save-btn"> Save all </button>
      </div>
    </div>
  );
}
