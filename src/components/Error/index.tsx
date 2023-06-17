interface IErrorProps {
  message: string;
}

export default function ErrorComponent({ message }: IErrorProps) {
  return (
    <div className="error-container">
      <div className="sa">
        <div className="sa-error">
          <div className="sa-error-x">
            <div className="sa-error-left" />
            <div className="sa-error-right" />
          </div>
          <div className="sa-error-placeholder" />
          <div className="sa-error-fix" />
        </div>
      </div>
      <h5 className="">{message}</h5>
    </div>
  );
}
