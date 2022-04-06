import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

export default function RoomForm({ id, room, setRoom }) {

  const navigate = useNavigate()
  const [values, setValues] = useState(null)

  useEffect(() => {
    setValues(room)
    console.log(values)
  }, [room, id])

  const onFinish = async (values) => {
    await fetch(`/api/rooms/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json' 
      },
      method: 'PATCH', 
      body: JSON.stringify(values)
    })

    console.log('Success:', values)
    setRoom(values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const handleChange = event => {
    const { value, name } = event.target
    setValues({ ...values, [name]: value })
  }

  const handleDelete = async () => {
    await fetch(`/api/rooms/${id}`, {
      method: 'DELETE'
    })

    navigate('/rooms')
  }

  if (!values) return null

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Nom"
        name="name"
        initialValue={values.name}
        rules={[
          {
            required: true,
            message: 'Veuillez entrer le nom de la chambre',
          },
        ]}
      >
        <Input value={values.name} name="name" onChange={handleChange} />
      </Form.Item>

      <Form.Item
        label="Capacité max"
        name="maxPersons"
        initialValue={values.maxPersons}
        rules={[
          {
            required: false
          },
        ]}
      >
        <Input value={values.maxPersons} type='number' name="maxPersons" onChange={handleChange} />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Modifier
        </Button>
        <Button onClick={handleDelete} type="danger">
          Supprimer
        </Button>
      </Form.Item>
    </Form>
  );
};