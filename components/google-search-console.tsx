import Script from "next/script"

export function GoogleSearchConsole({ verificationId }: { verificationId: string }) {
  return <meta name="google-site-verification" content={verificationId} />
}

