const express = require('express');
const { exec } = require('child_process');

const app = express();
app.use(express.json());

app.post('/update', (req, res) => {
    const event = req.headers['x-github-event'];

    if (!event) {
        console.error('Missing x-github-event header');
        return res.status(400).send('Bad Request: Missing event header');
    }

    if (event === 'ping') {
        console.log('Ping event received');
        return res.status(200).send('Pong');
    }

    if (event === 'push') {
        console.log('Push event received');

        exec('/home/0xheun/update.sh', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return res.status(500).send('Server Error');
            }
            if (stderr) {
                console.error(`Stderr: ${stderr}`);
            }
            console.log(`Stdout: ${stdout}`);
            res.status(200).send('Update successful');
        });
    } else {
        console.error(`Unhandled event: ${event}`);
        res.status(400).send(`Unhandled event: ${event}`);
    }
});

app.listen(3000, () => console.log('Webhook server running on port 3000'));