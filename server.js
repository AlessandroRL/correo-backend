const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.post('/enviar/send', (req, res) => {
    const { destino, asunto, cc, mensaje } = req.body;

    console.log('Datos del correo recibido:');
    console.log('Destino:', destino);
    console.log('Asunto:', asunto);
    console.log('CC:', cc);
    console.log('Mensaje:', mensaje);

    res.status(200).json({ message: 'Correo enviado exitosamente' });
});

app.listen(port, () => {
    console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
