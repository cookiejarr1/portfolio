import Image from "next/image";

function Profile({ className = "" }) {
  return (
    <span className={className}>
      <Image
        alt="Profile"
        src="/profile.png"
        className={
          "object-cover cursor-pointer hover:scale-110 transition active:scale-105 ease-in-out delay-50 duration-300 pointer-events-auto"
        }
        fill={true}
        priority={false}
      />
    </span>
  );
}

export default Profile;
