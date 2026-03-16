const [webhook, content] = Deno.args;

fetch(webhook, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    content,
  }),
});
