import nodemailer from "nodemailer"
import {} from "dotenv/config"

function genVerificationEmail(id) {
    const HOST = "http://localhost:3006"
    const link = HOST + "/api/verify/" + id
    let text = "Verify email at this link!\n" + link
    let html = text
    return [text, html]
}

class Mailer {
    #user
    #pass
    constructor(user, pass) {
        this.#user = user
        this.#pass = pass
        this.transporter = nodemailer.createTransport({
            host: "smtp.mail.yahoo.com",
            port: 465,
            secure: false,
            service: "yahoo",
            auth: {
                user: user,
                pass: pass,
            },
        })
    }
    async sendMail(to, subject, text, html) {
        return this.transporter
            .sendMail({
                from: "Automail " + this.#user,
                to: to,
                subject: subject,
                text: text,
                html: html,
            })
            .then((info) => {
                console.log(info)
            })
            .catch(console.error)
    }

    async verificationEmail(id, email) {
        const [text, html] = genVerificationEmail(id)
        return this.sendMail(email, "Verify your email with us!", text, html)
    }
}

const mailer = new Mailer(process.env.MAIL, process.env.M_PASS)

export default mailer
