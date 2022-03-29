import clsx from "clsx";

export default function cn(...params : any) {
  const cls: {className?: string} = {};
  const cx = clsx(params);
  if (cx) {
    cls.className = cx;
    return cls;
  }
  return {};
}
