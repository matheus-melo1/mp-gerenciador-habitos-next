import clsx from "clsx";
import Link from "next/link";

interface ButtonProps {
  content: string;
  color: boolean;
  href: string;
}

export default function LinkButton({ content, color, href }: ButtonProps) {
  return (
    <Link href={href} className={clsx("p-2 rounded-md text-center capitalize", color ? 'bg-emerald-500' : 'bg-zinc-800')}>{content}</Link>
  )
}
