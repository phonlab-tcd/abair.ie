import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';

import { AbButton } from 'abair-components';
import { AbInfoHeader } from 'abair-components';
import Image from 'mui-image';

import { CenteredFlexBox, HorizontallyCenteredFlexBox } from '@/display/utils/flex';
import { useBreakpointSize } from '@/store/viewDimensions';

import mileGlorLogo from '/assets/images/misc/míleglorUnited.png';

const AbHomeMileGlorCtrl = () => {
  const { t } = useTranslation();
  const { breakpointSize } = useBreakpointSize();

  return (
    <HorizontallyCenteredFlexBox height={'100%'}>
      <Box maxWidth={'md'}>
        <HorizontallyCenteredFlexBox height={'20%'}>
          <Box>
            <AbInfoHeader
              title={t('infoHeader.home.mileGlor.title')}
              description={t('infoHeader.home.mileGlor.description')}
            />
          </Box>
        </HorizontallyCenteredFlexBox>
        <CenteredFlexBox height={'50%'}>
          <Image
            duration={1000}
            height={breakpointSize === 'xs' ? 300 : 300}
            width={breakpointSize === 'xs' ? 300 : 300}
            easing="ease-out"
            alt="Mile Glór Image"
            src={mileGlorLogo}
            showLoading
          />
        </CenteredFlexBox>
        <CenteredFlexBox height={'10%'}>
          <Box width={200}>
            <AbButton
              color={'primary'}
              label={t('pages.home.go')}
              onClick={() => {
                window.location.href = 'https://phoneticsrv3.lcs.tcd.ie/studio/ga/recorder/';
              }}
              fullWidth={true}
            />
          </Box>
        </CenteredFlexBox>
      </Box>
    </HorizontallyCenteredFlexBox>
  );
};

export default AbHomeMileGlorCtrl;
