import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { messages } from '@/config';
import { CenteredFlexBox, FullSizeCenteredFlexBox } from '@/display/utils/flex';

function NotFound() {
  return (
    <Container sx={{ height: '100%' }}>
      <FullSizeCenteredFlexBox flexDirection="column">
        {/* <iframe
          src={giphy404}
          height="50%"
          style={{ maxHeight: '60%', maxWidth: '100%' }}
          frameBorder="0"
          allowFullScreen
        /> */}
        <CenteredFlexBox flexDirection="column">
          <Typography sx={{ mt: 2 }} variant="h4" color="error">
            404 Not Found
          </Typography>
          <Divider variant="middle" />
          <Typography variant="h4" sx={{ color: (theme) => theme.palette.info.main }}>
            {messages[404]}
          </Typography>
        </CenteredFlexBox>
      </FullSizeCenteredFlexBox>
    </Container>
  );
}

export default NotFound;
