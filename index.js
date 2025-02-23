import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });


// DB Configuration
const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});


const app = express();
const port = 3000;

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


let items = [];


// GET Route for Home Page
app.get("/", async (req, res) => {
  const errorMessage = req.query.error || "";
  try {
    const result = await db.query("SELECT * FROM items ORDER BY id ASC");
    const items = result.rows;

    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items,
      errorMessage: errorMessage,
    });
  } catch (err) {
    console.error("Error fetching items:", err);
    res.status(500).send("Error fetching items");
  }
});


//POST Route for adding new items
app.post("/add", async (req, res) => {

  const newItem = req.body.newItem.trim();
  try {
    const result = await db.query(
      "SELECT COUNT(*) FROM items WHERE LOWER(title) = LOWER($1)", [newItem]);

    const itemExists = result.rows[0].count > 0;

    if (itemExists) {
      res.redirect("/?error=This item already exists");
    } else {
      await db.query("INSERT INTO items (title) VALUES ($1)", [newItem]);
      res.redirect("/");
    }
  } catch (err) {
    console.error("Error adding item:", err);
    res.status(500).send("Error adding item");
  }
});


// POST Route for editing items
app.post("/edit", async (req, res) => {
  
  const updatedItemId = req.body.updatedItemId;
  const updatedItemTitle = req.body.updatedItemTitle;

  try {
    await db.query("UPDATE items SET title = $1 WHERE id = $2", [updatedItemTitle, updatedItemId,]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});


// POST Route for deleting items
app.post("/delete", async (req, res) => {

  const deleteItemId = req.body.deleteItemId;

  try {
    await db.query("DELETE FROM items WHERE id = $1", [deleteItemId]);
    res.redirect("/");
  } catch (err) {
    console.error("Error deleting item:", err);
    res.status(500).send("Error deleting item");
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
