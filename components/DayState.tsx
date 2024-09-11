import Image from 'next/image';

interface DayStateProps {
  day?: boolean | undefined;
}

export default function DayState({ day }: DayStateProps) {
  let image: [string, string, number?] = [
    '/images/icons/Circle.svg',
    'gray mark',
    16
  ];

  if(day) image = ['/images/icons/Check.svg', 'green check mark', 16];
  if(day === false) image = ['/images/icons/X.svg', 'red x mark', 16];

  const [src, alt, size] = image;

  return (
    <div className="flex h-9 items-center justify-center">
      <Image
        src={src}
        width={size}
        height={size}
        alt={alt}
      />
    </div>
  );
}
