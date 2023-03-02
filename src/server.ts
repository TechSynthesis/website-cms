import express from 'express'
import nodemailerSendgrid from 'nodemailer-sendgrid'
import path from 'path'
import payload from 'payload'

// eslint-disable-next-line
require('dotenv').config()

const app = express()

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const sendGridAPIKey = process.env.SENDGRID_API_KEY

const sendgridConfig = {
  transportOptions: nodemailerSendgrid({
    apiKey: sendGridAPIKey,
  }),
}

const start = async (): Promise<void> => {
  app.use('/assets', express.static(path.resolve(__dirname, '../assets')))
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    email: {
      fromName: 'TechInverted CMS',
      fromAddress: 'info@techinverted.com',
      ...sendgridConfig,
    },
    onInit: () => {
      payload.logger.info(`Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen(process.env.PORT, async () => {
    payload.logger.info(`Server listening on port ${process.env.PORT}`)
  })
}

start()
