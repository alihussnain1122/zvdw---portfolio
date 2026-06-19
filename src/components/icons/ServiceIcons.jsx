const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.25,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const serviceIcons = {
  architecture: (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path {...stroke} d="M8 40h32" />
      <path {...stroke} d="M12 40V22l12-10 12 10v18" />
      <path {...stroke} d="M20 40V28h8v12" />
      <path {...stroke} d="M12 22l12-10 12 10" />
      <path {...stroke} d="M24 12V8M18 14l-3-3M30 14l3-3" />
    </svg>
  ),
  interior: (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <rect {...stroke} x="8" y="18" width="32" height="22" rx="1" />
      <path {...stroke} d="M8 28h32" />
      <path {...stroke} d="M16 28v12M32 28v12" />
      <path {...stroke} d="M14 22h6v6h-6zM28 22h6v6h-6z" />
      <circle {...stroke} cx="24" cy="12" r="3" />
      <path {...stroke} d="M24 15v3" />
    </svg>
  ),
  projectManagement: (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <rect {...stroke} x="12" y="8" width="24" height="32" rx="2" />
      <path {...stroke} d="M18 8V6a6 6 0 0 1 12 0v2" />
      <path {...stroke} d="M18 18h12M18 24h12M18 30h8" />
      <path {...stroke} d="M30 30l3 3 6-6" />
    </svg>
  ),
  sustainable: (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path {...stroke} d="M10 38h28" />
      <path {...stroke} d="M14 38V20h8v18M26 38V14h8v24" />
      <path {...stroke} d="M24 34c-6-3-10-8-10-14 0 5 4 8 10 10 6-2 10-5 10-10 0 6-4 11-10 14z" />
      <circle {...stroke} cx="36" cy="10" r="4" />
    </svg>
  ),
};

export default function ServiceIcon({ name }) {
  return serviceIcons[name] ?? null;
}
