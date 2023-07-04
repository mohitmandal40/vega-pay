interface User {
  userId: string;
  clientId: string;
  platformId: string | null;
  platformName: string | null;
  name: string;
  mobileNumber: string;
  email: string;
  address: string;
  idType: string;
  idNumber: string;
  status: string;
  mccUser: boolean;
  userRoles: {
    checkerMakerId?: string | null;
    checkerMakerFlag?: string | null;
    checkerMakerStatus: string | null;
    id: string;
    userId: string;
    roleId: string;
    roleName: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  }[];
  createdAt: string;
  updatedAt: string;
  team: string;
  isAdmin: boolean;
}
