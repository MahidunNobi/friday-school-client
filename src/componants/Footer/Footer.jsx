const Footer = () => {
  return (
    <div className="container mx-auto">
      <footer className="footer p-10 text-base-content">
        <nav>
          <h6 className="footer-title">Activities</h6>
          <a className="link link-hover">Assignment</a>
          <a className="link link-hover">Team colaboration</a>
          <a className="link link-hover">Marking</a>
          <a className="link link-hover">Progress tracking</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form onSubmit={(e) => e.preventDefault()}>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      <p className="mx-auto my-6 text-center  text-sm dark:text-gray-300 text-gray-600">
        Copyright © 2024 - All right reserved
      </p>
    </div>
  );
};

export default Footer;
