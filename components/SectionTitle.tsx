type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({
  title,
}: SectionTitleProps) {
  return (
    <h2 className="text-3xl font-bold text-center mb-8">
      {title}
    </h2>
  );
}