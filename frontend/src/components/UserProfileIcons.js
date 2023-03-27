const UserProfileIcons = (props) => {
  return (
    <div className="flex flex-wrap justify-center w-[70px] min-w-[70px] h-[100px] min-h-[100px] mt-[10px]">
      <img width="60px" height="60px" src={props.image} alt="profile" />
      <p className="text-[11px] font-bold">{props.name}</p>
      <p className="text-[13px]">{props.country}</p>
    </div>
  );
};

export default UserProfileIcons;
