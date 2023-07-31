import ScoreForm from "@/views/myScores/ScoreForm";

interface EditScore {
  params: {
    id: number
  }
}
export default async function EditScore({ params }: EditScore) {

  return (
      <ScoreForm scoreId={Number(params.id)} />
  );
}
