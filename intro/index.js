const express = require("express");

const serverPort = 5005;

let things = [
  { id: 0, name: "Socks" },
  { id: 1, name: "Computer" },
  { id: 2, name: "Passion" },
];

const app = express();

app.get("/", (req, res) => {
  console.log(`New request: ${req.url}`);
  res.send("Hello there, welcome to express!");
});

app.get("/things", (req, res) => {
  res.json(things);
});

app.get("/things/:id", (req, res) => {
  const thing = things.find((thing) => thing.id === parseInt(req.params.id));
  if (thing != null) {
    res.json(thing);
  } else {
    res.sendStatus(404);
  }
});

app.listen(serverPort, () =>
  console.log(`Server listening on port ${serverPort}`)
);
