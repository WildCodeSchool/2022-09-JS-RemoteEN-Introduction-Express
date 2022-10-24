const express = require("express");

const serverPort = 5006;
const app = express();

const users = [
  { id: 0, username: "DiogoG8" },
  { id: 1, username: "joaoefmota" },
  { id: 2, username: "OLGAWCS" },
  { id: 3, username: "anna-valchuk" },
  { id: 4, username: "Kukuruzka1" },
  { id: 5, username: "anipil29" },
  { id: 6, username: "Bukabuka321" },
  { id: 7, username: "RussellCorpuz" },
  { id: 8, username: "ThisisPauline" },
  { id: 9, username: "isaschlothauer" },
  { id: 10, username: "osvfelices" },
  { id: 11, username: "dreanx" },
  { id: 12, username: "LA320" },
  { id: 13, username: "elifPeriza" },
  { id: 14, username: "mi-gue-lan-gel" },
];

app.get("/users", (req, res) => {
  let resultingUsers = users;
  if (req.query.username != null) {
    resultingUsers = resultingUsers.filter((user) => user.username.toLowerCase() === req.query.username.toLowerCase());
  }
  res.json(resultingUsers.slice(0, req.query.limit != null ? parseInt(req.query.limit) : 10));
});

app.get("/user/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (user != null) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
})

app.listen(serverPort, () => console.log(`Listening on port ${serverPort}`));
