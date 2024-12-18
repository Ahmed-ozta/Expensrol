import { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './FormSignUp.module.css'

function FormSignUp() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");




    return (
        <main>
            <div className={styles.container}>
                <div className={styles.data}>
                    <h1 className='extraBold blueText'>Start Your Journey to Financial Control with Expensrol</h1>
                    <p>Join Expensrol today and start managing your expenses effortlessly.
                        Track, categorize, and stay on top of your budget with just a few clicks. Take charge of your money and reach your financial goals.</p>
                    <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" placeholder='Confirm Password' value={confirm} onChange={(e) => setConfirm(e.target.value)} />
                    <Link className={styles.links} to="/FormSignIn">i already have account</Link>
                    <button><Link to="/Dashboard" className="custom-link">Create an account</Link></button>
                </div>
                <div className={styles.image}>
                    <img src="Expensrol_image\Revenue-bro 1.svg" />
                </div>


            </div>
        </main>

    )
}
export default FormSignUp