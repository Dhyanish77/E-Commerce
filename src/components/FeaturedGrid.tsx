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
            className="text-white flex-grow-1 rounded"
            style={{
              backgroundImage: 'url(/ps5.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
            }}
          >
            <div
              className="position-absolute bottom-0 start-0 w-100"
              style={{
                // background: 'rgba(0, 0, 0, 0.6)',
                padding: '1rem',
              }}
            >
              <h4 className="text-white m-2">PlayStation 5</h4>
              <p>
                Black and white version of the PS5 <br /> comming out on sale
              </p>
            </div>
          </div>
        </div>

        {/* Right-side top: div2 */}
        <div className="col-md-6">
          <div className="row g-4">
            <div className="col-12">
              <div className="text-white rounded overflow-hidden">
                <img
                  src="/women.jpg"
                  alt="women"
                  className="img-fluid"
                  style={{ width: '100%', height: '295px', objectFit: 'cover', position: 'relative', }}
                />
                <div
                  className="position-absolute bottom-0 start-0 w-100"
                  style={{
                    // background: 'rgba(0, 0, 0, 0.6)',
                    padding: '1rem',
                  }}
                >
                  <h4 className="text-white m-2">PlayStation 5</h4>
                  <p>
                    Black and white version of the PS5 <br /> comming out on sale
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom-right: div3 and div4 */}
            <div className="col-6">
              <div className="text-white rounded overflow-hidden">
                <img
                  src="/speakers.jpg"
                  alt="speakers"
                  className="img-fluid"
                  style={{ width: '100%', height: '300px', objectFit: 'cover', position: 'relative', }}
                />
                <div
                  className="position-absolute bottom-0 start-0 w-100"
                  style={{
                    // background: 'rgba(0, 0, 0, 0.6)',
                    padding: '1rem',
                  }}
                >
                  <h4 className="text-white m-2">PlayStation 5</h4>
                  <p>
                    Black and white version of the PS5 <br /> comming out on sale
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="text-white rounded overflow-hidden">
                <img
                  src="/perfume.jpg"
                  alt="perfume"
                  className="img-fluid"
                  style={{ width: '100%', height: '300px', objectFit: 'cover', position: 'relative', }}
                />
                <div
                  className="position-absolute bottom-0 start-0 w-100"
                  style={{
                    // background: 'rgba(0, 0, 0, 0.6)',
                    padding: '1rem',
                  }}
                >
                  <h4 className="text-white m-2">PlayStation 5</h4>
                  <p>
                    Black and white version of the PS5 <br /> comming out on sale
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
