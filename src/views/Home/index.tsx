import { API_BASE_URL } from "@/utils";

const getBooksList = async () => {
  const res = await fetch(`${API_BASE_URL}/books`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const Home = async () => {
  const books = await getBooksList();

  return (
    <div className="h-screen flex bg-blue-100 items-center justify-center">
      {books?.map((item) => (
        <div className="item" key={item.id}>
          <img src="https://picsum.photos/400/300" alt="" />
          <div>
            <h2>{item.name}</h2>
            <p>Type:{item.type}</p>
            <p className="font-bold">
              available:{item.available ? "true" : "false"}
            </p>
            <a href="#">Read more</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
