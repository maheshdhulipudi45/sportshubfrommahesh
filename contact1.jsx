import React, { useState } from 'react';
import styles from "./contact1.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact11 = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields');
      return;
    }
    // Simulate form submission
    toast.success('Message sent successfully!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className={styles.container0}>
      <div className={styles.container1}></div>
    <div className={styles.container}>
      <h2>Contact SportHub</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label>Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} />
        </div>
        <div className={styles.inputGroup}>
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} />
        </div>
        <div className={styles.inputGroup}>
          <label>Message</label>
          <textarea name="message" rows="5" value={form.message} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className={styles.button}>Send Message</button>
      </form>
      <ToastContainer />
    </div>
    </div>
  );
};

export default Contact11;
