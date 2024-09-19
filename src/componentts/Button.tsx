const Button = ({buttonClick}: any) => {
  return (
    <div className="mt-7 md:mt-10">
      <button
      onClick={buttonClick}
        className=" font-normal	text-sm	 w-full h-9 bg-[#020617]  hover:bg-[#1e293b] text-white flex justify-center
        items-center transition-transform duration-200 ease-in-out 
    active:scale-95"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Button;
