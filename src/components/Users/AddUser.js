import React from 'react'

import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'
import Button from '../UI/Button'

import classes from './AddUser.module.css'

const AddUser = (props) => {

    const [username, setUsername] = React.useState("")
    const [age, setAge] = React.useState("")

    const usernameChangeHandler = (e) => {
        setUsername(e.target.value)
    }

    const ageChangeHandler = (e) => {
        setAge(e.target.value)
    }


    const [error, setError] = React.useState()

    const errorHandler = () => {
        setError(null)
    }

    const addUserHandler = (e) => {
        e.preventDefault()

        if (
            username.trim().length === 0 ||
            age.trim().length === 0
        ) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values)."
            })
            return
        }

        if (+age < 1) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid age ( > 0)."
            })
            return
        }

        props.submitHandler(username, age)

        setError("")
        setUsername("")
        setAge("")
    }


    return (
        <>
            {error &&
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    errorHandler={errorHandler}
                />
            }

            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input
                        type="text"
                        id="username"
                        onChange={usernameChangeHandler}
                        value={username}
                    />

                    <label htmlFor="age">Age (Years)</label>
                    <input
                        type="number"
                        id="age"
                        onChange={ageChangeHandler}
                        value={age}
                    />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser