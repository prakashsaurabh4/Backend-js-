const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");

    res.write(`
      <html>
        <head>
          <title>Practise SET</title>
        </head>

        <body>
          <h1>Welcome to Calculator</h1>
          <a href="/calculator">Go To Calculator</a>
        </body>
      </html>
    `);

    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");

    res.write(`
      <html>
        <head>
          <title>Practise SET</title>
        </head>

        <body>
          <h1>Calculator</h1>

          <form action="/calculator-result" method="POST">
            <input
              type="number"
              name="first"
              placeholder="Enter first number"
            >

            <br><br>

            <input
              type="number"
              name="second"
              placeholder="Enter second number"
            >

            <br><br>

            <button type="submit">Add</button>
          </form>

          <br>

          <a href="/">Go To Home</a>
        </body>
      </html>
    `);

    return res.end();
  } else if (req.url === "/calculator-result" && req.method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();

      const params = new URLSearchParams(fullBody);

      const first = Number(params.get("first"));
      const second = Number(params.get("second"));

      const result = first + second;

      res.setHeader("Content-Type", "text/html");

      res.write(`
        <html>
          <head>
            <title>Calculator Result</title>
          </head>

          <body>
            <h1>Calculator Result</h1>

            <h2>${first} + ${second} = ${result}</h2>

            <a href="/calculator">Go To Calculator</a>

            <br><br>

            <a href="/">Go To Home</a>
          </body>
        </html>
      `);

      return res.end();
    });

    return;
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");

    res.write(`
      <html>
        <head>
          <title>Practise SET</title>
        </head>

        <body>
          <h1>404 Page Does Not Exist</h1>

          <a href="/">Go To Home</a>
        </body>
      </html>
    `);

    return res.end();
  }
};

exports.requestHandler = requestHandler;
