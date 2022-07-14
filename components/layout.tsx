import Head from 'next/head';
import Menu from './menu';
import FooterSection from './shared/footer-section';
import useTranslation from 'next-translate/useTranslation';

export default function Layout(props) {
  const { t, lang } = useTranslation();

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon.png" />
        <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" />
        <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width, minimum-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={lang} />
        <meta property="og:image" content="/logo_1200x630@2x.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:title" content={t("common:general-html-og-title")} />
        <meta property="og:description" content={t("common:general-html-og-description")} />
        <meta property="og:site_name" content="Studium - secure video streaming platform" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.studium.video/${lang}`} />
        <meta name="description" content={t("common:general-html-meta-description")} />
        <meta name="keywords" content="ott video, tvod, video streaming, drm" />
        <title>{t("common:gerenal-html-title")}</title>
      </Head>
      <Menu></Menu>
      {props.children}
      <FooterSection/>
    </div>
  )
}