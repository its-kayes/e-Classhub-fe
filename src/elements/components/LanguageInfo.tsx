import "../../page/setting/Style.scss";

export default function LanguageInfo() {
  return (
    <div className="language-time-section">
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        {" "}
        Language & Time{" "}
      </p>

      <div className="language-section">
        <div>
          <p className="language-title"> Select language </p>
          <input type="text" placeholder="English (UK)" />
        </div>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <p className="language-title"> Time zone </p>
          <input type="text" placeholder="GMT+01:00" />
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
