import Final3 from './fin.twig'; // Adjust path if necessary
import Final3Data from './fin.yml'; // Adjust path if necessary

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Final3' };

export const defaultFancy = () => Final3(Final3Data);
