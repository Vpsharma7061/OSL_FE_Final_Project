import StatsSection1 from './StatsSection1.twig';
import StatsSection1Data from './StatsSection1.yml';

/**
 * Storybook Definition.
 */
export default { title: 'atoms/StatsSection1' };

export const HeaderExample = () => StatsSection1(StatsSection1Data);
