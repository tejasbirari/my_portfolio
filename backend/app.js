const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT;
const database = require('./database/Connection');

const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const AUTHENTICATION_ROUTE = require('./routes/Authentication');
const PROFILE_ROUTE = require('./routes/Profile');
const SKILLS_ROUTE = require('./routes/Skills');
const PROJECT_ROUTE = require('./routes/Project');
const RESUME_ROUTE = require('./routes/Resume');

app.use('/api/authetication', AUTHENTICATION_ROUTE);
app.use('/api/add_profile', PROFILE_ROUTE);
app.use('/api/get_profile', PROFILE_ROUTE);
app.use('/api/add_skills', SKILLS_ROUTE);
app.use('/api/get_skills', SKILLS_ROUTE);
app.use('/api/add_project', PROJECT_ROUTE);
app.use('/api/get_project', PROJECT_ROUTE);
app.use('/api/add_resume', RESUME_ROUTE);
app.use('/api/get_resume', RESUME_ROUTE);

app.use(express.static(path.join(__dirname, './frontend/build')));

app.get("*", function(_, res) {
    res.sendFile(
        path.join(__dirname, "./frontend/build/index.html"),
        function(err){
            res.status(500).send(err);
        }
    )
})

const start = async () => {
    await database();
    try {
        app.listen(PORT, () => {
            console.log('server started');
        });
    } catch (error) {
        console.log(error);
    }
}

start();