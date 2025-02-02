function Subscription() {
  return (
    <div className="bg-Cyan text-white flex flex-col gap-5 p-5 md:rounded-bl-2xl md:p-10">
      <h2 className="text-xl md:text-2xl font-bold">Monthly Subscription</h2>
      <p className="font-bold text-3xl md:text-4xl mt-3">
        $29{" "}
        <span className="text-Light-Gray font-semibold text-xs md:text-xl">
          per month
        </span>
      </p>
      <p className="md:text-xl">Full access for less than $1 a day</p>
      <button className="bg-Bright-Yellow font-bold p-4 rounded-xl mt-6 w-full md:text-2xl">
        Sign up
      </button>
    </div>
  );
}

export default Subscription;
