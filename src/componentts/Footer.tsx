const Footer = () => {
  return (
    <footer className="font-medium text-[#bbbaba] text-sm flex h-[10%] w-full border-t rounded  p-3 px-6 justify-between items-center">

        <div>
          <span>@ 2034 Quizzer. All rights reserved.</span>
        </div>
        <div className="font-medium text-sm flex gap-4 items-center text-neutral-800">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
        </div>
    </footer>
  );
};

export default Footer;
