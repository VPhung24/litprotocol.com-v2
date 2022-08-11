import { FormikProvider, FormikContextType } from 'formik'

interface FormProps {
  className?: string
  providerValue: FormikContextType<any>
}

const Form = (props: React.PropsWithChildren<FormProps>) => {
  const { className, providerValue, children } = props

  return (
    <FormikProvider value={providerValue}>
      <div className={className}>{children}</div>
    </FormikProvider>
  )
}

export default Form
