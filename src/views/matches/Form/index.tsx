"use client";
import { useFormik } from "formik";

import Wrapper from "@/components/form/Wrapper";
import NumberInput from "@/components/form/NumberInput";
import Select from "@/components/form/Select";
import InputField from "@/components/form/Input";
import InputDatePicker from "@/components/form/InputDatePicker";

interface MatchFormProps {
  matchId: number;
}

export default function MatchForm({ matchId }: MatchFormProps) {
  const formik = useFormik({
    initialValues: {
      matchDate: new Date(),
      group: "",
      teamHome: "",
      homeScore: "",
      awayScore: "",
      teamAway: "",
    },
    onSubmit: (values) => {
      console.log("id", matchId);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Wrapper>
        <InputDatePicker id="matchDate" label="Match Date"
                         onChange={(value) => formik.setFieldValue("matchDate", value)}
                         value={formik.values.matchDate} />
        <InputField id="group" label="Group" variant="auth" type="text"
                    mb="24px"
                    onChange={formik.handleChange}
                    value={formik.values.group} />
        <Select id="teamHome" label="Team Home" isRequired options={[]}
                onChange={formik.handleChange}
                value={formik.values.teamHome} />
        <NumberInput id="homeScore" label="Home Score"
                     inputProps={{ isRequired: true }}
                     onChange={formik.handleChange}
                     value={formik.values.homeScore} />
        <NumberInput id="awayScore" label="Away Score"
                     inputProps={{ isRequired: true }}
                     onChange={formik.handleChange}
                     value={formik.values.awayScore} />
        <Select id="teamAway" label="Team Away" isRequired options={[]}
                onChange={formik.handleChange}
                value={formik.values.teamAway} />

      </Wrapper>
    </form>
  );
}
