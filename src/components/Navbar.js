export default function Navbar() {
  return (
    <div className="flex justify-between bg-sky-400 p-10">
      <h1 className="font-bold text-white text-2xl  ">sunnyside</h1>
      <ul className="flex flex-row">
        <li className="px-5 text-white">About</li>
        <li className="px-5 text-white">Services</li>
        <li className="px-5 text-white">Projects</li>
        <li className="px-5">
          <button className="uppercase font-bold bg-white rounded rounded-3xl p-2">
            contact
          </button>
        </li>
      </ul>
    </div>
  );
}
