const express = require("express");
const path = require("path");
const productRouter = require("./routes/product");
const userRouter = require("./routes/users");
//Instantiate
const app = express();


//middleware
// app.use("/", (req, res, next) => {
//     res.sendFile(path.join(__dirname, "Views", "index-1.html"));
// });
app.use("/abc", express.static(path.join(__dirname, "Resources", "CSS")));
app.use("/login", (req, res, next) => {
  res.sendFile(path.join(__dirname, "Views", "index-1.html"));
});

app.use("/users", (req, res, next) => {
    res.sendFile(path.join(__dirname, "Views", "index-2.html"));
});

app.use("/products", (req, res, next) => {
    res.sendFile(path.join(__dirname, "Views", "index-3.html"));
});


app.use("/product", productRouter);
app.use("/user", userRouter);


//404 page 
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "Views", "404.html"));
});

//ErroHandling
app.use((err, req, res, next) => {
    res.status(500).sendFile(path.join(__dirname, "Views", "500.html"));
});


//boot up 
app.listen(3000, () => console.log("Running on 3000"));