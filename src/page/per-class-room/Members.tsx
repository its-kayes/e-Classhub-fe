import { useEffect, useState } from "react";
import { usePeopleListMutation } from "../../store/service/peopleApi";
import "./Members.scss";
import {
  IApiResponse,
  IResponse,
  catchResponse,
} from "../../utils/catchResponse";
import Spinner from "../../elements/spinner/Spinner";

type IPeopleList = {
  status: string;
  requestEmail: string;
  userName: string;
  gender: string;
  isVerified: boolean;
  _id: string;
};
export default function Members() {
  const [peopleList, { isLoading }] = usePeopleListMutation();

  const [allPeopleList, setAllPeopleList] = useState<IPeopleList[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await peopleList({
        status: "joined",
        email: "kayes.ek8@gmail.com",
        room: "UX28-TEST-7NO5",
      });

      const response = catchResponse(
        result as unknown as IResponse
      ) as IApiResponse;

      console.log(response.data);
      setAllPeopleList(response.data as IPeopleList[]);
    }

    fetchData();
  }, [peopleList]);

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
              {isLoading ? (
                // <p> Loading...</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "90vw",
                  }}
                >
                  <Spinner></Spinner>
                </div>
              ) : (
                allPeopleList?.map((item) => (
                  <tr>
                    <td>{item.userName}</td>
                    <td>{item.requestEmail}</td>
                    <td>{item.gender}</td>
                    <td className="status-box">
                      <button className="status-joined">
                        {item.status.charAt(0).toUpperCase() +
                          item.status.slice(1)}
                        {/* {item.status.toUpperCase()} */}
                      </button>
                    </td>
                  </tr>
                ))
              )}
              {}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
