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

export type ITracker = {
  email: string;
  network: INetwork;
  browser: IBrowser;
  engine: IEngine;
  os: IOs;
  device: IDevice;
  cpu: ICpu;
  location: ILocation;
  _id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  date?: string;
};

export type INetwork = {
  ip: string;
  isp: string;
  connection: string;
  proxy: boolean;
  vpn: boolean;
  tor: boolean;
};

export type IBrowser = {
  name: string;
  version: string;
  major: string;
};

export type IEngine = {
  name: string;
  version: string;
};

export type ILocation = {
  country: string;
  city: string;
  region: string;
  timezone: string;
  latitude: number;
  longitude: number;
  postal: string;
  org: string;
};

export type IDevice = {
  vendor: string;
  model: string;
  type: string;
};

export type IOs = {
  name: string;
  version: string;
};

export type ICpu = {
  architecture: string;
};

export type IAnnouncement = {
  description: string;
  materials: {
    url: string;
    _id: string;
  }[];
  date: string;
  id?: string;
  name: string;
};
