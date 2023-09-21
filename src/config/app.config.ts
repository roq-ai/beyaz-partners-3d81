interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Site Owner'],
  customerRoles: [],
  tenantRoles: ['Site Owner', 'Legal Advisor', 'Site Administrator', 'Client'],
  tenantName: 'Company',
  applicationName: 'Beyaz Partners',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage users',
    'Manage companies',
    'Add or remove company-user relationships',
    'Modify database schema',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/8ecca369-367d-42e3-ab2d-d832ccf4d0dc',
};
