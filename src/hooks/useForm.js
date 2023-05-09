import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {

    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({});



    useEffect(() => {
        createValidations();
    }, [formState]);
    
    const isFormValid = useMemo(() => {
        for (const unValor of Object.keys(formValidation)) {
            if (formValidation[unValor] !== null) return false;
        }
        return true;
    }, [formValidation]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }
    const onChangeObject = (albums)=> {
        //console.log(albums)
        //console.log(formState);
        setFormState({...formState, album: {...albums}});

}

    const onResetForm = () => {
        setFormState(initialForm);
    }

    const createValidations = () => {
        const formCheckValues = {};
        for (const unValor of Object.keys(formValidations)) {
            const [funcion, msgError] = formValidations[unValor];
            formCheckValues[`${unValor}Valid`] =
                funcion(formState[unValor], formState.pass) ? null : msgError
        }
        setFormValidation(formCheckValues);
    }

    return {
        ...formState,
        formState,
        onChangeObject,
        setFormState,
        onInputChange,
        onResetForm,
        formValidation,
        isFormValid
    }
} 