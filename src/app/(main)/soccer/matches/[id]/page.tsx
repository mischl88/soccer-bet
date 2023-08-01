import MatchForm from "@/views/matches/MatchForm";

interface EditMatchProps {
  params: {
    id: number
  };
}

export default async function EditMatch({ params }: EditMatchProps) {

  return (
    <MatchForm matchId={Number(params.id)} />
  );
}
