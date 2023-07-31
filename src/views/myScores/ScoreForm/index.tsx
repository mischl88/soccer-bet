"use client";
import { useFormik } from "formik";

import Wrapper from "@/components/form/Wrapper";
import NumberInput from "@/components/form/NumberInput";
import Select from "@/components/form/Select";

interface ScoreFormView {
  scoreId: number;
}

export default function ScoreForm({ scoreId }: ScoreFormView) {
  const formik = useFormik({
    initialValues: {
      match: "",
      homeScore: "",
      awayScore: "",
    },
    onSubmit: (values) => {
      console.log("id", scoreId);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Wrapper>
        <Select id="match" label="match" options={[]} onChange={formik.handleChange}
                value={formik.values.match} />
        <NumberInput id="homeScore" label="Home Score"
                     inputProps={{ isRequired: true }}
                     onChange={formik.handleChange}
                     value={formik.values.homeScore} />
        <NumberInput id="awayScore" label="Away Score"
                     inputProps={{ isRequired: true }}
                     onChange={formik.handleChange}
                     value={formik.values.awayScore} />
      </Wrapper>
    </form>
  );
}
