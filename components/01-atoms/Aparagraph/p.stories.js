import Aparagraph from './p.twig';
import AparagraphData from './p.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Aparagraph' };

export const twig = () => Aparagraph(AparagraphData);
