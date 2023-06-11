import Link from 'next/link';
import clsx from 'clsx';

interface IMobileItemProps {
  href: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}



export default function MobileItem({
  href,
  icon:Icon,
  active,
  onClick
}: IMobileItemProps) {

  const handleClick = () => {

    if(onClick){
      return onClick();
    }


  }


  return (
    <Link href={href} onClick={onClick} className={clsx('group flex gap-x-3 text-sm leading-6 font-semibolf w-full justify-center p-4 text-gray-500 hover:text-black hover:bg-gray-100',
    active && 'bg-gray-q00 text-black'
    )}>
      <Icon className="h-6 w-6"/>
    </Link>

  )

}