import React, { useContext, useEffect, useRef } from 'react'
import { useFormik } from 'formik'
import TodosContext from '../../../../state/todos/Context'
import * as todosActions from '../../../../state/todos/actions'
import * as yup from 'yup'
import styles from './TodoCreator.module.css'

function TodoCreator() {
    const { dispatchToTodos } = useContext(TodosContext)
    const { getFieldProps, touched, errors, isValid, handleSubmit } = useFormik({
        initialValues: {
            title: ''
        },
        validationSchema: yup.object({
            title: yup.string()
                .required('Você precisa preencher com uma tarefa.')
        }),
        onSubmit: (values, formikBag) => {
            dispatchToTodos(todosActions.addTodo(values.title))
            formikBag.setFieldValue('title', '', false)
        }
    })
    const inputTitle = useRef(null)
    useEffect(() => {
        inputTitle.current.focus()
    }, [])
    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <input
                className={styles.input}
                type='text'
                placeholder='Nova tarefa'
                autoComplete='off'
                ref={inputTitle}
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
                Adicionar tarefa
            </button>
        </form>
    )
}

export default TodoCreator