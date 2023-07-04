import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeading,
  TableRow,
} from "../components/TeamManagement/UserTable/UserTable";
import UserInfo from "../components/TeamManagement/UserInfo";
import SearchBar from "../components/common/SearchBar";
import Container from "../components/common/Container";
import { capitalizeWords } from "../utils/helper";
import { AccessToken } from "../constants/token";

import classes from "./TeamManagement.module.css";

const a = [
  {
    userId: "919f11bc-228a-4fde-9c6d-795161be5a43",
    clientId: "8dece149-ff6a-48b7-8e62-c00623ac5673",
    platformId: "6a33b8ac-82b3-45b5-b0f1-f453378c4445",
    platformName: "FOREX_BRANCH",
    name: "Daniel",
    mobileNumber: "7346819189",
    email: "daniel@gmail.com",
    address: "jew kewjk",
    idType: "PAN",
    idNumber: "AHDJI0290P",
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
  },
];
const TeamManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://prod-api.vegapay.tech/roleManagement/listUsersByClient/8dece149-ff6a-48b7-8e62-c00623ac5673",
          {
            method: "Get",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${AccessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data: User[] = await response.json();
        console.log("asldkjf", data);
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchQuery: string) => {
    const keywords = searchQuery.toLowerCase().split(" ");

    const filtered = users.filter((user) => {
      const userKeywords = user.name.toLowerCase().split(" ");

      return keywords.every((keyword) =>
        userKeywords.some((userKeyword) => userKeyword.includes(keyword))
      );
    });

    setFilteredUsers(filtered);
  };

  const addUser = (userData: User) => {
    setUsers((prevUsers) => [...prevUsers, userData]);
    setFilteredUsers((prevFilteredUsers) => [...prevFilteredUsers, userData]);
  };

  return (
    <div className={classes.teamManagement}>
      <Container style={{ padding: "16px" }}>
        <UserInfo onAddUser={addUser} />
      </Container>
      <Container style={{ padding: "16px" }}>
        <SearchBar
          placeholder="Search by Mobile or Customer"
          onSearch={handleSearch}
        />
      </Container>
      {filteredUsers && (
        <Container style={{ padding: "16px", overflowX: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeading>Name</TableHeading>
                <TableHeading>User ID</TableHeading>
                <TableHeading>Email</TableHeading>
                <TableHeading>Allotted Roles</TableHeading>
                <TableHeading>Status</TableHeading>
                <TableHeading>Actions</TableHeading>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.userId}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.userId}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {capitalizeWords(
                      user.userRoles[0].roleName.split("_").join(" ")
                    )}
                  </TableCell>
                  <TableCell>{user.userRoles[0].checkerMakerStatus}</TableCell>
                  <TableCell>
                    <button>Status Checker</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Container>
      )}
    </div>
  );
};

export default TeamManagement;
