import React from "react";
// "rafc"
export const ImageCard = ({ image }) => {
  const tagsArray = image.tags.split(",");

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <a href={image.pageURL} target="_blank" rel="noopener noreferrer">
          <img src={image.webformatURL} alt="" className="w-full" />
        </a>
      <div className="px-6 py-4">
        <div className="font-normal text-blue-500 text-xl mb-2">
          Photo by <span className="font-bold">{image.user}</span>
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
          <li className="inline-block bg-blue-500 hover:bg-blue-300 border-blue-500 hover:border-blue-700 rounded px-1 py-0 mt-4 text-sm font-sm text-white">
            <a href={image.pageURL} target="_blank" rel="noopener noreferrer">Download Image</a>
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tagsArray.map((tag, index) => (
          <span
            key={index}
            className="inline-block rounded-full px-2 text-sm font-sm text-gray-500 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};
