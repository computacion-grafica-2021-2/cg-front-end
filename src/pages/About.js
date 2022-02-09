import React from 'react';
import MainNav from '../components/Navbars/MainNav';
import MainFooter from '../components/Footers/MainFooter';
import { Card } from 'primereact/card';

const About = () => {
  const header = (
    <img
      src="https://files.rcnradio.com/public/styles/m_img_680x464/public/2018-10/unal_ingenieria_0.jpeg?itok=2gaumztd"
      alt="Estudiantes UN"
    />
  );
  return (
    <div>
      <MainNav />
      <div className="container py-6">
        <div className="row text-center pt-3">
          <div className="col-lg-6 m-auto">
            <Card
              title="DronesUN"
              subTitle="Computación Gráfica 2021-2"
              style={{ width: "25em" }}
              header={header}
            >
              <p className="m-0" style={{ lineHeight: "1.5" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
                sed consequuntur error repudiandae numquam deserunt quisquam repellat
                libero asperiores earum nam nobis, culpa ratione quam perferendis
                esse, cupiditate neque quas!
              </p>
            </Card>
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  );
};

export default About;
