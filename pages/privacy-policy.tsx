import Layout from 'components/layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { decorateLinkWithLocale } from 'utils/locale';
import useTranslation from 'next-translate/useTranslation';

export default function TermsOfService() {
  const { t, lang } = useTranslation();

  return (
    <Layout>
      <section style={{ marginTop: "10rem" }}>
        <Container>
          <Row>
            <Col>
              <h1>Privacy Policy</h1>
              <p>This privacy policy describes our commitment to preserving the security of your Personal Data, your privacy, and your rights to your Personal Data. It is written in plain language because we want to communicate this to you. It therefore lacks some
              of the precision that a document drafted by and for legal professionals would have, but it still represents our good faith effort at describing what we and you agree to when you entrust us with your data.</p>
              <h3>Principles</h3>
              <p>At ConfluxOne, we believe that the less information we know about you, the better. After all, it is impossible to lose, misuse, or abuse information we don’t have. To the extent that we have control over your data or data about you, we see ourselves
        as custodians of that data on your behalf.</p>
              <p>We use your data solely to provide you with services in which you enroll. Our business is providing ConfluxOne products and services to you, the customer. We have no desire or interest to use or transfer the limited data we acquire for any other purposes.</p>
              <h3> Who We Are</h3>
              <p>ConfluxOne Limited is a Hong Kong Company located at FLAT/RM 7, 17/F, Comweb Plaza, 12 Cheung Yue Street, Cheung Sha Wan, Kowloon, Hong Kong.</p>
              <h3> Who are You</h3>
              <p>Unless otherwise noted, we refer you, the Customer, as an owner or organizer of an individual, family, team, or business account.</p>
              <h3> Non-Owners</h3>
              <p>If you are a non-owner member of a team, business, or family account, your use of ConfluxOne may be subject to your organization’s privacy policy or practices, if any. Non-owner members of an account transfer some of the rights described here to the
              account owners.</p>
              <h3> Information We Keep and How We Use It</h3>
              <p>We retain two kinds of user information to deliver our services: Secure Data and Service Data. Both are treated securely with respect for customer privacy and data confidentiality, but there are important technical and usage differences.</p>
              <h3> Secure Data</h3>
              <p>Secure Data is data that we are not capable of decrypting under any circumstance. It includes all passwords stored in ConfluxOne accounts.</p>
              <h3> Service Data</h3>
              <p>We inevitably acquire Service Data about your usage of ConfluxOne, your account, and your payments through operating our services. We retain only enough Service Data to operate and maintain the services. This data is never used for any other purpose.</p>
              <p>Service Data is kept confidential. It is visible to our staff and includes, but is not limited to, contents that you submit, server logs, billing information, client IP addresses, company or family name, and email addresses. Service data includes
        the name you provide us for your profile and any image that you may upload as part of your profile.</p>
              <p>We retain the right to hold and use Service Data to provide our services, troubleshoot problems, analyze the performance and demands on our services, and to provide our payment processors with the information they need to process payments.</p>
              <h3>Diagnostic Data (Optional)</h3>
              <p>Diagnostic Data is a type of Service Data which is not automatically collected or required for operation of our services.</p>
              <p>In some cases we solicit diagnostic reports and other troubleshooting, bug, and crash reports from customers to help identify and solve problems with our products and services. This information is sent to us explicitly on a case by case basis, or
        by users who explicitly opt into our beta software programs or who otherwise explicitly choose to provide diagnostic data to us.</p>
              <p>Diagnostic Data may contain sensitive information about your devices and operating environment as well as personally identifying information. Although there may be occasions when we ask for Diagnostic Data to assist you with a problem, you are never
        obligated to provide it.</p>
              <p>Diagnostic data never includes decrypted Secure Data.</p>
              <h3> Keeping Your Information Safe</h3>
              <p>We understand and accept our responsibility to protect Service Data and Secure Data. We use strict access control mechanisms, network isolation, and encryption to ensure that Secure and Service Data is only available to authorized personnel. Additionally,
              Secure Data cannot be decrypted even by those who do have access to it.</p>
              <h3> Data Location and Transfer</h3>
              <p>Service Data is available to members of our staff irrespective of their location.</p>
              <p>ConfluxOne.com data is held on servers located within the United States.</p>
              <p>The transfer of ConfluxOne Service Data to the United States has not yet been shown to comply with Articles 44–50 of the GDPR, and therefore European users of ConfluxOne.com must accept the risk of data transfers to the United States.</p>
              <h3> Customer support system</h3>
              <p>Our customer support and email services are hosted primarily in the United States. Any information you choose send us through email or our customer support system may pass through and be stored on a variety of intermediate services. If you wish, you
              may encrypt email to us using our PGP public key.</p>
              <h3> Third-Party Data Processors</h3>
              <p>Your Secure and Service data are held by third party data processors, who provide us with hosting and other infrastructure services. The locations of these are described above. In many cases (but we cannot promise that this will always be the case)
        Secure data held by these entities is encrypted with keys held only by us.</p>
              <p>Data needed to process payments is collected by our payment processor, Stripe, Inc., which conforms to a U.S.-E.U. Privacy Shield Framework. See https://stripe.com/privacy-shield-policy</p>
              <h3> Contacting You</h3>
              <p>We may use your contact information to communicate with you about Service activity, provide support, and send you other information such as product updates and announcements. You may choose to stop receiving communications from us, except certain
        important notifications such as billing and account security alerts.</p>
              <h3>Your Responsibilities for Protecting Your Data</h3>
              <p>When you create a ConfluxOne account you will provide a password. Password is something you create yourself. For your protection, you should create a strong and unique Password to ensure that it is not easily guessed.</p>
              <p>It is extremely important that you understand that anyone with password can access your data.</p>
              <p>Due to the nature of our design and the sensitivity of the information you entrust to us (even in encrypted form), it may not be possible for us to help you with certain customer service requests unless you are listed as an account owner and are communicating
              from your verified email address. In the event that you change your email address, is very important that you update your email on your ConfluxOne account(s) or you may eventually lose access.</p>
              <h3> Your Right to Knowing to What We Know</h3>
              <p>You have the right to know what we know about you and to see how that data is handled. You may request a screenshot of what we can see about you in our back office systems. However, to protect customer privacy, such requests must be carefully authenticated
              beyond demonstrating control of the customer’s email address.</p>
              <h3> Your Right to Have Your Data Erased</h3>
              <p>As we are merely custodians of your data, account owners have the right to instruct us to remove data permanently from our systems. To ensure that no one’s data is deleted without their consent, you must first delete your account through an authenticated
        session. After your account has been deleted, the account owner may contact us and ask for the data to be expunged. Once the request is authenticated, the data will be removed from our active systems within 72 hours.</p>
              <p>Disaster recovery and data availability requirements mean that ConfluxOne has a legitimate interest in maintaining secure and immutable backups. Erasure requests will leave those backups untouched, and we will only remove data from backups if legally
              compelled to.</p>
              <h3> Cookies and Tracking</h3>
              <p>We do not engage in or support cross-service tracking.</p>
              <p>We do set and use cookies (small text files placed on your device) on our own domains and subdomains to store settings that assist with identifying your account for sign-in. We also use third party analytics packages for our public pages that may
        set cookies on your computer. These are limited to our domains, and do not involve cross-service tracking. You may disable cookies in your browser and continue to use our services without impact.</p>
              <p>Client applications, including web browsers, will store information about your account to assist with future sign-ins and keep some information available to you when you are not signed in. Users may remove all such information from their devices,
              but doing so will require that they provide complete information (account details, Master Password, and Secret Key) on subsequent sign-ins.</p>
              <h3> Consent for Underage Enrollment</h3>
              <p>Those under the age of 16 may not use the services without the consent or authorization of their parent or legal custodian. Family account organizers and team owners are responsible for that authorization when they add someone under the age of 16
              to an account.</p>
              <h3> Disclosure</h3>
              <p>We will comply with applicable law with respect to providing Service Data and encrypted Secure Data to law enforcement agencies. If permitted, we will notify you of such a request and whether or not we have complied.</p>
              <p>Some Service Data is made available to family account organizers and team owners. In some limited circumstances we may provide some information to non-owner members of these accounts. Account owners will be informed in these circumstances.</p>
              <h3> Breach Notification</h3>
              <p>If the confidentiality of customer data is breached, we recognize our responsibility to our customers and to the public to disclose the nature of the risk and provide a transparent account of the events without undue delay. At a bare minimum, we must
              inform the applicable supervisory authorities as required by law and regulation.</p>
              <h3> Updates to our Privacy Policy</h3>
              <p>At our discretion, we may make changes to this Policy and note the date of the last revision. You should check here frequently if you need to know of updates to our Privacy Policy. We maintain the right to send you annoying email informing you of
              substantive changes. Previous versions will be made available from this page.</p>
              <h3> Contact Us</h3>
              <p>If you have any questions about this Policy, you can <a href={decorateLinkWithLocale("/contact", lang)}>contact us</a>.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section style={{ marginBottom: "10rem" }}>
      </section>
    </Layout>
  )
}