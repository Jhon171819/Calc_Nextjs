// pages/api/postData.js

export default function handler(req, res) {
    if (req.method === 'POST') {

      const { data } = req.body;
  

      res.status(200).json({ message: 'Data received successfully', data });
    }
    if (req.method === 'GET') {
        const { data } = res.json({message: "olá"})
    }
  }
  