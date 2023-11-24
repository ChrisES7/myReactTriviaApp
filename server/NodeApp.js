const express = require("express");
const app = express();
var path = require("path");
const cors = require("cors");
const mysql = require("mysql");
const session = require("express-session");

const dotenv = require("dotenv");
dotenv.config();

const dbHost = process.env.DB_HOST || "localhost";
const dbUser = process.env.DB_USER || "root";
const dbPassword = process.env.DB_PASSWORD || "kikoso17";
const dbDatabase = process.env.DB_DATABASE || "todolist";

const mime = require("mime");

app.use(express.static(__dirname + "/../"));
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "kikoso17",
  database: "react_quiz_app",
  authPlugin: "mysql_native_password",
  multipleStatements: true,
});

app.get("/", (req, res) => {});

app.get("/loggedIn", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error(
        "Error getting connection from MySQL database pool: " + err.stack
      );
      res
        .status(500)
        .send("Error getting connection from MySQL database pool.");
      return;
    }

    const query = "SELECT * FROM users WHERE username = ? ";
    const values = [username];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error("Error executing the query: ", err);
        res.status(500).send("Error executing the query");
        return;
      }

      if (results.length > 0) {
        console.log(results);
        res.json({
          loggedIn: results,
        }); // Sending the userId as JSON response
      } else {
        res.status(401).send("Invalid username or password");
      }
    });
  });
});

app.post("/loggedIn");

app.post("/register", (req, res) => {
  let userName = req.body.usernameRegistered;
  // params is what is sent through the browser
  // body is sent through javascript
  // query is sent by html form elements
  // const id = req.params.id;
  // const editName = req.params.name;
  // console.log(req.query.name);
  // console.log("editName: " + editName);

  pool.getConnection((err, connection) => {
    if (err) {
      console.error(
        "Error getting connection from MySQL database pool: " + err.stack
      );
      res
        .status(500)
        .send("Error getting connection from MySQL database pool.");
      return;
    }

    const query =
      "INSERT INTO users (username,user_password,user_email,dateCreated,nbTasks) VALUES (?,?,?,?,?)";
    const values = [userName, password, email, dateObj, nbTasks];

    connection.query(query, values, (err, result) => {
      connection.release(); // Release the connection back to the pool

      if (err) {
        console.error("Error inserting data into MySQL database: " + err.stack);
        res.status(500).send("Error inserting data into MySQL database.");
        return;
      }
      console.log("Data inserted into MySQL database.");
      //res.status(200).send("Data presnted from MySQL database.");

      // res.sendFile("index.html", { root: path.join(__dirname, "../") });
      res.redirect("/");
    });
  });
});

app.post("/login", (req, res) => {
  const { username } = req.body;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error(
        "Error getting connection from MySQL database pool: " + err.stack
      );
      res
        .status(500)
        .send("Error getting connection from MySQL database pool.");
      return;
    }

    const query = "SELECT * FROM users WHERE username = ?";
    const values = [username];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error("Error executing the query: ", err);
        res.status(500).send("Error executing the query");
        return;
      }

      if (results.length > 0) {
        // // session is to keep the user logged in
        console.log(results);
        // log in and set loggedIn to 1
        connection.query(
          `UPDATE users SET loggedIn = 1 WHERE username = ${results.username}`,
          (err, results) => {
            if (err) {
              console.error("Error executing the query: ", err);
              res.status(500).send("Error executing the query");
              return;
            }
            if (results.length > 0) {
              console.log(results);
            }
          }
        );
        res.json({
          username: results.username,
          nbPoints: results.nbPoints,
        }); // Sending the userId as JSON response
      } else {
        res.status(401).send(`User ${username} not found. `);
        // check if they want to register? no, do it on register click
      }
    });
  });
});

app.get("/getUsername/:id", (req, res) => {
  const id = req.params.id;
  console.log("getting username");

  pool.getConnection((err, connection) => {
    if (err) {
      console.error(
        "Error getting connection from MySQL database pool: " + err.stack
      );
      res
        .status(500)
        .send("Error getting connection from MySQL database pool.");
      return;
    }
    // get username from params from url?
    const query = "SELECT username FROM users WHERE user_id = ?";
    connection.query(query, id, (err, result) => {
      console.log(result);
      connection.release(); // Release the connection back to the pool

      if (err) {
        console.error("Error inserting data into MySQL database: " + err.stack);
        res.status(500).send("Error inserting data into MySQL database.");
        return;
      }
      console.log("Data gotten from MySQL database.");
      res.json(result); // Send the result as JSON response
    });
  });
});

// this gets all the results from mysql and turns them into json,
// they then get fetched from javascript and sent into another route
// that redirects it to a file.
app.get("/getUserTasks/:username", (req, res) => {
  const id = req.params.id;
  console.log("Posted Login");
  console.log(id);
  pool.getConnection((err, connection) => {
    if (err) {
      console.error(
        "Error getting connection from MySQL database pool: " + err.stack
      );
      res
        .status(500)
        .send("Error getting connection from MySQL database pool.");
      return;
    }
    // get username from params from url?
    const query = "SELECT * FROM tasks WHERE user_id = ?";
    connection.query(query, id, (err, result) => {
      // console.log(result);
      connection.release(); // Release the connection back to the pool

      if (err) {
        console.error("Error inserting data into MySQL database: " + err.stack);
        res.status(500).send("Error inserting data into MySQL database.");
        return;
      }
      console.log("Data gotten from MySQL database.");
      res.json(result); // Send the result as JSON response
    });
  });
});

app.get("/getUserTask/:user_id/:task_id", (req, res) => {
  const user_id = req.params.user_id;
  const task_id = req.params.task_id;
  console.log("User Task " + task_id);

  pool.getConnection((err, connection) => {
    if (err) {
      console.error(
        "Error getting connection from MySQL database pool: " + err.stack
      );
      res
        .status(500)
        .send("Error getting connection from MySQL database pool.");
      return;
    }
    // get username from params from url?
    const query = "SELECT * FROM tasks WHERE user_id = ? AND task_id = ?";
    const values = [user_id, task_id];
    connection.query(query, values, (err, result) => {
      // console.log(result);
      connection.release(); // Release the connection back to the pool

      if (err) {
        console.error("Error inserting data into MySQL database: " + err.stack);
        res.status(500).send("Error inserting data into MySQL database.");
        return;
      }
      console.log("Data gotten from MySQL database.");
      res.json(result); // Send the result as JSON response
    });
  });
});

const port = process.env.PORT || 3308;
app.listen(port, console.log("Up and Running"));
