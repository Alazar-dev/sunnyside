export default function Navbar() {
  return (
    <div className="flex justify-between bg-sky-400 p-10 overflow-scroll">
      <h1 className="font-bold text-white text-3xl  ">sunnyside</h1>
      <ul className="flex flex-row">
        <li className="px-5 text-white">About</li>
        <li className="px-5 text-white">Services</li>
        <li className="px-5 text-white">Projects</li>
        <button className="uppercase font-bold bg-white rounded rounded-3xl p-3">
          contact
        </button>
      </ul>
    </div>
  );
}
