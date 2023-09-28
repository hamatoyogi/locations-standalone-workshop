import express from 'express';
import path from 'path';
import webpack from "webpack";
import middleware from "webpack-dev-middleware";

const app = express();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname));
} else {
    const compiler = webpack(require('../webpack.config'));

    app.use(middleware(compiler));
}

app.get('/', (_req: any, res: any) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(process.env.PORT || 9000);

