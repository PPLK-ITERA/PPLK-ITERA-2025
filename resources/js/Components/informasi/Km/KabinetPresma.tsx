import React from 'react';

type Kabinet = {
  year: string;
  name: string;
  department: string;
  kabinet: string;
};

const kabinetData: Kabinet[] = [
  {
    year: "2015/2016",
    name: "Muhammad Kizlar Agha Yasin",
    department: "Teknik Geomatika 2012",
    kabinet: "Kabinet Kita Satu",
  },
  {
    year: "2016/2017",
    name: "Wahyu Wibowo",
    department: "Teknik Sipil 2013",
    kabinet: "Kabinet Cemerlang",
  },
  {
    year: "2017/2018",
    name: "Deny Pratama",
    department: "Teknik Elektro 2015",
    kabinet: "Kabinet Energi",
  },
  {
    year: "2018/2019",
    name: "Wahyu Ichsan Ramadhan",
    department: "Teknik Geomatika 2016",
    kabinet: "Kabinet Juang",
  },
  {
    year: "2019/2021",
    name: "Jefri Naufal Rafiq",
    department: "Teknik Elektro 2017",
    kabinet: "Kabinet Balad Cita",
  },
  {
    year: "2021/2022",
    name: "Dany Fahreza",
    department: "Teknik Sipil 2018",
    kabinet: "Kabinet Sasrabahu",
  },
  {
    year: "2022/2023",
    name: "Muhammad Kizlar Agha Yasin",
    department: "Teknik Geomatika 2012",
    kabinet: "Kabinet Revolusi Area",
  },
  {
    year: "2023/2024",
    name: "Muhammad Kizlar Agha Yasin",
    department: "Teknik Geomatika 2012",
    kabinet: "Kabinet Wangsabatih",
  },
  {
    year: "2024/2025",
    name: "Muhammad Kizlar Agha Yasin",
    department: "Teknik Geomatika 2012",
    kabinet: "Kabinet",
  },
];

const KabinetPresma: React.FC = () => {
  const rows: Kabinet[][] = [];
  for (let i = 0; i < kabinetData.length; i += 2) {
    rows.push(kabinetData.slice(i, i + 2));
  }

  return (
    <div className=''>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className='flex justify-center items-center md:flex-row gap-16 pt-16 flex-col'>
          {row.map((kabinet, index) => (
            <div key={index} className='flex h-[240px] md:w-[441px] md:h-[260px] w-[300px] flex-col rounded-lg bg-white overflow-hidden'>
              <h2 className='bg-gradient-to-r from-[#B54419] to-[#90381C] py-4 font-avigea md:text-[28px] text-[20px] text-center text-white'>
                {kabinet.kabinet} <br />{kabinet.year}
              </h2>
              <p className='text-center font-montserrat md:text-[24px] text-[20px] py-6'>
                {kabinet.name} <br />
                ({kabinet.department})
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default KabinetPresma;
