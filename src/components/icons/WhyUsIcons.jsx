const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.25,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const whyUsIcons = {
  futuristic: (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path {...stroke} d="M24 6L42 18v12L24 42 6 30V18L24 6z" />
      <path {...stroke} d="M24 6v36M6 18l18 12 18-12M6 30l18-12 18 12" />
    </svg>
  ),
  passionate: (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path {...stroke} d="M24 38s-14-9.2-14-18.5C10 13.8 13.4 10 17.6 10c2.5 0 4.8 1.2 6.4 3.1 1.6-1.9 3.9-3.1 6.4-3.1 4.2 0 7.6 3.8 7.6 9.5C38 28.8 24 38 24 38z" />
    </svg>
  ),
  collaborative: (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <circle {...stroke} cx="16" cy="16" r="5" />
      <circle {...stroke} cx="32" cy="16" r="5" />
      <circle {...stroke} cx="24" cy="32" r="5" />
      <path {...stroke} d="M19.5 19.5l4 6M28.5 19.5l-4 6" />
    </svg>
  ),
  experimental: (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path {...stroke} d="M18 8h12l-2 14h-8L18 8z" />
      <path {...stroke} d="M20 22h8l-2 18H22L20 22z" />
      <path {...stroke} d="M14 40h20" />
      <circle {...stroke} cx="30" cy="12" r="2" />
    </svg>
  ),
  experienced: (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path {...stroke} d="M24 8l3.2 9.8H38l-8 5.8 3.1 9.8L24 27.6l-9.1 5.8 3.1-9.8-8-5.8h10.8L24 8z" />
    </svg>
  ),
  quality: (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <circle {...stroke} cx="24" cy="24" r="16" />
      <path {...stroke} d="M16 24l5.5 5.5L32 18" />
    </svg>
  ),
  client: (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <circle {...stroke} cx="24" cy="14" r="6" />
      <path {...stroke} d="M12 38c0-6.6 5.4-12 12-12s12 5.4 12 12" />
      <path {...stroke} d="M32 20c3 1.2 5 4 5 7.5V38" />
    </svg>
  ),
  environment: (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path {...stroke} d="M24 40V20" />
      <path {...stroke} d="M24 28c-8-4-12-10-12-16 0 6 5 10 12 12 7-2 12-6 12-12 0 6-4 12-12 16z" />
    </svg>
  ),
};

export default function WhyUsIcon({ name }) {
  return whyUsIcons[name] ?? null;
}
