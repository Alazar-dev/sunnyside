export default function Footer() {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl text-green-900 py-12">
        sunnyside
      </h1>
      <ul className="flex flex-row justify-center">
        <li className="text-green-900 px-5">About</li>
        <li className="text-green-900 px-5">Services</li>
        <li className="text-green-900 px-5">Projects</li>
      </ul>
      <ul className="py-10 flex flex-row justify-center">
        <li className="px-3">
          <i
            className="fa fa-facebook-official text-lg fa-lg text-green-900"
            aria-hidden="true"
          />
        </li>
        <li className="px-3">
          <i
            className="fa fa-instagram fa-lg text-green-900"
            aria-hidden="true"
          />
        </li>
        <li className="px-3">
          <i
            className="fa fa-twitter fa-lg text-green-900"
            aria-hidden="true"
          />
        </li>
        <li className="px-3">
          <i
            className="fa fa-pinterest fa-lg text-green-900"
            aria-hidden="true"
          />
        </li>
      </ul>
    </div>
  );
}
