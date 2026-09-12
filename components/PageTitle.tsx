import React from 'react';
import Link from 'next/link';

interface PageTitleProps {
  pageName: string;
}

// Server Component - no hooks or browser APIs
const PageTitle: React.FC<PageTitleProps> = ({ pageName }) => {
  return (
      <section className="breadcume-section">
        <div className="outer-box">
          <div className="auto-container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="breadcumb-content">
                          <div className="breadcumb-title">
                              <h1 className="title">{pageName}</h1>
                          </div>
                          <ul className="breadcume-pull">
                              <li><Link className="title-line" href="#">Home <span><i className="fas fa-angle-right"></i></span></Link></li>
                              <li>{pageName}</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </section>
  );
};

export default PageTitle;