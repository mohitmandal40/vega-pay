import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import classes from "./UserInfo.module.css";

type CustomChangeEvent<T> = {
  target: {
    value: T;
  };
};

interface UserInfoProps {
  onAddUser: (userData: User) => void;
}

const UserInfo: React.FC<UserInfoProps> = ({ onAddUser }) => {
  const [textValue, setTextValue] = useState("");
  const [textValueIsTouched, setTextValueIsTouched] = useState(false);
  const [telValue, setTelValue] = useState("");
  const [telValueIsTouched, setTelValueIsTouched] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [emailValueIsTouched, setemailValueIsTouched] = useState(false);
  const [address, setAddress] = useState("");
  const [addressIsTouched, setaddressIsTouched] = useState(false);

  const [role, setRole] = useState("Branch User");
  const [roleIsTouched, setRoleIsTouched] = useState(false);
  const [roleType, setRoleType] = useState("");
  const [roleTypeIsTouched, setRoleTypeIsTouched] = useState(false);
  const [id, setId] = useState("Pan");
  const [idIsTouched, setIdIsTouched] = useState(false);
  const [idNumber, setIdNumber] = useState("");
  const [idNumberIsTouched, setIdNumberIsTouched] = useState(false);

  let textValueIsValid = textValue.trim() !== "";
  let textValueIsInvalid = !textValueIsValid && textValueIsTouched;

  let telValueIsValid = telValue.trim() !== "";
  let telValueIsInvalid = !telValueIsValid && telValueIsTouched;

  let emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let emailIsValid = textValue.trim() !== "" && emailRegex.test(emailValue);
  let emailIsInvalid = !emailIsValid && emailValueIsTouched;

  let addressIsValid = address.trim() !== "";
  let addressIsInvalid = !addressIsValid && addressIsTouched;

  let roleIsValid = role.trim() !== "";
  let roleIsInvalid = !roleIsValid && roleIsTouched;

  let roleTypeIsValid = roleType.trim() !== "";
  let roleTypeIsInvalid = !roleTypeIsValid && roleTypeIsTouched;

  let idIsValid = id.trim() !== "";
  let idIsInvalid = !idIsValid && idIsTouched;

  let idNumberIsValid = idNumber.trim() !== "";
  let idNumberIsInvalid = !idNumberIsValid && idNumberIsTouched;

  let formIsValid = false;
  formIsValid =
    textValueIsValid &&
    telValueIsValid &&
    emailIsValid &&
    addressIsValid &&
    roleIsValid &&
    roleTypeIsValid &&
    idIsValid &&
    idNumberIsValid;

  const handleInputBlur =
    (setState: React.Dispatch<React.SetStateAction<boolean>>) => () =>
      setState(true);

  const handleInputChange =
    (setState: React.Dispatch<React.SetStateAction<string>>) =>
    (event: CustomChangeEvent<string>) => {
      setState(event.target.value);
    };

  console.log("textValueIsInvalid", textValueIsInvalid);

  const addUserHandler = () => {
    if (!formIsValid) {
      return;
    }

    console.log(
      "first",
      textValue,
      telValue,
      emailValue,
      address,
      role,
      roleType,
      id,
      idNumber
    );

    const newUser: User = {
      userId: `${textValue} 919f11bc-228a-4fde-9c6d-795161be5a43`,
      clientId: "8dece149-ff6a-48b7-8e62-c00623ac5673",
      platformId: "6a33b8ac-82b3-45b5-b0f1-f453378c4445",
      platformName: "FOREX_BRANCH",
      name: textValue,
      mobileNumber: telValue,
      email: emailValue,
      address: address,
      idType: role,
      idNumber: idNumber,
      status: "ACTIVE",
      mccUser: true,
      userRoles: [
        {
          checkerMakerId: "f0556255-540c-4bab-b3e2-f4dadf30d12b",
          checkerMakerFlag: null,
          checkerMakerStatus: "APPROVED",
          id: "c4af4b5a-22a5-4d24-99ba-faf26691eb42",
          userId: "919f11bc-228a-4fde-9c6d-795161be5a43",
          roleId: "08f3cd84-9c68-4c4e-b966-3a790969fd86",
          roleName: "FOREX_BRANCH_USER",
          status: "ACTIVE",
          createdAt: "2023-05-17T09:57:28.735+00:00",
          updatedAt: "2023-05-17T09:58:58.181+00:00",
        },
      ],
      createdAt: "2023-05-17T09:57:28.632+00:00",
      updatedAt: "2023-05-17T09:57:28.632+00:00",
      team: "OPERATIONS",
      isAdmin: false,
    };

    console.log(newUser);
    onAddUser(newUser);
    handleClear();
  };

  const handleClear = () => {
    setTextValue("");
    setTelValue("");
    setEmailValue("");
    setAddress("");
    setRole("");
    setRoleType("");
    setId("");
    setIdNumber("");
  };
  return (
    <div className={classes.inputContainer}>
      <div className={classes.PersonalInfo}>
        <h3 className={classes.inputHeading}>Personal Information</h3>
        <div className={classes.basicDetails}>
          <TextField
            label="Enter Name"
            variant="outlined"
            size="small"
            error={textValueIsInvalid}
            value={textValue}
            onChange={handleInputChange(setTextValue)}
            onBlur={handleInputBlur(setTextValueIsTouched)}
            sx={{ borderRadius: "10px" }}
          />
          <TextField
            label="Enter Mobile"
            variant="outlined"
            size="small"
            value={telValue}
            error={telValueIsInvalid}
            onChange={handleInputChange(setTelValue)}
            sx={{ borderRadius: "10px" }}
            onBlur={handleInputBlur(setTelValueIsTouched)}
          />
          <TextField
            label="Enter Email"
            variant="outlined"
            size="small"
            sx={{ borderRadius: "10px" }}
            value={emailValue}
            error={emailIsInvalid}
            onChange={handleInputChange(setEmailValue)}
            onBlur={handleInputBlur(setemailValueIsTouched)}
          />
        </div>
        <TextField
          label="Enter Address"
          variant="outlined"
          size="small"
          fullWidth
          value={address}
          sx={{ borderRadius: "10px" }}
          error={addressIsInvalid}
          onChange={handleInputChange(setAddress)}
          onBlur={handleInputBlur(setaddressIsTouched)}
        />
      </div>
      <div>
        <div className={classes.roleType}>
          <FormControl size="small" sx={{ minWidth: "48%" }}>
            <InputLabel>User Type</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              value={role}
              label="Select Role"
              error={roleIsInvalid}
              onChange={handleInputChange(setRole)}
              onBlur={handleInputBlur(setRoleIsTouched)}
              sx={{ borderRadius: "10px" }}
            >
              <MenuItem value="Branch User">Branch User</MenuItem>
              <MenuItem value="Corporate User">Corporate User</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: "48%" }}>
            <InputLabel>Role Type</InputLabel>
            <Select
              labelId="role-type-label"
              value={roleType}
              label="Role Type"
              error={roleTypeIsInvalid}
              onChange={handleInputChange(setRoleType)}
              onBlur={handleInputBlur(setRoleTypeIsTouched)}
              sx={{ borderRadius: "10px" }}
            >
              {role === "Branch User"
                ? [
                    <MenuItem key="latest" value="Latest">
                      Latest
                    </MenuItem>,
                    <MenuItem key="otcBranch" value="Otc Branch">
                      Otc Branch
                    </MenuItem>,
                    <MenuItem key="mainBranch" value="Main Branch">
                      Main Branch
                    </MenuItem>,
                  ]
                : [
                    <MenuItem key="Fantastic" value="Fantastic Frozen Bike">
                      Fantastic Frozen Bike
                    </MenuItem>,
                    <MenuItem key="CorpNew" value="Corp New">
                      Corp New
                    </MenuItem>,
                    <MenuItem key="CorpNew2" value="Corp New 2">
                      Corp New 2
                    </MenuItem>,
                    <MenuItem key="Corp4" value="Corp 4">
                      Corp 4
                    </MenuItem>,
                    <MenuItem key="Test" value="Test">
                      Test
                    </MenuItem>,
                  ]}
            </Select>
          </FormControl>
        </div>
        <div>
          <h3 className={`${classes.inputHeading} ${classes.govtIdInput}`}>
            Government ID Proof
          </h3>
          <div className={classes.govtId}>
            <FormControl size="small" sx={{ minWidth: "35%" }}>
              <InputLabel>User Type</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                value={id}
                error={idIsInvalid}
                label="Select Id"
                onChange={handleInputChange(setId)}
                onBlur={handleInputBlur(setIdIsTouched)}
              >
                <MenuItem value="Pan">Pan</MenuItem>
                <MenuItem value="Aadhar">Aadhar</MenuItem>
                <MenuItem value="License">License</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="ID Number"
              variant="outlined"
              size="small"
              sx={{ minWidth: "30%", borderRadius: "10px" }}
              error={idNumberIsInvalid}
              value={idNumber}
              onChange={handleInputChange(setIdNumber)}
              onBlur={handleInputBlur(setIdNumberIsTouched)}
            />
          </div>
        </div>
      </div>
      <div className={classes.addUserBtn}>
        <button onClick={handleClear}>Clear</button>
        <button onClick={addUserHandler} disabled={!formIsValid} style={{}}>
          Add User
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
