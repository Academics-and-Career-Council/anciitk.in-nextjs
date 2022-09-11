import styles from "./footer.module.css";
import { Button, Form, Input, InputNumber } from 'antd';
const Footer=()=>{
    const onFinish = (values: any) => {
        console.log(values);
      };
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
    const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      };
    return(<div className={styles.box}><div className={styles.text}>
    <div className={styles.logo}></div>
    <div className={styles.address}>
        <h1>Academics and career council</h1>
        <h2 className={styles.t1}>Indian Institute of Kanpur,<br></br>
        Uttar Pradesh-208016,India</h2>
    </div>
    </div>
    <div className={styles.form}>
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      {/* <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber />
      </Form.Item> */}
      {/* <Form.Item name={['user', 'website']} label="Website">
        <Input />
      </Form.Item> */}
      <Form.Item name={['user', 'message']} label="Message">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

    </div>
    </div>)

}
export default Footer