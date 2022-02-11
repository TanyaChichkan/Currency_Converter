import { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';
import Header from './structural_components/Header';
import Section from './structural_components/Section';
import { Container } from '@mui/material';
import CurrencyConverter from './CurrencyConverter';
import Loader from './info_components/Loader';
import Error from './info_components/Error';

const CurrencyTracker = () => {
  const {
    loadingInfo: { isLoading, error, success },
  } = useContext(CurrencyContext);

  return (
    <>
      {isLoading && <Loader open={isLoading ? true : false} />}
      {error && (
        <Error
          errorState={error}
          message='Something went wrong. Please, try again'
        />
      )}

      {success && (
        <>
          <Header />
          <main>
            <Container>
              <Section>
                <CurrencyConverter />
              </Section>
            </Container>
          </main>
        </>
      )}
    </>
  );
};

export default CurrencyTracker;
