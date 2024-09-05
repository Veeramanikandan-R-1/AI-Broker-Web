import "./index.scss";

export const CustomButton = ({ label, ...props }) => (
    <div className="button-container">
        <button {...props}>{label}</button>
    </div>)

export const Spinner = () => <div className="loader-container" data-testid="loader"><div className="loader"></div></div>;