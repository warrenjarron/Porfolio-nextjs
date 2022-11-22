import Link from "next/link";

let styles = {
  error: "flex w-screen h-screen items-center justify-center bg-red-900 ",
  h1:"text-white text-7xl ",
};

const error404 = () => {
  return (
    <div className={styles.error}>
      <h1 className={styles.h1}>erreur 404 tu t&apos;es perdue</h1>
      <Link href="/">
        <h1>
          Home
        </h1>
      </Link>
    </div>
  );
};

export default error404;
