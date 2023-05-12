export default function StepOne({ goToNext, goToPrevious }) {
  return (
    <div
      className={
        "min-h-full w-screen flex flex-col items-center justify-center"
      }
    >
      <div>Step 1</div>
      <div
        className={
          "min-h-full min-w-full flex flex-row items-center justify-between"
        }
      >
        <button
          className={`${!goToPrevious && "hidden"} absolute left-0 ml-10`}
          onClick={goToPrevious}
        >
          Go To Previous
        </button>
        <button
          className={`${!goToNext && "hidden"} absolute right-0 mr-10`}
          onClick={goToNext}
        >
          Go To Next
        </button>
      </div>
    </div>
  );
}
