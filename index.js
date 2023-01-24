const express = require("express");
const app = express();
const port = 5000;
const supabase = require("./config/supabase");
const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
  res.send("Buissness Server is runnign!");
});

app.get("/users", async (req, res) => {
  const { data, error } = await supabase.from("users").select("*");
  res.json(data);
});

app.get("/role/:email", async (req, res) => {
  // const { role } = req.body;
  const email = req.param.email;
  console.log("email", email);
  const response = await supabase.from("users").where({ email }).returning("*");
  res.json(response);
});

app.get("/users/role", async (req, res) => {
  const { data, error } = await supabase.from("users").select("role");
  res.json(data);
});

app.get("/about-us", async (req, res) => {
  const { data, error } = await supabase.from("about_us").select("*");
  res.json(data);
});

app.get("/additional_location", async (req, res) => {
  const { data, error } = await supabase
    .from("additional_location")
    .select("*");
  res.json(data);
});

app.get("/contact-us", async (req, res) => {
  const { data, error } = await supabase.from("contact_us").select("*");
  res.json(data);
});

app.get("/experience", async (req, res) => {
  const { data, error } = await supabase.from("experience").select("*");
  res.json(data);
});

app.get("/product_and_service", async (req, res) => {
  const { data, error } = await supabase
    .from("product_and_service")
    .select("*");
  res.json(data);
});

app.get("/faqs", async (req, res) => {
  const { data, error } = await supabase.from("faqs").select("*");
  res.json(data);
});

app.get("/list-business", async (req, res) => {
  const { data, error } = await supabase.from("list_business").select("*");
  res.json(data);
});

app.get("/profiles", async (req, res) => {
  const { data, error } = await supabase.from("profiles").select("*");
  res.json(data);
});

// create a login profile

app.post("/profiles", async (req, res) => {
  const { data, error } = await supabase.from("profiles");
});

// app.get("/users", async (req, res) => {
//   const users = await db.table("users").select("*");
//   res.json(users);
// });

// app.post("/users", async (req, res) => {
//   const newUser = await db.table("users").insert({
//     name: req.body.name,
//     email: req.body.email,
//   });
//   res.json(newUser);
// });

// app.put("/users/:id", async (req, res) => {
//   const updatedUser = await db
//     .table("users")
//     .update({
//       name: req.body.name,
//       email: req.body.email,
//     })
//     .where({ id: req.params.id });
//   res.json(updatedUser);
// });

// app.delete("/users/:id", async (req, res) => {
//   const deletedUser = await db
//     .table("users")
//     .delete()
//     .where({ id: req.params.id });
//   res.json(deletedUser);
// });

app.listen(port, () => {
  console.log(`Buissness Server is runnign listening on port ${port}`);
});
