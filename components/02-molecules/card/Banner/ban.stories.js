import Banner from './ban.twig';
import BannerData from './ban.yml';

/**
 * Storybook Definition.
 */
export default { title: 'molecules/Banner' };

export const BannerExample = () => Banner(BannerData);
