import { ReactNode } from 'react';
import HeadingTitle from './HeadingTitle'

interface SummaryCardProps {
    children: ReactNode; 
    title:string;
    label: string;
  }
const SummaryCard = ({children, title, label} : SummaryCardProps) => {
  return (
          <div className="border  p-5 px-6 w-full flex gap-2 flex-col rounded-lg">
            <div className='flex justify-between items-center'>
            <HeadingTitle label={title} size="text-xl"  />
            <div>{children}</div>
            </div>
            <div className='text-black text-sm font-semibold'>{label}</div>

          </div>
  )
}

export default SummaryCard