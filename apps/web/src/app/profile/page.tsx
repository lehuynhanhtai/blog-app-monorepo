import { getProfile } from "@/lib/actions";

const ProfilePage = async () => {
  const profile = await getProfile();
  return (
    <div>
      <h1>Profile</h1>
      <p>{JSON.stringify(profile)}</p>
    </div>
  );
};

export default ProfilePage;
