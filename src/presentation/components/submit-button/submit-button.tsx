import React, { useContext } from 'react'
// import Context from '@/presentation/contexts/form/form-context'

type Props = {
  text: string
}

const SubmitButton: React.FC<Props> = ({ text }: Props) => {
  // const { state } = useContext(Context)
  return (
    // <button data-testid="submit" disabled={state.isFormInvalid} type="submit">{text}</button>
    <button data-testid="submit" disabled type="submit">Entrar</button>
  )
}

export default SubmitButton
