import React from 'react';

export default function FeaturedGrid() {
  return (
    <section className="container my-5">
      <div className="d-flex align-items-center gap-5 mb-2">
        <span className="bg-danger rounded" style={{ width: '10px', height: '30px' }}></span>
        <span className="text-uppercase text-danger fw-semibold">Featured</span>
      </div>

      <h2 className="fw-bold mb-4">New Arrival</h2>

      <div className="row g-4">
        {/* div1: large block on the left */}
        <div
          className="col-md-6 d-flex flex-column justify-content-between"
          style={{ height: '615px', objectFit: 'cover' }}
        >
          <div
            className="text-white flex-grow-1 rounded position-relative"
            style={{
              backgroundImage: 'url(/ps5.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              className="position-absolute bottom-0 start-0 w-100"
              style={{
                background: 'rgba(0, 0, 0, 0.6)',
                padding: '1rem',
              }}
            >
              <h4 className="text-white m-2">PlayStation 5</h4>
              <p>Black and White version of the PS5 coming out on sale.</p>
              <a href="#" className="btn btn-light btn-sm fw-semibold mt-2">Shop Now</a>
            </div>
          </div>
        </div>

        {/* Right-side top: div2 */}
        <div className="col-md-6">
          <div className="row g-4">
            <div className="col-12">
              <div className="text-white rounded overflow-hidden position-relative">
                <img
                  src="/women.jpg"
                  alt="women"
                  className="img-fluid"
                  style={{ width: '100%', height: '295px', objectFit: 'cover' }}
                />
                <div
                  className="position-absolute bottom-0 start-0 w-100"
                  style={{
                    background: 'rgba(0, 0, 0, 0.6)',
                    padding: '1rem',
                  }}
                >
                  <h4 className="text-white m-2">Women's Collections</h4>
                  <p>Featured woman collections that give you another vibe.</p>
                  <a href="#" className="btn btn-light btn-sm fw-semibold mt-2">Shop Now</a>
                </div>
              </div>
            </div>

            {/* Bottom-right: div3 and div4 */}
            <div className="col-6">
              <div className="text-white rounded overflow-hidden position-relative">
                <img
                  src="/speakers.jpg"
                  alt="speakers"
                  className="img-fluid"
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
                <div
                  className="position-absolute bottom-0 start-0 w-100"
                  style={{
                    background: 'rgba(0, 0, 0, 0.6)',
                    padding: '1rem',
                  }}
                >
                  <h4 className="text-white m-2">Speakers</h4>
                  <p>Amazon wireless speakers</p>
                  <a href="#" className="btn btn-light btn-sm fw-semibold mt-2">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="text-white rounded overflow-hidden position-relative">
                <img
                  src="/perfume.jpg"
                  alt="perfume"
                  className="img-fluid"
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
                <div
                  className="position-absolute bottom-0 start-0 w-100"
                  style={{
                    background: 'rgba(0, 0, 0, 0.6)',
                    padding: '1rem',
                  }}
                >
                  <h4 className="text-white m-2">Perfume</h4>
                  <p>GUCCI INTENSE OUD EDP</p>
                  <a href="#" className="btn btn-light btn-sm fw-semibold mt-2">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
