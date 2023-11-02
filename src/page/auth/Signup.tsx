import { Link } from "react-router-dom";
import RadioButtonsGroup from "../../elements/btn/RadioButtonsGroup";
import "./Style.scss";
import { FormEvent, useState } from "react";
import { IResponse, catchResponse } from "../../utils/catchResponse";
import { useSignUpMutation } from "../../store/service/userApi";
import toast from "react-hot-toast";

export default function Signup() {
  const [type, setType] = useState<string>("student");
  const [gender, setGender] = useState<string>("male");

  const [userApi] = useSignUpMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const password = (form.querySelector("#password") as HTMLInputElement)
      ?.value;
    const email = (form.querySelector("#email") as HTMLInputElement)?.value;
    const name = (form.querySelector("#name") as HTMLInputElement)?.value;
    const confirmPassword = (
      form.querySelector("#confirm-password") as HTMLInputElement
    )?.value;

    if (password !== confirmPassword) {
      return toast.error("Confirm Password does not match!");
    }

    // return console.log(password, email, confirmPassword, name, type, gender);

    const result = await userApi({
      password,
      email,
      name,
      type,
      gender,
    });

    catchResponse(result as IResponse);

    return form.reset();
  };

  const whoWeAreFields = [
    {
      label: "Student",
      value: "student",
    },
    {
      label: "Mentor",
      value: "mentor",
    },
  ];

  const genderFields = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
  ];
  // setType("student")
  return (
    <section className="login-section">
      <div className="video-tutorial">
        <img
          className="video-tutorial"
          src="../../../src/assets/video-tutorial.jpeg"
          alt="this is video tutorial image"
        />
      </div>
      <div className="login-form">
        <section className="login-form-box">
          <h1 className="title"> Welcome Back 👋🏻</h1>
          <p className="sub-title">
            Already have an account ?{" "}
            <Link to="/sign-in">
              <span> Login </span>
            </Link>
          </p>

          <form onSubmit={handleSubmit}>
            <div className="inp">
              <label htmlFor="email">Your Full Name</label>
              <input
                className="inp-box"
                type="text"
                id="name"
                placeholder="Enter your full name"
                name="name"
              />
            </div>

            <div className="inp">
              <label htmlFor="email">Email</label>
              <input
                className="inp-box"
                type="email"
                id="email"
                placeholder="Enter your email"
                name="email"
              />
            </div>

            <div className="inp">
              <label htmlFor="password">Password</label>
              <input
                className="inp-box"
                type="password"
                id="password"
                placeholder="*********"
                name="password"
              />
            </div>

            <div className="inp">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                className="inp-box"
                type="password"
                id="confirm-password"
                placeholder="*********"
                name="confirm-password"
              />
            </div>

            <div>
              <RadioButtonsGroup
                title="Gender ? 🤷"
                state={setGender}
                fields={genderFields}
              />
            </div>

            <br
              style={{
                paddingTop: "5px",
              }}
            />

            <div>
              <RadioButtonsGroup
                title="Who you are ? 🐥"
                state={setType}
                fields={whoWeAreFields}
              />
            </div>

            <div className="login-feature-box">
              <div className="remember-me-box">
                <input type="checkbox" id="remember" />
                <label className="remember-me" htmlFor="remember">
                  I accept the Terms and Conditions of the website{" "}
                  <span> Terms of Use </span>
                  and <span> Privacy Policy </span> of the website.
                </label>
              </div>
            </div>

            <button type="submit">Sign Up</button>
          </form>
        </section>
      </div>
    </section>
  );
}
