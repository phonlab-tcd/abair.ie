/* eslint-disable react-hooks/exhaustive-deps */
import { FormEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

import { AbInfoHeader } from 'abair-components';

import { basePath, domain } from '@/config';
import Meta from '@/display/sections/Meta';
import { CenteredFlexBox, FlexBox, HorizontallyCenteredFlexBox } from '@/display/utils/flex';
import supabase from '@/services/supabase';

function Login() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    // const { user, error } = supabase.auth.signInWithPassword({ email, password }).then(() => {
    supabase.auth.signInWithPassword({ email, password }).then((e) => {
      const { data, error } = e;
      console.log('data:', data);
      console.log('error:', error);
      setLoading(false);
      if (error) {
        console.log('in error');
        setWrongCredentials(true);
      }
      if (data.user && data.session) {
        console.log('in data');

        if (searchParams.get('origin')) {
          window.location.href = `${domain}/${searchParams.get('origin')}`;
        } else {
          navigate(`${basePath}profile`, { replace: true });
        }
      }
    });
  };

  useEffect(() => {
    console.log('searchParams:', searchParams.get('origin'));
  }, []);

  return (
    <HorizontallyCenteredFlexBox>
      <Box sx={{ maxWidth: 'sm', width: '100%' }}>
        <Meta title={t('pageTitles.login')} />

        <Box py={{ sm: 4, xs: 2 }}>
          <AbInfoHeader title={t('pages.auth.login')} />
        </Box>

        <CenteredFlexBox m={2}>
          {loading ? (
            'Processing...'
          ) : (
            <Box
              component="form"
              noValidate
              onSubmit={(e: FormEvent<HTMLFormElement>) => {
                handleSubmit(e);
              }}
              sx={{ mt: 3 }}
              width={360}
            >
              <Grid container spacing={0}>
                <Grid item xs={12} my={1}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label={t('pages.auth.emailAddress')}
                    name="email"
                    autoComplete="email"
                    type="email"
                    placeholder={t('pages.auth.emailAddress')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} my={1}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label={t('pages.auth.password')}
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Typography
                sx={{ visibility: wrongCredentials ? 'visible' : 'hidden' }}
                align="center"
                variant="body2"
                color="warning.main"
              >
                {t('pages.auth.incorrectEmailOrPassword')}
              </Typography>
              <CenteredFlexBox sx={{ width: '100%' }} my={2}>
                <Button type="submit" variant="contained">
                  {t('pages.auth.login')}
                </Button>
              </CenteredFlexBox>
              <FlexBox mt={4} sx={{ width: '100%' }} justifyContent="space-between">
                <Button
                  sx={{ color: 'warning.main' }}
                  onClick={() => {
                    navigate('/forgot-password');
                  }}
                >
                  {t('pages.auth.forgotPassword')}
                </Button>
                <Button
                  sx={{ color: 'secondary.main' }}
                  onClick={() => {
                    if (searchParams.get('origin') !== null) {
                      navigate(`/sign-up?origin=${searchParams.get('origin')}`);
                    } else {
                      navigate('/sign-up');
                    }
                  }}
                >
                  {t('pages.auth.createAccount')}
                </Button>
              </FlexBox>
            </Box>
          )}
        </CenteredFlexBox>
      </Box>
    </HorizontallyCenteredFlexBox>
  );
}

export default Login;
