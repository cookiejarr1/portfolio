import Image from "next/image";

function Profile({ className = "" }) {
  return (
    <Image
      alt="Profile"
      src="/profile.png"
      className={`${className} object-cover cursor-pointer hover:scale-110 transition ease-in-out delay-50 duration-300`}
      fill={true}
      priority={false}
    />
  );
}

export default Profile;
