import CardMolecule from './CardMolecule.twig';
import CardMoleculeData from './CardMolecule.yml';

/**
 * Storybook Definition.
 */
export default { title: 'molecules/CardMolecule' };

export const HeaderExample = () => CardMolecule(CardMoleculeData);
