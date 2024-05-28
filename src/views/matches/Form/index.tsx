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
          id="matchDate"
          label="Match Date"
          onChange={(value) => formik.setFieldValue('matchDate', value)}
          value={formik.values.matchDate}
        />
        <Input
          id="group"
          label="Group"
          onChange={formik.handleChange}
          value={formik.values.group}
        />
        <Select
          id="teamHome"
          label="Team Home"
          isRequired
          options={[]}
          onChange={formik.handleChange}
          value={formik.values.teamHome}
        />
        <Input
          type="number"
          label="Home Score"
          inputProps={{ isRequired: true }}
          onChange={formik.handleChange}
          value={formik.values.homeScore}
        />
        <Input
          type="number"
          label="Away Score"
          inputProps={{ isRequired: true }}
          onChange={formik.handleChange}
          value={formik.values.awayScore}
        />
        <Select
          label="Team Away"
          isRequired
          options={[]}
          onChange={formik.handleChange}
          value={formik.values.teamAway}
        />
      </Wrapper>
    </form>
  );
}
