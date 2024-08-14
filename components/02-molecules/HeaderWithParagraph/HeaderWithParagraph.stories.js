import HeaderWithParagraph from './HeaderWithParagraph.twig';
import HeaderWithParagraphData from './HeaderWithParagraph.yml';

/**
 * Storybook Definition.
 */
export default { title: 'molecules/HeaderWithParagraph' };

export const HeaderExample = () => HeaderWithParagraph(HeaderWithParagraphData);
