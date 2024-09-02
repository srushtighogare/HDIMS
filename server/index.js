const express = require("express")
const cors = require("cors")
const argon2 = require("argon2")
const app = express();
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json());

//hashing function
async function password_hashing(password) {
    try {
        const hash = await argon2.hash(password);
        console.log(hash);
        return hash;
    } catch (err) {
        console.error(err.message)
    }
};

//ROUTES//

//New Registration
app.post("/governmentregistration", async (req, res) => {
    try {
        const {username, password, lvl, areaName} = req.body;
        hashed_password = password_hashing(password);
        await pool.query("INSERT INTO govRegis (username, password, lvl, areaName) VALUES($1, $2, $3, $4)", [username, hashed_password, lvl, areaName]);

        res.json("New registration added successfully!")
    } catch (err) {
        console.error(err.message);
    }
})

//get profile info
app.get('/governmentregistration/:username', async (req, res) => {
    try {
        const {username} = req.params;
        // console.log(username);
        const profile = await pool.query("SELECT * FROM govregis WHERE username = $1", [username]);

        // console.log(profile);
        res.json(profile.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//update profile username
app.put('/governmentregistration/updateusername/:id', async (req, res) => {
    try {
        const {username} = req.body;
        const {id} = req.params;
        await pool.query("UPDATE govregis SET username = $1 WHERE regiid = $2", [username, id]);

        res.json("Username updated successfully!");
    } catch (err) {
        console.error(err.message);
    }
});

//update profile password
app.put('/governmentregistration/updatepassword/:id', async (req, res) => {
    try {
        const {password} = req.body;
        const {id} = req.params;
        await pool.query("UPDATE govregis SET password = $1 WHERE regiid = $2", [password, id]);

        res.json("Password updated successfully!");
    } catch (err) {
        console.error(err.message);
    }
});


//for developer only

//get all registrations
app.get("/governmentregistrations/all", async (req, res) => {
    const all_regis = await pool.query("SELECT * FROM govregis");
    res.json(all_regis.rows);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})