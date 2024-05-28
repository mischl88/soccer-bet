import UserForm from '@/views/users/Form';

interface EditUserProps {
  params: {
    id: number;
  };
}

export default async function EditUser({ params }: EditUserProps) {
  return <UserForm userId={Number(params.id)} />;
}
