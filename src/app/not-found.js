import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-full mt-44 flex flex-col justify-center gap-2 items-center">
      <h1 className="text-9xl font-bold text-secondary">
        4<span className="text-primary">0</span>4
      </h1>
      <p className="text-gray-500 text-base font-semibold">PAGE NOT FOUND</p>
      <p className="text-base font-light">
        Oopps!! The page you were looking for doesn't exist.
      </p>
      <Link href={"/"} className="text-blue-500 text-sm ">
        BACK TO HOME
      </Link>
    </section>
  );
}
