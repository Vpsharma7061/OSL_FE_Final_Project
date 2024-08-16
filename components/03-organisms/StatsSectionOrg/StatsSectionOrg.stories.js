import StatsSectionOrg from './StatsSectionOrg.twig';
import StatsSectionOrgData from './StatsSectionOrg.yml';

/**
 * Storybook Definition.
 */
export default { title: 'organisms/StatsSectionOrg' };

export const HeaderExample = () => StatsSectionOrg(StatsSectionOrgData);
