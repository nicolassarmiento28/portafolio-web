import { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { MailOutlined, UserOutlined, SendOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { fadeInUp, fadeInLeft, fadeInRight } from '../../utils/animations';
import SocialLinks from '../common/SocialLinks';
import personalData from '../../data/personal.json';
import './Contact.css';

const { TextArea } = Input;

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: ContactFormData) => {
    setLoading(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS environment variables are missing.');
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
          to_name: personalData.fullName,
        },
        publicKey
      );

      message.success('Mensaje enviado correctamente. Te responderé pronto.');
      form.resetFields();
    } catch (error) {
      console.error('Error sending email:', error);
      message.error('No se pudo enviar el mensaje. Intenta nuevamente o escríbeme por correo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="section-title">
            <span className="gradient-text">Trabajemos</span> Juntos
          </h2>
          <p className="section-description">
            ¿Tienes un proyecto en mente? Envíame un mensaje y conversemos sobre cómo puedo ayudarte
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <div className="info-card glass">
              <h3 className="info-card-title gradient-text">Información de Contacto</h3>
              
              <div className="contact-details">
                <div className="contact-detail-item">
                  <MailOutlined className="detail-icon" />
                  <div className="detail-content">
                    <span className="detail-label">Email</span>
                    <a href={`mailto:${personalData.email}`} className="detail-value">
                      {personalData.email}
                    </a>
                  </div>
                </div>

                {personalData.location && (
                  <div className="contact-detail-item">
                    <UserOutlined className="detail-icon" />
                    <div className="detail-content">
                      <span className="detail-label">Ubicación</span>
                      <span className="detail-value">{personalData.location}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="contact-social">
                <h4 className="social-title">Sígueme en redes</h4>
                <SocialLinks size="large" />
              </div>

              <div className="contact-cta">
                <p className="cta-text">
                  También puedes descargar mi CV para conocer más sobre mi experiencia y habilidades.
                </p>
                <Button
                  type="primary"
                  size="large"
                  className="cta-button"
                  href="/cv/CV_Nicolas_Sarmiento_Final_v2.pdf"
                  download
                >
                  Descargar CV
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <div className="form-card glass">
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                className="contact-form"
              >
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    placeholder="Tu nombre"
                    size="large"
                    className="form-input"
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Por favor ingresa tu email' },
                    { type: 'email', message: 'Ingresa un email valido' },
                  ]}
                >
                  <Input
                    prefix={<MailOutlined />}
                    placeholder="tu@email.com"
                    size="large"
                    className="form-input"
                  />
                </Form.Item>

                <Form.Item
                  name="message"
                  rules={[
                    { required: true, message: 'Por favor ingresa tu mensaje' },
                    { min: 10, message: 'El mensaje debe tener al menos 10 caracteres' },
                  ]}
                >
                  <TextArea
                    placeholder="Cuentame sobre tu proyecto..."
                    rows={6}
                    className="form-textarea"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    icon={<SendOutlined />}
                    loading={loading}
                    className="submit-button"
                    block
                  >
                    Enviar mensaje
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
