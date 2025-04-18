type HeadingType = {
  text: string;
};

const Heading: React.FC<HeadingType> = ({ text }) => {
  return (
    <section className="py-5">
      <div className="w-full flex justify-center items-center">
        <h3 className="font-bold text-[#131313] text-[36px] font-inter">
          {text}
        </h3>
      </div>
    </section>
  );
};

export default Heading;
