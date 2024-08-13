import slikslider from './slik.twig';
import sliksliderData from './slik.yml';

/**
 * Storybook Definition.
 */
export default { title: 'molecules/slikslider' };

export const sliksliderExample = () => slikslider(sliksliderData);
