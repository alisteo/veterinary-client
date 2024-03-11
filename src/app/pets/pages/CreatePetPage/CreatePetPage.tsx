import { SavePet } from './../../shared/components';

export type CreatePetPageProps = {};

const CreatePetPage: React.FC<CreatePetPageProps> = () => {
  return <SavePet title="Crear Pet" />;
};

export default CreatePetPage;
