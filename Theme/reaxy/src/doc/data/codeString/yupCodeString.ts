export const yupCodeString = `
//  ** Example Usage

import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  age: Yup.number().positive('Age must be a positive number').integer('Age must be an integer'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
});

// Example usage in a form validation
try {
  schema.validateSync({ name: 'John', age: 25, email: 'john@example.com' });
  console.log('Validation successful');
} catch (error) {
  console.error('Validation failed', error.errors);
}

//  ** Custom Validation Function

const customSchema = Yup.object().shape({
    password: Yup.string().test(
      'customValidation',
      'Password must contain at least one uppercase letter',
      (value) => {
        return /[A-Z]/.test(value);
      }
    ),
  });

//  ** Asynchronous Validation

const asyncSchema = Yup.object().shape({
    username: Yup.string().required('Username is required').test(
      'uniqueUsername',
      'Username already taken',
      async (value) => {
        // Perform an asynchronous check, e.g., querying a database
        const isUnique = await checkIfUsernameIsUnique(value);
        return isUnique;
      }
    ),
  });
  

`;
