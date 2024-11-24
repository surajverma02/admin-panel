function Post() {
  let [blog, setBlog] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=10"
    );
    const photo = response.data;
    console.log(photo);
    setBlog(photo);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-20">
      {/* <img src={blog[10].download_url} alt="" /><p>{blog[10].author}</p> */}
      <button
        className="bg-gray-800 text-white rounded px-5 py-3"
        onClick={getData}
      >
        Get Data
      </button>
      <div className="p-20 my-20 border border-sky-950">
        {blog.map((element) => (
          // <Post key={element.id} author={element.author} url={element} download={element.download_url} />

          <section key={element.id} className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                {element.id}
              </h1>

              <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                <img
                  className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
                  src={element.download_url}
                  alt="imagepage"
                />

                <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                  <p className="text-sm text-blue-500 uppercase">
                    {element.author}
                  </p>

                  <a
                    href="#"
                    className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
                  >
                    All the features you want to know
                  </a>

                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure veritatis sint autem nesciunt, laudantium quia tempore
                    delect
                  </p>

                  <a
                    href={element.download}
                    className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
                  >
                    Download
                  </a>

                  <div className="flex items-center mt-6">
                    <img
                      className="object-cover object-center w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                      alt=""
                    />

                    <div className="mx-4">
                      <h1 className="text-sm text-gray-700 dark:text-gray-200">
                        Amelia. Anderson
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Lead Developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Post;
