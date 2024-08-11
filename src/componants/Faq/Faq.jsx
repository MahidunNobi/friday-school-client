import FaqImg from "../../assets/Faq.png";

const Faq = () => {
  return (
    <div className="flex items-center flex-col md:flex-row gap-6 my-12">
      <div className="md:w-1/2">
        <img src={FaqImg} alt="" />
      </div>
      <div className="md:w-1/2 *:w-full md:p-6">
        <h3 className="text-3xl font-medium">
          Got Questions? We Have Answers!
        </h3>
        <p className="text-sm dark:text-gray-300 text-gray-700 my-3">
          Find answers to commonly asked questions about Friday School in our
          FAQ section. Whether you&apos;re curious about our features, policies,
          or how to get started, we&apos;ve got you covered.{" "}
        </p>
        {/*------- Quostion 01 ---------*/}
        <div className="collapse collapse-arrow bg-transparent border border-gray-600 rounded-t-lg rounded-b-none border-b-0">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How do I sign up for Friday School?
          </div>
          <div className="collapse-content">
            <p className="text-sm dark:text-gray-300 text-gray-700">
              Signing up for Friday School is quick and easy! Simply visit our
              website and click on the &quot;Sign Up&quot; button. Follow the
              prompts to create your account by providing some basic information
              such as your name, email address, and a secure password. Once
              registered, you&apos;ll have access to our full suite of features
              and resources to enhance your learning experience.
            </p>
          </div>
        </div>
        {/*------- Quostion 02 ---------*/}
        <div className="collapse collapse-arrow bg-transparent border border-gray-600 rounded-none border-b-0">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Can I access Friday School on multiple devices?
          </div>
          <div className="collapse-content">
            <p className="text-sm dark:text-gray-300 text-gray-700">
              Yes, you can access Friday School on multiple devices for seamless
              learning anytime, anywhere. Whether you prefer to use a computer,
              tablet, or smartphone, our platform is designed to be fully
              responsive and accessible across various devices and screen sizes.{" "}
            </p>
          </div>
        </div>

        {/*------- Quostion 03 ---------*/}
        <div className="collapse collapse-arrow bg-transparent border border-gray-600  rounded-none rounded-b-lg">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How can I contact customer support if I encounter any issues?
          </div>
          <div className="collapse-content">
            <p className="text-sm dark:text-gray-300 text-gray-700">
              If you encounter any issues or have questions about Friday School,
              our dedicated customer support team is here to help! You can reach
              us by sending an email to support@fridayschool.com or by filling
              out the contact form on our website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
