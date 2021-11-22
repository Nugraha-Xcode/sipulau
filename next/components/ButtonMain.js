const ButtonMain = ({ label, textColor, bgColor, addStyle, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex lg:text-lg space-x-2 ${
        bgColor ? bgColor : "bg-main-blue"
      } rounded-full ${
        textColor ? textColor : "text-white"
      } text-sm py-3 lg:py-5 px-5 lg:px-8 hover:opacity-80 ${addStyle}`}
    >
      <p>{label}</p>
    </button>
  );
};

export default ButtonMain;
