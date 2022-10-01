import Image from "next/image";
import React from "react";
import GithubAuto from "../assets/github autocat.png";

const GetProfile = ({
  img,
  name,
  email,
  createAt,
  bio,
  publicRepos,
  followers,
  following,
  location,
  blog,
  twitUser,
  company,
}) => {
  return (
    <>
      <div className="grid grid-cols-8 md:px-5 md:py-3">
        <div className="h-20 w-20  relative col-span-3 md:h-28 md:w-28 md:col-span-2">
          <Image
            src={img ? img : GithubAuto}
            alt="github image"
            className="rounded-full"
            layout="fill"
          />
        </div>
        <div className="col-span-5 md:col-span-6 md:px-5 md:flex md:justify-center md:flex-col">
          <div>
            <p className="text-sm font-bold tracking-[1px] md:text-xl ">
              {name ? name : "Not Available"}
            </p>
            <p className="text-xs text-sky-400 my-1 md:text-base">
              {email ? email : "Not Available"}
            </p>
          </div>
          <p className="text-xs md:text-base">
            {createAt ? createAt : "Joined"}
          </p>
        </div>
      </div>
      <div className="mt-3">
        <p className="text-sm leading-relaxed md:text-base">
          {bio ? bio : "Dont Have Bio"}
        </p>
      </div>
      <div
        className={`grid grid-cols-3 bg-[#141C2F] px-2 py-4 text-xs my-3 rounded-lg text-white md:text-base`}
      >
        <div className="flex flex-col justify-center items-center gap-y-2 ">
          <p>Repo</p>
          <span className="font-bold  text-lg md:text-xl">
            {publicRepos ? publicRepos : "0"}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-2">
          <p>Followers</p>
          <span className="font-bold  text-lg md:text-xl">
            {followers ? followers : "0"}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-2">
          <p>Following</p>
          <span className="font-bold  text-lg md:text-xl">
            {following ? following : "0"}
          </span>
        </div>
      </div>
      <div className="my-5 flex flex-col gap-y-3">
        <div className="flex gap-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
          <p>{location ? location : "null"}</p>
        </div>
        <div className={`flex gap-x-4 ${blog ? "" : "text-gray-300"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
              clipRule="evenodd"
            />
          </svg>

          <a href={blog ? blog : "#"} rel="opener">
            {blog ? "Website" : "Null"}
          </a>
        </div>
        <div className={`flex gap-x-4 ${twitUser ? "" : "text-gray-500"}`}>
          <svg
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23.643 2.937C22.808 3.307 21.911 3.557 20.968 3.67C21.941 3.08779 22.669 2.17147 23.016 1.092C22.1019 1.63499 21.1014 2.0172 20.058 2.222C19.3564 1.47287 18.4271 0.976327 17.4143 0.809475C16.4016 0.642623 15.3621 0.814792 14.4572 1.29925C13.5524 1.78371 12.8328 2.55336 12.4102 3.4887C11.9875 4.42405 11.8855 5.47275 12.12 6.472C10.2677 6.379 8.45564 5.89755 6.80144 5.05891C5.14723 4.22026 3.68785 3.04316 2.51801 1.604C2.11801 2.294 1.88801 3.094 1.88801 3.946C1.88757 4.713 2.07644 5.46824 2.43789 6.14473C2.79934 6.82122 3.32217 7.39804 3.96001 7.824C3.22029 7.80046 2.49688 7.60058 1.85001 7.241V7.301C1.84994 8.37674 2.22204 9.41938 2.90319 10.252C3.58434 11.0846 4.53258 11.6559 5.58701 11.869C4.9008 12.0547 4.18135 12.0821 3.48301 11.949C3.78051 12.8746 4.36001 13.684 5.14038 14.2639C5.92075 14.8438 6.86293 15.1652 7.83501 15.183C6.18485 16.4784 4.1469 17.1811 2.04901 17.178C1.67739 17.1781 1.30609 17.1564 0.937012 17.113C3.06649 18.4822 5.54535 19.2088 8.07701 19.206C16.647 19.206 21.332 12.108 21.332 5.952C21.332 5.752 21.327 5.55 21.318 5.35C22.2293 4.69097 23.0159 3.8749 23.641 2.94L23.643 2.937Z" />
          </svg>
          <p>{twitUser ? twitUser : "Not Available"}</p>
        </div>
        <div className={`flex gap-x-4 ${company ? "" : "text-gray-500"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5H15v-18a.75.75 0 000-1.5H3zM6.75 19.5v-2.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 010 1.5h-.75A.75.75 0 016 6.75zM6.75 9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM6 12.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 6a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zm-.75 3.75A.75.75 0 0110.5 9h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 12a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM16.5 6.75v15h5.25a.75.75 0 000-1.5H21v-12a.75.75 0 000-1.5h-4.5zm1.5 4.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 2.25a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75h-.008zM18 17.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
              clipRule="evenodd"
            />
          </svg>

          <p>{company ? company : "Not Available"}</p>
        </div>
      </div>
    </>
  );
};

export default GetProfile;
