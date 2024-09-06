export default function handler(req, res) {
    if (req.method === 'POST') {
      console.log(req.body);  // Log the incoming data
      res.status(200).send('Data received');
    } else {
      res.status(405).send('Method Not Allowed');
    }
  }