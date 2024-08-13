import Final5 from './fi.twig'; // Adjust path if necessary
import Final5Data from './fi.yml'; // Adjust path if necessary

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Final5' };

export const defaultFancy = () => Final5(Final5Data);
