const Feature = ({ img, heading, desc }) => {
  return (
    <div className="flex flex-col items-center gap-3 border border-gray-600 shadow-md shadow-gray-600 sha p-3 rounded-lg">
      <div className="w-40 h-40 rounded-full border-2 border-primary dark:border-secoundry overflow-hidden">
        <img
          src={img}
          alt=""
          className="h-full w-full object-cover rounded-full"
        />
      </div>
      <h4 className="text-3xl text-center font-teachers">{heading}</h4>
      <p className="text-center text-sm dark:text-gray-300 text-gray-700">
        {desc}
      </p>
    </div>
  );
};

export default Feature;
