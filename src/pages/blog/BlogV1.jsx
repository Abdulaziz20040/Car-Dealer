import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination, Select } from "antd";
import "../../styles/App.css";

function BlogV1() {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(12);

  useEffect(() => {
    axios
      .get("https://df2174b8e5e5a31d.mokky.dev/MEGA_news")
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastCard = currentPage * pageSize;
  const indexOfFirstCard = indexOfLastCard - pageSize;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="mt-14">
      <h1 className="text-2xl font-semibold">BlogV1</h1>

      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {currentCards.map((card, index) => (
          <div
            key={index}
            className="relative w-[300px] rounded-xl  flex flex-col"
          >
            {/* Bookmark Icon and Body Kit */}
            <div className="absolute top-4 flex justify-between w-full px-4">
              <button className="bg-white text-black text-[13px] font-medium px-2 py-1 rounded-full shadow">
                {card.badge || "Body Kit"}
              </button>
            </div>

            {/* Image */}
            <img
              src={card.image || "https://via.placeholder.com/300"}
              alt={card.name || "Product Image"}
              className="w-full h-56 object-cover rounded-xl mb-3"
            />

            {/* Product Info */}
            <div className="px-3 pb-5">
              <div className=" flex gap-3">
                <h2 className="text-gray-600 mb-2">
                  {card.author || "Admin"} :
                </h2>
                <p className="text-gray-600 mb-2">{card.date || "No date "}</p>
              </div>
              {/* Card name */}
              <h1 className=" max-w-[300px]">
                {card.name ||
                  "2024 BMW ALPINA XB7 with exclusive details, extraordinary"}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={cards.length}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default BlogV1;
