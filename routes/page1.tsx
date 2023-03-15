import { Head } from "$fresh/runtime.ts";

export default function Page1() {
  return (
    <>
      <Head>
        <title>Page1</title>
      </Head>
      <div>
        Page1
      </div>

      <div>
        <a href="/">home</a>
      </div>
    </>
  );
}
