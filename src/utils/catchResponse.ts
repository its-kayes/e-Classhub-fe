import toast from "react-hot-toast";

interface SuccessResponse {
  data: {
    success: true;
    message: string;
  };
}

interface ErrorResponse {
  error: {
    data: {
      message: string;
    };
  };
}

export const catchResponse = (result: SuccessResponse | ErrorResponse) => {
  if ("data" in result && result.data.success) {
    toast.success(result.data.message);
  } else if ("error" in result && "data" in result.error) {
    const errorData = result.error.data as { message: string };
    toast.error(errorData.message);
  } else {
    toast.error("An error occurred while logging in.");
  }
};

export type IResponse = SuccessResponse | ErrorResponse;
