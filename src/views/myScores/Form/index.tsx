'use client';
import { useFormik } from 'formik';

import Wrapper from '@/components/Form/Wrapper';
import Input from '@/components/Form/Input';
import Select from '@/components/Form/Select';

interface ScoreFormProps {
  scoreId: number;
}

export default function ScoreForm({ scoreId }: ScoreFormProps) {
  const formik = useFormik({
    initialValues: {
      match: '',
      homeScore: '',
      awayScore: '',
    },
    onSubmit: (values) => {
      console.log('id', scoreId);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Wrapper>
        <Select
          id="match"
          label="Match"
          options={[]}
          onChange={formik.handleChange}
          value={formik.values.match}
        />
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
      </Wrapper>
    </form>
  );
}
