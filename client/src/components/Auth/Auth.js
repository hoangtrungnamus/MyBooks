import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
// Hello 500 ae
const Auth = (props) => {
    const body = (
        (props.authRoute === 'login' && <LoginForm></LoginForm>) ||
        (props.authRoute === 'register' && <RegisterForm></RegisterForm>)
        );
    return (
        <div className="auth">
            <div className="inner-auth">
            {body}
            </div>
        </div>
    )
}

export default Auth
