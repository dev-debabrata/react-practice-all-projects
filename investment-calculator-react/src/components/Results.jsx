import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({ input }) {
  const results = [];
  calculateInvestmentResults(input, results);

  if (results.length === 0) {
    return <p className=" text-center">Invalid input data provided.</p>
  }

  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <table className='max-w-[50rem] mx-auto my-8 p-4 table-fixed border-separate border-spacing-4 text-right" id="result'>
      <thead className='text-[0.7rem] text-[#83e6c0]'>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody className='font-roboto-condensed text-[0.85rem] text-[#c2e9e0]'>
        {results.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
