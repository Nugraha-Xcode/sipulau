const BgCircle = ({ customStyle }) => {
  return (
    <div
      className={`absolute bg-main-blue rounded-full filter ${customStyle}`}
    ></div>
  );
};

export default BgCircle;
