import './App.css';
import Mailchimp from 'react-mailchimp-form';

function App() {
  return (
    <div className="App">
      <div className='Container'>
        <h2>Sign-up To Our Monthly Newsletter!</h2>
        {/* Make sure you change the below URL */}
        <Mailchimp action='https://<YOUR-USER>.us16.list-manage.com/subscribe/post?u=XXXXXXXXXXXXX&amr'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email Address',
            type: 'email',
            required: true
          }
        ]}
        messages = {
          {
            sending: "Sending...",
            success: "Thank you for subscribing!",
            error: "An unexpected internal error has occurred.",
            empty: "You must write an e-mail.",
            duplicate: "Too many subscribe attempts for this email address",
            button: "Subscribe!"
          }
        }
        className='mailchimp-form'
        />
      </div>
    </div>
  );
}

export default App;

