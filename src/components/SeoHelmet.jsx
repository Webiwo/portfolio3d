import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const SeoHelmet = ({ section, url, image }) => {
  const { t } = useTranslation();

  const title = t(`${section}.title`);
  const description = t(`${section}.description`);

  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Sławomir Piwowarski" />
      <meta name="robots" content="index, follow" />

      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SeoHelmet;
