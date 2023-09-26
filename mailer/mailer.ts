import nodemailer from 'nodemailer'

const appSecurity = process.env.APP_SECURITY;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: '8bitstoreverifyinteg@gmail.com',
        pass: 'clex qvfh rvjl szfg'
    },
    from: '8bitstoreverifyinteg@gmail.com'
});

export const sendEmail = async (to: string, code: string): Promise<void> => {

    const mailOptions = {
        from: '"8BitStore" 8bitstoreverifyinteg@gmail.com',
        to,
        subject: 'Código de verificacion para 8BitStore',
        text: `
            Llego tu codigo para 8BitStore
            El código es ${code}
        `
    }

    try {
        await transporter.sendMail(mailOptions);
        console.log("Correo electrónico enviado");
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error)
    }

}