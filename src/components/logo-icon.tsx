import Image from "next/image";

export function LogoIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/logo-icon.png"
      alt="InstaPara logo"
      width={200}
      height={200}
      className={className}
    />
  );
}
