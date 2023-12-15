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

  const [allJoinedPeopleList, setAllJoinedPeopleList] = useState<IPeopleList[]>(
    []
  );

  const [allPendingPeopleList, setAllPendingPeopleList] = useState<
    IPeopleList[]
  >([]);

  useEffect(() => {
    async function fetchData() {
      const joinedResult = await peopleList({
        status: "joined",
        email: "kayes.ek8@gmail.com",
        room: "UX28-TEST-7NO5",
      });

      const pendingResult = await peopleList({
        status: "pending",
        email: "kayes.ek8@gmail.com",
        room: "UX28-TEST-7NO5",
      });

      const joinedResponse = catchResponse(
        joinedResult as unknown as IResponse
      ) as IApiResponse;

      const pendingResponse = catchResponse(
        pendingResult as unknown as IResponse
      ) as IApiResponse;

      console.log(pendingResponse.data);
      setAllJoinedPeopleList(joinedResponse.data as IPeopleList[]);
      setAllPendingPeopleList(pendingResponse.data as IPeopleList[]);
    }

    fetchData();
  }, [peopleList]);

  return (
    <div>
      {/* // List of Pending student */}
      <section className="pending-box">
        <h3 className="title"> List of Pending student </h3>
        {isLoading ? (
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
              {allPendingPeopleList?.map((item) => (
                <tr>
                  <td>{item.userName}</td>
                  <td>{item.requestEmail}</td>
                  <td>{item.gender}</td>
                  <td className="status-box">
                    <button className="status-pending">
                      {item.status.charAt(0).toUpperCase() +
                        item.status.slice(1)}
                      {/* {item.status.toUpperCase()} */}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* // List of Joined student */}
      <section className="joined-box">
        <h3 className="title"> List of Joined student </h3>
        <div>
          {isLoading ? (
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
                {allJoinedPeopleList?.map((item) => (
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
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </div>
  );
}
