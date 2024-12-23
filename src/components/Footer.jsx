const Footer = () => {
  return (
    <footer className="footer px-[1rem] md:px-[5rem] w-full bg-base-200 text-base-content flex md:flex-row flex-col justify-between items-center gap-5 md:gap-0 md:items-start p-10 bg-blue-950 text-white">
      <nav className="flex font-Popins flex-col items-center md:items-start justify-center gap-2">
        <h6 className="footer-title text-xl">Services</h6>
        <a className="link link-hover text-sm hover:underline">Branding</a>
        <a className="link link-hover text-sm hover:underline">Design</a>
        <a className="link link-hover text-sm hover:underline">Marketing</a>
        <a className="link link-hover text-sm hover:underline">Advertisement</a>
      </nav>
      <nav className="flex font-Popins flex-col items-center md:items-start justify-center gap-2">
        <h6 className="footer-title text-xl">Company</h6>
        <a className="link link-hover text-sm hover:underline">About us</a>
        <a className="link link-hover text-sm hover:underline">Contact</a>
        <a className="link link-hover text-sm hover:underline">Jobs</a>
        <a className="link link-hover text-sm hover:underline">Press kit</a>
      </nav>
      <nav className="flex font-Popins flex-col items-center md:items-start justify-center gap-2">
        <h6 className="footer-title text-xl">Legal</h6>
        <a className="link link-hover text-sm hover:underline">Terms of use</a>
        <a className="link link-hover text-sm hover:underline">
          Privacy policy
        </a>
        <a className="link link-hover text-sm hover:underline">Cookie policy</a>
      </nav>
      <form className="flexflex-col gap-4 pt-8 md:pt-0">
        <h6 className="footer-title text-xl font-Popins font-semibold tracking-wider">
          Newsletter
        </h6>
        <fieldset className="form-control w-80 flex flex-col gap-2">
          <label className="label">
            <span className="label-text font-Popins">
              Enter your email address
            </span>
          </label>
          <div className="join flex flex-col md:flex-row gap-2">
            <input
              type="text"
              placeholder="username@site.com"
              className="input text-black py-2 input-bordered join-item px-4 placeholder:text-gray-700 rounded-md"
            />
            <button className="btn btn-primary join-item bg-purple-700 px-2 py-2 md:py-0 rounded-md">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
