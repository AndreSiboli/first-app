import { useState } from 'react'

import Styles from './ScheduleForm.module.css'

import Input from '../input/Input'
import InputNumber from '../input/InputNumber'
import ButtonSubmit from '../input/ButtonSubmit'
import Message from '../layout/Message'

function ScheduleForm(){

    const [ inputValues, setInputValues] = useState({
        name: '',
        lastname: '',
        email: '',
        day: '',
        month: '',
        year: '',
    })
    const [ messageName, setMessageName] = useState('')
    const [ messageEmail, setMessageEmail] = useState('')
    const [ messageDate, setMessageDate] = useState('')

    const setValues = (e)=>{
        let obj = inputValues
        obj[e.target.id] = e.target.value

        setInputValues(obj)
    }

    function checkValues(){
        if(inputValues?.name === '' || inputValues?.lastname === '') setMessageName('Nome e Sobrenome obrigatório.')
        else setMessageName('')

        if(inputValues?.email === '') setMessageEmail('O campo de Email está vazio.')
        else setMessageEmail('')

        if(inputValues?.day === '' || inputValues?.month === '' || 
        inputValues?.year === '') setMessageDate('Preencha todos os campos de data.')
        else setMessageDate('')
        
        return false
    }

    function onSubmit(){
        let c = checkValues()
        console.log(inputValues)
        
        if(c === false) return

        //Submit Database
    }


    return(
        <form className={Styles.scheduleForm}>
            
             <div className={Styles.allInput}>
                {messageName && <Message text={messageName} type='messageError'/>}
                 <p>Nome *</p>
                    <div className={Styles.inputContainer}>
                        <div className={Styles.inputWrapper}>
                            <Input id='name' type='text' handleSetValue={setValues}/>
                            <label htmlFor='name'>Nome</label>
                        </div>
                        <div className={Styles.inputWrapper}>
                            <Input id='lastname' type='text' handleSetValue={setValues}/>
                            <label htmlFor='lastname'>Sobrenome</label>
                        </div>
                    </div>
             </div>

            <div className={Styles.allInput}>
                {messageEmail && <Message text={messageEmail} type='messageError'/>}
                <p>Email *</p>
                <div className={Styles.inputContainer}>
                    <Input id='email' type='text' handleSetValue={setValues}/>
                </div>
            </div>

            <div className={Styles.allInput}>
                <p>Data *</p>
                <div className={Styles.inputContainer}>
                    <div className={Styles.inputDateWrapper}>
                        <InputNumber id='month' type='text' maxLength='2' handleSetValue={setValues}/>
                        <label htmlFor='month'>MM</label>
                    </div>
                    <div className={Styles.inputDateWrapper}>
                        <InputNumber id='day' type='text' maxLength='2' handleSetValue={setValues}/>
                        <label htmlFor='day'>DD</label>
                    </div>
                    <div className={Styles.inputDateWrapper}>
                        <InputNumber id='year' type='text' maxLength='4' handleSetValue={setValues}/>
                        <label htmlFor='year'>YYYY</label>
                    </div>
                    {messageDate && <Message text={messageDate} type='messageError'/>}
                </div>
            </div>
           <div>
                <ButtonSubmit text='Enviar' customClass='buttonSubmitBlack' handleSubmit={onSubmit}/>
           </div>
        </form>
    )
}

export default ScheduleForm