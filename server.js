const app = require('express')();
const http = require('http').createServer(app);
const bodyParser = require('body-parser');

//middlerwares
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const postRoute = require('./routes/post.route');
app.use('/post', postRoute);


//listen for request
http.listen(4000, () => {
	console.log('api en puerto 4000');
});