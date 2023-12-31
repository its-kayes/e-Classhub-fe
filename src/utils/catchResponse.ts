import toast from "react-hot-toast";

interface SuccessResponse {
  data: {
    success: boolean;
    message: string;
    statusCode: number;
    data: unknown;
    meta?: {
      page: number;
      limit: number;
      total?: number;
    };
  };
}

interface ErrorResponse {
  error: {
    data: {
      success: boolean;
      statusCode: number;
      message: string;
      errorMessages: {
        path: string;
        message: string;
      }[];
    };
  };
}

export const catchResponse = (result: SuccessResponse | ErrorResponse) => {
  if ("data" in result && result.data.success) {
    return result.data; // don't change return type
  } else if ("error" in result && "data" in result.error) {
    const errorData = result.error.data as {
      success: boolean;
      statusCode: number;
      message: string;
      errorMessages: {
        path: string;
        message: string;
      }[];
    };
    toast.error(
      `${errorData.message}! ${errorData.errorMessages
        ?.map((error) => error.message)
        .join(", ")}`
    );

    return result.error.data;
  } else {
    toast.error("Something went wrong on client!");
    return result;
  }
};

export type IResponse = SuccessResponse | ErrorResponse;

export type IApiResponse = {
  success: boolean;
  message: string;
  statusCode: number;
  data?: unknown;
  meta?: {
    page: number;
    limit: number;
    total?: number;
  };
  errorMessages?: {
    path: string;
    message: string;
  }[];
};
