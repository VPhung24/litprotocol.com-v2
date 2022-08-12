import { useFormik } from 'formik'

import { Form, Input, Icons } from 'src/components'

import styles from './subscription.module.scss'

const Subscription = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: ''
    },
    onSubmit: () => {}
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>Join our mailing list for<br/> updates on all things Lit</div>

      <Form className={styles.form} providerValue={formik}>
        <Input name="name" placeholder="Full Name" />
        <Input name="name" type="email" placeholder="Email" />

        <button type="submit">
          <Icons.Arrow />
        </button>
      </Form>
    </div>
  )
}

export default Subscription