import React, { useState } from 'react';

const Transaction = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDateChange = (e) => {
    setDateFilter(e.target.value);
  };

  const transactions = [
    {
      username: "John Doe",
      transactionId: "TXN123456",
      amount: 150.0,
      time: "2025-07-05T10:15:00Z",
      status: "Success",
    },
    {
      username: "Jane Smith",
      transactionId: "TXN789012",
      amount: 275.5,
      time: "2025-07-04T14:30:00Z",
      status: "Failed",
    },
    {
      username: "Mike Johnson",
      transactionId: "TXN345678",
      amount: 89.99,
      time: "2025-07-05T08:45:00Z",
      status: "Success",
    },
    {
      username: "Emily Brown",
      transactionId: "TXN901234",
      amount: 450.25,
      time: "2025-07-03T16:20:00Z",
      status: "Success",
    },
    {
      username: "Alex Wilson",
      transactionId: "TXN567890",
      amount: 120.75,
      time: "2025-07-04T11:10:00Z",
      status: "Failed",
    },
  ];

  // Filter transactions based on search query (username or transactionId) and date
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.transactionId.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDate = dateFilter
      ? new Date(transaction.time).toISOString().split('T')[0] === dateFilter
      : true;

    return matchesSearch && matchesDate;
  });

  return (
    <div className="bg-white rounded-[4vw] md:rounded-[1vw] p-[4vw] md:p-[1vw]">
      <h2 className="text-[6vw] md:text-[1.5vw] font-bold mb-[2vw] md:mb-[0.5vw]">Transactions</h2>
      {/* Search and Date Filter */}
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-y-[2vw] gap-x-[1vw] mb-[2vw] md:mb-[1vw]">
        <input
          type="text"
          placeholder="Search by username or transaction ID..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full md:w-3/4 px-[3vw] md:px-[1vw] py-[2vw] md:py-[0.5vw] border rounded-[2vw] md:rounded-[0.5vw] focus:outline-none focus:ring-2 focus:ring-blue-600 text-[4vw] md:text-base"
        />
        <input
          type="date"
          value={dateFilter}
          onChange={handleDateChange}
          className="w-full md:w-1/4 px-[3vw] md:px-[1vw] py-[2vw] md:py-[0.5vw] border rounded-[2vw] md:rounded-[0.5vw] focus:outline-none focus:ring-2 focus:ring-blue-600 text-[4vw] md:text-base"
        />
      </div>

      {/* Transaction List */}
      <div className="mt-[2vw] md:mt-[1vw] border rounded-[1vw] md:rounded-[0.25vw] p-[2vw] md:p-[0.5vw]">
        {filteredTransactions.length > 0 ? (
          <ul className="space-y-[2vw] md:space-y-[0.5vw]">
            {filteredTransactions.map((transaction, index) => (
              <li key={index} className="border-b py-[2vw] md:py-[0.5vw] text-[4vw] md:text-base">
                <p>
                  <strong>Username:</strong> {transaction.username}
                </p>
                <p>
                  <strong>Transaction ID:</strong> {transaction.transactionId}
                </p>
                <p>
                  <strong>Amount:</strong> ${transaction.amount.toFixed(2)}
                </p>
                <p>
                  <strong>Time:</strong> {new Date(transaction.time).toLocaleString()}
                </p>
                <p>
                  <strong>Status:</strong>
                  <span className={transaction.status === 'Success' ? 'text-green-600' : 'text-red-600'}>
                    {transaction.status}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-[4vw] md:text-base">No transactions found.</p>
        )}
      </div>
    </div>
  );
};

export default Transaction;