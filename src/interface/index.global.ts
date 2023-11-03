export type IUserInfo = {
  id: string;
  name: string;
  email: string;
  type: "student" | "mentor";
};

export type IClassroom = {
  classCode: string;
  className: string;
  mentorName: string;
  shortTitle: string;
};

export type ICreateClassInfo = {
  className: string;
  shortTitle: string;
  mentorEmail?: string;
  mentorName?: string;
};
