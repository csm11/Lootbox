function Survey() {
  return (
    <div className="survey" style={{ marginTop: '200px' }}>
      <div className="how-to-box">
        <h1>Research Questionnaire</h1>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfXoVaMTA5OtYNFFDTN11B8H6txccViBCFz04SBu5IefrwMZw/viewform?usp=sf_link"
          style={{ width: '80vw', height: '90vh', margin: '0 auto', display: 'block' }}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default Survey;

