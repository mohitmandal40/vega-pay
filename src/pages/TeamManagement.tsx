// pages/TeamManagement.tsx
import React, { useState } from 'react';
import { FormControl, Select, MenuItem, Button, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

interface User {
  id: number;
  role: string;
  branch?: string;
}

const TeamManagement: React.FC = () => {
  const [role, setRole] = useState('');
  const [branch, setBranch] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  const handleRoleChange = (event: any) => {
    setRole(event.target.value as string);
  };

  const handleBranchChange = (event: any) => {
    setBranch(event.target.value as string);
  };

  // Fetch users from API and set them in state
  const fetchUsers = () => {
    // Make API call to fetch users and setUsers with the response data
    const dummyUsers: User[] = [
      { id: 1, role: 'Branch User', branch: 'Branch 1' },
      { id: 2, role: 'Branch User', branch: 'Branch 2' },
      { id: 3, role: 'Corporate Admin' },
    ];
    setUsers(dummyUsers);
  };

  // Create a new account for the user with the specified ID
  const createAccount = (userId: number) => {
    // Logic to create a new account
    console.log(`Create account for user with ID: ${userId}`);
  };

  // View account details for the user with the specified ID
  const viewAccountDetails = (userId: number) => {
    // Logic to view account details
    console.log(`View account details for user with ID: ${userId}`);
  };

  return (
    <div className="team-management">
      <h1>Team Management</h1>
      <FormControl>
        <Select value={role} onChange={handleRoleChange}>
          <MenuItem value="branch">Branch User</MenuItem>
          <MenuItem value="corporate">Corporate Admin</MenuItem>
        </Select>
      </FormControl>
      {role === 'branch' && (
        <FormControl>
          <Select value={branch} onChange={handleBranchChange}>
            <MenuItem value="Branch 1">Branch 1</MenuItem>
            <MenuItem value="Branch 2">Branch 2</MenuItem>
          </Select>
        </FormControl>
      )}
      <Button variant="contained" onClick={fetchUsers}>
        Fetch Users
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Branch</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.branch || '-'}</TableCell>
              <TableCell>
                {user.branch ? (
                  <Button variant="outlined" onClick={() => viewAccountDetails(user.id)}>
                    View
                  </Button>
                ) : (
                  <Button variant="outlined" onClick={() => createAccount(user.id)}>
                    Create Account
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TeamManagement;
