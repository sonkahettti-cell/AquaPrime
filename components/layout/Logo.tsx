import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center"
      aria-label="AquaPrime — системы очистки воды"
    >
      <Image
        src="/logo/logo_header.png"
        alt="AquaPrime — системы очистки воды"
        width={260}
        height={90}
        priority
        className="h-auto w-[260px]"
      />
    </Link>
  );
}
