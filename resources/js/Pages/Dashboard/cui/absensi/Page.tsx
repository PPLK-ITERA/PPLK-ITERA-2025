import DashboardLayout from '@/Layouts/DashboardLayout'
import React, { useEffect, useState } from 'react'
import QRScanner from './QRScanner';
import { Button } from '@/Components/ui/button';
import { router, useForm } from '@inertiajs/react';
// import { Scanner as ScannerComp, IScannerProps, outline, boundingBox, centerText, useDevices } from '@yudiel/react-qr-scanner'


function Page({ auth }) {
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { data, setData, post, processing } = useForm({
    qr_code: ''
  });

  const handleScan = (data: string) => {
    if (data) {
      setData('qr_code', data);
      setError('');
    }
  };

  useEffect(() => {
    if(data.qr_code) {
      post(route('cui.scan'));
    }
  }, [data.qr_code])

  const handleError = (err: Error) => {
    setError(err.message);
  };

  return (
    <DashboardLayout user={auth.user}>
      <div className="relative w-full h-full flex flex-col items-center justify-center">

        <div className='md:w-[60%]'>
          <QRScanner
            onScan={handleScan}
            onError={handleError}
            scanDelay={3000}
            onBack={() => {
              router.get(route('dashboard.cui'));
            }}
            pause={processing}
          />
        </div>

        {result && <p className='hidden md:block'>Scanned Result: {result}</p>}
        {error && <p className='hidden text-red-600 md:block'>Error: {error}</p>}
      </div>
    </DashboardLayout >
  );
}

export default Page