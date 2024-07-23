import DashboardLayout from '@/Layouts/DashboardLayout'
import React, { useEffect, useState } from 'react'
import QRScanner from './QRScanner';
// import { Scanner as ScannerComp, IScannerProps, outline, boundingBox, centerText, useDevices } from '@yudiel/react-qr-scanner'


function Page({ auth }) {
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleScan = (data: string) => {
    if (data) {
      setResult(data);
      setError(''); // Clear error if a scan is successful
    }
  };

  const handleError = (err: Error) => {
    setError(err.message);
  };

  return (
    <DashboardLayout user={auth.user}>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className='md:w-[60%]'>
        <QRScanner onScan={handleScan} onError={handleError} scanDelay={3000} />
        </div>
        {result && <p className='hidden md:block'>Scanned Result: {result}</p>}
        {error && <p className='hidden text-red-600 md:block'>Error: {error}</p>}
      </div>
    </DashboardLayout >
  );
}

export default Page