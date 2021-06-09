const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: true }));

// initialize firebase and get firestore
var serviceAccount = require("./permission_key.json"); // service account private key
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://todolist2-b7979..firebaseio.com"
});
const db = admin.firestore();

// return hello world
app.get('/hello-world', (req, res) => {
  return res.status(200).send('Hello World!');
});


// create to db
app.post('/api/create', (req, res) => {
    (async () => {
      debugger;
        try {
          await db.collection('items').doc('/' + req.body.id + '/')
              .create({item: req.body});
          return res.status(200).send();
        } catch (error) {
          console.log(error);
          return res.status(500).send(error);
        }
      })();
  });

exports.app = functions.https.onRequest(app);