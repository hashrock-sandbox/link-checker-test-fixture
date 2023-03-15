# link-checker test fixture

for this repo:

https://github.com/jaredkrinke/link_checker

### Usage

Start the project:

```
deno task start
deno run --allow-read --allow-net https://deno.land/x/link_checker/check.ts http://localhost:8000/
deno run --allow-read --allow-net https://deno.land/x/link_checker/crawl.ts http://localhost:8000/
```

or real server:

```
deno run --allow-read --allow-net https://deno.land/x/link_checker/check.ts https://hashrock-link-checker-test.deno.dev/
deno run --allow-read --allow-net https://deno.land/x/link_checker/crawl.ts https://hashrock-link-checker-test.deno.dev/
```
