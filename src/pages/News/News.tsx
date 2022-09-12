/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';

import AbInfoHeader from '@/components/AbInfoHeader';
import AbNewsStory from '@/components/AbNewsStory';
import { AbNewsStoryModel } from '@/components/AbNewsStory/types';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';
import { getNews } from '@/services/supabase/news';
import { useNewsStories } from '@/store/news';

function News() {
  const [loading] = useState(false);
  const { newsStories, setNewsStories } = useNewsStories();
  useEffect(() => {
    newsStories.length < 4 ? getNews(setNewsStories) : null;
  }, []);

  return (
    <>
      <Meta title="news" />
      <AbInfoHeader title="News" />
      <CenteredFlexBox>
        <Box sx={{ width: '100%', maxWidth: 'md' }}>
          {loading ? (
            <p>loading...</p>
          ) : (
            newsStories.map((nS: AbNewsStoryModel, i: number) => (
              <AbNewsStory
                key={i}
                id={nS.id}
                title={nS.title}
                date={nS.date}
                blurb={nS.blurb}
                body={nS.body}
                images={nS.images}
              />
            ))
          )}
        </Box>
      </CenteredFlexBox>
    </>
  );
}

export default News;