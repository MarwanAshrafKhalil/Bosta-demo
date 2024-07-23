import React from 'react';

export default function InfoBar() {
  return (
    <div className="flex flex-row  gap-10 justify-between m-5">
      <div className="flex flex-col">
        <span className="text-gray-400">shipment Number 123456</span>
        <p className="font-semibold"> Status</p>
      </div>
      <div className="flex flex-col">
        <span className="text-gray-400">Last Update</span>
        <p className="font-semibold"> 22/01/2024</p>
      </div>
      <div className="flex flex-col">
        <span className="text-gray-400">Seller Name</span>
        <p className="font-semibold"> Souq.com</p>
      </div>
      <div className="flex flex-col">
        <span className="text-gray-400">Delivery Date</span>
        <p className="font-semibold"> 11/02/2024</p>
      </div>
    </div>
  );
}
