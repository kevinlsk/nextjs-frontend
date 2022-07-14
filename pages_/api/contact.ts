import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail';
import { decorateLinkWithLocale } from 'utils/locale';

export default async function contact(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(400).end();
    return;
  }

  if (req.body.firstName.length > 0 || req.body.lastName.length > 0 || req.body.email.length > 0) {
    // We detected a bot, redirect
    res.redirect(decorateLinkWithLocale('/contact', req.body.lang));
    return;
  }

  const firstNameField = req.body[obfuscatedFieldName("firstName")];
  const lastNameField = req.body[obfuscatedFieldName("lastName")];
  const emailField = req.body[obfuscatedFieldName("email")];

  const content = `
From: ${firstNameField} ${lastNameField} <${emailField}>
Phone: ${req.body.phone}
Company: ${req.body.company}
Job Title: ${req.body.jobTitle}

${req.body.message}
`;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'support@studium.video',
    from: 'Studium Website <website@studium.video>',
    subject: 'Studium enquiry',
    text: content,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }

    throw error;
  }

  res.redirect(decorateLinkWithLocale('/contact', req.body.lang));
}

function obfuscatedFieldName(fieldName: string) {
  const fieldsDict = {
    "firstName": "DmQ3AuRbrqlXGSnKUqQ9l",
    "lastName": "vlYx8krbjgJCeoWUubIoV",
    "email": "JO7kjm8vqJPoDq3WCooc3",
  }

  return fieldsDict[fieldName];
}