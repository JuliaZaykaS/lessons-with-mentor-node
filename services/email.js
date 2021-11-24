const nodemailer = require("nodemailer");

const sendMail = async (body, res) => {
  try {
    const { firstName, lastName, email, password, phone, message } = body;
    const output = `<p>You have new email. Please, see details:</p>
    <ul>
        <li>${firstName}</li>
        <li>${lastName}</li>
        <li>${email}</li>
        <li>${password}</li>
        <li>${phone}</li>
        <li>${message}</li>
    </ul>`;
    //   123456julia
    //   goitNodeJs@hotmail.com

    let transporter = nodemailer.createTransport({
      service: "hotmail",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "goitNodeJs@hotmail.com", // generated ethereal user
        pass: "123456julia", // generated ethereal password
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });

    const emailOptions = {
      from: 'goitNodeJs@hotmail.com', // sender address
      to: 'zaykajulias@gmail.com', // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: output, // html body
    };
    let info = await transporter.sendMail(emailOptions);

    console.log("Message sent: %s", info.messageId);

    return res.render("send", { msg: "Form sended" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = sendMail;
