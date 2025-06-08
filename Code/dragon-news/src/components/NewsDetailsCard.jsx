import React from 'react';
import { Link } from 'react-router';
import Loading from '../pages/Loading';

const NewsDetailsCard = ({ news }) => {
  if (!news) {
    return <Loading />;
  }
  return (
    <div className="space-y-5 mr-5">
      <img
        className="w-full h-[350px] object-cover"
        src={news.image_url}
        alt=""
      />
      <h2 className="text-2xl">{news.title}</h2>
      <p>{news.details}</p>
      <Link className="btn btn-secondary" to={`/category/${news.category_id}`}>
        Back to Category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
