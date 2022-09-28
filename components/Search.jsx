import React, { useEffect, useState } from "react";
import Profile from "./Profile";

const Search = ({ dark }) => {
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const searchUser = (e) => {
    console.log(user.message);

    e.preventDefault();
    if (username === "") {
      console.log("Fill the username github");
    } else {
      URLGit();
    }
  };

  const URLGit = () => {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}`).then((res) =>
      res
        .json()
        .then((data) => {
          setUser(data);
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        })
        .catch((err) => setUser(err))
    );
    setUsername("");
  };

  return (
    <>
      <div className="py-3 px-3">
        <form
          onSubmit={searchUser}
          className={`rounded-lg flex justify-between px-1  py-1 max-h-[60px] items-center ${
            dark ? "bg-[#1F2A48] text-white" : "bg-gray-200 text-black"
          }`}
        >
          <input
            className={`px-2 bg-transparent focus-visible:outline-none py-2 ${
              dark ? "" : "placeholder:text-[#1F2A48]"
            }`}
            type="text"
            placeholder="Search User..."
            value={username}
            onChange={async (e) => setUsername(e.target.value)}
          />
          <button
            type="submit"
            className={` p-2 rounded-lg ${
              dark ? "bg-[#0079FE]" : "bg-sky-500 text-white"
            }`}
          >
            Submit
          </button>
        </form>
      </div>
      <Profile user={user} loading={loading} dark={dark} />
    </>
  );
};

export default Search;
