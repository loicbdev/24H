const adultTicket = document.getElementById('adult');
const childTicket = document.getElementById('child');
const result = document.getElementById('result');

let state = {
  adultTotal: 0,
  childTotal: 0,
  total: 0,
};

const handleChange = (e, n) => {
  state[e.target.name] = e.target.value * n;
  state.total = state.childTotal + state.adultTotal;
  result.innerHTML = `${state.total} €`;
};

adultTicket.addEventListener('change', (e) => handleChange(e, 60));
childTicket.addEventListener('change', (e) => handleChange(e, 40));
