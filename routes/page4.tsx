import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_) {
    const path = "/page4-new";
    return new Response(`Redirecting to ${path}`, {
      headers: { "Location": path },
      status: 301,
    });
  },
};
