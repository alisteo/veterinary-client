import { Navigate, useParams } from 'react-router-dom';

import { SavePet } from './../../shared/components';
import { useGetPet } from '@/store/app/pets';
import { returnUrlPestPage } from '../PestPage/PestPage';

export type UpdatePetPageProps = {};

const UpdatePetPage: React.FC<UpdatePetPageProps> = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetPet(+id!);

  if (isLoading) return null;
  if (!data?.id) return <Navigate to={returnUrlPestPage} />;

  return <SavePet title="Editar Pet" pet={data} />;
};

export default UpdatePetPage;
