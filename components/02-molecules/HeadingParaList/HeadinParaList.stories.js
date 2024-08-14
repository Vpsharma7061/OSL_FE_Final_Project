import HeadingParaList from './HeadingParaList.twig';
import HeadingParaListData from './HeadingParaList.yml';

/**
 * Storybook Definition.
 */
export default { title: 'molecules/HeadingParaList' };

export const HeaderExample = () => HeadingParaList(HeadingParaListData);
