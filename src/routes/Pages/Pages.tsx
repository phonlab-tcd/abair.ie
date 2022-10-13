import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Box from '@mui/material/Box';

import { TrueFullSizeBox } from '@/components/styled';
// import Footer from '@/sections/Footer';
import { useViewHeight, useViewWidth } from '@/store/viewDimensions';
import ScrollToTop from '@/utils/scrollToTop';

import routes from '..';

function Pages() {
  const { setViewHeight } = useViewHeight();
  const { setViewWidth } = useViewWidth();

  const handleResize = () => {
    setViewHeight(window.innerHeight);
    setViewWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <TrueFullSizeBox sx={{ position: 'relative' }} justifyContent="center">
        <Box sx={{ height: '64px' }}></Box>
        <ScrollToTop>
          <Routes>
            {Object.values(routes).map(({ path, component: Component }) => {
              return <Route key={path} path={path} element={<Component />} />;
            })}
          </Routes>
        </ScrollToTop>
      </TrueFullSizeBox>
      {/* <Footer /> */}
    </Box>
  );
}

export default Pages;
