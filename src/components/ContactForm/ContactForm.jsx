import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { MainTitle, Input, Button } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/constactAPI';
import { selectContacts } from 'redux/phonebook/selectors';

export const ContactForm = () => {
  const initialValues = { name: '', number: '' };
  const RegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
  const message =
    "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
  const yupContactForm = yup.object().shape({
    name: yup.string().matches(RegExp, message).required().min(3).max(20),
    number: yup
      .number()
      .min(5)
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .required('A phone number is required'),
  });

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const getValues = (val, { resetForm }) => {
    const noRepitData = contacts.filter(
      item =>
        item.name.toLowerCase() === val.name.toLowerCase() ||
        item.phone === val.number
    );
    if (noRepitData.length < 1) {
      val.id = nanoid();
      dispatch(addContact(val));
      resetForm();
    } else
      alert(`${val.name} User or number ${val.number} alredy in contacts `);
  };
  return (
    <>
      <MainTitle>Phonebook</MainTitle>
      <Formik
        onSubmit={getValues}
        initialValues={initialValues}
        validationSchema={yupContactForm}
      >
        <Form>
          <label htmlFor="name">
            Name
            <br />
            <Input type="text" name="name" placeholder="Name"></Input>
          </label>
          <ErrorMessage name="name" />
          <label htmlFor="number">
            <br />
            Number
            <br />
            <Input type="tel" name="number" placeholder="+111 11 11 11"></Input>
          </label>
          <ErrorMessage name="number" />
          <br />
          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </>
  );
};

ContactForm.propTypes = {
  onNewVal: propTypes.func,
};
