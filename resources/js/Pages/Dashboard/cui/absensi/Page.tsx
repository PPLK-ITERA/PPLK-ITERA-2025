import DashboardLayout from '@/Layouts/DashboardLayout'
import React, { useEffect, useState } from 'react'
import { Scanner, outline } from '@yudiel/react-qr-scanner';

function Page({ auth }) {
  return (
    <DashboardLayout user={auth.user}>
      <Scanner
        onScan={(result) => console.log(result)}
        paused={false}
        styles={{
          container: {
            height: 640,
            width: 640
          }, video: {
            objectFit: 'cover'
          }
        }}
        components={{
          audio: true,
          zoom: true,
          onOff: false,
          finder: true,
          torch: false,
          tracker: outline
        }}
        allowMultiple= {true}
        scanDelay={2000}
      />
    </DashboardLayout>
  )
}

export default Page