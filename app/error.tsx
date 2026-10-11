'use client'
export default function Error({ reset }: { reset: () => void }) { return <div className="site-container py-24 text-center"><p className="eyebrow">Un instant</p><h1 className="page-title">Une erreur est survenue</h1><button className="button-primary mt-8" onClick={() => reset()}>Réessayer</button></div> }
