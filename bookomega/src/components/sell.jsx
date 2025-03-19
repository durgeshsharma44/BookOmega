import React, { useState } from 'react';

export default function Sell() {
  const [formData, setFormData] = useState({
    bookName: '',
    price: '',
    author: '',
    bookImgUrl: '',
    bookDes: '',
    rating: '',
    category: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://bookomega.onrender.com/book/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Book listed successfully!");
        setFormData({ bookName: '', price: '', author: '', bookImgUrl: '', bookDes: '', rating: '', category: '' });
      } else {
        alert("Failed to list the book.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error listing the book.");
    }
  };

  return (
    <div className="flex items-center justify-center bg-black sell">
  
    <h2 className="text-2xl  mb-4 text-center text-black">Sell Your Book</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="bookName"
        placeholder="Book Name"
        value={formData.bookName}
        onChange={handleChange}
        className="w-full p-2 border border-black rounded"
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price ($)"
        value={formData.price}
        onChange={handleChange}
        className="w-full p-2 border border-black rounded"
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        className="w-full p-2 border border-black rounded"
        required
      />
      <input
        type="url"
        name="bookImgUrl"
        placeholder="Book Image URL"
        value={formData.bookImgUrl}
        onChange={handleChange}
        className="w-full p-2 border border-black rounded"
        required
      />
      <textarea
        name="bookDes"
        placeholder="Book Description"
        value={formData.bookDes}
        onChange={handleChange}
        className="w-full p-2 border border-black rounded"
        required
      ></textarea>
      <input
        type="number"
        name="rating"
        placeholder="Rating (1-5)"
        value={formData.rating}
        onChange={handleChange}
        className="w-full p-2 border border-black rounded"
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        className="w-full p-2 border border-black rounded"
        required
      />
      <button type="submit" className="bg-black text-yellow-400 px-4 py-2 rounded w-full hover:bg-gray-800 transition">
        Submit
      </button>
    </form>
  
</div>
  );
}
