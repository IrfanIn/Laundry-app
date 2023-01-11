import { useRouteError } from 'react-router-dom';
import classes from './Error.module.css';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className={classes.error}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occured.</p>
            <small>
                <i>{error.statusText || error.message}</i>
            </small>
        </div>
    )
}

export default ErrorPage