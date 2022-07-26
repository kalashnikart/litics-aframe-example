import { useState } from 'react';
import { template } from './ascene-template';
import { SetupForm } from './setup-form'

const HeatMapScene = (): JSX.Element => {
  const [state, setState] = useState<string>('');
  return (
    !state ?
      <SetupForm submit={setState} /> :
      <div dangerouslySetInnerHTML={{ __html: template(state) }}></div>
  );
};

export default HeatMapScene;