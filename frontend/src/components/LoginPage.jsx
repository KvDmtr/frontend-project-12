import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Wrapper from "./Wrapper.jsx";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import loginImg from '../img/loginImg.png';
import validateSchema from "../utils/validateSchema.js";

const LoginPage = () => {
  const { t } = useTranslation();
  const [fieldTooShort, requiredField] = [t('feedBackTexts.fieldTooShort'), t('feedBackTexts.requiredField')];

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: validateSchema(fieldTooShort, requiredField),
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <Wrapper>
      <div className='card-body row p-5 align-items-center'>
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
        <img src={loginImg} className="card-img" alt={t('login.loginTitle')}/>
        </div>
        <Form onSubmit={formik.handleSubmit} className='col-12 col-md-6 mt-3 mt-mb-0'>
        <h1 className="title text-center mb-4">{t('login.loginTitle')}</h1>
          <Form.Group className="mb-3" controlId="formLogin">
            <Form.Label>{t('login.userName')}</Form.Label>
            <Form.Control
              name="login"
              type="text"
              placeholder = {t('login.userName')}
              onChange = {formik.handleChange}
              onBlur = {formik.handleBlur}
              value = {formik.values.login}
            />
            {formik.touched.login && formik.errors.login ? <div>{t(formik.errors.login)}</div> : null}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>{t('login.password')}</Form.Label>
            <Form.Control
              name = "password"
              type = "password"
              placeholder = {t('login.password')}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}  
            />
            {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
          </Form.Group>
          <div className="d-grid">
            <Button variant="outline-primary" type="submit">
              {t('login.loginButton')}
            </Button>
          </div>
          <div className='card-footer text-center p-3'>
            <span>{t('login.noAccount')}</span>
            <NavLink to="/signup" className="link">
              {t('login.loginLinkToSingup')}
            </NavLink>
          </div>
        </Form>
      </div>
    </Wrapper>
  );
};

export default LoginPage;
