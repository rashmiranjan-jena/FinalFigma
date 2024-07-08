import React, { useState } from 'react';
import Dropdown from './Dropdown';
import './Loads.css';

const data = {
  'Company 1': {
    'Account 1': [
      { date: '07/05/2024 01:04 PM', credit: '₹ 21,337', balance: '₹ 21,337', utr: '0104SLNEFTPL', account: 'AC0CF7RRUY407QHU' },
      { date: '04/05/2024 12:38 PM', credit: '₹ 21,337', balance: '₹ 21,337', utr: 'CMS4136431811', account: '0104SLNEFTPL' },
      { date: '06/07/2024 03:20 PM', credit: '₹ 8,500', balance: '₹ 44,837', utr: 'CMS4136431813', account: '0104SLNEFTPL' },
      { date: '07/08/2024 10:15 AM', credit: '₹ 10,200', balance: '₹ 55,037', utr: 'CMS4136431814', account: '0104SLNEFTPL' }
    ],
    'Account 2': [
      { date: '28/03/2024 05:09 PM', credit: '₹ 5,015.69', balance: '₹ 5,015.69', utr: 'CMS3956666735', account: 'AC0CF7RRUY407QHU' },
      { date: '19/03/2024 11:33 PM', credit: '₹ 16,000', balance: '₹ 16,000', utr: 'CMS3938564916', account: 'AC0CF7RRUY407QHU' },
      { date: '09/10/2024 02:00 PM', credit: '₹ 12,500', balance: '₹ 92,537', utr: 'CMS4136431816', account: '0104SLNEFTPL' },
      { date: '10/11/2024 08:45 AM', credit: '₹ 18,700', balance: '₹ 111,237', utr: 'CMS4136431817', account: '0104SLNEFTPL' },
      { date: '11/12/2024 04:15 PM', credit: '₹ 30,000', balance: '₹ 141,237', utr: 'CMS4136431818', account: '0104SLNEFTPL' }
    ],
  },
  'Company 2': {
    'Account 1': [
      { date: '15/02/2024 10:15 AM', credit: '₹ 10,000', balance: '₹ 10,000', utr: 'CMS3748564816', account: 'AC2CF7RRUY409XYZ' },
      { date: '10/01/2024 03:45 PM', credit: '₹ 8,000', balance: '₹ 8,000', utr: 'CMS1238564916', account: 'AC2CF7RRUY407ABC' },
      { date: '12/01/2025 09:00 AM', credit: '₹ 20,000', balance: '₹ 161,237', utr: 'CMS4136431819', account: '0104SLNEFTPL' },
      { date: '01/02/2025 01:30 PM', credit: '₹ 15,600', balance: '₹ 176,837', utr: 'CMS4136431820', account: '0104SLNEFTPL' },
      { date: '02/03/2025 11:15 AM', credit: '₹ 22,300', balance: '₹ 199,137', utr: 'CMS4136431821', account: '0104SLNEFTPL' }
    ],
    'Account 2': [
      { date: '05/01/2024 09:30 AM', credit: '₹ 12,000', balance: '₹ 12,000', utr: 'CMS6788564916', account: 'AC2CF7RRUY407DEF' },
      { date: '01/01/2024 01:15 PM', credit: '₹ 15,000', balance: '₹ 15,000', utr: 'CMS3458564916', account: 'AC2CF7RRUY407GHI' },
      { date: '03/04/2025 03:45 PM', credit: '₹ 28,400', balance: '₹ 227,537', utr: 'CMS4136431822', account: '0104SLNEFTPL' },
      { date: '04/05/2025 08:30 AM', credit: '₹ 17,900', balance: '₹ 245,437', utr: 'CMS4136431823', account: '0104SLNEFTPL' },
      { date: '05/06/2025 02:00 PM', credit: '₹ 19,800', balance: '₹ 265,237', utr: 'CMS4136431824', account: '0104SLNEFTPL' }
    ],
  },
};

const Transactions = () => {
  const [selectedCompany, setSelectedCompany] = useState('Company 1');
  const [selectedAccount, setSelectedAccount] = useState('Account 1');

  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
    setSelectedAccount(Object.keys(data[event.target.value])[0]);
  };

  const handleAccountChange = (event) => {
    setSelectedAccount(event.target.value);
  };

  const companyOptions = Object.keys(data);
  const accountOptions = Object.keys(data[selectedCompany]);

  const tableData = data[selectedCompany][selectedAccount];

  

  return (
    <div className="loads">
      <div className="header">
        
        <div className="dropdowns">
          <Dropdown label="Company Name" options={companyOptions} onChange={handleCompanyChange} />
          <Dropdown label="Account Name" options={accountOptions} onChange={handleAccountChange} />
        </div>
      </div>
      <div className="loads-title">Latest Loads are displayed here</div>
      <table className="loads-table">
        <thead>
          <tr >
            <th>Date</th>
            <th>Credit</th>
            <th>A/c Balance</th>
            <th>UTR/RRN</th>
            <th>A/c No / UPI</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.credit}</td>
              <td>{row.balance}</td>
              <td>{row.utr}</td>
              <td>{row.account}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
