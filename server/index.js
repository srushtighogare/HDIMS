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

//Collecting data and saving in database

//anc data
app.post("/anc/save-values", async (req, res) => {
    try {

        const { hosp_id, anc_regis, early_anc_regis, tt2} = req.body;
        const indicators = calculate_anc_indicators(anc_regis, early_anc_regis, tt2);
        // console.log("indicators calculated")

        if(early_anc_regis > anc_regis || tt2 > anc_regis) {
            return res.status(400).json({ error: "Values for early_anc_regis and tt2 must be less than or equal to A." });

        }

        await pool.query("INSERT INTO anc (hosp_id, anc_regis, early_anc_regis, tt2, early_regis_rate, tt2_to_total_anc) VALUES ($1, $2, $3, $4, $5, $6)", [hosp_id, anc_regis, early_anc_regis, tt2, indicators.early_regis_rate, indicators.tt2_to_total_anc]);

        res.json("Data added successfully!");
    } catch (err) {
        console.error(err.message);
    }
})

//function for anc related indicator calculation
function calculate_anc_indicators(anc_regis, early_anc_regis, tt2) {
    const early_regis_rate = (early_anc_regis*100)/anc_regis;
    const tt2_to_total_anc = (tt2*100)/anc_regis;

    return { early_regis_rate, tt2_to_total_anc};
}

//JSSK data

//function to calculate JSSK related indicators

//anc data request
app.get("/indivstimegraph", async (req, res) => {
    const { indicator, time_range } = req.body;

    const query = `SELECT ${indicator} FROM anc WHERE created_at >= NOW() - INTERVAL '${time_range}'`;

    const result = await pool.query(query);

    res.json(result.rows);
})

//for developer only

//get all registrations
app.get("/governmentregistrations/all", async (req, res) => {
    const all_regis = await pool.query("SELECT * FROM govregis");
    res.json(all_regis.rows);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})