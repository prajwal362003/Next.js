"use client";

const Author = ({ author }) => {
  return (
    <div>
      <button className="navbtn" onClick={() => alert(author)}>
        Check Author
      </button>
    </div>
  );
};

export default Author;
