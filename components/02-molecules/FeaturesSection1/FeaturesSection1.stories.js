import FeaturesSection1 from './FeaturesSection1.twig';
import FeaturesSection1Data from './FeaturesSection1.yml';

/**
 * Storybook Definition.
 */
export default { title: 'molecules/FeaturesSection1' };

export const HeaderExample = () => FeaturesSection1(FeaturesSection1Data);
