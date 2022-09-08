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
      <div id="custom-substack-embed" className={styles.customSubstackEmbed}></div>
    </div>
  )
}

export default Subscription