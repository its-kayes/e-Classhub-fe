export type IUserInfo = {
  id?: string;
  name?: string;
  email?: string;
  type?: "student" | "mentor";
  isVerified?: boolean;
  gender?: "male" | "female";
  dob?: Date;
  phone?: string;
  country?: string;
  city?: string;
  address?: string;
  postalCode?: number;
  title?: string;
  profilePicture?: string;
  facebookUrl?: string;
  websiteUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
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
