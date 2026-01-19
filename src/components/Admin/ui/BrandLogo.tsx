export const BrandLogo = () => {
  return (
    <span className="brand-logo" aria-label="Yoga">
      <img
        className="brand-logo__img brand-logo__img--light"
        src="/icons/favicon-light.svg"
        alt="Logo"
      />
      <img
        className="brand-logo__img brand-logo__img--dark"
        src="/icons/favicon-dark.svg"
        alt="Logo"
      />
    </span>
  )
}
