import GetProfile from "./GetProfile";
import LoadingProfile from "./LoadingProfile";

const Profile = ({ user, loading, dark }) => {
  var moment = require("moment");
  const date = new Date(user.created_at);
  const resultDate = moment(date).format("LL");
  function GetUser() {
    if (loading) {
      return loading && <LoadingProfile />;
    } else if (user) {
      return (
        user && (
          <GetProfile
            img={user.avatar_url}
            name={user.name}
            email={user.email}
            createAt={resultDate}
            bio={user.bio}
            publicRepos={user.public_repos}
            followers={user.followers}
            following={user.following}
            location={user.location}
            blog={user.blog}
            twitUser={user.twitter_username}
            company={user.company}
          />
        )
      );
    }
  }
  return (
    <div className="p-3">
      <div
        className={`px-3 py-5 rounded-lg ${
          dark ? "bg-[#1F2A48] " : "bg-gray-200"
        }`}
      >
        {user ? (
          <GetUser />
        ) : (
          <div className="min-h-[20rem] flex justify-center items-center">
            <h1 className="text-2xl font-bold text-center">
              Searching your github profile
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
