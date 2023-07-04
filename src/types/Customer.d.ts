interface Customer {
  customerId: string;
  clientId: string;
  title: string | null;
  firstName: string;
  middleName: string | null;
  lastName: string;
  customerType: string;
  countryCode: string;
  mobileNumber: string;
  emailId: string;
  identity: any[];
  dob: string;
  gender: string;
  currentAddress: Address;
  isCurrentAddressPermanent: boolean | null;
  permanentAddress: Address;
  nationality: string | null;
  status: string;
  kycStatus: string | null;
  creationVector: string;
  selfieUrl: string | null;
  createdAt: string;
  updatedAt: string;
  communicationPinCode: string | null;
  riskScore: number | null;
  bureauScore: number | null;
  branchId: string;
  corporateId: string | null;
  docsUrl: string | null;
  makerCheckerId: string;
  makerCheckerStatus: string;
  fullName: string;
}

interface Address {
  id: number;
  line1: string;
  line2: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}

interface Records {
  account: any | null;
  card: any | null;
  customer: Customer;
  subWallets: any[] | null;
}

interface APIResponse {
  numberOfItems: number;
  page: number;
  records: Records[];
  totalItems: number;
  totalPages: number;
}
