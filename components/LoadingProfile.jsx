import React from "react";

const LoadingProfile = () => {
  return (
    <div className="animate-pulse">
      <div className="grid grid-cols-8 md:px-5 md:py-3">
        <div className="h-20 w-20  relative col-span-3 rounded-full bg-slate-500 md:h-28 md:w-28 md:col-span-2"></div>
        <div className="col-span-5 md:col-span-6 md:px-5">
          <div className="flex flex-col gap-y-2 ">
            <div className="h-[20px] w-full bg-slate-500 rounded-md"></div>
            <div className="h-[16px] w-full bg-slate-500 rounded-md"></div>
          </div>
          <div className="h-[16px] w-full bg-slate-500 rounded-md mt-2"></div>
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-y-2">
        <div className="h-[20px] w-full bg-slate-500 rounded-md"></div>
        <div className="h-[20px] w-full bg-slate-500 rounded-md"></div>
      </div>
      <div className="grid grid-cols-3 px-2 py-4  text-xs my-3 rounded-lg bg-slate-500 h-[84px]"></div>
      <div className="my-5 flex flex-col gap-y-3">
        <div className="h-[22px] w-full bg-slate-500 rounded-md"></div>
        <div className="h-[22px] w-full bg-slate-500 rounded-md"></div>
        <div className="h-[22px] w-full bg-slate-500 rounded-md"></div>
        <div className="h-[22px] w-full bg-slate-500 rounded-md"></div>
      </div>
    </div>
  );
};

export default LoadingProfile;
