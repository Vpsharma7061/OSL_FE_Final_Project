import Final4 from './fi.twig'; // Adjust path if necessary
import Final4Data from './fi.yml'; // Adjust path if necessary

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Final4' };

export const defaultFancy = () => Final4(Final4Data);
