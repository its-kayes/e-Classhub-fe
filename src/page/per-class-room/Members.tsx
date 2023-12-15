import "./Members.scss";

export default function Members() {
  return (
    <div>
      {/* // List of Pending student */}
      <section className="pending-box">
        <h3 className="title"> List of Pending student </h3>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Student Email</th>
                <th>Student Gender</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nguyen Van A</td>
                <td>mail here</td>
                <td>123456789</td>
                <td className="status-box">
                  <button className="status-pending"> Pending </button>
                </td>
              </tr>

              <tr>
                <td>Nguyen Van A</td>
                <td>mail here</td>
                <td>123456789</td>
                <td className="status-box">
                  <button className="status-pending"> Pending </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* // List of Joined student */}
      <section className="joined-box">
        <h3 className="title"> List of Joined student </h3>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Student Email</th>
                <th>Student Gender</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nguyen Van A</td>
                <td>mail here</td>
                <td>123456789</td>
                <td className="status-box">
                  <button className="status-joined"> Joined </button>
                </td>
              </tr>

              <tr>
                <td>Nguyen Van A</td>
                <td>mail here</td>
                <td>123456789</td>
                <td className="status-box">
                  <button className="status-joined"> Joined </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
