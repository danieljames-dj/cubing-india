const express = require('express')
const session = require('express-session');
const path = require('path')
const {PORT, SESSION_SECRET, PRODUCTION, BUILD_PATH} = require('./config');
const bodyParser = require('body-parser');

const initialize = async() => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}) );

    if (!PRODUCTION) {
        const cors = require('cors')
        app.use(cors({origin: '*'}))
    }

    require('./api-connector').connect(app);

    const buildPath = path.join(__dirname, "../client/dist/CubingIndia");
    app.use(express.static(buildPath));
    app.get('/*', (req, res) => {
        res.sendFile(path.join(buildPath, 'index.html'));
    });

    app.listen(PORT, () => {
        console.log(`App listening to port %s`, PORT);
    });

}

initialize().catch(error => {
    console.error(error);
});