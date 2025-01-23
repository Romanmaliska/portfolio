interface EmailTemplateProps {
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  subject,
  message,
}) => (
  <div>
    <h1>Email sent from: {email}</h1>
    <h2>Subject: {subject}</h2>
    <p>{message}</p>
  </div>
);

export default EmailTemplate;
