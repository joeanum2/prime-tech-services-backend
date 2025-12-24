const services = [
  {
    id: 'svc-repair-diagnostic',
    name: 'Device Diagnostics',
    category: 'repairs',
    description: 'In-depth hardware and software diagnostics for phones, tablets, and laptops.',
    slaHours: 24,
  },
  {
    id: 'svc-logicboard-repair',
    name: 'Logic Board Repair',
    category: 'repairs',
    description: 'Component-level micro soldering for boards affected by liquid or electrical damage.',
    slaHours: 72,
  },
  {
    id: 'svc-firmware',
    name: 'Firmware Reinstallation',
    category: 'software',
    description: 'Clean reinstalls for Windows, macOS, Android, and embedded controllers with factory calibration.',
    slaHours: 48,
  },
];

const products = [
  {
    sku: 'sw-suite-security-pro',
    name: 'Security Suite Pro',
    vendor: 'Prime Tech Software',
    licenseTermMonths: 12,
    description: 'Endpoint protection and remote monitoring with managed updates.',
  },
  {
    sku: 'sw-rmm-premium',
    name: 'Remote Maintenance Premium',
    vendor: 'Prime Tech Software',
    licenseTermMonths: 6,
    description: 'Remote desktop control, patch orchestration, and SLA reporting.',
  },
  {
    sku: 'sw-backup-hybrid',
    name: 'Hybrid Backup',
    vendor: 'Prime Tech Cloud',
    licenseTermMonths: 12,
    description: 'Hybrid onsite/offsite backup with AES-256 encryption and geo-redundant storage.',
  },
];

module.exports = {
  services,
  products,
};
