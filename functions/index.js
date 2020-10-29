const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp();

/**
* Here we're using Gmail to send 
*/
let transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    ssl: false,
    auth: {
        user: 'haroldognjunior@gmail.com',
        pass: 'xhFp7SAUwvWtQVH1'
    }
});

// let transporter = nodemailer.createTransport(req => {
//     const id = req.query.id;    
    
    
//     const res = {service: 'gmail',
//     auth: {
//         user: 'haroldognjunior@gmail.com',
//         pass: id
//     }
// }
// });


exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      
        // getting dest email by query string
        const dest = req.query.dest;

        const mailOptions = {
            from: 'Protectora Sarmiento <info@protectorasarmiento.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: dest,
            bcc: 'rodrigomp88@gmail.com', 
            subject: 'Hemos recibido tu email ', // email subject
            html: `<img src="https://firebasestorage.googleapis.com/v0/b/protectoraanimales-9c9db.appspot.com/o/Logo.png?alt=media&token=bbc10da0-2497-4fd9-8260-138cf332a84d" />
            <p style="font-size: 16px;">Muchas gracias por habernos enviado tus informaciones. <br />
            Pronto entraremos en contacto contigo =) </p>
                <br />
                
            ` // email content in HTML
        };
  
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });    
});