import ScoreForm from "@/views/myScores/ScoreForm";

interface EditScoreProps {
  params: {
    id: number
  };
}

export default async function EditScore({ params }: EditScoreProps) {

  return (
    <ScoreForm scoreId={Number(params.id)} />
  );
}
