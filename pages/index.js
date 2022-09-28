import Head from "next/head";
import { useState } from "react";
import Search from "../components/Search";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const darkModes = () => {
    if (darkMode) {
      setDarkMode(false);
      console.log(darkMode);
    } else {
      setDarkMode(true);
      console.log(darkMode);
    }
  };

  return (
    <div
      className={`overflow-x-hidden h-[100vh]  ${
        darkMode ? "bg-[#141C2F] text-gray-200" : "bg-gray-300 text-slate-800"
      }`}
    >
      <Head>
        <title>Github Profile</title>
        <meta desc="Search github profile" />
      </Head>
      <div className="h-[100vh] max-h-[600px] flex justify-center flex-col">
        <div className="max-h-[100px] px-3 py-5">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">devfajri</h1>
            <p className="uppercase tracking-[5px]" onClick={darkModes}>
              {darkMode ? "dark" : "light"}
            </p>
          </div>
        </div>
        <Search dark={darkMode} />
      </div>
    </div>
  );
}
