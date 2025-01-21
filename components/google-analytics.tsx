export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
    return (
      <>
        {/* Google tag (gtag.js) */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${measurementId}');
            `,
          }}
        />
      </>
    )
  }
  
  