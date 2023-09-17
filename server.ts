import express from 'express';
import path from 'path';
const app = express();

app.use(express.static(__dirname));

app.get('/', (_req: any, res: any) => {
 res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 9000);

