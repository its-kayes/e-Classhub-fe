import "../../page/setting/Style.scss";

export default function GeneralInfo() {
  return (
    <div className="general-info-section">
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "20px",
          marginTop: "50px",
        }}
      >
        General information
      </p>

      <div className="all-input-container">
        <div className="first-part">
          <div className="input-container">
            <div>
              <p className="title"> First Name </p>
              <input type="text" placeholder="Emrul Kayes" />
            </div>

            <div>
              <p className="title"> Country </p>
              <input type="text" placeholder="Bangladesh" />
            </div>

            <div>
              <p className="title"> Address </p>
              <input type="text" placeholder="e.g. California" />
            </div>

            <div>
              <p className="title"> Phone Number </p>
              <input type="text" placeholder="e.g. +(12)3456 789" />
            </div>

            <div>
              <p className="title"> Organization </p>
              <input type="text" placeholder="Themesberg" />
            </div>

            <div>
              <p className="title"> Development </p>
              <input type="text" placeholder="Development" />
            </div>
          </div>
        </div>

        <div className="second-part">
          <div className="input-container">
            <div>
              <p className="title"> Last Name </p>
              <input type="text" placeholder="Lean" />
            </div>

            <div>
              <p className="title"> City </p>
              <input type="text" placeholder="e.g. San Francisco" />
            </div>

            <div>
              <p className="title"> Email </p>
              <input type="text" placeholder="kayes.ek8@gmail.com" />
            </div>

            <div>
              <p className="title"> Birthday </p>
              <input type="text" placeholder="15/08/1990" />
            </div>

            <div>
              <p className="title"> Role </p>
              <input type="text" placeholder="Teacher" />
            </div>

            <div>
              <p className="title"> Zip/Postal code </p>
              <input type="text" placeholder="1230" />
            </div>
          </div>
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
