const AboutCard = (props) => {
  return (
    <div className="flex flex-col border text-left rounded-2xl py-12 px-8">
      <div className="">
        <div className="bg-[var(--primary-blue)] inline-flex p-2 rounded-full">
          {props.icon}
        </div>
        <h3 className="font-bold text-xl py-4">{props.head}</h3>
        <p>{props.des}</p>
      </div>
    </div>
  );
};

export default AboutCard;
