interface HeadingLabelProps {
    label: string;
  }

const HeadingLabel = ({label}: HeadingLabelProps) => {
  return (
    <div className="font-medium text-[#bbbaba] text-xs md:text-sm	flex mt-1">{label}</div>
  )
}

export default HeadingLabel