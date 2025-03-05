import { Box } from '@chakra-ui/react';

import Records from './sections/Records';
import ReleaseBanner from './sections/ReleaseBanner';
import Steps from './sections/Steps';
import UserReleaseForm from './sections/UserReleaseForm';

type Props = {};

const index = (props: Props) => {
  return (
    <Box bgColor='#F2F4F8' pb='120px'>
      <ReleaseBanner />
      <UserReleaseForm />
      <Steps />
      <Records />
    </Box>
  );
};

export default index;
