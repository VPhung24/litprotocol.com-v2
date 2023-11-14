'use client';

import { useState } from 'react';
import styles from './subscribe-form.module.scss';

const SubscribeForm = () => {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  async function handleSubscribe(event: any) {
    event.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      });
      if (!response.ok) {
        setMessage('An error has occurred. Please try again. ❌');
      } else {
        setMessage('Thanks for subscribing! 🥳');
        setEmail('');
      }
    } catch (err) {
      console.error('Failed to subscribe', err);
      setMessage('An error has occurred. Please try again. ❌');
    }
    setLoading(false);
    setInterval(() => {
      setMessage('');
    }, 3000);
  }

  return (
    <>
      {message && message.length > 0 ? (
        <div className={styles.alert}>
          <p>{message}</p>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubscribe}>
          <div className={styles.form__wrapper}>
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
              Subscribe{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className={styles.form__submit__icon}
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
          </div>
        </form>
      )}
    </>
  );
};

export default SubscribeForm;
