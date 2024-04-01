import Link from "next/link";

export const BackHomeBtn = () => {
  return (
    <div className="absolute right-2 top-2 z-10 transition-all hover:underline">
      <Link href="/">Back Home</Link>
    </div>
  );
};
