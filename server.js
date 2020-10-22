const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/search_engine/", (req, res)=>{
  res.redirect(`/search_page.html?q=the ndc hub`);
});

app.get("/search_engine/:q", (req, res)=>{
  res.redirect(`/search_page.html?q=${req.params.q}`);
});

app.get("/hub_member_page/:tokenid", (req, res) => {
  res.redirect(`/members_page.html?token=${req.params.tokenid}`);
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log("Server started on " + PORT);
});
