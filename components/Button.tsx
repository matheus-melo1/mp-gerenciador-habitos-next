import clsx from "clsx";

interface ButtonProps {
  content: string;
  color: boolean;
  type?: "submit" | "reset" | undefined;
}

export default function Button({ content, color, type }: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx("p-2 rounded-md text-center capitalize", color ? 'bg-emerald-500' : 'bg-zinc-800')}
    >
      {content}
    </button>
  )
}
