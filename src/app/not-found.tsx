import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid place-content-center h-screen">
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        {`🔥 CALM DOWN EVERYONE! It's a 404 🧑🏾‍🚒`}
      </h1>
      <p className="mb-4 text-center">You should not be here son!</p>
      <Link className="text-center underline" href={"/"}>
        {`Take me home!`}
      </Link>
    </section>
  );
}
