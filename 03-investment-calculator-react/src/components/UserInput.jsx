export default function UserInput({ onChange, userInput }) {
  return (
    <section className="p-4 max-w-[30rem] mx-auto my-8 rounded bg-[linear-gradient(180deg,_#307e6c,_#2b996d)]">
      <div className=" flex justify-evenly gap-6">
        <p>
          <label className="block mb-1 font-bold uppercase text-base font-roboto-condensed">
            Initial Investment
          </label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange('initialInvestment', event.target.value)
            }
            className="w-full p-2 border border-[#76c0ae] rounded bg-transparent text-[#c2e9e0] text-base"
          />
        </p>
        <p>
          <label className="block mb-1 font-bold uppercase text-base font-roboto-condensed">
            Annual Investment
          </label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange('annualInvestment', event.target.value)
            }
            className="w-full p-2 border border-[#76c0ae] rounded bg-transparent text-[#c2e9e0] text-base"
          />
        </p>
      </div>
      <div className="flex justify-evenly gap-6">
        <p>
          <label className="block mb-1 font-bold uppercase text-base font-roboto-condensed">
            Expected Return
          </label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChange('expectedReturn', event.target.value)
            }
            className="w-full p-2 border border-[#76c0ae] rounded bg-transparent text-[#c2e9e0] text-base"
          />
        </p>
        <p>
          <label className="block mb-1 font-bold uppercase text-base font-roboto-condensed">
            Duration
          </label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChange('duration', event.target.value)}
            className="w-full p-2 border border-[#76c0ae] rounded bg-transparent text-[#c2e9e0] text-base"
          />
        </p>
      </div>
    </section>
  );
}

