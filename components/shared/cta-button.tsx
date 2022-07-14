import Button from 'react-bootstrap/Button';

export default function CTAButton({ href, className = '', variant="primary", children }) {
  return (
    <Button className={className} variant={variant} size="lg" style={{ minWidth: "10rem" }} href={href}>
      {children}
    </Button>
  )
}