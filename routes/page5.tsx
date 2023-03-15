import { Handlers } from "$fresh/server.ts";

function redirect(_: Request) {
  const path = "/page5-new";
  return new Response(`Redirecting to ${path}`, {
    headers: { "Location": path },
    status: 301,
  });
}

export const handler: Handlers = {
  GET: redirect,
  HEAD: redirect,
};
