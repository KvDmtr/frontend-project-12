import Wrapper from "./Wrapper";
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <div className='container-content-width mt-3 mx-auto text-center'>
        <h2>{t('notFound.pageNotFound')}</h2>
        <h3>{t('notFound.toMainPage')}</h3>
      </div>
    </Wrapper>
  );
};

export default NotFoundPage;
