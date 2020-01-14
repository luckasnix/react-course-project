import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { ReactComponent as CloseIcon } from '../../../../../../assets/icons/delete-icon.svg'
import styles from './TodoModal.module.css'

function TodoModal({ id, title, onModalClose, onTitleUpdate }) {
    const { getFieldProps, touched, errors, isValid, handleSubmit } = useFormik({
        initialValues: {
            title: title
        },
        validationSchema: yup.object({
            title: yup.string()
                .required('Você precisa preencher com uma tarefa.')
        }),
        onSubmit: (values, formikBag) => {
            onTitleUpdate(id, values.title)
            formikBag.setFieldValue('title', '', false)
            onModalClose()
        }
    })
    return (
        <>
            <div className={styles.backdrop} onClick={onModalClose}/>
            <div className={styles.modal}>
                <form onSubmit={handleSubmit}>
                    <button className={styles.closeButton} onClick={onModalClose}>
                        <CloseIcon/>
                    </button>
                    <input
                        className={styles.input}
                        type='text'
                        placeholder='Novo título'
                        autoComplete='off'
                        {...getFieldProps('title')}
                    />
                    {touched.title && errors.title ? (
                        <small className={styles.error}>{errors.title}</small>
                    ) : null}
                    <button
                        className={styles.submit}
                        type='submit'
                        disabled={!isValid}
                    >
                        Atualizar tarefa
                    </button>
                </form>
            </div>
        </>
    )
}

export default TodoModal