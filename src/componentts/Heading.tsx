import HeadingLabel from "./HeadingLabel";

interface HeadingProps {
    title: string;
    label: string;
  }
  


const Heading = ({title, label}: HeadingProps) => {
  return (
    <>
    <div className="font-bold text-[18181B] text-xl md:text-2xl flex ">{title}</div>
    <HeadingLabel label={label}  />
    </>
  )
}

export default Heading