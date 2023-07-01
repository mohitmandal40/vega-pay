// pages/CardSale.tsx
import React, { useState } from 'react';
import { FormControl, Select, MenuItem, Button } from '@mui/material';

interface Corporate {
  id: number;
  name: string;
}

const CardSale: React.FC = () => {
  const [corporate, setCorporate] = useState('');
  const [corporateData, setCorporateData] = useState<Corporate[]>([]);


  const handleCorporateChange = (event: any) => {
    setCorporate(event.target.value as string);
  };

  // Fetch corporate data from API and set it in state
  const fetchCorporateData = () => {
    // Make API call to fetch corporate data and setCorporate with the response data
    const dummyCorporateData: Corporate[] = [
      { id: 1, name: 'Corporate 1' },
      { id: 2, name: 'Corporate 2' },
    ];
    setCorporateData(dummyCorporateData);
  };

  // Handle card sale
  const handleCardSale = () => {
    // Logic to handle card sale
    console.log(`Card sale for corporate: ${corporate}`);
  };

  return (
    <div className="card-sale">
      <h1>Card Sale</h1>
      <FormControl>
        <Select value={corporate} onChange={handleCorporateChange}>
          <MenuItem value="Corporate 1">Corporate 1</MenuItem>
          <MenuItem value="Corporate 2">Corporate 2</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={fetchCorporateData}>
        Fetch Corporate Data
      </Button>
      <Button variant="contained" onClick={handleCardSale}>
        Sell Card
      </Button>
    </div>
  );
};

export default CardSale;
