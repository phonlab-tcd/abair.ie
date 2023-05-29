import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';

import { AbButton, AbInfoHeader } from 'abair-components';
import Image from 'mui-image';

import { CenteredFlexBox, HorizontallyCenteredFlexBox } from '@/display/utils/flex';
import { useBreakpointSize } from '@/store/viewDimensions';

import neartuTransparentLogo from '/assets/images/misc/neartuTransparent.png';

const Neartu = () => {
  const { breakpointSize } = useBreakpointSize();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <HorizontallyCenteredFlexBox height={'100%'}>
      <Box maxWidth={'md'}>
        <HorizontallyCenteredFlexBox height={'20%'}>
          <Box>
            <AbInfoHeader
              title={t('infoHeader.home.neartu.title')}
              description={t('infoHeader.home.neartu.description')}
            />
          </Box>
        </HorizontallyCenteredFlexBox>
        <CenteredFlexBox height={'50%'}>
          <Box component={Link} to={'/neartu'}>
            <Image
              duration={1000}
              height={breakpointSize === 'xs' ? 250 : 320}
              width={breakpointSize === 'xs' ? 250 : 320}
              easing="ease-out"
              alt="Abair Applications"
              src={neartuTransparentLogo}
              showLoading
            />
          </Box>
        </CenteredFlexBox>
        <CenteredFlexBox height={'10%'}>
          <Box width={200}>
            <AbButton
              label={t('pages.home.go')}
              onClick={() => {
                navigate('/neartu');
              }}
              selected={true}
              color={'primary'}
              fullWidth={true}
            />
          </Box>
        </CenteredFlexBox>
      </Box>
    </HorizontallyCenteredFlexBox>
  );
};

export default Neartu;
