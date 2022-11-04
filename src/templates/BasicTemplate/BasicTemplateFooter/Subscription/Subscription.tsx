import { useFormik } from 'formik'

import { Form, Input, Icons } from 'src/components'

import styles from './subscription.module.scss'
import { useEffect } from 'react'

const Subscription = () => {
  useEffect(() => {
    let script = document.createElement('script')
    script.src = 'https://substackapi.com/widget.js'
    script.onload = function () {
      window.CustomSubstackWidget = {
        substackUrl: 'litproject.substack.com',
        placeholder: 'Enter email',
        buttonText: 'Get Updates',
        theme: 'custom',
        colors: {
          primary: '#33257F',
          input: '#00000000',
          email: '#33257F',
          text: '#ffffff',
        },
      }
    }
    document.getElementsByTagName('body')[0].appendChild(script)
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    onSubmit: () => {},
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        Join our mailing list for
        <br /> updates on all things Lit
      </div>
      <div
        id="custom-substack-embed"
        className={styles.customSubstackEmbed}
      ></div>
    </div>
  )
}

export default Subscription
