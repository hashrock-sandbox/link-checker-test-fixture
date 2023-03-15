import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div>
        <p>
          This is Example Website for{" "}
          <a href="https://github.com/jaredkrinke/link_checker">link-checker</a>
        </p>

        <ul>
          <li>
            <a href="/page1">Page1</a>
          </li>
          <li>
            <a href="/page2">Page2</a>
          </li>
          <li>
            <a href="/page3">Page3 - Broken(404)</a>
          </li>
          <li>
            <a href="/page4">Page4 - Redirect</a>
          </li>
        </ul>
      </div>
    </>
  );
}
