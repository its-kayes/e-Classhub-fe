import { PiCircleDashed } from "react-icons/pi";

export default function Spinner() {
  return (
    <div>
      <button disabled className="spinner-btn">
        <PiCircleDashed className="animate-spin text-xl" /> Loading
      </button>
    </div>
  );
}
