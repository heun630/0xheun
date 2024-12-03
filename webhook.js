const express = require('express');
const { exec } = require('child_process');

const app = express();
app.use(express.json());

app.post('/update', (req, res) => {
    if (req.headers['x-github-event'] === 'push') {
        exec('/home/0xheun/update.sh', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return res.status(500).send('Server Error');
            }
            if (stderr) {
                console.error(`Stderr: ${stderr}`);
            }
            console.log(`Stdout: ${stdout}`);
            res.status(200).send('Updated');
        });
    } else {
        res.status(400).send('Invalid event');
    }
});

app.listen(3000, () => console.log('Webhook server running on port 3000'));
