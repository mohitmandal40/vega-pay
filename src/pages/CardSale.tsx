import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeading,
  TableCell,
  Pagination,
} from "../components/TeamManagement/UserTable/UserTable";
import { AccessToken } from "../constants/token";
import SearchBar from "../components/common/SearchBar";
import Container from "../components/common/Container";
import Modal from "../components/common/Modal";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

type CustomChangeEvent<T> = {
  target: {
    value: T;
  };
};

const CardSale: React.FC = () => {
  const [users, setUsers] = useState<APIResponse>();
  const [isLoading, setIsLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(30);

  const [role, setRole] = useState("Branch Program");
  const [roleType, setRoleType] = useState("");

  const handleSearch = (searchQuery: string) => {
    setSearchTerm(searchQuery);
  };

  const pageNumAndSize =
    (setData: React.Dispatch<React.SetStateAction<number>>, count: number) =>
    () =>
      setData((prevState) => prevState + count);

  const handlePrevPage = () => {
    pageNumAndSize(setPage, -1)();
  };

  const handleNextPage = () => {
    pageNumAndSize(setPage, 1)();
  };

  const handleOpenModal = () => {
    // setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://prod-api.vegapay.tech/forex/account/search",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${AccessToken}`,
            },
            body: JSON.stringify({
              value: searchTerm,
              branchId: "4ff819ab-00ea-45b8-9544-205407c0680c",
              page: page,
              pageSize: pageSize,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data: APIResponse = await response.json();

        console.log("first", data);
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page]);

  const handleInputChange =
    (setState: React.Dispatch<React.SetStateAction<string>>) =>
    (event: CustomChangeEvent<string>) => {
      setState(event.target.value);
    };

  return (
    <div className="card-sale">
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <FormControl size="small" sx={{ minWidth: "46%" }}>
          <InputLabel>Program Type</InputLabel>
          <Select
            labelId="role-type-label"
            value={roleType}
            label="Program Name"
            onChange={handleInputChange(setRoleType)}
          >
            {role === "Branch Program"
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
      </Modal>
      <Container style={{ padding: "16px" }}>
        <div>
          <h2>New Card Sale</h2>
          <p>Issue New Card</p>
          <div>
            <div>Kit</div>
            <div>Kit</div>
            <div>Kit</div>
          </div>
        </div>
      </Container>
      <SearchBar
        placeholder="Search by Mobile or Customer"
        onSearch={handleSearch}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableHeading>Customer Name</TableHeading>
              <TableHeading>Card No</TableHeading>
              <TableHeading>Email Id</TableHeading>
              <TableHeading>Mobile No.</TableHeading>
              <TableHeading>Card Network</TableHeading>
              <TableHeading>Action</TableHeading>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.records?.map((user) => (
              <TableRow key={user?.customer?.customerId}>
                <TableCell>{user?.customer?.fullName}</TableCell>
                <TableCell>{user?.card?.cardNumber}</TableCell>
                <TableCell>{user?.customer?.emailId}</TableCell>
                <TableCell>{user?.customer?.mobileNumber}</TableCell>
                <TableCell>{user?.card?.cardNetwork}</TableCell>
                <TableCell>
                  <button onClick={handleOpenModal}>
                    {!user?.account ? "Create Account" : "View"}
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      {/* <div>
        {users && (
          <div>
            <button onClick={handlePrevPage} disabled={page === 0}>
              Prev
            </button>
            <span>
              Page {page + 1} of {Math.ceil(users?.records?.length / pageSize)}
            </span>
            <button
              onClick={handleNextPage}
              // disabled={
              //   page === Math.ceil(users?.records?.length / pageSize) - 1
              // }
            >
              Next
            </button>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default CardSale;
