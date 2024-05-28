'use client';

import { useFormik } from 'formik';

import Wrapper from '@/components/Form/Wrapper';
import Select from '@/components/Form/Select';
import Input from '@/components/Form/Input';
import InputDatePicker from '@/components/Form/InputDatePicker';

interface MatchFormProps {
  matchId: number;
}

export default function MatchForm({ matchId }: MatchFormProps) {
  const formik = useFormik({
    initialValues: {
      matchDate: new Date(),
      group: '',
      teamHome: '',
      homeScore: '',
      awayScore: '',
      teamAway: '',
    },
    onSubmit: (values) => {
      console.log('id', matchId);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Wrapper>
        <InputDatePicker
          name="matchDate"
          label="Match Date"
          value={formik.values.matchDate}
        />
        <Input
          name="group"
          label="Group"
          onChange={formik.handleChange}
          value={formik.values.group}
        />
        <Select name="teamHome" label="Team Home" options={[]} />
        <Input
          type="number"
          label="Home Score"
          onChange={formik.handleChange}
          value={formik.values.homeScore}
        />
        <Input
          type="number"
          label="Away Score"
          onChange={formik.handleChange}
          value={formik.values.awayScore}
        />
        <Select
          label="Team Away"
          options={[]}
          onChange={formik.handleChange}
          value={formik.values.teamAway}
        />
      </Wrapper>
    </form>
  );
}
