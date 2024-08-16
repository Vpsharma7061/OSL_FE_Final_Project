import StatsSection from './StatsSection.twig';
import StatsSectionData from './StatsSection.yml';

/**
 * Storybook Definition.
 */
export default { title: 'molecules/StatsSection' };

export const HeaderExample = () => StatsSection(StatsSectionData);
