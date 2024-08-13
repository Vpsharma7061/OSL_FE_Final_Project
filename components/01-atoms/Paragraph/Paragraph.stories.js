import Paragraph from './Paragraph.twig';
import ParagraphData from './Paragraph.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Paragraph' };

export const twig = () => Paragraph(ParagraphData);
