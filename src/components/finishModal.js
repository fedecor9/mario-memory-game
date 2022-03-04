import "../styles/main.css";

export const FinishModal = (props) => {
  return (
    <div className="darkBG">
      <div className="modal">
        <header className="modal-header">
          <h1>Game finished !!!</h1>
        </header>
        <main className="modal-body">
          <p>Score: {props.score}</p>
        </main>
        <footer className="modal-footer">
          <button onClick={props.closeModal}> Close</button>
        </footer>
      </div>
    </div>
  );
};
