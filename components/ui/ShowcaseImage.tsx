import Image from "next/image";
import { clsx } from "@/lib/clsx";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function ShowcaseImage({
  src,
  alt,
  width,
  height,
  className,
  sizes = "(max-width: 768px) 100vw, 600px",
  priority,
}: Props) {
  return (
    <div
      className={clsx(
        "overflow-hidden rounded-2xl shadow-soft ring-1 ring-navy/5",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className="h-auto w-full"
      />
    </div>
  );
}
