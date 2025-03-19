// import React from "react";


// const books = [
//   {
//     id: 1,
//     title: "The Great Gatsby",
//     price: "$10.99",
//     image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: 2,
//     title: "1984",
//     price: "$8.99",
//     image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: 3,
//     title: "To Kill a Mockingbird",
//     price: "$12.99",
//     image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
// ];

// export default function Books() {
//   return (
//     <div className="container mt-4">
//       <div className="row">
//         {books.map((book) => (
//           <div key={book.id} className="col-md-4 mb-4">
//             <div className="card shadow-sm">
//               <img src={book.image} className="card-img-top" alt={book.title} />
//               <div className="card-body">
//                 <h5 className="card-title">{book.title}</h5>
//                 <p className="card-text text-muted">{book.price}</p>
//                 <button className="btn btn-primary w-100">Buy Now</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";

// export default function Books() {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://bookomega.onrender.com/book/?category=SSC")
//       .then((response) => response.json())
//       .then((data) => {
//         setBooks(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching books:", error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">Books List</h2>
//       {loading ? (
//         <p>Loading books...</p>
//       ) : (
//         <div className="row">
//           {books.map((book) => (
//             <div key={book.id} className="col-md-4 mb-4">
//               <div className="card shadow-sm">
//                 <img src={book.image} className="card-img-top" alt={book.title} />
//                 <div className="card-body">
//                   <h5 className="card-title">{book.title}</h5>
//                   <p className="card-text text-muted">{book.price}</p>
//                   <button className="btn btn-primary w-100">Buy Now</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";

export default function Books({ subject }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://bookomega.onrender.com/book/?category=${subject}`)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, [subject]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">{subject.toUpperCase()} Books</h2>
      {loading ? (
        <p>Loading books...</p>
      ) : (
        <div className="row">
          {books.map((book) => (
            <div key={book.id} className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <img src={book.image || "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600"} className="card-img-top" alt={book.title} />
                <div className="card-body">
                  <h5 className="card-title">{book.bookName}</h5>
                  <p className="card-text text-muted">{book.author}</p>
                  <p className="card-text text-muted">{book.bookDes}</p>
                  
                  <p className="card-text text-muted">{book.price}</p>
                  <button className="btn btn-primary w-100">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
