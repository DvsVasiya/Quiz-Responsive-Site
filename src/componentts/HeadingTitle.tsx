

interface HeadingTitle {

    size: string,
    label:string

}
  

const HeadingTitle = ({size, label}: HeadingTitle) => {
  return (
    <div className={`${size} font-bold text-black`}>{label}</div>
  )
}

export default HeadingTitle