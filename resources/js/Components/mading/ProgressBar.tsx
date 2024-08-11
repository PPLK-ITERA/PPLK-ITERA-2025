import * as React from "react";

import check from "!assets/check.png";
import info from "!assets/infoo.png";

const ProgressBar = ({ currentStep, totalSteps }) => {
  const steps = Array.from({ length: totalSteps }, (_, index) => index + 1);

  return (
    <div className="progress-bar-container xl:w-full md:max-w-4xl p-4 pt-24 mx-auto rounded-lg">
      <div className="md:flex-row flex flex-col items-center justify-between mb-8">
        <h3 className="text-[20px] md:text-[31px] font-montserrat font-bold text-moccaccino-950 mb-4 md:mb-0">
          Progress Tugas Kelompok
        </h3>
        <div className="text-[20px] md:text-[39px] font-montserrat font-bold text-moccaccino-950">{`${currentStep}/${totalSteps}`}</div>
      </div>
      <div className="md:flex-row flex flex-col items-center justify-between w-full">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <div className="md:flex-row md:mb-0 relative flex flex-col items-center mb-4">
              <div
                className={`w-[50px] md:w-[70px] h-[50px] md:h-[70px] rounded-full flex items-center justify-center ${
                  step <= currentStep
                    ? "bg-moccaccino-800 text-white"
                    : "bg-white border-2 border-moccaccino-800 text-red-700"
                }`}
              >
                {step <= currentStep ? (
                  <img
                    src={check}
                    alt="Check"
                    className="md:w-8 md:h-8 w-6 h-6"
                  />
                ) : (
                  <span className="text-[16px] md:text-lg font-bold">
                    {step}
                  </span>
                )}
              </div>
              {index !== totalSteps - 1 && (
                <div className="hidden md:block w-full h-[2px] bg-moccaccino-800 absolute left-full top-1/2 transform -translate-y-1/2 md:mx-2"></div>
              )}
            </div>
            {index !== totalSteps - 1 && (
              <div className="block w-[2px] h-6 bg-moccaccino-800 mx-auto md:hidden"></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex items-center mt-4 text-sm text-gray-700">
        <div className="flex items-center justify-center w-8 h-8 rounded-full">
          <img src={info} alt="Info" className="object-cover" />
        </div>
        <p className="ml-2 text-[16px] md:text-[25px] font-montserrat">
          Tugas yang sudah dikerjakan 100% akan ditandai selesai.
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;
