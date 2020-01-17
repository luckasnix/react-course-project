import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { ReactComponent as CloseIcon } from '../../../../../../assets/icons/delete-icon.svg'
import styles from './TodoModal.module.css'

function TodoModal({ id, onModalClose, onTitleUpdate, findTitle }) {
    const { getFieldProps, errors, handleSubmit } = useFormik({
        initialValues: {
            title: findTitle(id)
        },
        validationSchema: yup.object({
            title: yup.string()
                .required('Você precisa preencher com uma tarefa.')
        }),
        validateOnChange: false,
        validateOnBlur: false,
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
                    {errors.title ? (
                        <small className={styles.error}>{errors.title}</small>
                    ) : null}
                    <button className={styles.submit} type='submit'>
                        Atualizar tarefa
                    </button>
                </form>
            </div>
        </>
    )
}

export default TodoModal