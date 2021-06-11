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
              .create({item: 
                {
                date: admin.firestore.Timestamp.fromDate(new Date(req.body.date)),
                content: req.body.content,
                completed: req.body.completed
                }});
          return res.status(200).send();
        } catch (error) {
          console.log(error);
          return res.status(500).send(error);
        }
      })();
  });

// read all
app.get('/api/getAll', (req, res) => {
  (async () => {
      try {
          let query = db.collection('items');
          let response = [];
          await query.get().then(querySnapshot => {
          let docs = querySnapshot.docs;
          debugger;
          for (let doc of docs) {
              const selectedItem = {
                  id: doc.id,
                  content: doc.data().item.content,
                  date: doc.data().item.date.toDate().toDateString(),
                  completed: doc.data().item.completed,
              };
              response.push(selectedItem);
          }
          });
          // debugger;
          return res.status(200).send(response);
      } catch (error) {
          console.log(error);
          return res.status(500).send(error);
      }
      })();
  });

exports.app = functions.https.onRequest(app);