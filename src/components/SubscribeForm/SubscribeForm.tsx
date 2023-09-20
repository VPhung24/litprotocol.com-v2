import { useState } from 'react';
import styles from './form.module.scss';

const SubscribeForm = () => {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  async function handleSubscribe(event: any) {
    event.preventDefault();
    setLoading(true);
    try {
      const result = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      });
    } catch (err) {
      console.error('Failed to subscribe', err);
      setError(new Error('An error has occurred. Please try again.'));
    }
    setLoading(false);
  }

  return (
    <div className={styles.card}>
      <p className={styles.card__title}>Sign up for Lit updates</p>
      <form className={styles.form} onSubmit={handleSubscribe}>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          name="email"
          className={styles.form__input}
          placeholder="Your email"
          disabled={loading}
        ></input>
        <button
          type="submit"
          className={`${styles.form__submit} ${
            loading && styles['form__submit--loading']
          }`}
          disabled={loading}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12H19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M12 5L19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;
