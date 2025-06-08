import React from 'react';
import { FaEye, FaStar, FaRegBookmark } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
  const { id, title, image_url, details, total_view, rating, author, tags } =
    news;

  const formatDate = (isoDate) =>
    new Date(isoDate).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

  return (
    <div className="card bg-base-100 shadow-md border border-gray-200">
      <figure>
        <img src={image_url} alt={title} className="w-full h-64 object-cover" />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title text-lg font-semibold">{title}</h2>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <img
              src={author?.img}
              alt={author?.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span>{author?.name}</span>
            <span>•</span>
            <span>{formatDate(author?.published_date)}</span>
          </div>
          <div className="flex gap-5">
            <FaRegBookmark size={28} />
            <FiShare2 size={28} />
          </div>
        </div>

        <p className="text-sm text-gray-700">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...{' '}
              <Link
                to={`/news-details/${id}`}
                className="text-primary font-semibold cursor-pointer hover:underline"
              >
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </p>

        <div className="flex flex-wrap gap-2 text-xs">
          {tags?.map((tag, idx) => (
            <span key={idx} className="badge badge-outline badge-sm">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaEye className="text-base text-primary" />
            <span>{total_view}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaStar className="text-yellow-500" />
            <span>
              {rating?.number} ({rating?.badge})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
