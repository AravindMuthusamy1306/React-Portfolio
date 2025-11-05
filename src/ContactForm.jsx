import { useForm, ValidationError } from '@formspree/react';
import Button from '@mui/material/Button';

function ContactForm() {
  const [state, handleSubmit] = useForm("mdkprbyn");
  if (state.succeeded) {
      return <p>Thank you for reaching out</p>;
  }
  return (
    <form className='contact-form' onSubmit={handleSubmit}>
        <div className='name-form'>
            <label htmlFor='name'>
                Name
            </label>
            <input
               id='name'
               type='name'
               name='name'
               required
            />
            <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
            />
        </div>
        <div className='email-form'>
            <label htmlFor="email">
                Email
            </label>
            <input
                id="email"
                type="email" 
                name="email"
                required
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
        </div>  
        <div className = "textarea-form">
            <label htmlFor="feedBack">
                Feed Back
            </label>
            <textarea
                id="message"
                name="message"
                required
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
        </div>
        <div className = "submit-button">
            <Button type='submit' disabled ={state.submitting}>Submit</Button>        
        </div>
    </form>
  );
}

export default ContactForm;