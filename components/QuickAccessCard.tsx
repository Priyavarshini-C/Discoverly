import Link from "next/link";

type QuickAccessCardProps = {
  title: string;
  href: string;
};

export default function QuickAccessCard({
  title,
  href,
}: QuickAccessCardProps) {
  return (
    <Link
      href={href}
      className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition"
    >
      <h3 className="text-xl font-bold">{title}</h3>
    </Link>
  );
}