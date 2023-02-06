const express = require("express");
const app = express();
const port = 5000;
const supabase = require("./config/supabase");
const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
  res.send("Buissness Server is runnign!");
});

// get user by email id
app.get("/users/:email", async (req, res) => {
  const email = req.params.email;
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email);
  res.json(data);
});

// make advrtiser account

app.get("/users/advertiser/:email", async (req, res) => {
  const email = req.params.email;
  console.log("email", email);
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email);
  res.json({ isAdvertiser: data[0]?.role === "advertiser" });
});

// make admin account

app.get("/users/admin/:email", async (req, res) => {
  const email = req.params.email;
  console.log("email", email);
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email);
  res.json({ isAdmin: data[0]?.role === "admin" });
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
  const { data, error } = await supabase.from("list-business").select("*");
  res.json(data);
});

// filter business by businessName

app.get("/list-business/:businessName", async (req, res) => {
  const businessName = req.params.businessName;
  console.log("name", businessName);
  const { data, error } = await supabase
    .from("list-business")
    .select("*")
    .eq("businessName", businessName);
  res.json(data);
});

// filter business by businessAddress

app.get("/list-business/:businessAddress", async (req, res) => {
  const businessAddress = req.params.businessAddress;
  console.log("name", businessAddress);
  const { data, error } = await supabase
    .from("list-business")
    .select("*")
    .eq("businessAddress", businessAddress);
  res.json(data);
});

// seraach business by name and location form list business

// app.get("/list-business/:name/:location", async (req, res) => {
//   const name = req.params.businessName;
//   const location = req.params.businessAddress;
//   const { data, error } = await supabase
//     .from("list-business")
//     .select("*")
//     .eq("businessName", name)
//     .eq("businessAddress", location);
//   res.json(data);
// });

// filter business by businessName

// get all business categories

app.get("/business-categories", async (req, res) => {
  const { data, error } = await supabase
    .from("business-categories")
    .select("*");
  res.json(data);
});

// filter business categories by category name

app.get("/business-categories/:title", async (req, res) => {
  const title = req.params.title;
  console.log("name", title);
  const { data, error } = await supabase
    .from("business-categories")
    .select("*")
    .eq("title", title);
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

app.listen(port, () => {
  console.log(`Buissness Server is runnign listening on port ${port}`);
});
