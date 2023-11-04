import { FormEvent } from "react";
import "../../page/setting/Style.scss";
import { useAppSelector } from "../../store/app/hook";
import { useUpdateNameTitleMutation } from "../../store/service/userApi";
import {
  IApiResponse,
  IResponse,
  catchResponse,
} from "../../utils/catchResponse";
import toast from "react-hot-toast";

export default function LanguageInfo() {
  const { name, title, email } = useAppSelector(
    (state) => state.local.userReducer
  );
  const [updateNameTitle] = useUpdateNameTitleMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const formName = (
      form.querySelector('input[name="formName"]') as HTMLInputElement
    )?.value;
    const formTitle = (
      form.querySelector('input[name="formTitle"]') as HTMLInputElement
    )?.value;

    const result = await updateNameTitle({
      name: formName,
      title: formTitle,
      email,
    });

    const response = catchResponse(result as IResponse) as IApiResponse;

    if (response.success) toast.success("Updated successfully!");

    form.reset();
  };

  return (
    <div className="name-title-section">
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Name & Title
      </p>
      <form onSubmit={handleSubmit}>
        <div className="name-section">
          <div>
            <p className="name-title"> Type Name </p>
            <input type="text" name="formName" placeholder={name} />
          </div>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <p className="name-title"> Type Title </p>
            <input
              type="text"
              name="formTitle"
              placeholder={title || "Anonymous... 🦧"}
            />
          </div>
        </div>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <button type="submit" className="save-btn">
            {" "}
            Save all{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
