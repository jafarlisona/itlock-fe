import React, { useEffect, useState } from "react";

function CaseStudy() {
  const [brands, setBrands] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  function deleteItem(id) {
    fetch(`http://localhost:3000/brands/${id}`, {
      method: "DELETE",
    }).then(() =>
      setBrands((prevBrands) => prevBrands.filter((brand) => brand._id !== id))
    );
  }
  return (
    <section id="caseStudy">
      <div className="container">
        <h4>OUR CASE STUDY</h4>
        <h1>We work with global brands</h1>
        <div className="input">
          <input type="text" onChange={(e) => setSearch(e.target.value)} />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="cards">
          {brands
            .filter((x) => x.title.toLowerCase().includes(search.toLowerCase()))
            .map((x) => (
              <div className="card" key={x._id}>
                <div className="img">
                  <img src={x.image} alt="" />
                </div>
                <div className="text">
                  <p>{x.title}</p>
                  <div>
                    <span>{x.brandName}</span>
                    <i
                      class="fa-regular fa-trash-can"
                      onClick={() => deleteItem(x._id)}
                    ></i>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudy;
