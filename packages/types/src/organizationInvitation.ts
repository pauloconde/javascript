import { MembershipRole } from './organizationMembership';

declare global {
  /**
   * If you want to provide custom types for the organizationInvitation.publicMetadata
   * object, simply redeclare this rule in the global namespace.
   * Every organizationInvitation object will use the provided type.
   */
  interface OrganizationInvitationPublicMetadata {
    [k: string]: unknown;
  }
}

export interface OrganizationInvitationResource {
  id: string;
  emailAddress: string;
  organizationId: string;
  publicMetadata: OrganizationInvitationPublicMetadata;
  role: MembershipRole;
  status: OrganizationInvitationStatus;
  createdAt: Date;
  updatedAt: Date;
  revoke: () => Promise<OrganizationInvitationResource>;
}

export type OrganizationInvitationStatus = 'pending' | 'accepted' | 'revoked';
