import fancy from './fancy.twig'; // Adjust path if necessary
import fancyData from './fancy.yml'; // Adjust path if necessary

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Fancybox' };

export const defaultFancy = () => fancy(fancyData);
